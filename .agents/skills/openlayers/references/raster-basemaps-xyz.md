# Native Raster XYZ Basemaps in OpenLayers 🗺️⚡

> Authoritative guide for integrating MapTiler Planet v4 high-DPI raster basemaps using OpenLayers native `ol/layer/Tile` and `ol/source/XYZ`.

---

## 1. Why Native Raster Basemaps in OpenLayers?

OpenLayers provides industry-leading raster rendering performance:
1. **Zero External Dependencies:** No need for third-party style parsers or WebGL canvas bridging.
2. **Rock-Solid Stability:** Zero race conditions with custom `ol/layer/Vector` features (GeoJSON, KML, digitizing, clustering).
3. **Instant Loading:** Pre-rendered raster tiles load instantaneously with standard browser caching.
4. **Crisp High-DPI Displays:** Full native support for `@2x` Retina tiles via `tilePixelRatio: 2` and `tileSize: 512`.

---

## 2. Standard 512px Retina Basemap Implementation

```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

const basemap = new TileLayer({
  source: new XYZ({
    // High-DPI Retina 512px tiles (Notice: NO /512/ in the path!)
    url: "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=YOUR_API_KEY",
    tilePixelRatio: 2,
    tileSize: 512,
    maxZoom: 22,
    attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  })
});

const map = new Map({
  target: "map",
  layers: [basemap],
  view: new View({
    center: fromLonLat([14.4378, 50.0755]), // Prague
    zoom: 13
  })
});
```

---

## 3. Dynamic Basemap Switching

Switching basemaps in OpenLayers is as simple as calling `layer.setSource()`:

```javascript
function switchBasemap(styleName, apiKey) {
  const newSource = new XYZ({
    url: `https://api.maptiler.com/maps/${styleName}/{z}/{x}/{y}@2x.png?key=${apiKey}`,
    tilePixelRatio: 2,
    tileSize: 512,
    maxZoom: 22,
    attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>'
  });
  basemap.setSource(newSource);
}

// Example usage:
switchBasemap("satellite-v4", "YOUR_API_KEY");
```
