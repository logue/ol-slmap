# Graticule (Coordinate Grid Lines Overlay)

> **Documentation Reference:** [Graticule (Coordinate Grid Lines Overlay)](https://openlayers.org/en/latest/examples/graticule.html)
> Category: **Cartography & Overlays**

## Overview
Renders dynamic latitude/longitude graticule lines and border coordinates over MapTiler satellite or outdoor basemaps.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Graticule Coordinate Grid</title>
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

    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512, crossOrigin: 'anonymous'
          })
        }),
        new ol.layer.Graticule({
          strokeStyle: new ol.style.Stroke({
            color: 'rgba(100, 116, 139, 0.7)',
            width: 1,
            lineDash: [4, 4]
          }),
          showLabels: true,
          wrapX: false
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([0, 20]),
        zoom: 3
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
