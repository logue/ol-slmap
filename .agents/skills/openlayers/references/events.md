# OpenLayers Events — Reference

OpenLayers uses `on()`, `once()`, and `un()` methods for event handling. Events exist on maps, views, layers, sources, and interactions.

---

## Map Events

### Pointer Events

```js
// Click on map
map.on('click', (e) => {
  console.log('Pixel:', e.pixel);          // [x, y] screen coords
  console.log('Coordinate:', e.coordinate); // [x, y] in EPSG:3857
  const [lng, lat] = ol.proj.toLonLat(e.coordinate);
  console.log('LngLat:', lng, lat);
});

// Double click
map.on('dblclick', (e) => {
  e.preventDefault();  // prevent zoom
  console.log('Double clicked');
});

// Pointer move (hover)
map.on('pointermove', (e) => {
  // Check if pointer is over a feature
  const hit = map.hasFeatureAtPixel(e.pixel);
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});

// Right click (context menu)
map.getViewport().addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const pixel = map.getEventPixel(e);
  const coordinate = map.getCoordinateFromPixel(pixel);
  console.log('Right click at:', ol.proj.toLonLat(coordinate));
});
```

### Feature at Pixel

```js
// Get first feature at click point
map.on('click', (e) => {
  const feature = map.forEachFeatureAtPixel(e.pixel, (f) => f);
  if (feature) {
    console.log('Clicked feature:', feature.get('name'));
  }
});

// Get feature from specific layer only
map.on('click', (e) => {
  const feature = map.forEachFeatureAtPixel(e.pixel, (f) => f, {
    layerFilter: (layer) => layer === myVectorLayer
  });
});

// Get ALL features at pixel
map.on('click', (e) => {
  const features = [];
  map.forEachFeatureAtPixel(e.pixel, (f, layer) => {
    features.push({ feature: f, layer });
  });
  console.log(`${features.length} features at click point`);
});
```

### Render Events

```js
// After all tiles and features are rendered
map.on('rendercomplete', () => {
  console.log('Render complete — safe to export');
});

// Before each frame render
map.on('prerender', (e) => {
  // e.context = canvas 2D context
});

// After each frame render
map.on('postrender', (e) => {
  // e.context = canvas 2D context
});

// Map fully loaded (tiles + layers)
map.once('loadend', () => {
  console.log('Map finished loading');
});
```

---

## View Events

### Camera Change

```js
const view = map.getView();

// Center changed
view.on('change:center', () => {
  const [lng, lat] = ol.proj.toLonLat(view.getCenter());
  console.log('Center:', lng, lat);
});

// Zoom changed
view.on('change:resolution', () => {
  console.log('Zoom:', view.getZoom());
  console.log('Resolution:', view.getResolution(), 'm/px');
});

// Rotation changed
view.on('change:rotation', () => {
  console.log('Rotation:', view.getRotation(), 'rad');
});
```

### Move End (after animation completes)

```js
map.on('moveend', () => {
  const [lng, lat] = ol.proj.toLonLat(map.getView().getCenter());
  const zoom = map.getView().getZoom();
  console.log(`Moved to: ${lng.toFixed(4)}, ${lat.toFixed(4)} @ z${zoom.toFixed(1)}`);
});
```

---

## Layer Events

```js
// Visibility changed
layer.on('change:visible', () => {
  console.log('Layer visible:', layer.getVisible());
});

// Opacity changed
layer.on('change:opacity', () => {
  console.log('Opacity:', layer.getOpacity());
});

// Source changed
layer.on('change:source', () => {
  console.log('Source updated');
});
```

---

## Source Events

### Vector Source

```js
const source = new ol.source.Vector({ ... });

// Feature added
source.on('addfeature', (e) => {
  console.log('Added:', e.feature.get('name'));
});

// Feature removed
source.on('removefeature', (e) => {
  console.log('Removed:', e.feature.get('name'));
});

// Feature changed
source.on('changefeature', (e) => {
  console.log('Changed:', e.feature.get('name'));
});

// All features loaded (from URL)
source.on('featuresloadend', () => {
  console.log(`Loaded ${source.getFeatures().length} features`);
});
```

### Tile Source

```js
const tileSource = new ol.source.XYZ({ ... });

// Tile loading started
tileSource.on('tileloadstart', () => {
  document.getElementById('loading').style.display = 'block';
});

// All tiles loaded
tileSource.on('tileloadend', () => {
  // Check if still loading
});

// Tile load error
tileSource.on('tileloaderror', (e) => {
  console.error('Failed to load tile');
});
```

---

## Interaction Events

### Draw Interaction

```js
const draw = new ol.interaction.Draw({
  source: vectorSource,
  type: 'Polygon'
});

draw.on('drawstart', (e) => {
  console.log('Drawing started');
});

draw.on('drawend', (e) => {
  const format = new ol.format.GeoJSON({ featureProjection: 'EPSG:3857' });
  const geojson = format.writeFeature(e.feature);
  console.log('Drawn:', geojson);
});

draw.on('drawabort', () => {
  console.log('Drawing cancelled');
});
```

### Select Interaction

```js
const select = new ol.interaction.Select();

select.on('select', (e) => {
  console.log('Selected:', e.selected.length, 'features');
  console.log('Deselected:', e.deselected.length, 'features');

  e.selected.forEach((f) => {
    console.log('  ', f.get('name'));
  });
});
```

### Modify Interaction

```js
const modify = new ol.interaction.Modify({ source: vectorSource });

modify.on('modifystart', (e) => {
  console.log('Modifying', e.features.getLength(), 'features');
});

modify.on('modifyend', (e) => {
  console.log('Modified');
});
```

---

## Event Utilities

### Listen Once

```js
map.once('click', (e) => {
  console.log('First click only');
});
```

### Remove Listener

```js
const key = map.on('click', handler);
ol.Observable.unByKey(key);
```

### Prevent Default

```js
// Prevent double-click zoom
map.on('dblclick', (e) => {
  e.preventDefault();
});
```

---

## Common Event Patterns

### Loading Indicator

```js
let loading = 0;

map.getLayers().forEach((layer) => {
  const source = layer.getSource();
  if (source instanceof ol.source.TileImage) {
    source.on('tileloadstart', () => {
      loading++;
      showSpinner();
    });
    source.on('tileloadend', () => {
      loading--;
      if (loading === 0) hideSpinner();
    });
    source.on('tileloaderror', () => {
      loading--;
      if (loading === 0) hideSpinner();
    });
  }
});
```

### Debounced Move Handler

```js
let timer;
map.on('moveend', () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    const extent = map.getView().calculateExtent(map.getSize());
    loadDataForExtent(extent);
  }, 300);
});
```
