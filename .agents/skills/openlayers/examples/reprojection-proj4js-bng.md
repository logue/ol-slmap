# British National Grid (EPSG:27700) with Proj4js

> **Documentation Reference:** [British National Grid (EPSG:27700) with Proj4js](https://openlayers.org/en/latest/examples/reprojection-by-code.html)
> Category: **Projections & Coordinate Systems**

## Overview
Reprojects MapTiler basemaps client-side into the British National Grid (OSGB 1936 / EPSG:27700) with local British coordinate extents.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - British National Grid Reprojection</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.9.2/proj4.js"></script>
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    #map { width: 100vw; height: 100vh; }
    .hud {
      position: absolute; top: 16px; left: 16px; z-index: 1000;
      background: rgba(15, 23, 42, 0.9); color: #f8fafc;
      padding: 12px 18px; border-radius: 8px; font-size: 13px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="hud">
    <strong>British National Grid (EPSG:27700)</strong><br>
    Reprojected raster tiles over UK extent
  </div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    proj4.defs("EPSG:27700", "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs");
    ol.proj.proj4.register(proj4);

    const bngProj = ol.proj.get('EPSG:27700');
    bngProj.setExtent([0, 0, 700000, 1300000]);

    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512,
            crossOrigin: 'anonymous'
          })
        })
      ],
      view: new ol.View({
        projection: bngProj,
        center: [330000, 450000], // Central Great Britain
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
