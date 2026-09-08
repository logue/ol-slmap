# OpenLayers & Ecosystem Versions 📦⚡

This guide lists the current production versions of OpenLayers, verified companion packages, geodetic transformers, raster engines, and MapTiler Planet v4 raster endpoints. Use these versions when creating HTML scripts, `package.json` dependencies, or CDN links.

---

## 1. Core Library & Companion Packages Matrix

| Library / Package | Current Version | Ingestion / Type | Primary Purpose | Used in Recipe / Guide |
| :--- | :--- | :--- | :--- | :--- |
| **ol** | `10.10.0` | ES Modules / UMD / NPM | Core web mapping engine (WebGL, Canvas, OGC) | Core basemaps & all 56 recipes |
| **proj4** | `2.15.0` | NPM / Hosted CDN | Geodetic coordinate transformations (BNG, Swiss LV95, etc.) | `reprojection-proj4js-*.md` |
| **geotiff** | `2.1.3` | NPM / CDN | Cloud-Optimized GeoTIFF (COG) client-side parsing | `cog-geotiff-rendering.md` |
| **flatgeobuf** | `3.33.0` | NPM / CDN | High-performance binary vector stream parsing | `flatgeobuf-loading.md` |
| **turf** | `7.2.0` | NPM / CDN | Spatial operations, clipping, and convex hulls | `turf-spatial-operations.md` |
| **jspdf** | `2.5.1` | NPM / UMD CDN | Client-side map printing and high-DPI PDF generation | `export-map-pdf-png.md` |
| **geozarr** | `0.1.0` | NPM / ESM | Multi-dimensional Earth Observation Zarr cubes | `geozarr-earth-observation.md` |
| **@types/ol** | `^10.0.0` | TypeScript Definitions | Type definitions for TypeScript, Vite, Next.js | `frameworks.md` |

---

## 2. Official CDN Endpoints

### OpenLayers v10.10.0
* **JavaScript Bundle:** `https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js`
* **CSS Stylesheet:** `https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css`
* **Unpkg Fallback:** `https://unpkg.com/ol@10.10.0/dist/ol.js`

### Companion Packages (CDN)
* **proj4js v2.15.0:** `https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.15.0/proj4.js`
* **GeoTIFF v2.1.3:** `https://cdn.jsdelivr.net/npm/geotiff@2.1.3/dist-browser/geotiff.js`
* **FlatGeobuf v3.33.0:** `https://cdn.jsdelivr.net/npm/flatgeobuf@3.33.0/dist/flatgeobuf-geojson.min.js`
* **Turf.js v7.2.0:** `https://cdn.jsdelivr.net/npm/@turf/turf@7.2.0/turf.min.js`
* **jsPDF v2.5.1:** `https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js`

### Modern Bundler Installation (NPM)
```bash
# Core OpenLayers package
npm install ol@10.10.0

# Optional Geodetic & Printing packages
npm install proj4@2.15.0 jspdf@2.5.1 geotiff@2.1.3
```

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import 'ol/ol.css'; // CRITICAL: Always import CSS in root JS file
```

---

## 3. MapTiler Planet v4 Raster Basemap Registry

### High-DPI 512px Raster Endpoints:

* **Streets v4:**
  - Standard (512px): `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=YOUR_API_KEY`
  - Retina (512px @2x): `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=YOUR_API_KEY`
* **Outdoor v4:**
  - Standard (512px): `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}.png?key=YOUR_API_KEY`
  - Retina (512px @2x): `https://api.maptiler.com/maps/outdoor-v4/{z}/{x}/{y}@2x.png?key=YOUR_API_KEY`
* **Satellite v4:**
  - Standard (512px): `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=YOUR_API_KEY`
  - Retina (512px @2x): `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}@2x.jpg?key=YOUR_API_KEY`
* **Dataviz v4 Dark:**
  - Standard (512px): `https://api.maptiler.com/maps/dataviz-v4-dark/{z}/{x}/{y}.png?key=YOUR_API_KEY`
  - Retina (512px @2x): `https://api.maptiler.com/maps/dataviz-v4-dark/{z}/{x}/{y}@2x.png?key=YOUR_API_KEY`
