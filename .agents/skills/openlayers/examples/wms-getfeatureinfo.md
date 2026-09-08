# OGC WMS Layer & GetFeatureInfo Inspection ℹ️

> **Documentation Link:** [WMS GetFeatureInfo (Tile Layer)](https://openlayers.org/en/latest/examples/getfeatureinfo-tile.html)  
> **Source Module:** `ol/source/TileWMS.js`, `ol/layer/Tile.js`, `ol/Map.js`, `ol/View.js`

This guide explains how to display enterprise OGC Web Map Service (WMS) layers alongside a MapTiler basemap and perform spatial click queries using `getFeatureInfoUrl`.

---

## 1. Problem & Use Case

Many government, environmental, and corporate GIS servers serve rasterized maps via standard OGC WMS. While the visual layer is a rendered bitmap, users still need to click on features (e.g. weather stations, parcel boundaries, geological units) to inspect underlying database attributes via `GetFeatureInfo`.

---

## 2. HTML Container & Information Panel

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers WMS GetFeatureInfo</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <div id="info-panel">Click on the map to inspect WMS features</div>
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

#info-panel {
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  max-height: 180px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.96);
  padding: 14px 18px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  font-size: 13px;
  color: #1e293b;
}
```

---

## 4. Complete JavaScript Implementation

```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import TileWMS from "ol/source/TileWMS.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. MapTiler Light/Base basemap
const basemap = new TileLayer({
  source: new XYZ({
    url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
    tileSize: 512,
    maxZoom: 20,
    attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
  })
});

// 2. Enterprise OGC WMS source (NOAA/NWS Radar or USGS)
const wmsSource = new TileWMS({
  url: "https://ahocevar.com/geoserver/wms",
  params: {
    "LAYERS": "ne:ne",
    "TILED": true
  },
  serverType: "geoserver",
  transition: 0
});

const wmsLayer = new TileLayer({
  source: wmsSource,
  opacity: 0.7
});

// 3. Initialize Map
const view = new View({
  center: fromLonLat([0, 0]),
  zoom: 2
});

const map = new Map({
  target: "map",
  layers: [basemap, wmsLayer],
  view: view
});

// 4. Click handler to build and execute GetFeatureInfo URL
const infoPanel = document.getElementById("info-panel");

map.on("singleclick", (evt) => {
  const viewResolution = view.getResolution();
  const viewProjection = view.getProjection();

  // Generate standard OGC GetFeatureInfo query URL
  const url = wmsSource.getFeatureInfoUrl(
    evt.coordinate,
    viewResolution,
    viewProjection,
    { "INFO_FORMAT": "text/html" }
  );

  if (url) {
    infoPanel.innerHTML = '<span style="color: #64748b;">Fetching feature details...</span>';
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        infoPanel.innerHTML = html.trim() ? html : "<em>No features found at this location.</em>";
      })
      .catch((err) => {
        console.error("GetFeatureInfo query error:", err);
        infoPanel.innerHTML = '<span style="color: #ef4444;">Error retrieving feature attributes.</span>';
      });
  }
});
```

---

## 5. Key Architecture & Implementation Details

| Parameter / Method | Purpose |
| :--- | :--- |
| **`wmsSource.getFeatureInfoUrl(coord, res, proj, params)`** | Translates clicked map coordinate, current viewport resolution, and projection into exact pixel `I, J` WMS query parameters. |
| **`INFO_FORMAT: "text/html"`** | Requests rendered HTML table from GeoServer or MapServer. Can also be set to `application/json` for GeoJSON attribute parsing. |
| **`serverType: "geoserver"`** | Configures vendor-specific optimizations (such as gutter sizes and coordinate ordering). |
| **`TILED: true`** | Enables server-side tile caching on GeoServer (GeoWebCache) to boost map throughput. |
