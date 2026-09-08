# OpenLayers Installation & CDN Reference

Source: https://openlayers.org/download/

This guide details methods for loading OpenLayers: NPM package managers, modern bundlers (Vite, Webpack, Next.js), hosted CDNs, and offline packages.

---

## 1. Modern Package Managers (NPM / Yarn / PNPM / Bun) — Recommended

OpenLayers is distributed as ES modules in the `ol` package.

### Installation:
```bash
# npm
npm install ol

# yarn
yarn add ol

# pnpm
pnpm add ol

# bun
bun add ol
```

### Ingestion in JavaScript / TypeScript:
```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css"; // CRITICAL: Always import CSS in root JS/TS file!
```

---

## 2. Hosted CDN (Vanilla HTML / No Build Step)

For rapid prototypes or standalone HTML files without a build step:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>OpenLayers Map</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- OpenLayers CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  
  <!-- OpenLayers JS (Full UMD Bundle) -->
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  
  <style>
    body { margin: 0; padding: 0; }
    #map { width: 100vw; height: 100vh; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: 'https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=YOUR_API_KEY',
            tilePixelRatio: 2,
            tileSize: 512,
            maxZoom: 22
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([14.4378, 50.0755]),
        zoom: 13
      })
    });
  </script>
</body>
</html>
```
