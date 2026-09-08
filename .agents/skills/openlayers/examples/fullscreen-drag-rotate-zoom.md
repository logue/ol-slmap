# FullScreen Control & DragRotateAndZoom

> **Documentation Reference:** [FullScreen Control & DragRotateAndZoom](https://openlayers.org/en/latest/examples/full-screen-drag-rotate-and-zoom.html)
> Category: **UI Controls & Layout**

## Overview
Integrates the HTML5 Fullscreen API control with `DragRotateAndZoom` (Shift + Drag) for 3D-style canvas tilt and free rotation.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - FullScreen & DragRotateAndZoom</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; }
    #map { width: 100vw; height: 100vh; }
    .hint {
      position: absolute; bottom: 20px; left: 20px; z-index: 1000;
      background: rgba(0,0,0,0.75); color: #fff; padding: 8px 14px;
      border-radius: 6px; font-family: sans-serif; font-size: 13px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="hint">Tip: Hold <strong>Shift + Drag</strong> to rotate & zoom</div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults.defaults().extend([
        new ol.control.FullScreen()
      ]),
      interactions: ol.interaction.defaults.defaults().extend([
        new ol.interaction.DragRotateAndZoom()
      ]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512, crossOrigin: 'anonymous'
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([13.4050, 52.5200]), // Berlin
        zoom: 12
      })
    });
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
