# OpenLayers Interactions & Controls Reference ✍️🛠️

> Exhaustive technical reference for OpenLayers user interactions (`Draw`, `Modify`, `Snap`, `Select`, `Translate`, `DragBox`) and UI controls (`Zoom`, `ScaleLine`, `FullScreen`, `OverviewMap`).

---

## 1. Vector Digitization & Editing Interactions

OpenLayers provides a modular GIS CAD-style editing suite:

### 1. `Draw` (`ol/interaction/Draw`)
Interactively digitizes points, polylines, polygons, circles, and regular shapes:
```javascript
import Draw from 'ol/interaction/Draw.js';

const draw = new Draw({
  source: vectorSource,
  type: 'Polygon',
  freehand: false,
  snapTolerance: 12
});
map.addInteraction(draw);
```

### 2. `Modify` (`ol/interaction/Modify`)
Enables dragging and repositioning existing vertices, or inserting new vertices by clicking along edges:
```javascript
import Modify from 'ol/interaction/Modify.js';

const modify = new Modify({
  source: vectorSource,
  insertVertexCondition: ol.events.condition.always
});
map.addInteraction(modify);
```

### 3. `Snap` (`ol/interaction/Snap`)
Provides magnetic boundary snapping to existing geometries during drawing or modification:
```javascript
import Snap from 'ol/interaction/Snap.js';

const snap = new Snap({
  source: vectorSource,
  pixelTolerance: 10
});
// Snap MUST be added AFTER Draw and Modify!
map.addInteraction(snap);
```

### 4. `Select` (`ol/interaction/Select`)
Highlights features on click or hover:
```javascript
import Select from 'ol/interaction/Select.js';
import { pointerMove, click } from 'ol/events/condition.js';

const select = new Select({
  condition: click, // or pointerMove for hover highlight
  style: new Style({
    stroke: new Stroke({ color: '#00D2FF', width: 3 }),
    fill: new Fill({ color: 'rgba(0, 210, 255, 0.4)' })
  })
});
map.addInteraction(select);
```

---

## 2. Built-in UI Controls

Controls inherit from `ol/control/Control` and render directly into DOM containers:

```javascript
import { defaults as defaultControls, FullScreen, ScaleLine, OverviewMap } from 'ol/control.js';

const map = new Map({
  target: 'map',
  controls: defaultControls().extend([
    new FullScreen(),
    new ScaleLine({
      units: 'metric',
      bar: true,
      steps: 4,
      text: true,
      minWidth: 140
    }),
    new OverviewMap({
      collapsed: false,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://api.maptiler.com/maps/dataviz-v4-dark/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
            tileSize: 512
          })
        })
      ]
    })
  ])
});
```
