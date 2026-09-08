# GPS Track Viewer with GPX Format 🚴

> **Documentation Link:** [GPX Data](https://openlayers.org/en/latest/examples/gpx.html)  
> **Target Category:** Production Task Implementation

GPS telemetry logs recorded by cycling computers, hiking trackers, and mobile apps are formatted in GPX format. This recipe shows how to parse GPX tracks and waypoints into OpenLayers and apply distinct styles for route lines vs waypoint markers.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GPS Track Viewer with GPX Format 🚴</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="status">Loading GPX track...</div>
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

#status {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 14px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  font-size: 13px;
  z-index: 1000;
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
import GPX from 'ol/format/GPX.js';
import Style from 'ol/style/Style.js';
import Stroke from 'ol/style/Stroke.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

const style = {
  'Point': new Style({
    image: new CircleStyle({
      fill: new Fill({ color: '#0084FF' }),
      radius: 5,
      stroke: new Stroke({ color: '#ffffff', width: 1.5 })
    })
  }),
  'LineString': new Style({
    stroke: new Stroke({ color: '#0084FF', width: 4 })
  }),
  'MultiLineString': new Style({
    stroke: new Stroke({ color: '#0084FF', width: 4 })
  })
};

const gpxSource = new VectorSource({
  url: 'https://openlayers.org/en/latest/examples/data/gpx/fells_loop.gpx',
  format: new GPX()
});

const gpxLayer = new VectorLayer({
  source: gpxSource,
  style: (feature) => style[feature.getGeometry().getType()]
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20,
        attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
      })
    }),
    gpxLayer
  ],
  view: new View({
    center: fromLonLat([-71.10, 42.45]),
    zoom: 12
  })
});

gpxSource.on('featuresloadend', () => {
  map.getView().fit(gpxSource.getExtent(), { padding: [40, 40, 40, 40], duration: 800 });
  document.getElementById('status').textContent = 'GPX track loaded!';
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/gpx.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
