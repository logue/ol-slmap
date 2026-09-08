# Shared Views (Synchronized Dual Maps)

> **Documentation Reference:** [Shared Views (Synchronized Dual Maps)](https://openlayers.org/en/latest/examples/side-by-side.html)
> Category: **UI Controls & Layout**

## Overview
Two synchronized OpenLayers maps side-by-side sharing a single `ol/View` instance for real-time comparative navigation.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Synchronized Dual Maps</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; display: flex; width: 100vw; height: 100vh; }
    .map-pane { flex: 1; height: 100%; position: relative; }
    .pane-title {
      position: absolute; top: 12px; left: 12px; z-index: 1000;
      background: rgba(15, 23, 42, 0.85); color: #fff;
      padding: 6px 12px; border-radius: 4px; font-family: sans-serif; font-size: 12px;
    }
  </style>
</head>
<body>
  <div id="map1" class="map-pane"><div class="pane-title">Streets v4</div></div>
  <div id="map2" class="map-pane"><div class="pane-title">Satellite v4</div></div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const sharedView = new ol.View({
      center: ol.proj.fromLonLat([11.5820, 48.1351]), // Munich
      zoom: 13
    });

    const map1 = new ol.Map({
      target: 'map1',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512, crossOrigin: 'anonymous'
          })
        })
      ],
      view: sharedView
    });

    const map2 = new ol.Map({
      target: 'map2',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`,
            tileSize: 512, crossOrigin: 'anonymous'
          })
        })
      ],
      view: sharedView
    });
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
