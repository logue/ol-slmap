# COG with Automatic Projection Lookup

> **Documentation Reference:** [COG with Automatic Projection Lookup](https://openlayers.org/en/latest/examples/cog-projection.html)
> Category: **Raster & Terrain**

## Overview
Renders a Cloud-Optimized GeoTIFF raster over MapTiler basemaps with automatic projection detection from GeoTIFF tags.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - COG Automatic Projection</title>
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

    const cogSource = new ol.source.GeoTIFF({
      sources: [
        {
          url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/10/T/EG/2020/7/S2B_10TEG_20200723_0_L2A/TCI.tif'
        }
      ]
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
        new ol.layer.WebGLTile({
          source: cogSource
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-122.4194, 37.7749]),
        zoom: 9
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
