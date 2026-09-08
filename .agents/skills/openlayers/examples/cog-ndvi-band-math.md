# Real-Time WebGL NDVI Vegetation Index from COG 🌿

> **Documentation Link:** [NDVI from a Sentinel 2 COG](https://openlayers.org/en/latest/examples/cog-math.html)  
> **Target Category:** Production Task Implementation

Calculate the Normalized Difference Vegetation Index (NDVI = (NIR - Red) / (NIR + Red)) live on the user's GPU using WebGL expression math across Sentinel-2 GeoTIFF bands.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Real-Time WebGL NDVI Vegetation Index from COG 🌿</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="legend">NDVI: Dense Vegetation (Green) &rarr; Bare Soil (Brown)</div>
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

#legend {
  position: absolute;
  bottom: 24px;
  right: 24px;
  background: rgba(255,255,255,0.95);
  padding: 10px 16px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-size: 13px;
  z-index: 1000;
}
```

---

## 3. Complete JavaScript Implementation

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import GeoTIFF from 'ol/source/GeoTIFF.js';
import 'ol/ol.css';

// Sentinel-2 L2A Band 4 (Red) and Band 8 (NIR)
const nir = ['band', 1];
const red = ['band', 2];
const ndvi = ['/', ['-', nir, red], ['+', nir, red]];

const cogLayer = new WebGLTileLayer({
  source: new GeoTIFF({
    sources: [
      { url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2B_36QWD_20200701_0_L2A/B08.tif' },
      { url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2B_36QWD_20200701_0_L2A/B04.tif' }
    ]
  }),
  style: {
    color: [
      'interpolate',
      ['linear'],
      ndvi,
      -0.2, [191, 155, 110, 1], // Water/soil
      0.1,  [223, 194, 125, 1], // Sparse vegetation
      0.3,  [166, 219, 160, 1], // Moderate vegetation
      0.7,  [0, 104, 55, 1]     // Dense lush canopy
    ]
  }
});

const map = new Map({
  target: 'map',
  layers: [cogLayer],
  view: new View({ center: [0, 0], zoom: 2 })
});

cogLayer.getSource().getView().then((viewConfig) => map.setView(new View(viewConfig)));
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/cog-math.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
