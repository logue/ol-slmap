# Interactive Popup Overlay 💬

> **Documentation Link:** [Popup](https://openlayers.org/en/latest/examples/popup.html)  
> **Source Module:** `ol/Overlay.js`, `ol/Map.js`, `ol/View.js`, `ol/coordinate.js`

This guide demonstrates how to anchor an interactive HTML popup to map coordinates using `ol/Overlay`, complete with an animated camera auto-pan and closer button.

---

## 1. Problem & Use Case

Displaying detailed information, photos, or rich HTML cards when clicking map markers requires a DOM element tied to spatial coordinates that moves synchronously with map panning and zooming. `ol/Overlay` manages DOM projection and offers built-in `autoPan` animation to ensure the card stays fully visible within the viewport.

---

## 2. HTML Container & Popup Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers Popup Overlay</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>

  <!-- Popup DOM structure -->
  <div id="popup" class="ol-popup">
    <a href="#" id="popup-closer" class="ol-popup-closer" aria-label="Close popup"></a>
    <div id="popup-content"></div>
  </div>

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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

#map {
  width: 100%;
  height: 100%;
}

/* OpenLayers Popup Bubble */
.ol-popup {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  bottom: 12px;
  left: -50px;
  min-width: 200px;
  max-width: 320px;
}

/* Arrow indicator pointing down */
.ol-popup:after, .ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.ol-popup:after {
  border-top-color: #ffffff;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}

.ol-popup:before {
  border-top-color: #cbd5e1;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}

.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 6px;
  right: 8px;
  color: #94a3b8;
  font-size: 16px;
  line-height: 1;
}

.ol-popup-closer:after {
  content: "✖";
}

.ol-popup-closer:hover {
  color: #0f172a;
}
```

---

## 4. Complete JavaScript Implementation

```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import Overlay from "ol/Overlay.js";
import { fromLonLat, toLonLat } from "ol/proj.js";
import { toStringHDMS } from "ol/coordinate.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. Elements representing the popup container and close button
const container = document.getElementById("popup");
const content = document.getElementById("popup-content");
const closer = document.getElementById("popup-closer");

// 2. Create the Overlay tied to the DOM container
const overlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250
    },
    margin: 20
  }
});

// 3. Closer button click handler to dismiss popup
closer.onclick = () => {
  overlay.setPosition(undefined); // Setting position to undefined hides the overlay
  closer.blur();
  return false;
};

// 4. Initialize Map with MapTiler Streets v4 raster XYZ
const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20,
        attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
      })
    })
  ],
  overlays: [overlay],
  view: new View({
    center: fromLonLat([2.3522, 48.8566]), // Paris, France
    zoom: 12
  })
});

// 5. Handle map single click to position overlay and display coordinates
map.on("singleclick", (evt) => {
  const coordinate = evt.coordinate;
  const lonLat = toLonLat(coordinate);
  const hdms = toStringHDMS(lonLat);

  content.innerHTML = `
    <h4 style="margin: 0 0 6px 0; color: #0084FF; font-size: 14px;">Location Coordinates</h4>
    <p style="margin: 0 0 4px 0; font-size: 12px; color: #334155;"><code>${hdms}</code></p>
    <small style="color: #64748b;">Lng: ${lonLat[0].toFixed(5)}, Lat: ${lonLat[1].toFixed(5)}</small>
  `;

  overlay.setPosition(coordinate);
});
```

---

## 5. Key Architecture & Implementation Details

| Option | Functionality |
| :--- | :--- |
| **`overlay.setPosition(coord)`** | Anchors the overlay's origin to a coordinate in map projection space (`EPSG:3857`). |
| **`overlay.setPosition(undefined)`** | Detaches the overlay from the viewport and hides it cleanly. |
| **`autoPan: { animation, margin }`** | Automatically animates the view center if the popup would otherwise be clipped by the edge of the screen. |
| **`stopEvent: true`** | (Default) Ensures clicks and scrolls on the popup do not leak through to trigger map panning or zoom events. |
