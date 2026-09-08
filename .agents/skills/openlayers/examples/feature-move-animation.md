# Marker Animation along Line (Postrender Loop)

> **Documentation Reference:** [Marker Animation along Line (Postrender Loop)](https://openlayers.org/en/latest/examples/feature-move-animation.html)
> Category: **Interactions & Animation**

## Overview
Smooth 60 FPS marker translation along a multi-segment line string using the OpenLayers canvas `postrender` event loop.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - Marker Along Line Animation</title>
  <script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  <style>
    body { margin: 0; padding: 0; }
    #map { width: 100vw; height: 100vh; }
    #start-btn {
      position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%);
      background: #0084FF; color: white; border: none; padding: 12px 24px;
      font-size: 14px; font-weight: 600; border-radius: 8px; cursor: pointer;
      box-shadow: 0 4px 14px rgba(0,132,255,0.4); z-index: 1000;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <button id="start-btn">Start Flight Animation</button>
  <script>
    const MAPTILER_KEY = 'YOUR_MAPTILER_API_KEY';

    const routeCoords = [
      ol.proj.fromLonLat([2.3522, 48.8566]), // Paris
      ol.proj.fromLonLat([4.8357, 45.7640]), // Lyon
      ol.proj.fromLonLat([5.3698, 43.2965])  // Marseille
    ];
    const route = new ol.geom.LineString(routeCoords);
    const routeFeature = new ol.Feature({ geometry: route });

    const position = routeCoords[0].slice();
    const geoMarker = new ol.Feature({
      geometry: new ol.geom.Point(position)
    });

    const vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({ features: [routeFeature, geoMarker] }),
      style: (feature) => {
        if (feature === routeFeature) {
          return new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#0084FF', width: 4 })
          });
        }
        return new ol.style.Style({
          image: new ol.style.Circle({
            radius: 8,
            fill: new ol.style.Fill({ color: '#00D2FF' }),
            stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 })
          })
        });
      }
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
        vectorLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([3.5, 46.5]),
        zoom: 6
      })
    });

    let animating = false;
    let distance = 0;
    let speed = 2000; // units per frame

    function moveFeature(event) {
      const time = event.frameState.time;
      distance = (distance + speed) % route.getLength();
      const currentCoord = route.getCoordinateAt(distance / route.getLength());
      position[0] = currentCoord[0];
      position[1] = currentCoord[1];
      geoMarker.getGeometry().setCoordinates(position);
      map.render();
    }

    document.getElementById('start-btn').addEventListener('click', () => {
      if (!animating) {
        animating = true;
        vectorLayer.on('postrender', moveFeature);
        map.render();
      }
    });
  </script>
</body>
</html>
```

## Key API Features
- Native OpenLayers API implementation.
- Uses MapTiler modern basemap endpoints.
- Fully self-contained HTML/CSS/JS ready for deployment.
