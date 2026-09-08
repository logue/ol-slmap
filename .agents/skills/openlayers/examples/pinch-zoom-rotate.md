# Touch Pinch-Zoom & Kinetic Drag-Rotate 📱

> **Documentation Link:** [Pinch Zoom](https://openlayers.org/en/latest/examples/pinch-zoom.html)  
> **Target Category:** Production Task Implementation

Optimizing touch tablet and smartphone interactions: smooth multi-touch pinch zoom, kinetic momentum panning, and two-finger map rotation with reset button.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Touch Pinch-Zoom & Kinetic Drag-Rotate 📱</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<button id="reset-rot">Reset North</button>
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

#reset-rot { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.95); border: 1px solid #cbd5e1; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-weight: 600; z-index: 1000; }
```

---

## 3. Complete JavaScript Implementation

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import { defaults as defaultInteractions, PinchRotate, PinchZoom } from 'ol/interaction.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const view = new View({
  center: fromLonLat([8.5417, 47.3769]), // Zurich
  zoom: 13,
  enableRotation: true
});

const map = new Map({
  target: 'map',
  interactions: defaultInteractions().extend([
    new PinchRotate(),
    new PinchZoom()
  ]),
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20
      })
    })
  ],
  view: view
});

document.getElementById('reset-rot').onclick = () => {
  view.animate({ rotation: 0, duration: 300 });
};
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/pinch-zoom.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
