# Basic Raster Basemap in OpenLayers 🗺️

> **Documentation Link:** [XYZ Raster Tiles](https://openlayers.org/en/latest/examples/xyz.html)  
> **Source Module:** `ol/Map.js`, `ol/View.js`, `ol/layer/Tile.js`, `ol/source/XYZ.js`, `ol/proj.js`

This guide demonstrates how to render a crisp, high-DPI raster tile basemap in OpenLayers using native `TileLayer` and `XYZ` sources with MapTiler Planet v4.

---

## 1. Problem & Use Case

Developers need an enterprise-grade, lightning-fast basemap in OpenLayers without external style compilers or WebGL bridges. Native OpenLayers `TileLayer` + `XYZ` with MapTiler 512px Retina (`@2x`) tiles provides razor-sharp cartography, instant caching, and 100% compatibility with OpenLayers vector layers and GIS interactions.

---

## 2. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers Basic Raster Map</title>
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

## 3. CSS Styling

```css
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

#map {
  width: 100%;
  height: 100%;
}

.ol-attribution {
  font-size: 11px;
  background: rgba(255, 255, 255, 0.85) !important;
  border-radius: 4px;
  padding: 2px 6px;
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
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_MAPTILER_API_KEY";

// 1. Initialize high-DPI 512px Retina raster tile layer
const basemap = new TileLayer({
  source: new XYZ({
    // High-DPI Retina 512px tiles (Notice: NO /512/ in the path!)
    url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=${MAPTILER_KEY}`,
    tilePixelRatio: 2,
    tileSize: 512,
    maxZoom: 22,
    attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  })
});

// 2. Initialize OpenLayers map
const map = new Map({
  target: "map",
  layers: [basemap],
  view: new View({
    center: fromLonLat([14.4378, 50.0755]), // Prague [lng, lat] -> EPSG:3857
    zoom: 13
  })
});
```

---

## 5. Key Architecture & URL Rules
- **Native OpenLayers Classes:** Pure `ol/layer/Tile` and `ol/source/XYZ`.
- **512px Default Standard:** MapTiler Cloud delivers 512px tiles natively without any `/512/` path prefix.
- **Retina Crispness:** Setting `tilePixelRatio: 2` and `tileSize: 512` with `@2x.png` yields ultra-crisp street typography and lines on HiDPI/Retina screens.
