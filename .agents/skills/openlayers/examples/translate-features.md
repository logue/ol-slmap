# Translate / Drag & Move Geometries 🚚

> **Documentation Link:** [Translate Features](https://openlayers.org/en/latest/examples/translate-features.html)  
> **Target Category:** Production Task Implementation

Allowing users to drag and reposition points, polylines, or polygons across the map using `ol/interaction/Translate` while maintaining shape geometry.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Translate / Drag & Move Geometries 🚚</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="info">Drag any feature to translate its location</div>
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

#info { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.95); padding: 8px 14px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); font-size: 13px; z-index: 1000; }
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
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Translate from 'ol/interaction/Translate.js';
import Select from 'ol/interaction/Select.js';
import Style from 'ol/style/Style.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const pin = new Feature(new Point(fromLonLat([14.4378, 50.0755])));
const source = new VectorSource({ features: [pin] });
const vector = new VectorLayer({
  source: source,
  style: new Style({
    image: new CircleStyle({
      radius: 10,
      fill: new Fill({ color: '#0084FF' }),
      stroke: new Stroke({ color: '#fff', width: 3 })
    })
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
  view: new View({ center: fromLonLat([14.4378, 50.0755]), zoom: 13 })
});

const select = new Select();
const translate = new Translate({ features: select.getFeatures() });
map.addInteraction(select);
map.addInteraction(translate);
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/translate-features.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
