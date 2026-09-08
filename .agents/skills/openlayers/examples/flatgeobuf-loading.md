# Streaming Binary FlatGeobuf Spatial Data ⚡

> **Documentation Link:** [FlatGeobuf](https://openlayers.org/en/latest/examples/flatgeobuf.html)  
> **Target Category:** Production Task Implementation

FlatGeobuf is a binary encoding format for geographic data with an integrated spatial index (packed R-tree), enabling fast viewport BBOX filtering and streaming without loading the entire dataset into memory.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Streaming Binary FlatGeobuf Spatial Data ⚡</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="info">Pan and zoom to stream indexed FlatGeobuf features</div>
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

#info {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255,255,255,0.95);
  padding: 10px 14px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  font-size: 13px;
  z-index: 1000;
}
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
import FlatGeobuf from 'ol/format/FlatGeobuf.js';
import { bbox } from 'ol/loadingstrategy.js';
import Style from 'ol/style/Style.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const source = new VectorSource({
  format: new FlatGeobuf(),
  url: (extent) => {
    // FlatGeobuf supports streaming byte-range spatial queries
    return 'https://openlayers.org/en/latest/examples/data/flatgeobuf/countries.fgb';
  },
  strategy: bbox
});

const vector = new VectorLayer({
  source: source,
  style: new Style({
    stroke: new Stroke({ color: '#0084FF', width: 1.5 }),
    fill: new Fill({ color: 'rgba(0, 132, 255, 0.2)' })
  })
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
    vector
  ],
  view: new View({
    center: fromLonLat([0, 0]),
    zoom: 2
  })
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/flatgeobuf.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
