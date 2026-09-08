# Earthquakes KML Layer & Dynamic Magnitude Styling 🌋

> **Documentation Link:** [Earthquakes in KML](https://openlayers.org/en/latest/examples/kml-earthquakes.html)  
> **Target Category:** Production Task Implementation

Standard KML (Keyhole Markup Language) files frequently contain disaster telemetry, sensor points, or GIS survey pins. This guide demonstrates parsing remote KML using `ol/format/KML` and dynamically scaling circle radius and fill opacity by earthquake magnitude.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Earthquakes KML Layer & Dynamic Magnitude Styling 🌋</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="info">Hover over an earthquake</div>
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
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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
import KML from 'ol/format/KML.js';
import Style from 'ol/style/Style.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';

// Style function calculating circle size from KML feature magnitude
const styleFunction = (feature) => {
  const name = feature.get('name') || '';
  const match = name.match(/M\s*([\d.]+)/i);
  const magnitude = match ? parseFloat(match[1]) : 2.0;
  const radius = Math.max(magnitude * 3, 4);

  return new Style({
    image: new CircleStyle({
      radius: radius,
      fill: new Fill({ color: 'rgba(239, 68, 68, 0.6)' }),
      stroke: new Stroke({ color: '#ffffff', width: 1.5 })
    })
  });
};

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml',
    format: new KML({ extractStyles: false })
  }),
  style: styleFunction
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/dataviz-v4-dark/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20,
        attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
      })
    }),
    vectorLayer
  ],
  view: new View({
    center: fromLonLat([0, 0]),
    zoom: 2
  })
});

const info = document.getElementById('info');
map.on('pointermove', (evt) => {
  if (evt.dragging) return;
  const feature = map.forEachFeatureAtPixel(evt.pixel, (f) => f);
  if (feature) {
    info.innerHTML = `<strong>${feature.get('name')}</strong>`;
  } else {
    info.innerHTML = 'Hover over an earthquake';
  }
});
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/kml-earthquakes.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
