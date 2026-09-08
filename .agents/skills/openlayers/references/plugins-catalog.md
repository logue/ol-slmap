# OpenLayers Extensions & Plugins Catalog Guide 🔌🗺️

> Authoritative catalog and technical implementation reference for top third-party plugins, extension libraries (`ol-ext`, `ol-mapbox-style`, `proj4`), and native interaction architectures for **OpenLayers v10.10.0**.

Maintained by **[MapSnippets](https://mapsnippets.org/)** — Open-source geospatial snippets, guides, and agent tools.

---

## 🔎 Quick Directory & Extension Ecosystem

| Extension / Plugin | Package Name | Primary Capabilities | Recipe / Guide Reference |
| :--- | :--- | :--- | :--- |
| **`ol-ext`** *(Comprehensive Suite)* | `ol-ext` | Swipe wiper, layer switcher, popups, charts, search, animations | [`canvas-effects-and-animations.md`](canvas-effects-and-animations.md) |
| **`proj4`** *(Essential Projections)* | `proj4` | Custom CRS (EPSG:2056 LV95, BNG, UTM) registration in OpenLayers | [`advanced-reprojection-and-grids.md`](advanced-reprojection-and-grids.md) |
| **`ol-mapbox-style`** *(Vector Styles)* | `ol-mapbox-style` | Render Mapbox/MapLibre Style JSON vector tiles inside OpenLayers | [`basemaps-and-terrain.md`](basemaps-and-terrain.md) |
| **`ol-layerswitcher`** | `ol-layerswitcher` | Hierarchical group and layer visibility control | [`api-interactions-and-controls.md`](api-interactions-and-controls.md) |
| **`ol-contextmenu`** | `ol-contextmenu` | Right-click radial or list context menu with coordinate actions | — |
| **`ol-geocoder`** | `ol-geocoder` | Nominatim and MapTiler search autocomplete bar | [`geocoding-and-services.md`](geocoding-and-services.md) |
| **Native CAD Interactions** | Built-in `ol/interaction/*` | Drawing, snapping, vertex modifying without external plugins | [`spatial-analysis-and-editing.md`](spatial-analysis-and-editing.md) |
| **`ol-cesium`** | `ol-cesium` | Real-time 2D OpenLayers map to 3D CesiumJS globe synchronization | — |

---

## 1. The `ol-ext` Master Extension Suite

`ol-ext` is the largest and most widely used extension package for OpenLayers, offering over 50 professional controls, interactions, and visual effects.

* **NPM:** `npm install ol-ext`
* **CDN (UMD):**
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol-ext@4.0.23/dist/ol-ext.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/ol-ext@4.0.23/dist/ol-ext.min.js"></script>
  ```

### 1.1 Swipe Comparison Control (`ol.control.Swipe`)
Interactively slices between two layers using an adjustable divider handle.

```javascript
// Layer 1: Street Basemap
const streets = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${KEY}`,
    tileSize: 512
  })
});
map.addLayer(streets);

// Layer 2: Satellite Imagery
const satellite = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=${KEY}`,
    tileSize: 512
  })
});
map.addLayer(satellite);

// Add ol-ext Swipe Control
const swipe = new ol.control.Swipe();
map.addControl(swipe);
swipe.addLayer(streets);
swipe.addLayer(satellite, true); // true indicates right/bottom side
```

### 1.2 Animated Layer Popup (`ol.Overlay.Popup`)
Feature popups with anchor tips, smooth animations, and automatic pan-into-view.

```javascript
const popup = new ol.Overlay.Popup({
  popupClass: 'default anim',
  closeBox: true,
  onshow: () => console.log('Popup opened'),
  onclose: () => console.log('Popup closed'),
  positioning: 'auto',
  autoPan: { animation: { duration: 250 } }
});
map.addOverlay(popup);

