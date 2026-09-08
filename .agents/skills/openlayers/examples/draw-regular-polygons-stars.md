# Drawing Regular Polygons and Stars

> **Documentation Reference:** [Drawing Regular Polygons and Stars](https://openlayers.org/en/latest/examples/regularshape.html)
> Category: **Interactions & Digitization**

## Overview
Interactive digitization of regular polygons, bounding boxes, and geometric star shapes using `ol/interaction/Draw.createRegularPolygon`.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Draw Regular Polygons & Stars</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; font-family: sans-serif; }
    #map { width: 100vw; height: 100vh; }
    .controls {
      position: absolute; top: 16px; left: 16px; z-index: 1000;
      background: rgba(15, 23, 42, 0.9); color: white; padding: 12px;
      border-radius: 8px; font-size: 13px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="controls">
    <label>Shape: </label>
    <select id="shape-type">
      <option value="Square">Square</option>
      <option value="Box">Box (Extent)</option>
      <option value="Star">5-Point Star</option>
    </select>
  </div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const source = new ol.source.Vector();
    const vector = new ol.layer.Vector({
      source: source,
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({ color: '#0084FF', width: 2 }),
        fill: new ol.style.Fill({ color: 'rgba(0, 132, 255, 0.25)' })
      })
    });

    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512, crossOrigin: 'anonymous'
          })
        }),
        vector
      ],
      view: new ol.View({ center: [0, 0], zoom: 3 })
    });

    let draw;
    function addInteraction() {
      const val = document.getElementById('shape-type').value;
      let geometryFunction;
      if (val === 'Square') {
        geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
      } else if (val === 'Box') {
        geometryFunction = ol.interaction.Draw.createBox();
      } else if (val === 'Star') {
        geometryFunction = (coordinates, geometry) => {
          const center = coordinates[0];
          const last = coordinates[1];
          const dx = center[0] - last[0];
          const dy = center[1] - last[1];
          const radius = Math.sqrt(dx * dx + dy * dy);
          const points = [];
          for (let i = 0; i < 10; i++) {
            const r = i % 2 === 0 ? radius : radius / 2;
            const angle = (i * Math.PI) / 5 - Math.PI / 2;
            points.push([center[0] + r * Math.cos(angle), center[1] + r * Math.sin(angle)]);
          }
          points.push(points[0]);
          if (!geometry) geometry = new ol.geom.Polygon([points]);
          else geometry.setCoordinates([points]);
          return geometry;
        };
      }
      draw = new ol.interaction.Draw({
        source: source,
        type: 'Circle',
        geometryFunction: geometryFunction
      });
      map.addInteraction(draw);
    }

    document.getElementById('shape-type').addEventListener('change', () => {
      map.removeInteraction(draw);
      addInteraction();
    });
    addInteraction();
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
