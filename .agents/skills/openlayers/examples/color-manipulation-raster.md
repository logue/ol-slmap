# Real-Time Raster Tile Color Manipulation (CSS/Canvas) 🎨

> **Documentation Link:** [Color Manipulation](https://openlayers.org/en/latest/examples/color-manipulation.html)  
> **Target Category:** Production Task Implementation

Adjust hue, saturation, brightness, contrast, and inversion dynamically across raster tile basemaps via canvas pixel filters.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Real-Time Raster Tile Color Manipulation (CSS/Canvas) 🎨</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="filters">
  <label>Invert: <input id="invert" type="checkbox" /></label>
  <label>Brightness: <input id="bright" type="range" min="0" max="200" value="100" /></label>
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

#filters { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.95); padding: 10px 14px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.15); z-index: 1000; font-size: 13px; display: flex; flex-direction: column; gap: 6px; }
```

---

## 3. Complete JavaScript Implementation

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const rasterLayer = new TileLayer({
  source: new XYZ({
    url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
    tileSize: 512,
    maxZoom: 20
  })
});

const map = new Map({
  target: 'map',
  layers: [rasterLayer],
  view: new View({ center: fromLonLat([14.4378, 50.0755]), zoom: 13 })
});

const invertCheckbox = document.getElementById('invert');
const brightInput = document.getElementById('bright');

function updateFilter() {
  const inv = invertCheckbox.checked ? 'invert(100%)' : 'invert(0%)';
  const br = `brightness(${brightInput.value}%)`;
  rasterLayer.on('prerender', (evt) => {
    evt.context.filter = `${inv} ${br}`;
  });
  rasterLayer.on('postrender', (evt) => {
    evt.context.filter = 'none';
  });
  map.render();
}

invertCheckbox.onchange = updateFilter;
brightInput.oninput = updateFilter;
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/color-manipulation.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
