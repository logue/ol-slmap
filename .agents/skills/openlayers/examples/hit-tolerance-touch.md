# Hit Tolerance for Mobile and Touch Interaction

> **Documentation Reference:** [Hit Tolerance for Mobile and Touch Interaction](https://openlayers.org/en/latest/examples/hit-tolerance.html)
> Category: **Interactions & Digitization**

## Overview
Configures pixel hit tolerance on feature click and pointermove events to ensure effortless tapping on mobile devices and narrow polylines.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Hit Tolerance for Touch</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; font-family: sans-serif; }
    #map { width: 100vw; height: 100vh; }
    .status {
      position: absolute; top: 16px; left: 16px; z-index: 1000;
      background: rgba(15, 23, 42, 0.9); color: white; padding: 10px 16px;
      border-radius: 6px; font-size: 13px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="status" id="status">Tap anywhere near the thin line (10px tolerance)</div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const line = new ol.Feature({
      geometry: new ol.geom.LineString([
        ol.proj.fromLonLat([-0.1278, 51.5074]),
        ol.proj.fromLonLat([-0.1000, 51.5200])
      ])
    });

    const vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({ features: [line] }),
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({ color: '#ff3366', width: 2 })
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
      view: new ol.View({
        center: ol.proj.fromLonLat([-0.1150, 51.5137]),
        zoom: 14
      })
    });

    map.on('singleclick', (evt) => {
      const hit = map.hasFeatureAtPixel(evt.pixel, { hitTolerance: 10 });
      document.getElementById('status').textContent = hit
        ? '🎯 Hit Detected within 10px tolerance!'
        : 'Missed! Click closer to the red line.';
    });
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
