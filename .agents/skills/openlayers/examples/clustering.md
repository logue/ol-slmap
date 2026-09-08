# High-Performance Marker Clustering 📍

> **Documentation Link:** [Clustered Features](https://openlayers.org/en/latest/examples/cluster.html)  
> **Source Module:** `ol/source/Cluster.js`, `ol/source/Vector.js`, `ol/layer/Vector.js`, `ol/style/Style.js`, `ol/style/Circle.js`, `ol/style/Text.js`

This guide explains how to bundle thousands of point features into interactive clusters with dynamic radius sizing, feature counts, and smooth click-to-expand camera animations.

---

## 1. Problem & Use Case

Rendering thousands of individual DOM elements or point markers simultaneously degrades browser performance and clutters the interface. `ol/source/Cluster` aggregates nearby points within a configurable pixel distance into single grouped icons that expand as users zoom in.

---

## 2. HTML Container & Controls

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers Marker Clustering</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <div id="controls">
    <label for="distance">Cluster Distance: <span id="dist-val">40</span>px</label>
    <input id="distance" type="range" min="0" max="100" step="5" value="40" />
  </div>
  <script type="module" src="main.js"></script>
</body>
</html>
```

---

## 3. CSS Styling

```css
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

#map {
  width: 100%;
  height: 100%;
}

#controls {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  font-size: 13px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
```

---

## 4. Complete JavaScript Implementation

```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import VectorLayer from "ol/layer/Vector.js";
import XYZ from "ol/source/XYZ.js";
import VectorSource from "ol/source/Vector.js";
import Cluster from "ol/source/Cluster.js";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import Style from "ol/style/Style.js";
import CircleStyle from "ol/style/Circle.js";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import Text from "ol/style/Text.js";
import { fromLonLat } from "ol/proj.js";
import { boundingExtent } from "ol/extent.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. Generate 2,000 synthetic point features around central Europe
const count = 2000;
const features = new Array(count);
const centerLng = 14.4378;
const centerLat = 50.0755;

for (let i = 0; i < count; ++i) {
  const lng = centerLng + (Math.random() - 0.5) * 8.0;
  const lat = centerLat + (Math.random() - 0.5) * 4.0;
  const coordinates = fromLonLat([lng, lat]);
  features[i] = new Feature(new Point(coordinates));
}

// 2. Underlying vector source containing individual raw features
const rawSource = new VectorSource({
  features: features
});

// 3. Cluster source wrapping the raw points
const clusterSource = new Cluster({
  distance: 40,      // Distance in pixels within which features are clustered
  minDistance: 20,   // Minimum distance between clusters
  source: rawSource
});

// 4. Style cache to reuse style objects and minimize GC overhead
const styleCache = {};

function clusterStyleFunction(feature) {
  const size = feature.get("features").length;
  let style = styleCache[size];

  if (!style) {
    if (size === 1) {
      // Single unclustered marker
      style = new Style({
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({ color: "#0084FF" }),
          stroke: new Stroke({ color: "#ffffff", width: 2 })
        })
      });
    } else {
      // Multi-feature cluster: scale radius by cluster size
      const radius = Math.min(12 + Math.log(size) * 4, 26);
      const color = size > 100 ? "#e11d48" : size > 20 ? "#f97316" : "#0084FF";

      style = new Style({
        image: new CircleStyle({
          radius: radius,
          fill: new Fill({ color: color }),
          stroke: new Stroke({ color: "rgba(255, 255, 255, 0.8)", width: 3 })
        }),
        text: new Text({
          text: size.toString(),
          fill: new Fill({ color: "#ffffff" }),
          font: "bold 12px sans-serif"
        })
      });
    }
    styleCache[size] = style;
  }
  return style;
}

const clusterLayer = new VectorLayer({
  source: clusterSource,
  style: clusterStyleFunction
});

// 5. Initialize map with MapTiler Streets v4 raster XYZ
const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20,
        attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
      })
    }),
    clusterLayer
  ],
  view: new View({
    center: fromLonLat([centerLng, centerLat]),
    zoom: 6
  })
});

// 6. Click to zoom in smoothly on clicked cluster extent
map.on("click", (evt) => {
  clusterLayer.getFeatures(evt.pixel).then((clickedFeatures) => {
    if (clickedFeatures.length > 0) {
      const cluster = clickedFeatures[0];
      const leaves = cluster.get("features");
      if (leaves.length > 1) {
        const extent = boundingExtent(leaves.map((f) => f.getGeometry().getCoordinates()));
        map.getView().fit(extent, {
          duration: 500,
          padding: [50, 50, 50, 50],
          maxZoom: 17
        });
      }
    }
  });
});

// 7. Interactive distance slider
const distanceInput = document.getElementById("distance");
const distVal = document.getElementById("dist-val");
distanceInput.addEventListener("input", () => {
  const val = parseInt(distanceInput.value, 10);
  distVal.textContent = val;
  clusterSource.setDistance(val);
});
```

---

## 5. Key Architecture & Implementation Details

| Option / Pattern | Description |
| :--- | :--- |
| **`feature.get("features")`** | In `ol/source/Cluster`, the cluster feature's `features` property holds the array of underlying points. |
| **`styleCache`** | Caching `Style` instances indexed by cluster size avoids creating thousands of short-lived objects per animation frame. |
| **`map.getView().fit(extent, { duration, padding })`** | Calculates the geographical bounding box of clustered children and smoothly animates the camera to frame all points. |
| **`clusterSource.setDistance(val)`** | Dynamically modifies the spatial clustering radius at runtime without reloading data. |
