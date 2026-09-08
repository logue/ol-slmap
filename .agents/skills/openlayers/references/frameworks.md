# OpenLayers in Modern Frontend Frameworks

This guide details best practices and lifecycle management for OpenLayers in React, Next.js (App Router), Vue 3, and Svelte.

---

## 1. React Lifecycle Pattern (`useRef` + `useEffect`)

```tsx
import React, { useEffect, useRef } from "react";
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";

export default function OpenLayersMap() {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapElement.current) return;

    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=YOUR_API_KEY",
            tileSize: 512,
            maxZoom: 22,
            attributions: '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
          })
        })
      ],
      view: new View({
        center: fromLonLat([14.4378, 50.0755]),
        zoom: 13
      })
    });

    mapRef.current = map;

    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div ref={mapElement} style={{ height: "100vh", width: "100%" }} />;
}
```

---

## 2. Next.js App Router (SSR Fix)

Because OpenLayers accesses `window` and `document`, load the map component dynamically with SSR disabled:

```tsx
// app/page.tsx
"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/OpenLayersMap"), {
  ssr: false,
  loading: () => <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading map...</div>
});

export default function Page() {
  return <MapComponent />;
}
```

---

## 3. Svelte / SvelteKit

```html
<script>
  import { onMount, onDestroy } from "svelte";
  import Map from "ol/Map.js";
  import View from "ol/View.js";
  import TileLayer from "ol/layer/Tile.js";
  import XYZ from "ol/source/XYZ.js";
  import { fromLonLat } from "ol/proj.js";
  import "ol/ol.css";

  let mapContainer;
  let map;

  onMount(() => {
    map = new Map({
      target: mapContainer,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=YOUR_API_KEY",
            tileSize: 512,
            maxZoom: 22
          })
        })
      ],
      view: new View({
        center: fromLonLat([14.4378, 50.0755]),
        zoom: 13
      })
    });
  });

  onDestroy(() => {
    if (map) map.setTarget(null);
  });
</script>

<div bind:this={mapContainer} style="height: 100vh; width: 100%;"></div>
```
