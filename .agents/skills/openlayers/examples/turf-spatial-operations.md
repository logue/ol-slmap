# Turf.js Integration (Buffer, Convex Hull & Bounding Box)

> **Documentation Reference:** [Turf.js Integration (Buffer, Convex Hull & Bounding Box)](https://openlayers.org/en/latest/examples/turf.html)
> Category: **Interactions & Digitization**

## Overview
Performs client-side geometric analysis with Turf.js (calculating spatial buffers and convex hulls) directly rendered on OpenLayers vector layers.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Turf.js Spatial Analysis</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <script src="https://cdn.jsdelivr.net/npm/@turf/turf@6.5.0/turf.min.js"></script>
  <style>
    body { margin: 0; padding: 0; }
    #map { width: 100vw; height: 100vh; }
    .hud {
      position: absolute; top: 16px; left: 16px; z-index: 1000;
      background: rgba(15, 23, 42, 0.9); color: white; padding: 12px 16px;
      border-radius: 8px; font-family: sans-serif; font-size: 13px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="hud">
    <strong>Turf.js + OpenLayers</strong><br>
    Cyan: Points | Blue: Convex Hull | Yellow: 5km Buffer
  </div>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const points = [
      [8.5417, 47.3769], // Zurich
      [8.5300, 47.3600],
      [8.5600, 47.3800],
      [8.5200, 47.3900]
    ];

    const turfPoints = turf.featureCollection(points.map(p => turf.point(p)));
    const hull = turf.convex(turfPoints);
    const buffer = turf.buffer(hull, 5, { units: 'kilometers' });

    const format = new ol.format.GeoJSON();
    const source = new ol.source.Vector({
      features: [
        ...format.readFeatures(turfPoints, { featureProjection: 'EPSG:3857' }),
        format.readFeature(hull, { featureProjection: 'EPSG:3857' }),
        format.readFeature(buffer, { featureProjection: 'EPSG:3857' })
      ]
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
        new ol.layer.Vector({
          source: source,
          style: (feature) => {
            const type = feature.getGeometry().getType();
            if (type === 'Point') {
              return new ol.style.Style({
                image: new ol.style.Circle({
                  radius: 6,
                  fill: new ol.style.Fill({ color: '#00D2FF' }),
                  stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 })
                })
              });
            }
            if (type === 'Polygon') {
              return new ol.style.Style({
                stroke: new ol.style.Stroke({ color: '#0084FF', width: 2 }),
                fill: new ol.style.Fill({ color: 'rgba(0, 132, 255, 0.2)' })
              });
            }
          }
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([8.5417, 47.3769]),
        zoom: 11
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
