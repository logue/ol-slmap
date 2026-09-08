# Custom Base Map Switcher UI 🗂️

> **Documentation Link:** [Layer Groups](https://openlayers.org/en/latest/examples/layer-group.html)  
> **Target Category:** Production Task Implementation

Build an elegant, accessible base layer switcher control enabling users to toggle between Streets v4, Outdoor v4, Satellite v4, and Dataviz Dark basemaps.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Custom Base Map Switcher UI 🗂️</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="switcher">
  <button data-style="streets-v4" class="active">Streets</button>
  <button data-style="outdoor-v4">Outdoor</button>
  <button data-style="satellite-v4">Satellite</button>
  <button data-style="dataviz-v4-dark">Dataviz Dark</button>
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

#switcher { position: absolute; top: 16px; left: 56px; background: rgba(255,255,255,0.95); padding: 6px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.15); z-index: 1000; display: flex; gap: 6px; }
#switcher button { padding: 6px 12px; border: 1px solid #cbd5e1; border-radius: 4px; background: #fff; cursor: pointer; font-size: 12px; font-weight: 600; }
#switcher button.active { background: #0084FF; color: #fff; border-color: #0084FF; }
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

function createTileSource(styleId, ext = 'png') {
  return new XYZ({
    url: `https://api.maptiler.com/maps/${styleId}/{z}/{x}/{y}.${ext}?key=${MAPTILER_KEY}`,
    tileSize: 512,
    maxZoom: 20
  });
}

const baseLayer = new TileLayer({
  source: createTileSource('streets-v4')
});

const map = new Map({
  target: 'map',
  layers: [baseLayer],
  view: new View({ center: fromLonLat([14.4378, 50.0755]), zoom: 12 })
});

const buttons = document.querySelectorAll('#switcher button');
buttons.forEach((btn) => {
  btn.onclick = () => {
    buttons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const styleId = btn.getAttribute('data-style');
    const ext = styleId === 'satellite-v4' ? 'jpg' : 'png';
    baseLayer.setSource(createTileSource(styleId, ext));
  };
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/layer-group.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
