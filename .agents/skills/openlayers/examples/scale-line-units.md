# Dynamic ScaleLine Bar (Metric, Imperial, Nautical) 📏

> **Documentation Link:** [ScaleLine Control](https://openlayers.org/en/latest/examples/scaleline.html)  
> **Target Category:** Production Task Implementation

Displaying high-precision physical map scale indicators supporting dynamic unit switching between metric, imperial, nautical, and US surveying feet.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dynamic ScaleLine Bar (Metric, Imperial, Nautical) 📏</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="controls">
  <label>Units:</label>
  <select id="units">
    <option value="metric" selected>Metric (m / km)</option>
    <option value="imperial">Imperial (ft / mi)</option>
    <option value="nautical">Nautical (nm)</option>
  </select>
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

#controls { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.95); padding: 8px 12px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1000; font-size: 13px; }
```

---

## 3. Complete JavaScript Implementation

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import ScaleLine from 'ol/control/ScaleLine.js';
import { defaults as defaultControls } from 'ol/control.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const scaleControl = new ScaleLine({
  units: 'metric',
  bar: true,
  steps: 4,
  text: true,
  minWidth: 140
});

const map = new Map({
  target: 'map',
  controls: defaultControls().extend([scaleControl]),
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

document.getElementById('units').onchange = (e) => {
  scaleControl.setUnits(e.target.value);
};
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/scaleline.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
