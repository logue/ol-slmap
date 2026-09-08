# Interactive Spyglass / Magnifier Lens 🔍

> **Documentation Link:** [Magnify](https://openlayers.org/en/latest/examples/magnify.html)  
> **Target Category:** Production Task Implementation

Display a circular magnifying spyglass lens showing high-resolution imagery or satellite layer beneath the cursor using HTML5 Canvas clipping on layer postrender hooks.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Spyglass / Magnifier Lens 🔍</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <script type="module" src="main.js"></script>
</body>
</html>
```

---

## 2. CSS Styling

```css
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

#map {
  width: 100%;
  height: 100%;
}

#map { width: 100%; height: 100%; cursor: crosshair; }
```

---

## 3. Complete JavaScript Implementation

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import { fromLonLat } from 'ol/proj.js';
import { getRenderPixel } from 'ol/render.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const streets = new TileLayer({
  source: new XYZ({
    url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
    tileSize: 512,
    maxZoom: 20
  })
});

const satellite = new TileLayer({
  source: new XYZ({
    url: `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`,
    tileSize: 512,
    maxZoom: 20
  })
});

const map = new Map({
  target: 'map',
  layers: [streets, satellite],
  view: new View({ center: fromLonLat([14.4378, 50.0755]), zoom: 14 })
});

const radius = 100;
let mousePosition = null;

document.addEventListener('mousemove', (evt) => {
  mousePosition = map.getEventPixel(evt);
  map.render();
});

document.addEventListener('mouseout', () => {
  mousePosition = null;
  map.render();
});

satellite.on('prerender', (event) => {
  const ctx = event.context;
  ctx.save();
  ctx.beginPath();
  if (mousePosition) {
    const pixel = getRenderPixel(event, mousePosition);
    const offset = getRenderPixel(event, [mousePosition[0] + radius, mousePosition[1]]);
    const canvasRadius = Math.sqrt(Math.pow(offset[0] - pixel[0], 2) + Math.pow(offset[1] - pixel[1], 2));
    ctx.arc(pixel[0], pixel[1], canvasRadius, 0, 2 * Math.PI);
    ctx.lineWidth = 4 * event.inversePixelTransform[0];
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
  }
  ctx.clip();
});

satellite.on('postrender', (event) => {
  event.context.restore();
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/magnify.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
