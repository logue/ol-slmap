# Layer Swipe & Split-Screen Comparison 🪟

> **Documentation Link:** [Layer Swipe](https://openlayers.org/en/latest/examples/layer-swipe.html)  
> **Source Module:** `ol/layer/Tile.js`, `ol/render.js`, `ol/source/XYZ.js`, `ol/Map.js`

This guide explains how to implement a side-by-side visual swipe tool comparing two layers (e.g. Satellite imagery vs Vector street map) using HTML5 Canvas clipping on render lifecycles.

---

## 1. Problem & Use Case

Comparing historical satellite imagery against modern street layouts or aerial surveys against topographic basemaps requires an interactive split-screen wiper without duplicating maps or synchronizing two viewports.

---

## 2. HTML Container & Swipe Slider

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers Layer Swipe</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <input id="swipe" type="range" min="0" max="100" value="50" />
  <script type="module" src="main.js"></script>
</body>
</html>
```

---

## 3. CSS Styling

```css
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

#map {
  width: 100%;
  height: 100%;
}

/* Position swipe slider horizontally across the map */
#swipe {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  z-index: 1000;
  cursor: ew-resize;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
```

---

## 4. Complete JavaScript Implementation

```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import { fromLonLat } from "ol/proj.js";
import { getRenderPixel } from "ol/render.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. Bottom layer: MapTiler Satellite v4
const satelliteLayer = new TileLayer({
  source: new XYZ({
    url: `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`,
    tileSize: 512,
    maxZoom: 20,
    attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
  })
});

// 2. Top layer: MapTiler Streets v4 (will be clipped)
const streetsLayer = new TileLayer({
  source: new XYZ({
    url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
    tileSize: 512,
    maxZoom: 20,
    attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
  })
});

// 3. Initialize Map with both layers
const map = new Map({
  target: "map",
  layers: [satelliteLayer, streetsLayer],
  view: new View({
    center: fromLonLat([14.4378, 50.0755]), // Prague
    zoom: 14
  })
});

const swipe = document.getElementById("swipe");

// 4. Prerender hook: clip the top layer according to slider position
streetsLayer.on("prerender", (event) => {
  const ctx = event.context;
  const mapSize = map.getSize();
  const width = mapSize[0] * (swipe.value / 100);

  // Convert CSS coordinates to canvas render pixels (accounting for devicePixelRatio)
  const tl = getRenderPixel(event, [width, 0]);
  const tr = getRenderPixel(event, [mapSize[0], 0]);
  const bl = getRenderPixel(event, [width, mapSize[1]]);
  const br = getRenderPixel(event, mapSize);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(tl[0], tl[1]);
  ctx.lineTo(tr[0], tr[1]);
  ctx.lineTo(br[0], br[1]);
  ctx.lineTo(bl[0], bl[1]);
  ctx.closePath();
  ctx.clip(); // Only render the right side of the streets layer
});

// 5. Postrender hook: restore canvas context state
streetsLayer.on("postrender", (event) => {
  const ctx = event.context;
  ctx.restore();
});

// 6. Request a map re-render on slider movement
swipe.addEventListener("input", () => {
  map.render();
});
```

---

## 5. Key Architecture & Implementation Details

| Function / Hook | Responsibility |
| :--- | :--- |
| **`layer.on("prerender", callback)`** | Executes immediately before the layer renders to the canvas context, allowing custom clipping paths. |
| **`getRenderPixel(event, [x, y])`** | Converts CSS pixel coordinates into high-DPI canvas backing store coordinates. |
| **`ctx.clip()`** | Restricts all subsequent raster draw operations of the current layer to the active path boundary. |
| **`layer.on("postrender", callback)`** | Calls `ctx.restore()` so subsequent layers and overlays are not clipped. |
| **`map.render()`** | Triggers an immediate frame redraw without panning or zooming. |
