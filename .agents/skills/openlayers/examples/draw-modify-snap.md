# Draw, Modify & Snap Vector Geometries ✍️

> **Documentation Link:** [Draw and Modify Features](https://openlayers.org/en/latest/examples/draw-and-modify-features.html) & [Snap Interaction](https://openlayers.org/en/latest/examples/snap.html)  
> **Source Module:** `ol/interaction/Draw.js`, `ol/interaction/Modify.js`, `ol/interaction/Snap.js`, `ol/source/Vector.js`, `ol/layer/Vector.js`

This guide shows how to assemble a complete GIS editing suite in OpenLayers allowing users to digitize points, lines, and polygons, edit existing vertices, and magnetically snap to shared boundaries.

---

## 1. Problem & Use Case

Web GIS and surveying applications require accurate digitization where users draw new features, edit existing coordinates, and snap vertices to adjacent lines or polygon boundaries to maintain topological validity without gaps or self-intersections.

---

## 2. HTML Container & Toolbar

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers Draw, Modify & Snap</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <div id="toolbar">
    <label for="type">Geometry Type:</label>
    <select id="type">
      <option value="Point">Point</option>
      <option value="LineString">LineString</option>
      <option value="Polygon" selected>Polygon</option>
      <option value="Circle">Circle</option>
      <option value="None">None (Navigate)</option>
    </select>
    <button id="export-btn">Export GeoJSON</button>
    <button id="clear-btn">Clear All</button>
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

#toolbar {
  position: absolute;
  top: 16px;
  left: 56px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #1e293b;
}

#toolbar select, #toolbar button {
  padding: 6px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  background: #ffffff;
  color: #0f172a;
  font-size: 13px;
  cursor: pointer;
}

#toolbar button:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
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
import Draw from "ol/interaction/Draw.js";
import Modify from "ol/interaction/Modify.js";
import Snap from "ol/interaction/Snap.js";
import GeoJSON from "ol/format/GeoJSON.js";
import Style from "ol/style/Style.js";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import CircleStyle from "ol/style/Circle.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

// 1. Vector source to store drawn features
const source = new VectorSource();

const vector = new VectorLayer({
  source: source,
  style: new Style({
    fill: new Fill({
      color: "rgba(0, 132, 255, 0.2)"
    }),
    stroke: new Stroke({
      color: "#0084FF",
      width: 2.5
    }),
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "#0084FF" }),
      stroke: new Stroke({ color: "#ffffff", width: 2 })
    })
  })
});

// 2. Base map initialization with MapTiler Outdoor v4
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
    vector
  ],
  view: new View({
    center: fromLonLat([8.5417, 47.3769]), // Zurich, Switzerland
    zoom: 14
  })
});

// 3. Persistent Modify interaction (allows editing existing vertices)
const modify = new Modify({ source: source });
map.addInteraction(modify);

// 4. Snap interaction (ensures exact vertex snapping)
let snap = new Snap({ source: source, pixelTolerance: 12 });
map.addInteraction(snap);

// 5. Dynamic Draw interaction management
let draw = null;
const typeSelect = document.getElementById("type");

function addDrawInteraction() {
  const value = typeSelect.value;
  if (draw) {
    map.removeInteraction(draw);
  }
  // Snap must be re-added after Draw so pointer events prioritize vertex snapping
  map.removeInteraction(snap);

  if (value !== "None") {
    draw = new Draw({
      source: source,
      type: value
    });
    map.addInteraction(draw);
    map.addInteraction(snap);
  }
}

typeSelect.addEventListener("change", addDrawInteraction);
addDrawInteraction(); // Initial setup

// 6. GeoJSON export button
document.getElementById("export-btn").addEventListener("click", () => {
  const writer = new GeoJSON();
  const features = source.getFeatures();
  const geojsonStr = writer.writeFeatures(features, {
    featureProjection: "EPSG:3857",
    dataProjection: "EPSG:4326"
  });
  console.log("Exported GeoJSON:", geojsonStr);
  alert(`Exported ${features.length} features. Check browser console!`);
});

// 7. Clear all features
document.getElementById("clear-btn").addEventListener("click", () => {
  source.clear();
});
```

---

## 5. Key Architecture & Implementation Details

| Interaction | Role & Invariants |
| :--- | :--- |
| **`ol/interaction/Modify`** | Allows dragging existing vertices, clicking midway ghost points to create new vertices, and `Alt + Click` to delete vertices. |
| **`ol/interaction/Snap`** | Magnetically attracts the pointer to existing vertices and line segments within `pixelTolerance: 12`. |
| **Interaction Ordering** | **Crucial:** `Snap` must always be added **after** `Draw` and `Modify` in `map.addInteraction()`, otherwise snapping takes lower precedence during pointer event routing. |
| **`writer.writeFeatures()`** | Converts EPSG:3857 map geometries back into standard WGS84 `EPSG:4326` coordinates for storage or API payloads. |
