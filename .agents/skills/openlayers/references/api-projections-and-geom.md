# OpenLayers Projections & Geometries Reference 🌍📐

> Complete technical dictionary for coordinate systems, Proj4js registration, client-side reprojection, and geometry classes in OpenLayers.

---

## 1. Projections & Proj4js Integration

OpenLayers natively supports **`EPSG:3857`** (Spherical Mercator) and **`EPSG:4326`** (WGS 84). Any other projection requires registering definition strings with `proj4`:

```javascript
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4.js';
import { get as getProjection, fromLonLat, toLonLat } from 'ol/proj.js';

// 1. Swiss National Grid (LV95 / EPSG:2056)
proj4.defs("EPSG:2056", "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs");

// 2. British National Grid (OSGB36 / EPSG:27700)
proj4.defs("EPSG:27700", "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs");

// Register all defined projections with OpenLayers
register(proj4);
```

### Essential Coordinate Transformations
* **`fromLonLat([lng, lat], projection?)`**: Converts `[longitude, latitude]` (EPSG:4326) into view coordinates (default EPSG:3857).
* **`toLonLat([x, y], projection?)`**: Converts view projection coordinates back to geographical `[longitude, latitude]`.
* **`transform(coord, sourceProj, targetProj)`**: Transforms a coordinate between arbitrary registered projections.
* **`transformExtent(extent, sourceProj, targetProj)`**: Transforms a bounding box `[minx, miny, maxx, maxy]` between projections.

---

## 2. Geometry Classes Hierarchy

All geometries in OpenLayers inherit from `ol/geom/Geometry`:

| Geometry Class | Import Path | Structure |
| :--- | :--- | :--- |
| **`Point`** | `ol/geom/Point.js` | Single coordinate: `[x, y]` |
| **`LineString`** | `ol/geom/LineString.js` | Array of coordinates: `[[x1, y1], [x2, y2], ...]` |
| **`Polygon`** | `ol/geom/Polygon.js` | Array of linear rings: `[[[exterior ring...]], [[interior hole...]]]` |
| **`MultiPoint`** | `ol/geom/MultiPoint.js` | Array of coordinates: `[[x1, y1], [x2, y2]]` |
| **`MultiLineString`**| `ol/geom/MultiLineString.js`| Array of line coordinate arrays |
| **`MultiPolygon`** | `ol/geom/MultiPolygon.js` | Array of polygon coordinate arrays |
| **`Circle`** | `ol/geom/Circle.js` | Center coordinate and scalar radius in projection units |
