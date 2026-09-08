# Advanced Reprojection & Custom Grids in OpenLayers 🌐📐

---

## 1. On-The-Fly Raster Reprojection

OpenLayers automatically reprojects any raster XYZ tile layer on the fly to match your custom view projection (e.g. Polar Stereographic `EPSG:3413` or British National Grid `EPSG:27700`):

```javascript
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import proj4 from "proj4";
import { register } from "ol/proj/proj4.js";

// 1. Define British National Grid (EPSG:27700)
proj4.defs(
  "EPSG:27700",
  "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"
);
register(proj4);

// 2. Map initialized in EPSG:27700 automatically reprojects MapTiler XYZ raster tiles!
const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=YOUR_API_KEY",
        tilePixelRatio: 2,
        tileSize: 512,
        maxZoom: 22
      })
    })
  ],
  view: new View({
    projection: "EPSG:27700",
    center: [529000, 180000], // London in British National Grid meters
    zoom: 12
  })
});
```

---

## 2. Custom TileGrid Configurations

When consuming specialized regional tile services with custom resolutions or origin coordinates:

```javascript
import TileGrid from "ol/tilegrid/TileGrid.js";

const customGrid = new TileGrid({
  origin: [-20037508.34, 20037508.34],
  resolutions: [156543.033928, 78271.516964, 39135.758482, 19567.879241],
  tileSize: 512
});
```
