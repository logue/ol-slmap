# OGC WMTS Layer & Custom TileGrid 📐

> **Documentation Link:** [WMTS](https://openlayers.org/en/latest/examples/wmts.html)  
> **Target Category:** Production Task Implementation

Connect to standardized OGC Web Map Tile Service (WMTS) servers with predefined matrix IDs, resolutions, and coordinate reference projections.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OGC WMTS Layer & Custom TileGrid 📐</title>
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

#map { width: 100%; height: 100%; }
```

---

## 3. Complete JavaScript Implementation

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import WMTS from 'ol/source/WMTS.js';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import { get as getProjection } from 'ol/proj.js';
import { getWidth } from 'ol/extent.js';
import 'ol/ol.css';

const projection = getProjection('EPSG:3857');
const tileSizePixels = 256;
const projectionExtent = projection.getExtent();
const size = getWidth(projectionExtent) / tileSizePixels;
const resolutions = new Array(19);
const matrixIds = new Array(19);

for (let z = 0; z < 19; ++z) {
  resolutions[z] = size / Math.pow(2, z);
  matrixIds[z] = z;
}

const wmtsLayer = new TileLayer({
  opacity: 0.7,
  source: new WMTS({
    url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS',
    layer: 'USGSTopo',
    matrixSet: 'default028mm',
    format: 'image/jpeg',
    projection: projection,
    tileGrid: new WMTSTileGrid({
      origin: [-20037508.342787, 20037508.342787],
      resolutions: resolutions,
      matrixIds: matrixIds
    })
  })
});

const map = new Map({
  target: 'map',
  layers: [wmtsLayer],
  view: new View({ center: [-111.9, 40.7], zoom: 10 })
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/wmts.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