map.on('singleclick', (evt) => {
  const feature = map.forEachFeatureAtPixel(evt.pixel, (f) => f);
  if (feature) {
    popup.show(evt.coordinate, `<div><h4>${feature.get('name')}</h4></div>`);
  } else {
    popup.hide();
  }
});
```

---

## 2. Coordinate System Projection Engine (`proj4`)

OpenLayers only ships with built-in mathematical transformations for `EPSG:3857` (Web Mercator) and `EPSG:4326` (WGS84). To use any national coordinate system (Swiss LV95, British National Grid, Lambert, UTM), `proj4` is mandatory.

* **NPM:** `npm install proj4`
* **CDN:**
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.9.2/proj4.js"></script>
  ```
* **Integration & Registration:**
  ```javascript
  // 1. Define custom projection using standard PROJ.4 string
  // Example: Swiss LV95 (EPSG:2056)
  proj4.defs("EPSG:2056", "+proj=somerc +lat_0=46.9524055555556 +lon_0=7.43958333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs +type=crs");

  // 2. Register proj4 with OpenLayers projection database
  ol.proj.proj4.register(proj4);

  // 3. Define extent and units in OpenLayers
  const swissProjection = ol.proj.get("EPSG:2056");
  swissProjection.setExtent([2485071.58, 1074261.38, 2837071.58, 1299941.79]);

  // 4. Transform coordinates or set directly on View
  const centerInLV95 = ol.proj.fromLonLat([8.5417, 47.3769], "EPSG:2056"); // [2683262, 1247926]
  const view = new ol.View({
    projection: "EPSG:2056",
    center: centerInLV95,
    zoom: 14
  });
  ```
* **Critical Gotcha:** Always call `ol.proj.proj4.register(proj4)` immediately after declaring `proj4.defs(...)`. If omitted, OpenLayers throws `Error: Projection not defined: EPSG:XXXX`.

---

## 3. MapLibre / Mapbox Vector Style Bridge (`ol-mapbox-style`)

Enables OpenLayers to fetch, parse, and render MapTiler Planet v4 vector styles (`streets-v4.json`) directly into native OpenLayers vector tile layers with data-driven styling.

* **NPM:** `npm install ol-mapbox-style`
* **CDN:**
  ```html
  <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@12.3.6/dist/olms.js"></script>
  ```
