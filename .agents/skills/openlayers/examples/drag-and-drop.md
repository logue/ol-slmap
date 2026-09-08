# Drag & Drop File Loader (GeoJSON, GPX, KML) 📂

> **Documentation Link:** [Drag-and-Drop](https://openlayers.org/en/latest/examples/drag-and-drop.html)  
> **Source Module:** `ol/interaction/DragAndDrop.js`, `ol/format/GeoJSON.js`, `ol/format/GPX.js`, `ol/format/KML.js`, `ol/layer/Vector.js`, `ol/source/Vector.js`

This guide explains how to allow users to drag spatial data files (`.geojson`, `.gpx`, `.kml`) directly from their desktop into the browser, parse geometries on the client, and automatically frame the map viewport around the dropped data.

---

## 1. Problem & Use Case

Field engineers, GIS analysts, and hikers frequently have local GPS tracks (`.gpx`) or polygon boundaries (`.kml`, `.geojson`) that they need to visualize instantly on top of MapTiler basemaps without uploading files to a remote backend server.

---

## 2. HTML Container & Drop Target

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers Drag and Drop Spatial Data</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <div id="drop-instruction">
    <h3>Drop Spatial File Here</h3>
    <p>Supports <strong>.geojson</strong>, <strong>.gpx</strong>, and <strong>.kml</strong> files directly from your desktop.</p>
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

#drop-instruction {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  padding: 14px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border: 2px dashed #0084FF;
  z-index: 1000;
  max-width: 280px;
}

#drop-instruction h3 {
  margin: 0 0 6px 0;
  font-size: 14px;
  color: #0084FF;
}

#drop-instruction p {
  margin: 0;
  font-size: 12px;
  color: #475569;
  line-height: 16px;
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
import DragAndDrop from "ol/interaction/DragAndDrop.js";
import GeoJSON from "ol/format/GeoJSON.js";
import GPX from "ol/format/GPX.js";
import KML from "ol/format/KML.js";
import Style from "ol/style/Style.js";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import CircleStyle from "ol/style/Circle.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. Vector source & layer for holding dropped data
const vectorSource = new VectorSource();
const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: new Style({
    fill: new Fill({ color: "rgba(0, 132, 255, 0.25)" }),
    stroke: new Stroke({ color: "#0084FF", width: 3 }),
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "#0084FF" }),
      stroke: new Stroke({ color: "#ffffff", width: 2 })
    })
  })
});

// 2. Map initialized with MapTiler Outdoor v4
const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512,
        maxZoom: 20,
        attributions: '<a href="https://www.maptiler.com/copyright/">&copy; MapTiler</a>'
      })
    }),
    vectorLayer
  ],
  view: new View({
    center: fromLonLat([8.2275, 46.8182]), // Swiss Alps
    zoom: 8
  })
});

// 3. Configure DragAndDrop interaction supporting GeoJSON, GPX, and KML formats
const dragAndDropInteraction = new DragAndDrop({
  formatConstructors: [GeoJSON, GPX, KML]
});

// 4. Handle "addfeatures" event when files are dropped onto the viewport
dragAndDropInteraction.on("addfeatures", (event) => {
  vectorSource.clear(); // Clear previous layer data
  vectorSource.addFeatures(event.features);

  // Smoothly animate camera to enclose newly dropped geometry extent
  map.getView().fit(vectorSource.getExtent(), {
    padding: [60, 60, 60, 60],
    duration: 800,
    maxZoom: 16
  });

  const instruction = document.getElementById("drop-instruction");
  instruction.innerHTML = `
    <h3 style="color: #10b981;">File Loaded!</h3>
    <p>Loaded <strong>${event.features.length}</strong> features (${event.file.name}).</p>
  `;
});

map.addInteraction(dragAndDropInteraction);
```

---

## 5. Key Architecture & Implementation Details

| Component | Responsibility |
| :--- | :--- |
| **`formatConstructors: [GeoJSON, GPX, KML]`** | OpenLayers tests each parser sequentially against the dropped file until a valid spatial format is parsed. |
| **Client-Side Processing** | Zero data sent to backend servers; all spatial parsing occurs in browser memory. |
| **`event.features`** | Extracted feature objects are already reprojected into the view projection (`EPSG:3857`). |
| **`map.getView().fit(extent, { padding, duration })`** | Instantly zooms and pans to frame the bounding box of the parsed dataset with smooth camera easing. |
