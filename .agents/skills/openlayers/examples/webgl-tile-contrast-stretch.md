# Band Contrast Stretch with WebGLTile

> **Documentation Reference:** [Band Contrast Stretch with WebGLTile](https://openlayers.org/en/latest/examples/cog-stretch.html)
> Category: **Raster & Terrain**

## Overview
Applies real-time GPU dynamic range stretch and contrast adjustment to multiband raster layers via WebGLTile style expressions.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - WebGLTile Contrast Stretch</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; }
    #map { width: 100vw; height: 100vh; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const tileLayer = new ol.layer.WebGLTile({
      source: new ol.source.XYZ({
        url: `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`,
        tileSize: 512, crossOrigin: 'anonymous'
      }),
      style: {
        // GPU contrast and brightness enhancement
        color: [
          'array',
          ['*', 1.2, ['band', 1]], // Red * 1.2
          ['*', 1.1, ['band', 2]], // Green * 1.1
          ['*', 1.0, ['band', 3]], // Blue
          1.0
        ]
      }
    });

    const map = new ol.Map({
      target: 'map',
      layers: [tileLayer],
      view: new ol.View({
        center: ol.proj.fromLonLat([13.405, 52.520]),
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
