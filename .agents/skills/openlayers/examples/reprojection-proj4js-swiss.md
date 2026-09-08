# Swiss LV95 (EPSG:2056) Reprojection with Proj4js

> **Documentation Reference:** [Swiss LV95 (EPSG:2056) Reprojection with Proj4js](https://openlayers.org/en/latest/examples/reprojection-by-code.html)
> Category: **Projections & Coordinate Systems**

## Overview
Demonstrates client-side coordinate reprojection from EPSG:3857/4326 to the Swiss National Grid (EPSG:2056 / LV95) using Proj4js and OpenLayers `register(proj4)`.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Swiss LV95 Reprojection with Proj4js</title>
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
    <strong>OpenLayers + Proj4js</strong><br>
    Projection: <code>EPSG:2056</code> (Swiss LV95)<br>
    Coordinates: <span id="coords">Move mouse...</span>
  </div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    // Register Swiss LV95 (EPSG:2056) definition
    proj4.defs("EPSG:2056", "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs");
    ol.proj.proj4.register(proj4);

    const swissProj = ol.proj.get('EPSG:2056');
    swissProj.setExtent([2485071.58, 1074261.38, 2837072.01, 1299941.79]);

    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512,
            crossOrigin: 'anonymous'
          })
        })
      ],
      view: new ol.View({
        projection: swissProj,
        center: [2600000, 1200000], // Bern, Switzerland in LV95
        zoom: 3
      })
    });

    map.on('pointermove', (evt) => {
      const [e, n] = evt.coordinate;
      document.getElementById('coords').textContent = `E: ${e.toFixed(1)}, N: ${n.toFixed(1)}`;
    });
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
