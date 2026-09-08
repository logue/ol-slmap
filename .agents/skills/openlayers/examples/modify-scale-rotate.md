# Modify Feature with Scale and Rotate Handles

> **Documentation Reference:** [Modify Feature with Scale and Rotate Handles](https://openlayers.org/en/latest/examples/modify-scale-and-rotate.html)
> Category: **Interactions & Digitization**

## Overview
Interactive vector feature modification allowing users to scale and rotate polygon geometries using modifier keys.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Modify Scale and Rotate</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; font-family: sans-serif; }
    #map { width: 100vw; height: 100vh; }
    .instructions {
      position: absolute; top: 16px; left: 16px; z-index: 1000;
      background: rgba(15, 23, 42, 0.9); color: white; padding: 12px 16px;
      border-radius: 8px; font-size: 13px; max-width: 280px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="instructions">
    <strong>Modify Interaction</strong><br>
    - Click vertex to drag/edit<br>
    - Hold <strong>Alt + Drag</strong> to scale<br>
    - Hold <strong>Shift + Drag</strong> to rotate
  </div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const source = new ol.source.Vector();
    // Add sample polygon
    const center = ol.proj.fromLonLat([2.3522, 48.8566]);
    const poly = ol.geom.Polygon.fromExtent([
      center[0] - 2000, center[1] - 2000,
      center[0] + 2000, center[1] + 2000
    ]);
    source.addFeature(new ol.Feature(poly));

    const vectorLayer = new ol.layer.Vector({
      source: source,
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({ color: '#0084FF', width: 3 }),
        fill: new ol.style.Fill({ color: 'rgba(0, 132, 255, 0.2)' })
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
        vectorLayer
      ],
      view: new ol.View({ center: center, zoom: 13 })
    });

    const select = new ol.interaction.Select();
    map.addInteraction(select);

    const modify = new ol.interaction.Modify({
      features: select.getFeatures()
    });
    map.addInteraction(modify);
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
