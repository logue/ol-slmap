# GeoJSON Choropleth & Dynamic Styling 🎨

> **Documentation Link:** [GeoJSON Layer](https://openlayers.org/en/latest/examples/geojson.html) & [Vector Layer](https://openlayers.org/en/latest/examples/vector-layer.html)  
> **Source Module:** `ol/layer/Vector.js`, `ol/source/Vector.js`, `ol/format/GeoJSON.js`, `ol/style/Style.js`, `ol/style/Fill.js`, `ol/style/Stroke.js`

This guide shows how to fetch external GeoJSON data, project it into `EPSG:3857`, calculate dynamic choropleth colors based on numeric feature attributes, and highlight polygons on hover.

---

## 1. Problem & Use Case

Thematic maps such as population densities, regional election results, or climate metrics require dynamic styling functions that compute polygon colors based on GeoJSON feature properties. OpenLayers provides a flexible style function pattern where each feature is evaluated against its attributes at render time.

---

## 2. HTML Container & Legend

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers GeoJSON Choropleth</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <div id="info-box">Hover over a region</div>
  <div id="legend">
    <h4>Density (people/km²)</h4>
    <div><span style="background: #BD0026"></span> > 500</div>
    <div><span style="background: #E31A1C"></span> 200 – 500</div>
    <div><span style="background: #FC4E2A"></span> 100 – 200</div>
    <div><span style="background: #FD8D3C"></span> 50 – 100</div>
    <div><span style="background: #FEB24C"></span> 20 – 50</div>
    <div><span style="background: #FFEDA0"></span> 0 – 20</div>
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

#info-box {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  z-index: 1000;
}

#legend {
  position: absolute;
  bottom: 24px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  color: #334155;
  z-index: 1000;
  line-height: 18px;
}

#legend h4 {
  margin: 0 0 8px 0;
  font-size: 13px;
  color: #0f172a;
}

#legend span {
  display: inline-block;
  width: 18px;
  height: 14px;
  margin-right: 8px;
  border-radius: 2px;
  vertical-align: middle;
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
import GeoJSON from "ol/format/GeoJSON.js";
import Style from "ol/style/Style.js";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. Determine fill color by metric value
function getColor(density) {
  return density > 500 ? "#BD0026" :
         density > 200 ? "#E31A1C" :
         density > 100 ? "#FC4E2A" :
         density > 50  ? "#FD8D3C" :
         density > 20  ? "#FEB24C" :
                         "#FFEDA0";
}

// 2. Dynamic style function for GeoJSON features
function choroplethStyleFunction(feature) {
  const density = feature.get("density") || 0;
  return new Style({
    fill: new Fill({
      color: getColor(density)
    }),
    stroke: new Stroke({
      color: "#ffffff",
      width: 1.5
    })
  });
}

// 3. Highlight style for hovered polygon
const highlightStyle = new Style({
  stroke: new Stroke({
    color: "#0084FF",
    width: 3
  }),
  fill: new Fill({
    color: "rgba(0, 132, 255, 0.35)"
  })
});

// 4. Create vector layer with GeoJSON source
const vectorSource = new VectorSource({
  url: "https://openlayers.org/en/latest/examples/data/geojson/countries.geojson",
  format: new GeoJSON({
    dataProjection: "EPSG:4326",
    featureProjection: "EPSG:3857"
  })
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: choroplethStyleFunction
});

// 5. Initialize OpenLayers map with MapTiler Dataviz v4 basemap
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
    vectorLayer
  ],
  view: new View({
    center: fromLonLat([10, 50]),
    zoom: 4
  })
});

// 6. Interactive hover listener to update highlight and info box
const infoBox = document.getElementById("info-box");
let currentHighlightedFeature = null;

map.on("pointermove", (evt) => {
  if (evt.dragging) return;

  const hit = map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
    if (layer === vectorLayer) return feature;
  });

  if (hit !== currentHighlightedFeature) {
    if (currentHighlightedFeature) {
      currentHighlightedFeature.setStyle(undefined); // Revert to layer style function
    }
    if (hit) {
      hit.setStyle(highlightStyle);
      const name = hit.get("name") || "Unknown region";
      const density = hit.get("density") || "N/A";
      infoBox.innerHTML = `<strong>${name}</strong>: ${density} people/km²`;
    } else {
      infoBox.innerHTML = "Hover over a region";
    }
    currentHighlightedFeature = hit;
  }
});
```

---

## 5. Key Architecture & Implementation Details

| Component | Responsibility |
| :--- | :--- |
| **`GeoJSON({ dataProjection, featureProjection })`** | Automatically transforms coordinates from WGS84 (`EPSG:4326`) into the map view projection (`EPSG:3857`). |
| **`feature.setStyle(highlightStyle)`** | Overrides the layer-level style function for an individual feature during pointer interaction. |
| **`feature.setStyle(undefined)`** | Restores the default style computed by the layer's `style` callback function. |
| **`map.forEachFeatureAtPixel(pixel, callback)`** | Pixel hit detection across rendered canvas geometries, respecting layer filters. |
