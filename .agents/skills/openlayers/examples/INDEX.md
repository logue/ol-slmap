# OpenLayers Task Examples Index 🧪🗺️

> The authoritative index of **56 atomic, copy-pasteable task implementations** for OpenLayers (v9–v10+), curated from OpenLayers documentation and community recipes and engineered with modern MapTiler Planet v4 high-DPI raster basemaps.

---

## 📑 Examples by Category

### 1. 📦 Raster Basemaps & Vector Data Formats
* **[basic-raster-map.md](basic-raster-map.md)** — Crisp 512px Retina raster basemap with `TileLayer`, `XYZ`, and MapTiler Streets v4.
* **[geojson-choropleth.md](geojson-choropleth.md)** — Dynamic data-driven style function, HTML legend, and hover highlight on GeoJSON.
* **[kml-earthquakes.md](kml-earthquakes.md)** — KML data parsing and circle radius scaling by seismic magnitude.
* **[gpx-track-viewer.md](gpx-track-viewer.md)** — Ingesting GPS telemetry tracks and waypoints with custom line styling.
* **[topojson-layer.md](topojson-layer.md)** — Compressed topological administrative boundaries rendering.
* **[flatgeobuf-loading.md](flatgeobuf-loading.md)** — Streaming indexed binary FlatGeobuf files with spatial BBOX chunking.
* **[esri-rest-feature-service.md](esri-rest-feature-service.md)** — Direct integration with enterprise ArcGIS REST FeatureServer.
* **[drag-and-drop.md](drag-and-drop.md)** — Client-side drag-and-drop parsing `.geojson`, `.gpx`, and `.kml` files.

### 2. 🌍 Projections & Coordinate Systems
* **[reprojection-proj4js-swiss.md](reprojection-proj4js-swiss.md)** — Swiss LV95 (`EPSG:2056`) coordinate reprojection with Proj4js over MapTiler raster basemaps.
* **[reprojection-proj4js-bng.md](reprojection-proj4js-bng.md)** — British National Grid (`EPSG:27700`) client reprojection with Proj4js and extent bounding.
* **[graticule-grid-overlay.md](graticule-grid-overlay.md)** — Latitude/longitude graticule coordinate grid lines overlay with custom labels.

### 3. ✍️ Vector Digitization & GIS Interactions
* **[draw-modify-snap.md](draw-modify-snap.md)** — Precision drawing, vertex editing, and magnetic boundary snapping.
* **[draw-freehand-and-shapes.md](draw-freehand-and-shapes.md)** — Digitizing bounding boxes, regular stars, and freehand sketches.
* **[draw-regular-polygons-stars.md](draw-regular-polygons-stars.md)** — Drawing regular polygons, boxes, and 5-point stars with `createRegularPolygon`.
* **[modify-scale-rotate.md](modify-scale-rotate.md)** — Interactive geometry scaling and rotation handles on vector features.
* **[box-selection.md](box-selection.md)** — Marquee rubber-band bounding box selection with `DragBox`.
* **[select-hover-click.md](select-hover-click.md)** — Configuring hover vs click selection triggers and feature highlights.
* **[translate-features.md](translate-features.md)** — Repositioning and dragging geometries across the map canvas.
* **[extent-interaction.md](extent-interaction.md)** — Interactive spatial cropping and bounding box resize handles.
* **[hit-tolerance-touch.md](hit-tolerance-touch.md)** — Configurable pixel hit-detection tolerance for mobile touchscreens and narrow lines.
* **[pinch-zoom-rotate.md](pinch-zoom-rotate.md)** — Tablet/mobile touch pinch zoom, kinetic pan, and two-finger rotate.
* **[turf-spatial-operations.md](turf-spatial-operations.md)** — Client-side geometric analysis with Turf.js (buffers, convex hulls).

### 4. 📍 Point Clustering, Heatmaps & Dense WebGL
* **[clustering.md](clustering.md)** — High-performance point aggregation via `ol/source/Cluster` and animated zoom.
* **[cluster-animated-expansion.md](cluster-animated-expansion.md)** — Animated spiderfy and spiral expansion on overlapping points.
* **[heatmaps.md](heatmaps.md)** — Smooth continuous density heatmaps with radius and blur tuning.
* **[webgl-points-100k.md](webgl-points-100k.md)** — 100,000+ points rendered at 60 FPS using WebGL and literal style rules.
* **[webgl-line-filter.md](webgl-line-filter.md)** — Real-time WebGL line rendering and dynamic attribute filtering.
* **[webgl-icon-sprites.md](webgl-icon-sprites.md)** — Thousands of icon markers using GPU sprite sheets and WebGL points.

