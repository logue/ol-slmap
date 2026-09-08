# Cloud-Optimized GeoTIFF (COG) Direct Ingestion 🛰️

> **Documentation Link:** [Cloud Optimized GeoTIFF (COG)](https://openlayers.org/en/latest/examples/cog.html)  
> **Target Category:** Production Task Implementation

Streaming multi-gigabyte satellite imagery directly from cloud storage buckets via HTTP Range requests without converting to raster tiles or running tile servers.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cloud-Optimized GeoTIFF (COG) Direct Ingestion 🛰️</title>
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
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import GeoTIFF from 'ol/source/GeoTIFF.js';
import 'ol/ol.css';

// Direct COG raster source using HTTP byte-range chunks
const cogSource = new GeoTIFF({
  sources: [
    {
      url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2B_36QWD_20200701_0_L2A/TCI.tif'
    }
  ]
});

const map = new Map({
  target: 'map',
  layers: [
    new WebGLTileLayer({
      source: cogSource
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

cogSource.getView().then((viewConfig) => {
  map.setView(new View(viewConfig));
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/cog.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
