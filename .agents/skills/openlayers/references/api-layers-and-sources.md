# OpenLayers Layers & Sources Reference 📦🗺️

> Comprehensive technical reference for OpenLayers layer and source architectures, covering raster XYZ basemaps, client-side vector geometries, WebGL renderers, Cloud-Optimized GeoTIFFs (COG), GeoZarr, and OGC services.

---

## 1. Layer Classes Architecture

Every layer in OpenLayers inherits from `ol/layer/Base` and manages visual styling, opacity, zoom ranges, and rendering pipeline:

| Layer Class | Import Path | Primary Use Case |
| :--- | :--- | :--- |
| **`TileLayer`** | `ol/layer/Tile.js` | Tiled raster imagery (MapTiler Streets, Satellite, OSM, WMS, WMTS). |
| **`VectorLayer`** | `ol/layer/Vector.js` | Client-side 2D vector geometries (GeoJSON, KML, GPX, Shapefiles). |
| **`WebGLTile`** | `ol/layer/WebGLTile.js` | Hardware-accelerated WebGL raster tile rendering, COG, and shader expressions. |
| **`WebGLPoints`** | `ol/layer/WebGLPoints.js` | Ultra-high performance rendering of 100,000+ vector points at 60 FPS. |
| **`ImageLayer`** | `ol/layer/Image.js` | Single untiled dynamic images (Single-image WMS, custom Canvas). |

### Common Layer Options
* **`opacity`** *(number, default 1)*: Layer transparency (0 to 1).
* **`visible`** *(boolean, default true)*: Layer visibility toggle.
* **`minZoom` / `maxZoom`** *(number)*: Zoom level constraints for rendering.
* **`minResolution` / `maxResolution`** *(number)*: Resolution constraints in meters/pixel.
* **`zIndex`** *(number, default 0)*: Visual stacking order.

---

## 2. Source Classes Reference

### A. `ol/source/XYZ` (Raster Tiles)
Consumes slippy map raster tiles (`{z}/{x}/{y}`):
```javascript
import XYZ from 'ol/source/XYZ.js';

const source = new XYZ({
  url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=${MAPTILER_KEY}`,
  tileSize: 512,
  tilePixelRatio: 2, // HiDPI Retina support
  maxZoom: 22,
  crossOrigin: 'anonymous',
  attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>'
});
```

---

### B. `ol/source/Vector` (Feature Datasets)
Stores client-side vector geometries with spatial indexing:
```javascript
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import { bbox } from 'ol/loadingstrategy.js';

const vectorSource = new VectorSource({
  format: new GeoJSON(),
  url: (extent) => `/api/features?bbox=${extent.join(',')}`,
  strategy: bbox // Reloads data as the map view changes bounding box
});
```

---

### C. `ol/source/Cluster` (Point Aggregation)
Groups nearby points within a pixel radius into aggregated cluster features:
```javascript
import Cluster from 'ol/source/Cluster.js';

const clusterSource = new Cluster({
  distance: 40,      // Distance in pixels between clusters
  minDistance: 20,   // Minimum distance between clusters
  source: vectorSource
});
```

---

### D. `ol/source/GeoTIFF` (Cloud-Optimized GeoTIFF)
Streams multi-band Cloud-Optimized GeoTIFFs using HTTP range requests:
```javascript
import GeoTIFF from 'ol/source/GeoTIFF.js';

const cogSource = new GeoTIFF({
  sources: [
    {
      url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/.../TCI.tif',
      bands: [1, 2, 3]
    }
  ]
});
```

---

### E. `ol/source/Raster` (Pixelwise GPU/Worker Operations)
Executes pixelwise raster operations across multiple input sources:
```javascript
import RasterSource from 'ol/source/Raster.js';

const raster = new RasterSource({
  sources: [demSource],
  operation: (pixels, data) => {
    const pixel = pixels[0];
    const elev = -10000 + ((pixel[0] * 256 * 256 + pixel[1] * 256 + pixel[2]) * 0.1);
    if (elev > data.threshold) {
      return [255, 0, 0, 200];
    }
    return [0, 0, 0, 0];
  }
});
```
