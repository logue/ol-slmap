# Interactive Bounding Box Crop & Extent Handles 🔲

> **Documentation Link:** [Extent Interaction](https://openlayers.org/en/latest/examples/extent-interaction.html)  
> **Target Category:** Production Task Implementation

Allow users to drag and resize an active spatial bounding box using vertex and corner handles for area clipping, data exports, or regional spatial queries.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Bounding Box Crop & Extent Handles 🔲</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="extent-display">BBOX: [Select an area]</div>
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

#extent-display { position: absolute; bottom: 20px; left: 20px; background: rgba(255,255,255,0.95); padding: 8px 14px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); font-size: 12px; z-index: 1000; }
```

---

## 3. Complete JavaScript Implementation

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import Extent from 'ol/interaction/Extent.js';
import { fromLonLat, toLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

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
  view: new View({ center: fromLonLat([14.4378, 50.0755]), zoom: 12 })
});

const extent = new Extent();
map.addInteraction(extent);

extent.on('extentchanged', (e) => {
  const ext = e.extent;
  const sw = toLonLat([ext[0], ext[1]]);
  const ne = toLonLat([ext[2], ext[3]]);
  document.getElementById('extent-display').textContent = 
    `SW: [${sw[0].toFixed(3)}, ${sw[1].toFixed(3)}] | NE: [${ne[0].toFixed(3)}, ${ne[1].toFixed(3)}]`;
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/extent-interaction.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
