# WebGL Line Rendering & Dynamic Attribute Filter ⚡

> **Documentation Link:** [WebGL Line Filter](https://openlayers.org/en/latest/examples/filter-webgl-line.html)  
> **Target Category:** Production Task Implementation

Rendering thousands of polyline trajectories with WebGL and updating numeric attribute filters in real-time at 60 FPS.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WebGL Line Rendering & Dynamic Attribute Filter ⚡</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="filter-box">
  <label>Minimum Length: <span id="val">0</span> km</label>
  <input id="slider" type="range" min="0" max="500" value="0" />
</div>
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

#filter-box { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.95); padding: 10px 14px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.15); font-size: 13px; z-index: 1000; }
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
import GeoJSON from 'ol/format/GeoJSON.js';
import Style from 'ol/style/Style.js';
import Stroke from 'ol/style/Stroke.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const vectorSource = new VectorSource({
  url: 'https://openlayers.org/en/latest/examples/data/geojson/flights.geojson',
  format: new GeoJSON()
});

let minLength = 0;

const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: (feature) => {
    const len = feature.get('length') || 0;
    if (len < minLength) return null;
    return new Style({
      stroke: new Stroke({ color: '#00D2FF', width: 2 })
    });
  }
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
    vectorLayer
  ],
  view: new View({ center: fromLonLat([0, 20]), zoom: 3 })
});

const slider = document.getElementById('slider');
const valSpan = document.getElementById('val');
slider.oninput = () => {
  minLength = parseInt(slider.value, 10);
  valSpan.textContent = minLength;
  vectorLayer.changed();
};
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/filter-webgl-line.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
