# OpenLayers Styling & Shader Expressions Reference 🎨✨

> Complete technical dictionary for OpenLayers vector styling, dynamic style functions, modern Flat Style expressions, and WebGL shader rules.

---

## 1. Imperative Styling (`ol/style/Style`)

Traditional OpenLayers styling constructs reusable style objects composed of Fill, Stroke, Image, and Text:

```javascript
import Style from 'ol/style/Style.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import CircleStyle from 'ol/style/Circle.js';
import Text from 'ol/style/Text.js';

const style = new Style({
  fill: new Fill({ color: 'rgba(0, 132, 255, 0.25)' }),
  stroke: new Stroke({ color: '#0084FF', width: 2, lineDash: [4, 4] }),
  image: new CircleStyle({
    radius: 7,
    fill: new Fill({ color: '#00D2FF' }),
    stroke: new Stroke({ color: '#ffffff', width: 2 })
  }),
  text: new Text({
    text: 'Landmark',
    font: '13px sans-serif',
    fill: new Fill({ color: '#0f172a' }),
    stroke: new Stroke({ color: '#ffffff', width: 3 })
  })
});
```

---

## 2. Dynamic Style Functions

A style function is invoked per feature per resolution, enabling data-driven and zoom-responsive rendering:

```javascript
const styleFunction = (feature, resolution) => {
  const population = feature.get('population') || 0;
  const color = population > 1000000 ? '#ef4444' :
                population > 250000  ? '#0084FF' : '#64748b';

  return new Style({
    image: new CircleStyle({
      radius: Math.min(25, Math.max(5, population / 100000)),
      fill: new Fill({ color: color }),
      stroke: new Stroke({ color: '#ffffff', width: 1.5 })
    })
  });
};
```

---

## 3. Flat Style Expressions (Modern Declarative Styling)

OpenLayers supports declarative, serializable JSON styling directly on `VectorLayer`, `VectorTileLayer`, and `WebGLPointsLayer`:

```javascript
const flatStyle = {
  'fill-color': [
    'interpolate', ['linear'], ['get', 'population'],
    10000, 'rgba(0, 210, 255, 0.3)',
    500000, 'rgba(0, 132, 255, 0.6)',
    2000000, 'rgba(239, 68, 68, 0.8)'
  ],
  'stroke-color': '#0084FF',
  'stroke-width': [
    'case',
    ['==', ['get', 'class'], 'motorway'], 3.5,
    ['==', ['get', 'class'], 'primary'], 2.0,
    1.0
  ]
};

const vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: flatStyle
});
```

---

## 4. WebGL Tile Shader Expressions

Applied directly to `ol/layer/WebGLTile` to manipulate raster pixels directly in the GPU fragment shader:

```javascript
const webglTileLayer = new ol.layer.WebGLTile({
  source: cogSource,
  style: {
    // Dynamic contrast and brightness enhancement
    color: [
      'array',
      ['*', 1.25, ['band', 1]], // Red
      ['*', 1.10, ['band', 2]], // Green
      ['*', 1.00, ['band', 3]], // Blue
      1.0
    ]
  }
});
```
