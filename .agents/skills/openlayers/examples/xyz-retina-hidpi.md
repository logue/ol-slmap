# HiDPI / Retina 512px Raster Tiles

> **Documentation Reference:** [HiDPI / Retina 512px Raster Tiles](https://openlayers.org/en/latest/examples/xyz-retina.html)
> Category: **Raster & Basemaps**

## Overview
Configures crisp 512x512 pixel `@2x` Retina raster tiles in OpenLayers using `tilePixelRatio: 2` and MapTiler Planet v4 raster tiles.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Retina HiDPI 512px Tiles</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; font-family: sans-serif; }
    #map { width: 100vw; height: 100vh; }
    .badge {
      position: absolute; top: 16px; left: 16px; z-index: 1000;
      background: rgba(15, 23, 42, 0.85); color: #38bdf8;
      padding: 8px 14px; border-radius: 6px; font-weight: 600; font-size: 13px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="badge">Retina @2x 512px Tiles Active</div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            // 512px default raster tiles with Retina @2x resolution (no /512/ path prefix!)
            url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=${MAPTILER_KEY}`,
            tilePixelRatio: 2,
            tileSize: 512,
            maxZoom: 19,
            crossOrigin: 'anonymous'
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([8.5417, 47.3769]), // Zurich
        zoom: 14
      })
    });
  </script>
</body>
</html>
```

## Key API Features & Tile URL Invariants
- **512px Standard Resolution (Default):** MapTiler Cloud serves 512px tiles by default. Never use `/512/` in the URL path.
  - Standard 512px: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=KEY`
  - High-DPI Retina 512px: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=KEY`
- **Legacy 256px Tiles:** Only legacy 256px tiles include a size prefix: `https://api.maptiler.com/maps/streets-v4/256/{z}/{x}/{y}.png?key=KEY` (or `@2x.png`).
- **OpenLayers Configuration:** Set `tileSize: 512` and `tilePixelRatio: 2` for crisp Retina display.
- Fully self-contained HTML/CSS/JS ready for deployment.
