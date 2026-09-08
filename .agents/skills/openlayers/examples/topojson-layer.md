# TopoJSON Administrative Boundaries 🗾

> **Documentation Link:** [TopoJSON](https://openlayers.org/en/latest/examples/topojson.html)  
> **Target Category:** Production Task Implementation

TopoJSON encodes spatial topology to eliminate redundant shared polygon boundaries and substantially compress file size compared to raw GeoJSON. This guide demonstrates loading TopoJSON world/state boundaries in OpenLayers.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TopoJSON Administrative Boundaries 🗾</title>
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
import TopoJSON from 'ol/format/TopoJSON.js';
import Style from 'ol/style/Style.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const topoLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://openlayers.org/en/latest/examples/data/topojson/world-110m.json',
    format: new TopoJSON({
      layers: ['countries']
    })
  }),
  style: new Style({
    fill: new Fill({ color: 'rgba(0, 132, 255, 0.15)' }),
    stroke: new Stroke({ color: '#0084FF', width: 1.2 })
  })
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/dataviz-v4-dark/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20
      })
    }),
    topoLayer
  ],
  view: new View({
    center: fromLonLat([0, 20]),
    zoom: 2
  })
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/topojson.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
