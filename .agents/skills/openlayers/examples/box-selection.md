# Marquee Box Spatial Selection 📦

> **Documentation Link:** [Box Selection](https://openlayers.org/en/latest/examples/box-selection.html)  
> **Target Category:** Production Task Implementation

Using `ol/interaction/DragBox` with `Ctrl + Drag` or `Shift + Drag` to select multiple vector features within a rubber-band rectangle.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Marquee Box Spatial Selection 📦</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="info">Hold <strong>Ctrl</strong> and drag to draw a selection rectangle</div>
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
  padding: 10px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-size: 13px;
  z-index: 1000;
}
.ol-dragbox {
  background-color: rgba(0, 132, 255, 0.2);
  border: 2px dashed #0084FF;
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
import GeoJSON from 'ol/format/GeoJSON.js';
import DragBox from 'ol/interaction/DragBox.js';
import Select from 'ol/interaction/Select.js';
import { platformModifierKeyOnly } from 'ol/events/condition.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const vectorSource = new VectorSource({
  url: 'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson',
  format: new GeoJSON()
});

const vectorLayer = new VectorLayer({ source: vectorSource });

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

const select = new Select();
map.addInteraction(select);
const selectedFeatures = select.getFeatures();

const dragBox = new DragBox({
  condition: platformModifierKeyOnly // Ctrl on Windows/Linux, Cmd on Mac
});
map.addInteraction(dragBox);

dragBox.on('boxend', () => {
  const extent = dragBox.getGeometry().getExtent();
  const boxFeatures = vectorSource.getFeaturesInExtent(extent);
  selectedFeatures.clear();
  selectedFeatures.extend(boxFeatures);
  document.getElementById('info').innerHTML = `Selected <strong>${boxFeatures.length}</strong> features`;
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/box-selection.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
