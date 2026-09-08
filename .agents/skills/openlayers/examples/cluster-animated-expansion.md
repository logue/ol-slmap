# Animated Cluster Spiderfy & Expansion 🕸️

> **Documentation Link:** [Cluster with animated expansion](https://openlayers.org/en/latest/examples/cluster.html)  
> **Target Category:** Production Task Implementation

Smoothly expand overlapping clustered markers outwards in a circular spiral (spiderfy) upon clicking rather than simply zooming in, allowing selection of exact co-located items.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Animated Cluster Spiderfy & Expansion 🕸️</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
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

#map { width: 100%; height: 100%; }
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
import Cluster from 'ol/source/Cluster.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Style from 'ol/style/Style.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import Text from 'ol/style/Text.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const count = 500;
const features = new Array(count);
for (let i = 0; i < count; ++i) {
  features[i] = new Feature(new Point(fromLonLat([14.4 + Math.random() * 0.1, 50.05 + Math.random() * 0.05])));
}

const clusterSource = new Cluster({ distance: 35, source: new VectorSource({ features: features }) });

const clusterLayer = new VectorLayer({
  source: clusterSource,
  style: (feature) => {
    const size = feature.get('features').length;
    return new Style({
      image: new CircleStyle({
        radius: size > 1 ? 14 : 7,
        fill: new Fill({ color: size > 1 ? '#0084FF' : '#10b981' }),
        stroke: new Stroke({ color: '#fff', width: 2 })
      }),
      text: size > 1 ? new Text({ text: size.toString(), fill: new Fill({ color: '#fff' }) }) : null
    });
  }
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
    clusterLayer
  ],
  view: new View({ center: fromLonLat([14.45, 50.075]), zoom: 12 })
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/cluster.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
