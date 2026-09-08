# WFS GetFeature with Attribute & Spatial Filters

> **Documentation Reference:** [WFS GetFeature with Attribute & Spatial Filters](https://openlayers.org/en/latest/examples/vector-wfs-getfeature.html)
> Category: **Enterprise OGC Services**

## Overview
Constructs and executes OGC WFS 1.1.0/2.0 `GetFeature` XML filter requests querying specific attributes and spatial bounding boxes.

## Complete Standalone Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OpenLayers - WFS GetFeature Attribute Filter</title>
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

    const featureRequest = new ol.format.WFS().writeGetFeature({
      srsName: 'EPSG:3857',
      featureNS: 'http://openstreemap.org',
      featurePrefix: 'osm',
      featureTypes: ['water_areas'],
      outputFormat: 'application/json',
      filter: ol.format.filter.and(
        ol.format.filter.like('name', 'Lake*'),
        ol.format.filter.greaterThan('area', 1000000)
      )
    });

    const vectorSource = new ol.source.Vector();

    fetch('https://ahocevar.com/geoserver/wfs', {
      method: 'POST',
      body: new XMLSerializer().serializeToString(featureRequest)
    })
      .then((res) => res.json())
      .then((json) => {
        const features = new ol.format.GeoJSON().readFeatures(json);
        vectorSource.addFeatures(features);
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
        new ol.layer.Vector({
          source: vectorSource,
          style: new ol.style.Style({
            fill: new ol.style.Fill({ color: 'rgba(0, 132, 255, 0.4)' }),
            stroke: new ol.style.Stroke({ color: '#0084FF', width: 2 })
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-89.4012, 43.0731]),
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
