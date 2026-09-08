# OpenLayers Map & View API Reference 🗺️📐

> Comprehensive technical reference for `ol/Map` and `ol/View`, covering constructor options, camera controls, coordinate transformations, projections, resolution constraints, and animations.
> Official API Docs: [`ol/Map` apidoc](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) | [`ol/View` apidoc](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) | [Full API Directory](api-catalog.md)

---

## 1. `ol/Map` ([Official API Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html))

The core component responsible for managing layers, view state, user interactions, DOM event listeners, and WebGL/Canvas rendering.

```javascript
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
        tileSize: 512
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
```

### Constructor Options Table

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`target`** | `HTMLElement \| string` | `undefined` | The container element or DOM ID where the map is rendered. |
| **`view`** | `ol/View` | `undefined` | The map's view determining center, zoom, resolution, and projection. |
| **`layers`** | `Array<ol/layer/Base> \| ol/Collection` | `[]` | Visual layers rendered from bottom to top. |
| **`controls`** | `Array<ol/control/Control> \| ol/Collection`| Default controls | Controls displayed on top of the map. |
| **`interactions`**| `Array<ol/interaction/Interaction>` | Default interactions | Pointer, touch, drag, and zoom interactions. |
| **`overlays`** | `Array<ol/Overlay> \| ol/Collection`| `[]` | DOM elements anchored to geographical coordinates. |
| **`pixelRatio`** | `number` | `window.devicePixelRatio` | Canvas pixel ratio (crucial for HiDPI/Retina screens). |
| **`maxTilesLoading`**| `number` | `16` | Maximum concurrent tile network requests. |

### Core Methods
* **`map.render()`**: Requests that the map be rendered immediately on the next animation frame.
* **`map.renderSync()`**: Forces an immediate synchronous render pass.
* **`map.setSize(size)`**: Manually updates map viewport dimensions `[width, height]` (vital after container resize).
* **`map.updateSize()`**: Recalculates viewport dimensions from the DOM target element.
* **`map.getPixelFromCoordinate(coord)`**: Converts geographical coordinate to screen pixel `[x, y]`.
* **`map.getCoordinateFromPixel(pixel)`**: Converts screen pixel `[x, y]` to geographical coordinate.
* **`map.forEachFeatureAtPixel(pixel, callback, options?)`**: Hits vector features under pixel with tolerance.
* **`map.hasFeatureAtPixel(pixel, options?)`**: Returns boolean if a feature exists under pixel.

---

## 2. `ol/View` ([Official API Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html))

Manages 2D camera geometry, projections, resolutions, zoom limits, and animations.

```javascript
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj.js';

const view = new View({
  center: fromLonLat([8.5417, 47.3769]), // Zurich
  zoom: 12,
  minZoom: 2,
  maxZoom: 20,
  rotation: 0,
  enableRotation: true,
  constrainRotation: true
});
```

### Constructor Options Table

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`center`** | `ol/coordinate` | `undefined` | Center coordinate in the view's projection (e.g. EPSG:3857). |
| **`zoom`** | `number` | `undefined` | Zoom level used to calculate initial resolution. |
| **`minZoom`** | `number` | `0` | Minimum allowable zoom level. |
| **`maxZoom`** | `number` | `28` | Maximum allowable zoom level. |
| **`resolution`**| `number` | `undefined` | Map resolution in projection units per pixel (e.g. meters/pixel). |
| **`resolutions`**| `Array<number>` | `undefined` | Discrete custom resolution tiers for custom tile grids. |
| **`projection`**| `ol/proj/ProjectionLike`| `'EPSG:3857'` | Projection code (e.g. `'EPSG:3857'`, `'EPSG:4326'`, `'EPSG:2056'`). |
| **`rotation`** | `number` | `0` | Camera rotation in radians clockwise from North. |
| **`enableRotation`**| `boolean` | `true` | Allows user to rotate the map via touch or keyboard. |
| **`constrainResolution`**| `boolean` | `false` | If `true`, rounds zoom to nearest integer upon release. |
| **`extent`** | `ol/extent` | `undefined` | Bounding extent `[minx, miny, maxx, maxy]` outside which panning is constrained. |

---

## 3. Cinematic Camera Animations (`view.animate`)

`view.animate(options, ...)` queues smooth, multi-stage camera transitions:

```javascript
import { fromLonLat } from 'ol/proj.js';

// FlyTo animation with curved bounce easing
function flyTo(view, location, done) {
  const duration = 2000;
  const zoom = view.getZoom();
  let parts = 2;
  let called = false;

  function callback(complete) {
    --parts;
    if (parts === 0 && !called) {
      called = true;
      done(complete);
    }
  }

  // Animate center and zoom simultaneously
  view.animate({
    center: location,
    duration: duration
  }, callback);

  view.animate({
    zoom: zoom - 1.5,
    duration: duration / 2
  }, {
    zoom: 14,
    duration: duration / 2
  }, callback);
}

flyTo(map.getView(), fromLonLat([2.3522, 48.8566]), () => {
  console.log('Flight arrived at Paris!');
});
```

---

## 4. Fitting Extents (`view.fit`)

Fits the camera viewport to contain an extent or geometry with padding:

```javascript
view.fit(vectorSource.getExtent(), {
  padding: [50, 50, 50, 350], // Top, Right, Bottom, Left (offset for sidebar)
  maxZoom: 16,
  duration: 1000
});
```
