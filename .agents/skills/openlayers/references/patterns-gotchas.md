# OpenLayers Production Gotchas & Failure Modes ⚠️⚡

> Critical failure modes, debugging patterns, coordinate gotchas, and performance guidelines for OpenLayers applications with MapTiler Cloud basemaps.

---

## 1. Top 6 Critical Gotchas in OpenLayers

### 1. The EPSG:3857 vs EPSG:4326 Coordinate Trap
* **Gotcha**: Passing raw GPS `[longitude, latitude]` directly into `view.setCenter([lng, lat])` without transformation.
* **Symptom**: Map appears completely blank or zoomed into the Gulf of Guinea (coordinates [0,0]), because OpenLayers views default to `EPSG:3857` (meters).
* **Fix**: Always wrap GPS coordinates with `fromLonLat([lng, lat])`:
  ```javascript
  import { fromLonLat } from 'ol/proj.js';
  // CORRECT:
  view.setCenter(fromLonLat([8.5417, 47.3769]));
  ```

---

### 2. Missing `ol.css` Stylesheet
* **Gotcha**: Forgetting to import or link `ol.css`.
* **Symptom**: Zoom controls, attribution badges, and popups render distorted, unstyled, or stacked at the bottom of the page.
* **Fix**:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.10.0/ol.css">
  ```

---

### 3. Container Resize & Invalidation
* **Gotcha**: The map container DOM node changes size (e.g. sidebar collapse, modal open, window resize), but map doesn't adapt.
* **Symptom**: Gray canvas areas or clipped map tiles.
* **Fix**: Call `map.updateSize()` immediately after container dimensions change:
  ```javascript
  window.addEventListener('resize', () => map.updateSize());
  ```

---

### 4. Reactive State Wrapping in React / Vue
* **Gotcha**: Storing the `Map` instance in Vue `ref()` or React `useState()`.
* **Symptom**: Memory leaks, call-stack overflow, and crippled performance due to reactive Proxy wrapping.
* **Fix**: Use non-reactive containers (`useRef(null)` in React, `shallowRef(null)` in Vue 3).

---

### 5. Snap Interaction Stacking Order
* **Gotcha**: Adding `Snap` interaction to map *before* `Draw` or `Modify`.
* **Symptom**: Vertices fail to snap magnetically during drawing.
* **Fix**: `Snap` MUST always be added to the map AFTER `Draw` and `Modify`:
  ```javascript
  map.addInteraction(draw);
  map.addInteraction(modify);
  map.addInteraction(snap); // LAST!
  ```

---

### 6. Canvas Export / Screenshot Blank Issue
* **Gotcha**: Calling `map.getViewport().querySelector('canvas').toDataURL()` returns a blank image.
* **Fix**: Intercept the canvas via the `rendercomplete` event:
  ```javascript
  map.once('rendercomplete', () => {
    const mapCanvas = document.createElement('canvas');
    // Draw canvases onto mapCanvas and export
  });
  map.renderSync();
  ```

---

### 7. Invalid `/512/` Path in Tile URLs & 512px Resolution
* **Gotcha**: Adding `/512/` to MapTiler tile URLs (e.g. `https://api.maptiler.com/maps/streets-v4/512/{z}/{x}/{y}@2x.png`).
* **Symptom**: Tile request fails with HTTP 404 / 403 / error response.
* **Fix**: 512px is the default resolution on MapTiler Cloud — there is **no `/512/` path prefix**!
  - **512px Standard (Default):** `https://api.maptiler.com/maps/{style}/{z}/{x}/{y}.png?key=KEY`
  - **512px Retina (@2x):** `https://api.maptiler.com/maps/{style}/{z}/{x}/{y}@2x.png?key=KEY`
  - **256px Legacy:** `https://api.maptiler.com/maps/{style}/256/{z}/{x}/{y}.png?key=KEY` (only 256px tiles require an explicit size prefix).

