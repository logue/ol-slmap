# GeoZarr Multidimensional Earth Observation

> **Documentation Reference:** [GeoZarr Multidimensional Earth Observation](https://openlayers.org/en/latest/examples/geozarr.html)
> Category: **Raster & Terrain**

## Overview
Streams cutting-edge cloud-native GeoZarr climate and earth observation multidimensional arrays directly in OpenLayers.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - GeoZarr Earth Observation</title>
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
            url: `https://api.maptiler.com/maps/dataviz-v4-dark/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512, crossOrigin: 'anonymous'
          })
        }),
        new ol.layer.WebGLTile({
          source: new ol.source.GeoZarr({
            url: 'https://storage.googleapis.com/carbonplan-share/cmip6-downscaling/target-grid.zarr'
          })
        })
      ],
      view: new ol.View({
        center: [0, 0],
        zoom: 2
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