* **Integration Snippet:**
  ```javascript
  const map = new ol.Map({ target: 'map' });

  // Applies the complete vector style JSON and sets the view center/zoom automatically
  olms.apply(map, `https://api.maptiler.com/maps/streets-v4/style.json?key=${KEY}`)
    .then(() => {
      console.log('MapTiler vector style applied to OpenLayers');
    });
  ```
* **Custom Layer Targeting:**
  ```javascript
  // Apply a style to a specific existing VectorTile layer
  import { applyStyle } from 'ol-mapbox-style';
  applyStyle(vectorTileLayer, 'https://api.maptiler.com/maps/dataviz-v4-dark/style.json?key=KEY', 'openmaptiles');
  ```

---

## 4. Layer Switcher & Group Management (`ol-layerswitcher`)

Displays a collapsable, tree-structured layer switcher panel with checkboxes for visibility and radio buttons for exclusive basemap selection.

* **NPM:** `npm install ol-layerswitcher`
* **CDN:**
  ```html
  <link rel="stylesheet" href="https://unpkg.com/ol-layerswitcher@4.1.2/dist/ol-layerswitcher.css" />
  <script src="https://unpkg.com/ol-layerswitcher@4.1.2/dist/ol-layerswitcher.js"></script>
  ```
* **Integration Snippet:**
  ```javascript
  const basemapsGroup = new ol.layer.Group({
    title: 'Base Maps',
    layers: [
      new ol.layer.Tile({
        title: 'Streets',
        type: 'base',
        visible: true,
        source: new ol.source.XYZ({ url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${KEY}`, tileSize: 512 })
      }),
      new ol.layer.Tile({
        title: 'Satellite',
        type: 'base',
        visible: false,
        source: new ol.source.XYZ({ url: `https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=${KEY}`, tileSize: 512 })
      })
    ]
  });

  map.addLayer(basemapsGroup);

  const layerSwitcher = new LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    tipLabel: 'Layers'
  });
  map.addControl(layerSwitcher);
  ```

---

## 5. Right-Click Context Menu (`ol-contextmenu`)

Adds a fast, responsive contextual menu triggered by right-click or long-press.

* **CDN:**
  ```html
  <link rel="stylesheet" href="https://unpkg.com/ol-contextmenu@5.4.0/dist/ol-contextmenu.min.css" />
  <script src="https://unpkg.com/ol-contextmenu@5.4.0/dist/ol-contextmenu.js"></script>
  ```
* **Integration Snippet:**
  ```javascript
  const contextmenu = new ContextMenu({
    width: 170,
    defaultItems: true,
    items: [
      {
        text: 'Center Map Here',
        classname: 'bold',
        icon: 'https://cdn-icons-png.flaticon.com/16/684/684908.png',
        callback: (obj) => map.getView().animate({ center: obj.coordinate, duration: 500 })
      },
      {
        text: 'Copy Coordinates',
        callback: (obj) => {
          const lonlat = ol.proj.toLonLat(obj.coordinate);
          navigator.clipboard.writeText(`${lonlat[1].toFixed(5)}, ${lonlat[0].toFixed(5)}`);
        }
      },
      '-' // Separator
    ]
  });
  map.addControl(contextmenu);
  ```

---

## 6. Native CAD Interactions vs Third-Party Plugins

> ⚠️ **CRITICAL ARCHITECTURAL DIFFERENCE:**  
> Unlike Leaflet (which needs `@geoman-io/leaflet-geoman-free`) or MapLibre (which needs `@mapbox/mapbox-gl-draw`), **OpenLayers includes industrial-grade CAD drawing, editing, and snapping natively**. Do **NOT** install external drawing plugins in OpenLayers.

### The Full Native CAD Stack:
```javascript
const source = new ol.source.Vector();
const vector = new ol.layer.Vector({ source });
map.addLayer(vector);

// 1. Draw Geometry (Point, LineString, Polygon, Circle, Box)
const draw = new ol.interaction.Draw({ source, type: 'Polygon' });
map.addInteraction(draw);

// 2. Vertex Editing (Add, Drag, Delete vertices)
const modify = new ol.interaction.Modify({ source });
map.addInteraction(modify);

// 3. Magnetic Snapping (Snaps crosshair to existing vertices and edges)
const snap = new ol.interaction.Snap({ source });
map.addInteraction(snap);

// 4. Feature Selection & Translation (Move entire shapes)
const select = new ol.interaction.Select();
const translate = new ol.interaction.Translate({ features: select.getFeatures() });
map.addInteraction(select);
map.addInteraction(translate);
```

* **Snap Interaction Rule:** Always add `Snap` **AFTER** `Draw` and `Modify` interactions in `map.addInteraction(snap)` to ensure the snap listener has priority in pointer event sorting.

---

## 7. Plugin Compatibility & Common Invariants

| Trap / Error | Root Cause | Solution |
| :--- | :--- | :--- |
| `Projection not defined: EPSG:XXXX` | Projection used before Proj4js registration | Call `proj4.defs("EPSG:XXXX", "...")` and `ol.proj.proj4.register(proj4)` before instantiating map or view. |
| `olms is not defined` | `ol-mapbox-style` UMD global name mismatch | In browser script tags, the global is `olms` (e.g. `olms.apply(...)`). |
| Drawing crosshair doesn't snap to vertices | `Snap` interaction added before `Draw` | Call `map.addInteraction(draw)` first, then `map.addInteraction(snap)`. |
| Custom layer switcher not showing layers | Layer missing `title: 'Name'` or `type: 'base'` metadata | Add `title` and `type` properties in layer constructor options. |
| Canvas export blank or missing layers | Canvas cleared before download or CORS restriction | Use `map.once('rendercomplete', ...)` and pass `crossOrigin: 'anonymous'` in image/tile sources. |
