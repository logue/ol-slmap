# Canvas Operations, Swipe Effects & Visual Animations in OpenLayers

OpenLayers gives full access to HTML5 Canvas 2D contexts before and after rendering (`prerender`, `postrender`), enabling visual effects and animations.

---

## 1. Split-Screen Layer Swipe / Spyglass Magnifier

Clip layers along a slider position using native canvas clipping in `prerender` / `postrender`:

```javascript
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import { getRenderPixel } from "ol/render.js";

const streetLayer = new TileLayer({
  source: new XYZ({ url: "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=KEY" })
});
const aerialLayer = new TileLayer({
  source: new XYZ({ url: "https://api.maptiler.com/maps/satellite-v4/{z}/{x}/{y}.jpg?key=KEY" })
});

map.addLayer(streetLayer);
map.addLayer(aerialLayer);

const swipeInput = document.getElementById("swipe");

aerialLayer.on("prerender", (event) => {
  const ctx = event.context;
  const mapSize = map.getSize();
  const width = mapSize[0] * (parseFloat(swipeInput.value) / 100);

  const tl = getRenderPixel(event, [width, 0]);
  const tr = getRenderPixel(event, [mapSize[0], 0]);
  const bl = getRenderPixel(event, [width, mapSize[1]]);
  const br = getRenderPixel(event, mapSize);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(tl[0], tl[1]);
  ctx.lineTo(tr[0], tr[1]);
  ctx.lineTo(br[0], br[1]);
  ctx.lineTo(bl[0], bl[1]);
  ctx.closePath();
  ctx.clip();
});

aerialLayer.on("postrender", (event) => {
  event.context.restore();
});

swipeInput.addEventListener("input", () => map.render());
```

---

## 2. Pulsing Animated Radar Ring (`postrender`)

```javascript
import { unByKey } from "ol/Observable.js";
import { easeOut } from "ol/easing.js";
import { Stroke, Style, Circle as CircleStyle } from "ol/style.js";
import { getVectorContext } from "ol/render.js";

function flashFeature(feature) {
  const start = Date.now();
  const duration = 3000;
  const geom = feature.getGeometry().clone();
  
  const listenerKey = tileLayer.on("postrender", (event) => {
    const frameState = event.frameState;
    const elapsed = frameState.time - start;
    if (elapsed >= duration) {
      unByKey(listenerKey);
      return;
    }
    const elapsedRatio = elapsed / duration;
    const radius = easeOut(elapsedRatio) * 35 + 5;
    const opacity = easeOut(1 - elapsedRatio);

    const style = new Style({
      image: new CircleStyle({
        radius: radius,
        stroke: new Stroke({
          color: `rgba(0, 210, 255, ${opacity})`,
          width: 0.25 + opacity * 2.5
        })
      })
    });

    const vectorContext = getVectorContext(event);
    vectorContext.setStyle(style);
    vectorContext.drawGeometry(geom);
    map.render();
  });
}
```

---

## 3. High-Resolution PDF & PNG Map Export

```javascript
import jsPDF from "jspdf";

document.getElementById("export-pdf").addEventListener("click", () => {
  map.once("rendercomplete", () => {
    const mapCanvas = document.createElement("canvas");
    const size = map.getSize();
    mapCanvas.width = size[0];
    mapCanvas.height = size[1];
    const mapContext = mapCanvas.getContext("2d");

    Array.prototype.forEach.call(
      map.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),
      (canvas) => {
        if (canvas.width > 0) {
          const opacity = canvas.parentNode.style.opacity || canvas.style.opacity;
          mapContext.globalAlpha = opacity === "" ? 1 : Number(opacity);
          const transform = canvas.style.transform;
          const matrix = transform
            ? transform.match(/^matrix\(([^(]+)\)$/)[1].split(",").map(Number)
            : [1, 0, 0, 1, 0, 0];
          CanvasRenderingContext2D.prototype.setTransform.apply(mapContext, matrix);
          mapContext.drawImage(canvas, 0, 0);
        }
      }
    );

    const pdf = new jsPDF("landscape", undefined, "a4");
    pdf.addImage(mapCanvas.toDataURL("image/jpeg"), "JPEG", 0, 0, 297, 210);
    pdf.save("map-report.pdf");
  });
  map.renderSync();
});
```
