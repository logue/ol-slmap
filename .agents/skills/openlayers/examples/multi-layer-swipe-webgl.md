# WebGL Tile Layer Swipe

> **Documentation Reference:** [WebGL Tile Layer Swipe](https://openlayers.org/en/latest/examples/webgl-layer-swipe.html)
> Category: **Raster & Terrain**

## Overview
Split-screen swipe comparison slider rendered directly on WebGL tile layers with zero CPU canvas clipping overhead.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - WebGL Tile Layer Swipe</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; }
    #map { width: 100vw; height: 100vh; }
    #swipe { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); width: 300px; z-index: 1000; }
  </style>
</head>
<body>
  <div id="map"></div>
  <input id="swipe" type="range" min="0" max="100" value="50">
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const baseLayer = new ol.layer.WebGLTile({
      source: new ol.source.XYZ({
        url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512, crossOrigin: 'anonymous'
      })
    });

    const swipeLayer = new ol.layer.WebGLTile({
      source: new ol.source.XYZ({
        url: `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`,
        tileSize: 512, crossOrigin: 'anonymous'
      })
    });

    const map = new ol.Map({
      target: 'map',
      layers: [baseLayer, swipeLayer],
      view: new ol.View({
        center: ol.proj.fromLonLat([12.4964, 41.9028]), // Rome
        zoom: 13
      })
    });

    const swipe = document.getElementById('swipe');
    swipeLayer.on('prerender', (event) => {
      const gl = event.context;
      gl.enable(gl.SCISSOR_TEST);
      const width = gl.canvas.width * (swipe.value / 100);
      gl.scissor(0, 0, width, gl.canvas.height);
    });

    swipeLayer.on('postrender', (event) => {
      const gl = event.context;
      gl.disable(gl.SCISSOR_TEST);
    });

    swipe.addEventListener('input', () => map.render());
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
