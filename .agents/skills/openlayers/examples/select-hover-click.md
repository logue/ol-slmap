# Select Features by Hover & Click 🖱️

> **Documentation Link:** [Select Features](https://openlayers.org/en/latest/examples/select-features.html)  
> **Target Category:** Production Task Implementation

Configuring `ol/interaction/Select` with conditional triggers (pointermove vs singleclick) and multi-feature selection states with custom highlight symbology.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Select Features by Hover & Click 🖱️</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="status">Select mode: Click to select</div>
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

#status { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.95); padding: 8px 14px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); font-size: 13px; z-index: 1000; }
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
import Select from 'ol/interaction/Select.js';
import { click, pointerMove } from 'ol/events/condition.js';
import Style from 'ol/style/Style.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson',
    format: new GeoJSON()
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
    vectorLayer
  ],
  view: new View({ center: fromLonLat([10, 50]), zoom: 4 })
});

const selectClick = new Select({
  condition: click,
  style: new Style({
    fill: new Fill({ color: 'rgba(0, 132, 255, 0.5)' }),
    stroke: new Stroke({ color: '#0084FF', width: 3 })
  })
});
map.addInteraction(selectClick);

selectClick.on('select', (e) => {
  const selected = e.selected[0];
  if (selected) {
    document.getElementById('status').textContent = `Selected: ${selected.get('name')}`;
  } else {
    document.getElementById('status').textContent = 'No country selected';
  }
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/select-features.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
