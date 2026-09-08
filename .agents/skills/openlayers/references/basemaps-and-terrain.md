# Basemaps & High-DPI Raster Tiles Reference (Planet v4) — OpenLayers

This reference provides production-ready raster XYZ tile endpoints, Retina (@2x) configurations, and elevation/terrain endpoints for OpenLayers applications.

---

## 1. High-DPI Raster Tiles (512×512)

Standard OpenLayers raster tile implementation using native `ol/layer/Tile` and `ol/source/XYZ`:

```javascript
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";

// Standard 512px raster tiles
const rasterLayer = new TileLayer({
  source: new XYZ({
    url: "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=YOUR_API_KEY",
    tileSize: 512,
    maxZoom: 22,
    attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  })
});

// Crisp High-DPI Retina 512px raster tiles (@2x - Recommended)
const retinaLayer = new TileLayer({
  source: new XYZ({
    url: "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=YOUR_API_KEY",
    tilePixelRatio: 2,
    tileSize: 512,
    maxZoom: 22,
    attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  })
});
```

### Raster Tile URL Structure & Resolution Rules:

| Tile Format | URL Pattern | Tile Size | OpenLayers `tileSize` | OpenLayers `tilePixelRatio` |
| :--- | :--- | :--- | :--- | :--- |
| **512px Standard (Default)** | `https://api.maptiler.com/maps/{style}/{z}/{x}/{y}.png?key=KEY` | 512×512 | `512` | `1` |
| **512px Retina (@2x)** | `https://api.maptiler.com/maps/{style}/{z}/{x}/{y}@2x.png?key=KEY` | 1024×1024 (@2x) | `512` | `2` |
| **256px Standard (Legacy)** | `https://api.maptiler.com/maps/{style}/256/{z}/{x}/{y}.png?key=KEY` | 256×256 | `256` | `1` |
| **256px Retina (@2x)** | `https://api.maptiler.com/maps/{style}/256/{z}/{x}/{y}@2x.png?key=KEY` | 512×512 (@2x) | `256` | `2` |

> ⚠️ **CRITICAL GOTCHA: `/512/` is NOT a valid URL path**
> * MapTiler Cloud serves 512px tiles as its standard native resolution. There is **NO `/512/` path prefix**!
> * ❌ **INVALID:** `https://api.maptiler.com/maps/streets-v4/512/{z}/{x}/{y}@2x.png?key=KEY` (fails with HTTP error)
> * ✅ **VALID (512px):** `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=KEY` (retina) or `.../{z}/{x}/{y}.png?key=KEY` (normal)
> * ✅ **VALID (256px):** `https://api.maptiler.com/maps/streets-v4/256/{z}/{x}/{y}@2x.png?key=KEY` (only 256px requires explicit `/256/` prefix)

---

## 2. Complete Catalog of High-DPI Raster Basemap Endpoints

All MapTiler Planet v4 styles are available as high-performance, pre-rendered 512px raster XYZ tiles:

| Style Name | Standard (512px) URL | Retina (@2x) URL | Recommended Use Case |
| :--- | :--- | :--- | :--- |
| **Streets v4** | `.../maps/streets-v4/{z}/{x}/{y}.png?key=...` | `.../maps/streets-v4/{z}/{x}/{y}@2x.png?key=...` | General purpose navigation, city maps, POIs |
| **Streets v4 Dark** | `.../maps/streets-v4-dark/{z}/{x}/{y}.png?key=...` | `.../maps/streets-v4-dark/{z}/{x}/{y}@2x.png?key=...` | Night mode, high-contrast dark theme |
| **Streets v4 Pastel** | `.../maps/streets-v4-pastel/{z}/{x}/{y}.png?key=...` | `.../maps/streets-v4-pastel/{z}/{x}/{y}@2x.png?key=...` | Vintage / soft pastel streets theme |
| **Outdoor v4** | `.../maps/outdoor-v4/{z}/{x}/{y}.png?key=...` | `.../maps/outdoor-v4/{z}/{x}/{y}@2x.png?key=...` | Hiking, cycling, topographic contours & hillshading |
| **Outdoor v4 Dark** | `.../maps/outdoor-v4-dark/{z}/{x}/{y}.png?key=...` | `.../maps/outdoor-v4-dark/{z}/{x}/{y}@2x.png?key=...` | Night mode trails and terrain |
| **Satellite v4** | `.../maps/satellite-v4/{z}/{x}/{y}.jpg?key=...` | `.../maps/satellite-v4/{z}/{x}/{y}@2x.jpg?key=...` | High-resolution satellite imagery |
| **Satellite Hybrid v4** | `.../maps/hybrid-v4/{z}/{x}/{y}.jpg?key=...` | `.../maps/hybrid-v4/{z}/{x}/{y}@2x.jpg?key=...` | Satellite imagery with streets & labels |
| **Dataviz v4 Dark** | `.../maps/dataviz-v4-dark/{z}/{x}/{y}.png?key=...` | `.../maps/dataviz-v4-dark/{z}/{x}/{y}@2x.png?key=...` | Minimalist contrast theme for dense data overlays |
| **Dataviz v4 Light** | `.../maps/dataviz-v4-light/{z}/{x}/{y}.png?key=...` | `.../maps/dataviz-v4-light/{z}/{x}/{y}@2x.png?key=...` | Clean light background for analytical data overlays |
| **Dataviz v4** | `.../maps/dataviz-v4/{z}/{x}/{y}.png?key=...` | `.../maps/dataviz-v4/{z}/{x}/{y}@2x.png?key=...` | Balanced neutral backdrop for data visualizations |
| **Topo v4** | `.../maps/topo-v4/{z}/{x}/{y}.png?key=...` | `.../maps/topo-v4/{z}/{x}/{y}@2x.png?key=...` | Traditional topographic cartography with contours |
| **Base v4** | `.../maps/base-v4/{z}/{x}/{y}.png?key=...` | `.../maps/base-v4/{z}/{x}/{y}@2x.png?key=...` | Clean muted background for custom thematic layers |
| **Base v4 Dark** | `.../maps/base-v4-dark/{z}/{x}/{y}.png?key=...` | `.../maps/base-v4-dark/{z}/{x}/{y}@2x.png?key=...` | Dark muted background for custom thematic layers |
| **Bright v4** | `.../maps/bright-v4/{z}/{x}/{y}.png?key=...` | `.../maps/bright-v4/{z}/{x}/{y}@2x.png?key=...` | Vibrant, colorful presentation style |
| **Winter v4** | `.../maps/winter-v4/{z}/{x}/{y}.png?key=...` | `.../maps/winter-v4/{z}/{x}/{y}@2x.png?key=...` | Ski slopes, winter pistes, and snow terrain |
| **Ocean** | `.../maps/ocean/{z}/{x}/{y}.png?key=...` | `.../maps/ocean/{z}/{x}/{y}@2x.png?key=...` | Nautical bathymetry and oceanic features |

---

## 3. Terrain-RGB & Elevation Tiles

MapTiler provides global DEM (Digital Elevation Model) tiles encoded in RGB format:

```text
https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=YOUR_API_KEY
```

### Elevation Calculation Formula from RGB:
```javascript
// Height in meters from RGB values
const height = -10000 + ((R * 256 * 256 + G * 256 + B) * 0.1);
```

Used with OpenLayers `ol/source/Raster` for client-side pixel manipulation, hillshading, contour generation, or slope analysis.
