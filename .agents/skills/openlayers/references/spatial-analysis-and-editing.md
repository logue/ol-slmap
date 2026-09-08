# Spatial Analysis, Snapping & Topology Editing in OpenLayers

OpenLayers features one of the most advanced interactive vector editing and spatial analysis engines available in the browser. It supports precision geometry drawing, vertex modification, magnetic snapping, boundary tracing, geodesic measurements on the WGS 84 ellipsoid, and client-side topological operations with Turf.js and JSTS.

---

## 1. Precision Geometry Drawing (`ol/interaction/Draw`)

The `ol/interaction/Draw` interaction enables drawing points, lines, polygons, circles, boxes, and custom geometry shapes on vector layers.

### Supported Geometry Types
- `Point` — Single coordinate click.
- `LineString` — Multi-vertex polyline (double-click or click on last vertex to finish).
- `Polygon` — Multi-vertex closed polygon.
- `Circle` — Center point click followed by radius dragging.
- `MultiPoint`, `MultiLineString`, `MultiPolygon` — Multi-geometry collections.

### Complete Constructor Options
```javascript
import Draw from 'ol/interaction/Draw.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import { shiftKeyOnly, singleClick } from 'ol/events/condition.js';

const source = new VectorSource({ wrapX: false });
const layer = new VectorLayer({ source });
map.addLayer(layer);

const draw = new Draw({
  source: source,                   // Destination vector source for completed features
  type: 'Polygon',                  // Geometry type
  freehand: false,                  // Set true for freehand sketching mode
  freehandCondition: shiftKeyOnly,  // Activate freehand only while holding Shift
  condition: singleClick,           // Trigger vertex placement on single click
  stopClick: true,                  // Prevent click event from propagating to map/select
  maxPoints: 10,                    // Max vertices before auto-finishing
  minPoints: 3,                     // Min vertices required before allowing completion
  snapTolerance: 12                 // Pixel tolerance for closing polygon ring
});
map.addInteraction(draw);
```

### Lifecycle Event Listeners
```javascript
draw.on('drawstart', (evt) => {
  const feature = evt.feature;
  const geom = feature.getGeometry();
  console.log('Drawing started at coordinate:', geom.getFirstCoordinate());

  // Listen to live geometry changes while the user moves the mouse
  geom.on('change', () => {
    // Update live measurement tooltips or HUD panels
  });
});

draw.on('drawend', (evt) => {
  const feature = evt.feature;
  feature.set('createdAt', new Date().toISOString());
  console.log('Feature drawn successfully:', feature.getGeometry().getType());
});

draw.on('drawabort', (evt) => {
  console.log('Drawing was cancelled by user (Escape key)');
});

// Programmatic control:
// draw.finishDrawing();  // Force completes the current sketch
// draw.abortDrawing();   // Discards current sketch without saving
```

### Custom Geometry Generators: Boxes, Regular Polygons & Stars
Use `geometryFunction` or built-in generators from `ol/interaction/Draw.js`:

```javascript
import Draw, { createBox, createRegularPolygon } from 'ol/interaction/Draw.js';
import Polygon from 'ol/geom/Polygon.js';

// 1. Draw a 2D Bounding Box (Drag from corner to corner)
const drawBox = new Draw({
  source: source,
  type: 'Circle',
  geometryFunction: createBox()
});

// 2. Draw a Regular Hexagon (6-sided polygon)
const drawHexagon = new Draw({
  source: source,
  type: 'Circle',
  geometryFunction: createRegularPolygon(6)
});

// 3. Custom Star Generator
const drawStar = new Draw({
  source: source,
  type: 'Circle',
  geometryFunction: (coordinates, geometry) => {
    const center = coordinates[0];
    const last = coordinates[1];
    const dx = center[0] - last[0];
    const dy = center[1] - last[1];
    const radius = Math.sqrt(dx * dx + dy * dy);
    const innerRadius = radius / 2;
    const points = 5;
    const starCoordinates = [];

    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const r = i % 2 === 0 ? radius : innerRadius;
      starCoordinates.push([
        center[0] + r * Math.cos(angle),
        center[1] + r * Math.sin(angle)
      ]);
    }
    starCoordinates.push(starCoordinates[0]); // Close ring

    if (!geometry) {
      geometry = new Polygon([starCoordinates]);
    } else {
      geometry.setCoordinates([starCoordinates]);
    }
    return geometry;
  }
});
```

---

## 2. Interactive Vertex Modification (`ol/interaction/Modify`)

The `Modify` interaction lets users click and drag existing vertices, insert new vertices along edges, or delete vertices with modifier keys.

```javascript
import Modify from 'ol/interaction/Modify.js';
import { altKeyOnly, primaryAction } from 'ol/events/condition.js';
import { Style, Circle as CircleStyle, Fill, Stroke } from 'ol/style.js';

const modify = new Modify({
  source: source,                   // Vector source whose features are editable
  pixelTolerance: 10,               // Pixel radius around vertices for pointer grabbing
  deleteCondition: altKeyOnly,      // Alt + Click on a vertex to delete it
  insertVertexCondition: primaryAction, // Left-click on a segment line to add vertex
  style: new Style({                // Visual styling for the active edit handle
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: '#0084FF' }),
      stroke: new Stroke({ color: '#ffffff', width: 2 })
    })
  })
});
map.addInteraction(modify);

modify.on('modifystart', (evt) => {
  console.log('Modifying features:', evt.features.getLength());
});

modify.on('modifyend', (evt) => {
  evt.features.forEach((feature) => {
    console.log('Updated geometry coordinates:', feature.getGeometry().getCoordinates());
  });
});
```

---

## 3. Magnetic Snapping & Live Boundary Tracing (`ol/interaction/Snap`)

