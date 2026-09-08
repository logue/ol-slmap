# ArcGIS REST FeatureServer Layer 🏢

> **Documentation Link:** [ArcGIS REST Feature Service](https://openlayers.org/en/latest/examples/vector-esri.html)  
> **Target Category:** Production Task Implementation

Connecting directly to enterprise Esri ArcGIS REST FeatureServer endpoints to query vector geometries using OpenLayers `EsriJSON` format and dynamic BBOX queries.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ArcGIS REST FeatureServer Layer 🏢</title>
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
import VectorLayer from 'ol/layer/Vector.js';
import XYZ from 'ol/source/XYZ.js';
import VectorSource from 'ol/source/Vector.js';
import EsriJSON from 'ol/format/EsriJSON.js';
import { tile as tileStrategy } from 'ol/loadingstrategy.js';
import { createXYZ } from 'ol/tilegrid.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';
const esriServiceUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0/query';

const esriSource = new VectorSource({
  format: new EsriJSON(),
  loader: function (extent, resolution, projection) {
    const url = `${esriServiceUrl}?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects` +
      `&geometry=${encodeURIComponent(JSON.stringify({ xmin: extent[0], ymin: extent[1], xmax: extent[2], ymax: extent[3], spatialReference: { wkid: 102100 } }))}` +
      `&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const features = esriSource.getFormat().readFeatures(data);
        if (features.length > 0) {
          esriSource.addFeatures(features);
        }
      });
  },
  strategy: tileStrategy(createXYZ({ tileSize: 512 }))
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20
      })
    }),
    new VectorLayer({ source: esriSource })
  ],
  view: new View({
    center: fromLonLat([-98.5795, 39.8283]), // USA center
    zoom: 4
  })
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/vector-esri.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
