# Cinematic Camera Flight Navigation 🚀

> **Documentation Link:** [View Animation](https://openlayers.org/en/latest/examples/animation.html)  
> **Target Category:** Production Task Implementation

Smoothly pan and zoom between distant locations with cinematic camera arcs combining zoom-out, pan, and zoom-in easing.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cinematic Camera Flight Navigation 🚀</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="cities">
  <button id="to-london">London</button>
  <button id="to-paris">Paris</button>
  <button id="to-rome">Rome</button>
  <button id="to-prague">Prague</button>
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

#cities {
  position: absolute;
  top: 16px;
  left: 56px;
  background: rgba(255,255,255,0.95);
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  z-index: 1000;
  display: flex;
  gap: 8px;
}
#cities button {
  padding: 6px 12px;
  background: #0084FF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}
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

const view = new View({
  center: fromLonLat([14.4378, 50.0755]),
  zoom: 6
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
    })
  ],
  view: view
});

function flyTo(location, done) {
  const duration = 2000;
  const zoom = view.getZoom();
  let parts = 2;
  let called = false;
  function callback(complete) {
    --parts;
    if (parts === 0) {
      if (called) return;
      called = true;
      done && done(complete);
    }
  }
  view.animate({ center: location, duration: duration }, callback);
  view.animate(
    { zoom: zoom - 1.5, duration: duration / 2 },
    { zoom: 12, duration: duration / 2 },
    callback
  );
}

document.getElementById('to-london').onclick = () => flyTo(fromLonLat([-0.1278, 51.5074]));
document.getElementById('to-paris').onclick = () => flyTo(fromLonLat([2.3522, 48.8566]));
document.getElementById('to-rome').onclick = () => flyTo(fromLonLat([12.4964, 41.9028]));
document.getElementById('to-prague').onclick = () => flyTo(fromLonLat([14.4378, 50.0755]));
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/animation.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
