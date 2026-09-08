# Pixelwise Operations with RasterSource (Elevation & Slope)

> **Documentation Reference:** [Pixelwise Operations with RasterSource (Elevation & Slope)](https://openlayers.org/en/latest/examples/raster.html)
> Category: **Raster & Terrain**

## Overview
Executes dynamic client-side pixel manipulation with `ol/source/Raster` to analyze elevation and calculate slope thresholds in real-time.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Pixelwise Operations with RasterSource</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; }
    #map { width: 100vw; height: 100vh; }
    .control-panel {
      position: absolute; top: 16px; left: 16px; z-index: 1000;
      background: rgba(15, 23, 42, 0.9); color: white;
      padding: 14px; border-radius: 8px; font-family: sans-serif; font-size: 13px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="control-panel">
    <strong>Elevation Mask Threshold</strong><br>
    <input id="elev" type="range" min="500" max="3000" value="1500" step="50">
    <span id="elev-val">1500 m</span>
  </div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const demSource = new ol.source.XYZ({
      url: `https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${MAPTILER_KEY}`,
      tileSize: 512,
      crossOrigin: 'anonymous'
    });

    const raster = new ol.source.Raster({
      sources: [demSource],
      operation: (pixels, data) => {
        const pixel = pixels[0];
        if (!pixel) return [0, 0, 0, 0];
        // Decode MapTiler Terrain-RGB elevation
        const height = -10000 + ((pixel[0] * 256 * 256 + pixel[1] * 256 + pixel[2]) * 0.1);
        if (height > data.threshold) {
          return [255, 50, 50, 180]; // Highlight high elevation
        }
        return [0, 0, 0, 0];
      }
    });

    raster.on('beforeoperations', (event) => {
      event.data.threshold = Number(document.getElementById('elev').value);
    });

    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512, crossOrigin: 'anonymous'
          })
        }),
        new ol.layer.Image({ source: raster })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([7.9838, 46.5475]), // Swiss Alps (Eiger/Jungfrau)
        zoom: 11
      })
    });

    document.getElementById('elev').addEventListener('input', (e) => {
      document.getElementById('elev-val').textContent = `${e.target.value} m`;
      raster.changed();
    });
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
