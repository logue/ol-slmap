# Geodesic Measurement Tool (Distance & Area) 📏

> **Documentation Link:** [Measure](https://openlayers.org/en/latest/examples/measure.html)  
> **Source Module:** `ol/sphere.js`, `ol/interaction/Draw.js`, `ol/Overlay.js`, `ol/geom/Polygon.js`, `ol/geom/LineString.js`

This guide explains how to build a production measurement tool in OpenLayers calculating spherical geodesic lengths and polygon areas using `ol/sphere` with live tooltip tracking.

---

## 1. Problem & Use Case

Projecting curved Earth coordinates onto a flat 2D Mercator plane (`EPSG:3857`) distorts distances and surface areas, especially far from the equator. To provide accurate survey measurements, OpenLayers uses Great Circle calculations via `ol/sphere.getLength()` and `ol/sphere.getArea()`.

---

## 2. HTML Container & Selector

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OpenLayers Geodesic Measurement</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="map"></div>
  <div id="measure-menu">
    <label for="type">Measurement Mode:</label>
    <select id="type">
      <option value="LineString" selected>Distance (LineString)</option>
      <option value="Polygon">Area (Polygon)</option>
    </select>
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

#measure-menu {
  position: absolute;
  top: 16px;
  left: 56px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}

#measure-menu select {
  padding: 4px 8px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}

/* Tooltip overlay styling */
.ol-tooltip {
  position: relative;
  background: rgba(15, 23, 42, 0.85);
  border-radius: 4px;
  color: #ffffff;
  padding: 4px 8px;
  font-size: 11px;
  white-space: nowrap;
  pointer-events: none;
}

.ol-tooltip-measure {
  opacity: 1;
  font-weight: bold;
}

.ol-tooltip-static {
  background-color: #0084FF;
  color: #ffffff;
  border: 1px solid #ffffff;
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
import Overlay from "ol/Overlay.js";
import { getArea, getLength } from "ol/sphere.js";
import { LineString, Polygon } from "ol/geom.js";
import Style from "ol/style/Style.js";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import CircleStyle from "ol/style/Circle.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

const MAPTILER_KEY = "YOUR_API_KEY";

const source = new VectorSource();
const vector = new VectorLayer({
  source: source,
  style: new Style({
    fill: new Fill({ color: "rgba(0, 132, 255, 0.15)" }),
    stroke: new Stroke({ color: "#0084FF", width: 2, lineDash: [6, 6] }),
    image: new CircleStyle({
      radius: 5,
      stroke: new Stroke({ color: "#0084FF", width: 2 }),
      fill: new Fill({ color: "#ffffff" })
    })
  })
});

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
    vector
  ],
  view: new View({
    center: fromLonLat([11.5820, 48.1351]), // Munich, Germany
    zoom: 13
  })
});

// Format distance output
function formatLength(line) {
  const length = getLength(line);
  let output;
  if (length > 100) {
    output = Math.round((length / 1000) * 100) / 100 + " km";
  } else {
    output = Math.round(length * 100) / 100 + " m";
  }
  return output;
}

// Format area output
function formatArea(polygon) {
  const area = getArea(polygon);
  let output;
  if (area > 10000) {
    output = Math.round((area / 1000000) * 100) / 100 + " km²";
  } else {
    output = Math.round(area * 100) / 100 + " m²";
  }
  return output;
}

let draw;
let measureTooltipElement;
let measureTooltip;

function createMeasureTooltip() {
  if (measureTooltipElement) {
    measureTooltipElement.parentNode.removeChild(measureTooltipElement);
  }
  measureTooltipElement = document.createElement("div");
  measureTooltipElement.className = "ol-tooltip ol-tooltip-measure";
  measureTooltip = new Overlay({
    element: measureTooltipElement,
    offset: [0, -15],
    positioning: "bottom-center",
    stopEvent: false,
    insertFirst: false
  });
  map.addOverlay(measureTooltip);
}

const typeSelect = document.getElementById("type");

function addInteraction() {
  const type = typeSelect.value;
  draw = new Draw({
    source: source,
    type: type,
    style: new Style({
      fill: new Fill({ color: "rgba(0, 132, 255, 0.2)" }),
      stroke: new Stroke({ color: "#0084FF", width: 2.5 }),
      image: new CircleStyle({
        radius: 5,
        stroke: new Stroke({ color: "#0084FF" }),
        fill: new Fill({ color: "#ffffff" })
      })
    })
  });
  map.addInteraction(draw);

  createMeasureTooltip();

  let listener;
  draw.on("drawstart", (evt) => {
    const sketch = evt.feature;
    let tooltipCoord = evt.coordinate;

    listener = sketch.getGeometry().on("change", (e) => {
      const geom = e.target;
      let output;
      if (geom instanceof Polygon) {
        output = formatArea(geom);
        tooltipCoord = geom.getInteriorPoint().getCoordinates();
      } else if (geom instanceof LineString) {
        output = formatLength(geom);
        tooltipCoord = geom.getLastCoordinate();
      }
      measureTooltipElement.innerHTML = output;
      measureTooltip.setPosition(tooltipCoord);
    });
  });

  draw.on("drawend", () => {
    measureTooltipElement.className = "ol-tooltip ol-tooltip-static";
    measureTooltip.setOffset([0, -7]);
    // Reset tooltip pointer
    measureTooltipElement = null;
    createMeasureTooltip();
  });
}

typeSelect.onchange = () => {
  map.removeInteraction(draw);
  addInteraction();
};

addInteraction();
```

---

## 5. Key Architecture & Implementation Details

| Concept | Purpose |
| :--- | :--- |
| **`ol/sphere.getLength(geom)`** | Computes the geodesic distance over the WGS84 ellipsoid instead of Euclidean planar distance. |
| **`ol/sphere.getArea(geom)`** | Computes the true spherical surface area of the polygon geometry. |
| **Dynamic Tooltip Overlay** | Updates tooltip DOM inner HTML on each geometry vertex addition / drag event. |
| **`insertFirst: false`** | Ensures measure tooltips render above other overlays and vector elements. |