To build professional CAD/GIS drafting tools where boundaries align perfectly without gaps or slivers, use `Snap` and boundary tracing.

### Magnetic Snapping
```javascript
import Snap from 'ol/interaction/Snap.js';

// CRITICAL INVARIANT: The Snap interaction MUST be added AFTER Draw and Modify
// so that the Snap handler executes first in the event chain.
const snap = new Snap({
  source: source,       // Target source to snap towards
  edge: true,           // Snap to segment edges/lines
  vertex: true,         // Snap to corner vertices
  pixelTolerance: 12    // Magnetic grab distance in screen pixels
});
map.addInteraction(snap);
```

### Boundary Tracing (Follow Existing Polygons)
Enable `trace: true` on `Draw` to automatically follow shared borders of existing adjacent features:

```javascript
const drawTracing = new Draw({
  source: source,
  type: 'Polygon',
  trace: true,               // Enable automatic boundary tracing
  traceSource: source        // Features to trace along
});
map.addInteraction(drawTracing);
```

---

## 4. Feature Selection & Translation (`Select` & `Translate`)

```javascript
import Select from 'ol/interaction/Select.js';
import Translate from 'ol/interaction/Translate.js';
import { click, pointerMove } from 'ol/events/condition.js';

// 1. Select Interaction
const select = new Select({
  condition: click,              // Select on click (or pointerMove for hover)
  layers: [layer],               // Limit selection to specific layer(s)
  hitTolerance: 5,               // Screen pixels around feature for touch/click ease
  multi: false                   // Single selection mode
});
map.addInteraction(select);

// 2. Translate Interaction (Move selected features across the map)
const translate = new Translate({
  features: select.getFeatures() // Only move actively selected features
});
map.addInteraction(translate);

translate.on('translateend', (evt) => {
  evt.features.forEach((feature) => {
    console.log('Feature relocated to new position:', feature.getGeometry().getCoordinates());
  });
});
```

---

## 5. Geodesic Measurement (`ol/sphere`)

Standard Cartesian geometry formulas produce massive distortion on Web Mercator (`EPSG:3857`). Always use `ol/sphere` functions (`getLength` and `getArea`) for true geodesic measurements calculated over the WGS 84 ellipsoid.

```javascript
import { getLength, getArea } from 'ol/sphere.js';

/**
 * Format length of LineString in meters or kilometers
 * @param {import('ol/geom/LineString').default} line
 * @returns {string}
 */
export function formatLength(line) {
  const length = getLength(line, { projection: 'EPSG:3857' });
  if (length >= 1000) {
    return (length / 1000).toFixed(2) + ' km';
  }
  return length.toFixed(1) + ' m';
}

/**
 * Format surface area of Polygon in m², hectares, or km²
 * @param {import('ol/geom/Polygon').default} polygon
 * @returns {string}
 */
export function formatArea(polygon) {
  const area = getArea(polygon, { projection: 'EPSG:3857' });
  if (area >= 1000000) {
    return (area / 1000000).toFixed(2) + ' km²';
  }
  if (area >= 10000) {
    return (area / 10000).toFixed(2) + ' ha';
  }
  return area.toFixed(1) + ' m²';
}
```

---

## 6. Client-Side Topological Analysis with Turf.js

Bridge OpenLayers and [Turf.js](https://turfjs.org/) via `ol/format/GeoJSON` to run spatial buffers, convex hulls, centroids, and point-in-polygon checks directly in the browser:

```javascript
import * as turf from '@turf/turf';
import GeoJSON from 'ol/format/GeoJSON.js';
import * as olProj from 'ol/proj.js';

const geojsonFormat = new GeoJSON();

/**
 * Calculate spatial buffer around an OpenLayers Feature
 * @param {import('ol/Feature').default} olFeature
 * @param {number} distanceMeters
 * @returns {import('ol/Feature').default}
 */
export function createBuffer(olFeature, distanceMeters) {
  // Convert OL feature (EPSG:3857) to Turf GeoJSON (EPSG:4326)
  const turfFeature = geojsonFormat.writeFeatureObject(olFeature, {
    featureProjection: 'EPSG:3857',
    dataProjection: 'EPSG:4326'
  });

  // Perform Turf buffer in kilometers
  const bufferedTurf = turf.buffer(turfFeature, distanceMeters / 1000, {
    units: 'kilometers'
  });

  // Convert back to OpenLayers feature (EPSG:3857)
  return geojsonFormat.readFeature(bufferedTurf, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
  });
}

/**
 * Compute Centroid Point for complex polygon
 */
export function getCentroid(olFeature) {
  const turfFeature = geojsonFormat.writeFeatureObject(olFeature, {
    featureProjection: 'EPSG:3857',
    dataProjection: 'EPSG:4326'
  });
  const centroid = turf.centroid(turfFeature);
  return geojsonFormat.readFeature(centroid, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
  });
}

/**
 * Check if coordinate is inside a polygon
 */
export function isPointInPolygon(coordinate, olPolygonFeature) {
  const pt = turf.point(olProj.toLonLat(coordinate));
  const poly = geojsonFormat.writeFeatureObject(olPolygonFeature, {
    featureProjection: 'EPSG:3857',
    dataProjection: 'EPSG:4326'
  });
  return turf.booleanPointInPolygon(pt, poly);
}
```

---

## 7. Recommended Production Stack for Vector Editing

```text
ol/interaction/Draw (active: create mode)
       │
       ▼
ol/interaction/Modify (active: edit mode)
       │
       ▼
ol/interaction/Snap (always active: catches cursor on vertex/edge)
       │
       ▼
ol/source/Vector (contains edited features)
       │
       ▼
ol/layer/Vector (renders with custom dynamic style function)
```
