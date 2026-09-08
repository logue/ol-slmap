# High-Density Vector Heatmaps 🔥

> **Documentation Link:** [Earthquakes Heatmap](https://openlayers.org/en/latest/examples/heatmap-earthquakes.html)  
> **Source Module:** `ol/layer/Heatmap.js`, `ol/source/Vector.js`, `ol/format/KML.js`, `ol/format/GeoJSON.js`

This guide explains how to render density gradients across dense point datasets using OpenLayers `Heatmap` layer with configurable blur, radius, and magnitude weighting.

---

## 1. Problem & Use Case

Visualizing tens of thousands of incident reports, earthquakes, GPS telemetry pings, or crime occurrences as individual pins causes severe visual occlusion and hides spatial density peaks. Heatmaps transform raw point counts and numeric weights into smooth continuous density gradients.

---

## 2. HTML Container & Tuning Controls

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers Density Heatmap</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <div id="controls">
    <label for="radius">Radius: <span id="radius-val">10</span>px</label>
    <input id="radius" type="range" min="1" max="50" step="1" value="10" />

    <label for="blur">Blur: <span id="blur-val">15</span>px</label>
    <input id="blur" type="range" min="1" max="50" step="1" value="15" />
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
  padding: 14px 18px;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
}
```

---

## 4. Complete JavaScript Implementation

```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import Heatmap from "ol/layer/Heatmap.js";
import XYZ from "ol/source/XYZ.js";
import VectorSource from "ol/source/Vector.js";
import GeoJSON from "ol/format/GeoJSON.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. Vector source loading earthquake GeoJSON dataset
const vectorSource = new VectorSource({
  url: "https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson",
  format: new GeoJSON({
    dataProjection: "EPSG:4326",
    featureProjection: "EPSG:3857"
  })
});

// 2. Heatmap layer configured with dynamic weight, blur, and radius
const heatmapLayer = new Heatmap({
  source: vectorSource,
  blur: 15,
  radius: 10,
  weight: (feature) => {
    // Normalize population attribute between 0.0 and 1.0
    const population = feature.get("population") || 100000;
    return Math.min(Math.max(population / 5000000, 0.1), 1.0);
  },
  gradient: ["#00f", "#0ff", "#0f0", "#ff0", "#f00"]
});

// 3. Dark basemap providing high contrast for heat colors (MapTiler Dataviz Dark)
const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/dataviz-v4-dark/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20,
        attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
      })
    }),
    heatmapLayer
  ],
  view: new View({
    center: fromLonLat([0, 20]),
    zoom: 2
  })
});

// 4. Interactive radius and blur controls
const radiusInput = document.getElementById("radius");
const blurInput = document.getElementById("blur");
const radiusVal = document.getElementById("radius-val");
const blurVal = document.getElementById("blur-val");

radiusInput.addEventListener("input", () => {
  const val = parseInt(radiusInput.value, 10);
  radiusVal.textContent = val;
  heatmapLayer.setRadius(val);
});

blurInput.addEventListener("input", () => {
  const val = parseInt(blurInput.value, 10);
  blurVal.textContent = val;
  heatmapLayer.setBlur(val);
});
```

---

## 5. Key Architecture & Implementation Details

| Heatmap Option | Description |
| :--- | :--- |
| **`weight: (feature) => Number`** | Value between `0.0` and `1.0` determining the feature's contribution to density peaks. |
| **`radius`** | Radius size of each point kernel in pixels. Larger radius creates broader merged clusters. |
| **`blur`** | Amount of blur applied to kernel edges in pixels. Higher values yield smoother color transitions. |
| **`gradient`** | Custom 5-step CSS color stop array defining the density color ramp from minimum to maximum intensity. |
