---
name: openlayers
description: >-
  Expert coding skill for building enterprise-grade, high-performance web maps with
  OpenLayers. USE WHEN the user wants to create a map, render raster tile layers
  (MapTiler Streets, Satellite, Outdoor, Topo, Dataviz), display GeoJSON, KML, or GPX data,
  build GIS and spatial analysis tools, add geometry drawing or editing tools
  (ol/interaction/Draw, Modify, Snap), create point clustering or heatmaps, handle
  reprojection and custom CRS (EPSG:4326, EPSG:3857, Swiss LV95, British National Grid via proj4),
  integrate Cloud-Optimized GeoTIFFs (COG), enterprise OGC services (WMS, WMTS, WFS),
  integrate maps in React, Next.js, Vue, or Svelte, or build an interactive web GIS app.
  Also USE WHEN the user mentions OpenLayers, ol/Map, ol/View, ol/layer, ol/source, or ol/interaction.
license: MIT
metadata:
  author: mapsnippets
  homepage: https://mapsnippets.org/
---

# OpenLayers — Agent Skill 🌐🗺️

> The authoritative AI coding standard for building modular, high-performance web mapping applications with **OpenLayers** and modern raster tile services.

Maintained by **[MapSnippets](https://mapsnippets.org/)** — Open-source geospatial snippets, guides, and agent tools.

---

## ⚡ Architectural Scope & Design Principles

* **Native Library Focus:** This skill focuses strictly on pure, native **OpenLayers** (`ol/Map`, `ol/View`, `ol/layer/Tile`, `ol/source/XYZ`, `ol/layer/Vector`, `ol/source/Vector`, `ol/proj`, `ol/interaction/*`). All generated code must use modular ES imports from the `ol` package.
* **MapTiler as Data Source:** MapTiler Cloud provides high-DPI raster XYZ tiles (512px @2x), geocoding, elevation, and static maps.
* **Strictly Raster Basemaps:** OpenLayers maps in this skill use **native high-DPI raster basemaps (`ol/layer/Tile` + `ol/source/XYZ`)** paired with rich client-side vector data layers (`ol/layer/Vector` + `ol/source/Vector` for GeoJSON, KML, GPX, digitization, clustering, and spatial analysis). For client-side vector tiles with MapLibre style JSON, use MapLibre GL JS instead.
* **Architecture-First Reliability:** OpenLayers is a modular GIS framework with built-in CAD interactions and strict projection transformations. Following lifecycle and projection contracts guarantees rock-solid execution.

---

## 🧭 How to Use This Skill — Mandatory Agent Workflow

When building, modifying, or debugging any OpenLayers map, **NEVER guess API methods, hallucinate module paths, or rely on outdated pre-trained memory**. Always look for the verified, canonical patterns within this skill:

1. **Look Up Verified Task Recipes First (`examples/`):**
   - Consult **[`examples/INDEX.md`](examples/INDEX.md)** to locate the exact runnable recipe matching your task (e.g. GeoJSON styling, clustering, geometry drawing/editing, swipe layer comparison, heatmap, Cloud-Optimized GeoTIFF (COG), OGC WMS/WFS, custom projection reprojection).
   - Read the corresponding recipe file before writing code. Every recipe contains self-contained, tested HTML/CSS/JS with zero boilerplate errors.
2. **Look Up Declarative Specifications & API Contracts (`references/`):**
   - Consult **[`references/INDEX.md`](references/INDEX.md)** for exact class imports, geometry methods, vector styling rules, projection utilities (`ol/proj`), and layer/source constructors.
   - For troubleshooting, always check **[`references/patterns-gotchas.md`](references/patterns-gotchas.md)** to avoid common pitfalls (EPSG:3857 vs EPSG:4326 coordinate transforms via `fromLonLat`, missing 512px tile grid configuration, style function caching, and interaction cleanup).
3. **Adhere to Core Design Contracts:**
   - Follow the foundational contracts below for lifecycle, high-DPI raster basemaps, coordinate transformations, and modular architecture.

---

## 📐 Core Structural Design Contracts

### 1. Universal Map Lifecycle & Projection Contract
Every OpenLayers implementation must fulfill these four lifecycle rules:

```html
<!-- 1. Mandatory CSS Container Contract -->
<style>
  body { margin: 0; padding: 0; }
  #map { width: 100%; height: 100vh; position: relative; }
</style>
<div id="map"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css" />
<script src="https://cdn.jsdelivr.net/npm/ol@v10.10.0/dist/ol.js"></script>

<script>
  // 2. Strict Projection Contract: OpenLayers Views operate in EPSG:3857 (meters).
  // Always convert GPS [longitude, latitude] to Spherical Mercator via fromLonLat:
  const centerCoord = ol.proj.fromLonLat([14.4378, 50.0755]); // [lng, lat] -> [x, y] in meters

  // 3. Map & High-DPI 512px Basemap Constructor Contract
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: 'https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}@2x.png?key=YOUR_API_KEY',
          tilePixelRatio: 2,
          tileSize: 512,
          maxZoom: 22,
          attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>'
        })
      })
    ],
    view: new ol.View({
      center: centerCoord,
      zoom: 12
    })
  });

  // 4. Memory Teardown Contract (For SPAs / React / Vue unmount)
  // map.setTarget(null); // Detaches DOM and frees canvas resources
</script>
```

* ⚠️ **API Key Prompting Rule:** If the user does not provide an API key, use `YOUR_API_KEY` in code and include this prompt:
  > *"To display the map tiles, get a free MapTiler API key (100,000 monthly tile requests) at: https://docs.maptiler.com/cloud/api/authentication-key/"*
* ⚠️ **Tile URL Path Rule:** Never use `/512/` in the raster URL path — `.../maps/streets-v4/512/...` is **INVALID** on MapTiler Cloud. 512px tiles are native defaults and have no size prefix in their path.

---

### 2. Native CAD Interaction Architecture (No Third-Party Drawing Plugins)
Unlike Leaflet or MapLibre, **OpenLayers includes full CAD vector digitizing natively**. Never install third-party drawing plugins for OpenLayers:

```javascript
const drawSource = new ol.source.Vector();
const drawLayer = new ol.layer.Vector({
  source: drawSource,
  style: new ol.style.Style({
    fill: new ol.style.Fill({ color: 'rgba(0, 132, 255, 0.25)' }),
    stroke: new ol.style.Stroke({ color: '#0084FF', width: 2.5 })
  })
});
map.addLayer(drawLayer);

// 1. Draw Geometry (Point, LineString, Polygon, Circle, Box)
const draw = new ol.interaction.Draw({ source: drawSource, type: 'Polygon' });
map.addInteraction(draw);

// 2. Vertex Editing (Add, Drag, Delete vertices)
const modify = new ol.interaction.Modify({ source: drawSource });
map.addInteraction(modify);

// 3. Magnetic Snapping (Snaps crosshair to existing vertices and lines)
const snap = new ol.interaction.Snap({ source: drawSource });
map.addInteraction(snap); // Snap MUST be added AFTER Draw and Modify!

// Extract GeoJSON
draw.on('drawend', (e) => {
  const geojson = new ol.format.GeoJSON().writeFeature(e.feature, {
    featureProjection: 'EPSG:3857',
    dataProjection: 'EPSG:4326'
  });
  console.log('Drawn feature GeoJSON:', geojson);
});
```

---

### 3. Coordinate Systems & Proj4js Registration Contract
OpenLayers natively supports `EPSG:3857` and `EPSG:4326`. For all national grid systems (Swiss LV95, British National Grid, UTM), register via `proj4`:

```javascript
// 1. Define custom projection string
proj4.defs("EPSG:2056", "+proj=somerc +lat_0=46.9524055555556 +lon_0=7.43958333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs +type=crs");

// 2. Register with OpenLayers database immediately
ol.proj.proj4.register(proj4);

// 3. Use directly on View or coordinate transformers
const centerInLV95 = ol.proj.fromLonLat([8.5417, 47.3769], "EPSG:2056");
```

---

### 4. Ecosystem Capability & Extension Matrix

| Capability | Architecture | Standard Implementation | Reference |
| :--- | :--- | :--- | :--- |
| **CAD Digitizing** | **Native Core** | `ol.interaction.Draw`, `Modify`, `Snap` | [`examples/draw-modify-snap.md`](examples/draw-modify-snap.md) |
| **Point Clustering** | **Native Core** | `ol.source.Cluster` wrapping `ol.source.Vector` | [`examples/clustering.md`](examples/clustering.md) |
| **Heatmap Density** | **Native Core** | `ol.layer.Heatmap` with radius and blur expressions | [`examples/heatmaps.md`](examples/heatmaps.md) |
| **UI Card Popups** | **Native Core** | `ol.Overlay` with `positioning` and `autoPan` | [`examples/popup-overlay.md`](examples/popup-overlay.md) |
| **Layer Swipe Wiper**| **Native Canvas / ol-ext**| Layer `prerender`/`postrender` clip or `ol-ext` (`Swipe`) | [`examples/layer-swipe.md`](examples/layer-swipe.md) |
| **Custom National CRS**| **Extension Required** | `proj4` registration before map creation | [`references/plugins-catalog.md`](references/plugins-catalog.md) |
| **Vector Style JSON** | **Extension Required** | `ol-mapbox-style` (`olms.apply(map, url)`) | [`references/plugins-catalog.md`](references/plugins-catalog.md) |
| **Layer Group Switcher**| **Extension Required** | `ol-layerswitcher` or custom button bar | [`references/plugins-catalog.md`](references/plugins-catalog.md) |

---

## ⚡ Fast Search Topic Router

| Category | Location | Contents |
| :--- | :--- | :--- |
| **Task Examples** | **[examples/INDEX.md](examples/INDEX.md)** | **56 atomic runnable recipes** across Raster Basemaps, Digitization, Clustering, WebGL, Enterprise OGC, and COG |
| **Core API & Architecture** | **[references/INDEX.md](references/INDEX.md)** | Declarative specifications for Map & View, Layers & Sources, Interactions & Controls, Styling & Renderers, and Projections |
| **Plugins & Extensions** | **[references/plugins-catalog.md](references/plugins-catalog.md)** | Extension catalog (`ol-ext`, `proj4`, `ol-mapbox-style`, `ol-layerswitcher`, `ol-contextmenu`) |
| **Basemaps & Schemas** | `references/basemaps-*`, `references/raster-basemaps-*` | MapTiler Planet v4 high-DPI raster tile URLs and REST endpoints |
| **Package Versions** | **[references/versions.md](references/versions.md)** | Pinned production releases for OpenLayers (`v10.10.0`) and companion packages |

---

## 🧪 Runnable Task Examples (`examples/`)

Browse **[examples/INDEX.md](examples/INDEX.md)** for the complete categorized catalog:

- [examples/basic-raster-map.md](examples/basic-raster-map.md) — Crisp 512px Retina raster basemap with `TileLayer`, `XYZ`, and MapTiler Streets v4.
- [examples/geojson-choropleth.md](examples/geojson-choropleth.md) — Dynamic choropleth styling functions, HTML legend, and hover highlight.
- [examples/draw-modify-snap.md](examples/draw-modify-snap.md) — Interactive GIS editing with `Draw`, `Modify`, and `Snap` magnetic vertices.
- [examples/clustering.md](examples/clustering.md) — High-performance point aggregation via `ol/source/Cluster` and animated zoom.
- [examples/popup-overlay.md](examples/popup-overlay.md) — `ol/Overlay` card anchoring, coordinate display, and `autoPan` animation.
- [examples/measure-distance-area.md](examples/measure-distance-area.md) — Geodesic distance and area measurement tool with `ol/sphere`.
- [examples/layer-swipe.md](examples/layer-swipe.md) — Split-screen layer swipe comparison using canvas `prerender` clipping.
- [examples/wms-getfeatureinfo.md](examples/wms-getfeatureinfo.md) — Enterprise OGC `TileWMS` integration and `GetFeatureInfo` spatial inspection.
- [examples/heatmaps.md](examples/heatmaps.md) — Continuous density gradient heatmaps via `ol/layer/Heatmap`.
- [examples/cog-geotiff-rendering.md](examples/cog-geotiff-rendering.md) — Direct Cloud-Optimized GeoTIFF raster ingestion via HTTP byte-range chunks.
- *...and 46 more task recipes in [examples/INDEX.md](examples/INDEX.md).*
