# Freehand Drawing & Geometric Shapes ✏️

> **Documentation Link:** [Draw Shapes](https://openlayers.org/en/latest/examples/draw-shapes.html)  
> **Target Category:** Production Task Implementation

Configuring `ol/interaction/Draw` with `createBox`, `createRegularPolygon`, and `freehand: true` to digitize custom stars, boxes, circles, and sketches.

---

## 1. HTML Container

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Freehand Drawing & Geometric Shapes ✏️</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
<div id="tools">
  <label>Shape:</label>
  <select id="shape-type">
    <option value="Box">Box (Bounding Box)</option>
    <option value="Star">Star (5 Points)</option>
    <option value="Freehand">Freehand Polygon</option>
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

#tools {
  position: absolute;
  top: 16px;
  left: 56px;
  background: rgba(255,255,255,0.95);
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  z-index: 1000;
  display: flex;
  gap: 8px;
  align-items: center;
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
import Draw, { createBox, createRegularPolygon } from 'ol/interaction/Draw.js';
import Polygon from 'ol/geom/Polygon.js';
import { fromLonLat } from 'ol/proj.js';
import 'ol/ol.css';

const MAPTILER_KEY = 'YOUR_API_KEY';
const source = new VectorSource();
const vector = new VectorLayer({ source: source });

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20
      })
    }),
    vector
  ],
  view: new View({ center: fromLonLat([14.4378, 50.0755]), zoom: 13 })
});

let draw;
function setDrawMode(type) {
  if (draw) map.removeInteraction(draw);
  let geometryFunction;
  let drawType = 'Circle';
  let freehand = false;

  if (type === 'Box') {
    geometryFunction = createBox();
  } else if (type === 'Star') {
    geometryFunction = function (coordinates, geometry) {
      const center = coordinates[0];
      const last = coordinates[coordinates.length - 1];
      const dx = center[0] - last[0];
      const dy = center[1] - last[1];
      const radius = Math.sqrt(dx * dx + dy * dy);
      const rotation = Math.atan2(dy, dx);
      const newCoordinates = [];
      const numPoints = 10;
      for (let i = 0; i < numPoints; ++i) {
        const angle = rotation + (i * 2 * Math.PI) / numPoints;
        const r = i % 2 === 0 ? radius : radius / 2;
        newCoordinates.push([center[0] + r * Math.cos(angle), center[1] + r * Math.sin(angle)]);
      }
      newCoordinates.push(newCoordinates[0].slice());
      if (!geometry) geometry = new Polygon([newCoordinates]);
      else geometry.setCoordinates([newCoordinates]);
      return geometry;
    };
  } else if (type === 'Freehand') {
    drawType = 'Polygon';
    freehand = true;
  }

  draw = new Draw({
    source: source,
    type: drawType,
    geometryFunction: geometryFunction,
    freehand: freehand
  });
  map.addInteraction(draw);
}

document.getElementById('shape-type').onchange = (e) => setDrawMode(e.target.value);
setDrawMode('Box');
```

---

## 4. Key Architecture & Options

| Parameter / Feature | Purpose |
| :--- | :--- |
| **Reference Spec** | Conforms to `https://openlayers.org/en/latest/examples/draw-shapes.html` with native `ol/*` modular ES imports. |
| **Basemap Service** | Powered by modern MapTiler Planet v4 high-DPI raster XYZ or vector tile styles. |
| **Lifecycle Clean** | Safe for single-page applications (React, Vue, Svelte) via standard `map.setTarget(null)`. |