### 5. 🌐 Enterprise OGC Services
* **[wms-tiled.md](wms-tiled.md)** — Tiled OGC WMS layer with custom parameters and caching.
* **[wms-single-image.md](wms-single-image.md)** — Single-image untiled dynamic server rendering (`ImageWMS`).
* **[wms-getfeatureinfo.md](wms-getfeatureinfo.md)** — Spatial click inspection and `GetFeatureInfo` coordinate queries.
* **[wmts-layer.md](wmts-layer.md)** — Standardized OGC WMTS with predefined matrix sets and tile grids.
* **[wfs-bbox-loading.md](wfs-bbox-loading.md)** — Direct vector streaming from WFS services using BBOX strategy.
* **[wfs-getfeature-attribute-filter.md](wfs-getfeature-attribute-filter.md)** — WFS `GetFeature` POST requests with OGC XML spatial and attribute filters.

### 6. 🛰️ Raster Imagery, WebGL, COG & GeoZarr
* **[xyz-retina-hidpi.md](xyz-retina-hidpi.md)** — 512x512px Retina / HiDPI Mercator raster tiles using MapTiler Planet v4 raster tiles.
* **[cog-geotiff-rendering.md](cog-geotiff-rendering.md)** — Streaming multi-gigabyte Cloud Optimized GeoTIFFs via HTTP Range.
* **[cog-automatic-projection.md](cog-automatic-projection.md)** — Ingesting COG with automatic projection lookup aligned over MapTiler basemaps.
* **[cog-ndvi-band-math.md](cog-ndvi-band-math.md)** — Real-time GPU NDVI vegetation index calculation from Sentinel-2 bands.
* **[geozarr-earth-observation.md](geozarr-earth-observation.md)** — Modern GeoZarr multidimensional raster climate data loading and rendering.
* **[raster-source-pixel-operations.md](raster-source-pixel-operations.md)** — Client-side pixelwise elevation & slope thresholding with `ol/source/Raster`.
* **[webgl-tile-contrast-stretch.md](webgl-tile-contrast-stretch.md)** — Dynamic band contrast stretch and brightness curves on WebGLTile layers.
* **[multi-layer-swipe-webgl.md](multi-layer-swipe-webgl.md)** — Hardware-accelerated WebGL tile layer swipe comparison.
* **[layer-swipe.md](layer-swipe.md)** — Split-screen comparison slider using HTML5 Canvas clipping hooks.
* **[spyglass-magnifier.md](spyglass-magnifier.md)** — Circular magnifying glass lens following mouse pointer.
* **[color-manipulation-raster.md](color-manipulation-raster.md)** — Real-time hue, saturation, brightness, and contrast adjustment.

### 7. 💬 UI Controls, Overlays & Navigation
* **[popup-overlay.md](popup-overlay.md)** — Anchored DOM popup bubble with closer button and `autoPan` animation.
* **[measure-distance-area.md](measure-distance-area.md)** — Geodesic distance and surface area measurement tool using `ol/sphere`.
* **[url-link-sync.md](url-link-sync.md)** — Bidirectional URL query synchronization for center, zoom, and rotation.
* **[fly-to-camera-animation.md](fly-to-camera-animation.md)** — Cinematic camera flight arcs with bounce easing.
* **[feature-move-animation.md](feature-move-animation.md)** — Smooth 60 FPS marker movement along a route using postrender animation loop.
* **[shared-dual-views-side-by-side.md](shared-dual-views-side-by-side.md)** — Two synchronized maps sharing view properties for comparative analysis.
* **[fullscreen-drag-rotate-zoom.md](fullscreen-drag-rotate-zoom.md)** — FullScreen control combined with DragRotateAndZoom keyboard/mouse interactions.
* **[overview-map-control.md](overview-map-control.md)** — Secondary mini-map context control.
* **[scale-line-units.md](scale-line-units.md)** — Dynamic scale bar supporting metric, imperial, and nautical units.
* **[layer-switcher-custom.md](layer-switcher-custom.md)** — Custom UI control toggling between Planet v4 basemaps.
* **[export-map-pdf-png.md](export-map-pdf-png.md)** — Exporting high-DPI canvas prints to PNG and PDF documents.
