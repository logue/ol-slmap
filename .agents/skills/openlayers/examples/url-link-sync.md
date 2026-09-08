# Synchronize Map State with URL Query Params 🔗

> **Documentation Link:** [Link Interaction](https://openlayers.org/en/latest/examples/link.html)  
> **Source Module:** `ol/interaction/Link.js`, `ol/Map.js`, `ol/View.js`, `ol/layer/Tile.js`

This guide explains how to keep map position, zoom level, and rotation bidirectionally synchronized with browser URL parameters using OpenLayers `Link` interaction.

---

## 1. Problem & Use Case

Users frequently need to share the exact viewport, zoom level, or rotated perspective of a map with colleagues via a copy-pasted URL. Updating browser history or query strings manually with custom `moveend` listeners often leads to infinite feedback loops or browser back-button glitches. `ol/interaction/Link` handles bidirectional URL sync natively.

---

## 2. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers URL Link Synchronization</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <div id="url-status">
    <strong>Shareable URL:</strong>
    <code id="current-url">...</code>
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
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

#map {
  width: 100%;
  height: 100%;
}

#url-status {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-width: 380px;
  font-size: 12px;
  color: #1e293b;
  word-break: break-all;
}

#url-status code {
  display: block;
  margin-top: 4px;
  color: #0084FF;
  font-size: 11px;
}
```

---

## 4. Complete JavaScript Implementation

```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import Link from "ol/interaction/Link.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. Initialize Map with MapTiler Streets v4 raster XYZ
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
  view: new View({
    center: fromLonLat([14.4378, 50.0755]), // Prague fallback if URL has no params
    zoom: 12
  })
});

// 2. Add Link interaction to bind zoom, x, y, and rotation to URL query params
const link = new Link({
  params: ["x", "y", "z", "r"], // lon, lat, zoom, rotation
  replace: true                  // Replace history state instead of spamming back button
});

map.addInteraction(link);

// 3. Display current URL in status box
const urlCode = document.getElementById("current-url");

function updateUrlDisplay() {
  urlCode.textContent = window.location.href;
}

map.on("moveend", updateUrlDisplay);
updateUrlDisplay();
```

---

## 5. Key Architecture & Implementation Details

| Parameter / Option | Description |
| :--- | :--- |
| **`new Link({ params: ["x", "y", "z", "r"] })`** | Binds longitude (`x`), latitude (`y`), zoom level (`z`), and camera rotation (`r`) to URL query strings. |
| **`replace: true`** | Uses `history.replaceState` rather than `history.pushState` during panning so browser back button navigates between distinct user actions rather than individual drag steps. |
| **Deep Linking & Sharing** | Loading the page with `?z=15&x=14.42&y=50.08` automatically initializes the map viewport to that position on load without extra boilerplate. |
| **Bidirectional Sync** | Browser forward/back button clicks correctly animate the map view back to previous states. |
