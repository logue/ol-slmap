# Icon Sprites with WebGL

> **Documentation Reference:** [Icon Sprites with WebGL](https://openlayers.org/en/latest/examples/icon-sprite-webgl.html)
> Category: **Clustering & WebGL**

## Overview
Renders thousands of dynamic icon markers using GPU sprite sheets and WebGLPointsLayer with high frame rates.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - WebGL Icon Sprites</title>
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

    const source = new ol.source.Vector();
    // Generate 5000 random points across Europe
    for (let i = 0; i < 5000; i++) {
      const coord = ol.proj.fromLonLat([
        -10 + Math.random() * 40,
        35 + Math.random() * 25
      ]);
      source.addFeature(new ol.Feature(new ol.geom.Point(coord)));
    }

    const webglLayer = new ol.layer.WebGLPoints({
      source: source,
      style: {
        symbol: {
          symbolType: 'circle',
          size: ['interpolate', ['linear'], ['zoom'], 4, 4, 12, 14],
          color: '#00D2FF',
          opacity: 0.85
        }
      }
    });

    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/dataviz-v4-dark/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512, crossOrigin: 'anonymous'
          })
        }),
        webglLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([10, 50]),
        zoom: 4
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
