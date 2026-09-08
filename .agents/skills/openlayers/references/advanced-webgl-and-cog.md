# Advanced WebGL Rendering, COG & Multi-Band Analytics in OpenLayers

OpenLayers features a state-of-the-art WebGL rendering engine (`ol/layer/WebGLTile`, `ol/layer/WebGLPoints`, `ol/source/GeoTIFF`) capable of hardware-accelerated raster manipulation, dynamic multi-band math (NDVI/NDWI), and 100,000+ point visualization.

---

## 1. Cloud-Optimized GeoTIFF (COG) Ingestion (`ol/source/GeoTIFF`)

Directly streams high-resolution satellite imagery or DEM rasters without intermediate tile servers:

```javascript
import Map from "ol/Map.js";
import WebGLTileLayer from "ol/layer/WebGLTile.js";
import GeoTIFF from "ol/source/GeoTIFF.js";

const cogSource = new GeoTIFF({
  sources: [
    {
      url: "https://sentinel-cogs.s3.amazonaws.com/sentinel-s2-l2a-cogs/33/U/VU/2023/5/S2B_33UVU_20230523_0_L2A/TCI.tif",
      bands: [1, 2, 3] // Red, Green, Blue
    }
  ]
});

const cogLayer = new WebGLTileLayer({
  source: cogSource
});

const map = new Map({
  target: "map",
  layers: [cogLayer],
  view: cogSource.getView() // Automatically derives resolution, projection and extent!
});
```

---

## 2. Dynamic NDVI Calculation with WebGL Style Math

Calculate Normalized Difference Vegetation Index:
$$	ext{NDVI} = rac{	ext{NIR} - 	ext{Red}}{	ext{NIR} + 	ext{Red}} = rac{	ext{Band 4} - 	ext{Band 3}}{	ext{Band 4} + 	ext{Band 3}}$$

```javascript
import WebGLTileLayer from "ol/layer/WebGLTile.js";
import GeoTIFF from "ol/source/GeoTIFF.js";

const nirSource = new GeoTIFF({
  sources: [
    { url: "https://example.com/B04_red.tif" },  // Band 1
    { url: "https://example.com/B08_nir.tif" }   // Band 2
  ]
});

const ndviLayer = new WebGLTileLayer({
  source: nirSource,
  style: {
    color: [
      "interpolate",
      ["linear"],
      // Compute (NIR - Red) / (NIR + Red)
      [
        "/",
        ["-", ["band", 2], ["band", 1]],
        ["+", ["band", 2], ["band", 1]]
      ],
      -0.2, [0, 0, 255, 1],       // Water (Blue)
      0.0, [245, 245, 220, 1],    // Bare soil (Beige)
      0.2, [218, 165, 32, 1],     // Sparse vegetation (Goldenrod)
      0.6, [34, 139, 34, 1],      // Moderate forest (Forest Green)
      0.9, [0, 100, 0, 1]         // Dense canopy (Dark Green)
    ]
  }
});
```

---

## 3. High-Performance WebGL Points (100,000+ Points)

Render massive point datasets with dynamic GPU filtering and sprite animations:

```javascript
import WebGLPointsLayer from "ol/layer/WebGLPoints.js";
import VectorSource from "ol/source/Vector.js";
import GeoJSON from "ol/format/GeoJSON.js";

const webglPoints = new WebGLPointsLayer({
  source: new VectorSource({
    url: "https://example.com/100k_sensor_points.geojson",
    format: new GeoJSON()
  }),
  style: {
    symbol: {
      symbolType: "circle",
      size: ["interpolate", ["linear"], ["get", "magnitude"], 1, 4, 7, 24],
      color: [
        "interpolate",
        ["linear"],
        ["get", "magnitude"],
        1, "#0084ff",
        4, "#f1c40f",
        7, "#e74c3c"
      ],
      opacity: 0.8
    }
  }
});
map.addLayer(webglPoints);
```
