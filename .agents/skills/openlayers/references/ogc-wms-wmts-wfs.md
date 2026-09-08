# OGC Enterprise Standards — WMS, WMTS, WFS & OGC API in OpenLayers

OpenLayers is the industry gold standard for geospatial web applications integrating enterprise OGC services (GeoServer, MapServer, QGIS Server, ArcGIS Enterprise, and national spatial data infrastructures).

---

## 1. Web Map Service (WMS)

OpenLayers supports both **Tiled WMS** (faster, cached by browser) and **Single-Image WMS** (eliminates duplicate text labels along tile boundaries).

### A. Tiled WMS (`ol/source/TileWMS`)
```javascript
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';

const tiledWmsLayer = new TileLayer({
  source: new TileWMS({
    url: 'https://example.com/geoserver/wms',
    params: {
      'LAYERS': 'workspace:layer_name',
      'TILED': true,
      'VERSION': '1.3.0',
      'FORMAT': 'image/png',
      'TRANSPARENT': true
    },
    serverType: 'geoserver',          // 'geoserver' | 'mapserver' | 'carmentaserver' | 'qgis'
    transition: 250                   // Fade-in duration in ms
  })
});
map.addLayer(tiledWmsLayer);
```

### B. Single-Image Untiled WMS (`ol/source/ImageWMS`)
```javascript
import ImageLayer from 'ol/layer/Image.js';
import ImageWMS from 'ol/source/ImageWMS.js';

const singleImageWms = new ImageLayer({
  source: new ImageWMS({
    url: 'https://example.com/geoserver/wms',
    params: {
      'LAYERS': 'workspace:cadastre_parcels',
      'VERSION': '1.3.0',
      'TRANSPARENT': true
    },
    ratio: 1                          // 1 = exactly screen size, 1.5 = buffer around viewport
  })
});
map.addLayer(singleImageWms);
```

### C. Interactive `GetFeatureInfo` Query on Click
Query the exact attribute data of features underneath the pointer:

```javascript
map.on('singleclick', async (evt) => {
  const viewResolution = map.getView().getResolution();
  const viewProjection = map.getView().getProjection();

  const url = tiledWmsLayer.getSource().getFeatureInfoUrl(
    evt.coordinate,
    viewResolution,
    viewProjection,
    {
      'INFO_FORMAT': 'application/json', // Or 'text/html'
      'FEATURE_COUNT': 5
    }
  );

  if (url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        console.log('Queried WMS feature properties:', data.features[0].properties);
      }
    } catch (err) {
      console.error('Failed to query GetFeatureInfo:', err);
    }
  }
});
```

---

## 2. Web Feature Service (WFS)

Stream pure vector geometries and attributes directly from GeoServer/MapServer, dynamically fetching only features within the user's viewport bounding box (`bbox`).

```javascript
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import { bbox as bboxStrategy } from 'ol/loadingstrategy.js';
import { Stroke, Style } from 'ol/style.js';

const wfsSource = new VectorSource({
  format: new GeoJSON(),
  strategy: bboxStrategy,             // Re-queries server whenever user pans/zooms
  loader: function (extent, resolution, projection, success, failure) {
    const srs = projection.getCode();
    const url = `https://example.com/geoserver/wfs?` +
      `service=WFS&version=2.0.0&request=GetFeature&` +
      `typeNames=gis:power_lines&outputFormat=application/json&` +
      `srsName=${srs}&bbox=${extent.join(',')},${srs}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const features = wfsSource.getFormat().readFeatures(data);
        wfsSource.addFeatures(features);
        success(features);
      })
      .catch((err) => {
        failure();
      });
  }
});

const wfsLayer = new VectorLayer({
  source: wfsSource,
  style: new Style({
    stroke: new Stroke({ color: '#f59e0b', width: 2.5 })
  })
});
map.addLayer(wfsLayer);
```

---

## 3. Web Map Tile Service (WMTS)

### A. Manual WMTS TileGrid Configuration
```javascript
import TileLayer from 'ol/layer/Tile.js';
import WMTS from 'ol/source/WMTS.js';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import { get as getProjection } from 'ol/proj.js';
import { getTopLeft, getWidth } from 'ol/extent.js';

const projection = getProjection('EPSG:3857');
const projectionExtent = projection.getExtent();
const size = getWidth(projectionExtent) / 256;
const resolutions = new Array(19);
const matrixIds = new Array(19);

for (let z = 0; z < 19; ++z) {
  resolutions[z] = size / Math.pow(2, z);
  matrixIds[z] = z;
}

const wmtsLayer = new TileLayer({
  source: new WMTS({
    url: 'https://example.com/wmts',
    layer: 'topography_layer',
    matrixSet: 'EPSG:3857',
    format: 'image/png',
    projection: projection,
    tileGrid: new WMTSTileGrid({
      origin: getTopLeft(projectionExtent),
      resolutions: resolutions,
      matrixIds: matrixIds
    }),
    style: 'default',
    wrapX: true
  })
});
map.addLayer(wmtsLayer);
```

### B. Auto-Configuration from WMTS Capabilities Document
Instead of manually calculating matrices, parse the XML capabilities document automatically:

```javascript
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS.js';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import TileLayer from 'ol/layer/Tile.js';

const parser = new WMTSCapabilities();

fetch('https://example.com/wmts/1.0.0/WMTSCapabilities.xml')
  .then((response) => response.text())
  .then((text) => {
    const result = parser.read(text);
    const options = optionsFromCapabilities(result, {
      layer: 'my_wmts_layer',
      matrixSet: 'EPSG:3857'
    });
    map.addLayer(new TileLayer({ source: new WMTS(options) }));
  });
```

---

## 4. Modern OGC API — Features

Connect to modern RESTful OGC APIs (`ogc-api-features`):

```javascript
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import { bbox } from 'ol/loadingstrategy.js';

const ogcApiSource = new VectorSource({
  format: new GeoJSON(),
  strategy: bbox,
  loader: function (extent, resolution, projection, success, failure) {
    const [minx, miny, maxx, maxy] = extent;
    const url = `https://demo.pygeoapi.io/master/collections/lakes/items?` +
      `bbox=${minx},${miny},${maxx},${maxy}&bbox-crs=http://www.opengis.net/def/crs/EPSG/0/3857&limit=100`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const features = ogcApiSource.getFormat().readFeatures(data);
        ogcApiSource.addFeatures(features);
        success(features);
      })
      .catch(failure);
  }
});
```
