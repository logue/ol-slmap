# OpenLayers Official API Reference Catalog 📖🗺️

> Exhaustive index of all **293 official OpenLayers v10.10.0 modules and classes** from [`openlayers.org/en/latest/apidoc/`](https://openlayers.org/en/latest/apidoc/).

Every class, constructor, and module links directly to the live official OpenLayers documentation to enable immediate reference lookups.

---

## 📑 Architectural Domain Index

* [**Core Architecture, Map & View**](#core-architecture-map--view) (24 API units)
* [**Layers (ol/layer/*)**](#layers-ollayer) (21 API units)
* [**Sources (ol/source/*)**](#sources-olsource) (63 API units)
* [**Interactions & CAD (ol/interaction/*)**](#interactions--cad-olinteraction) (35 API units)
* [**Controls (ol/control/*)**](#controls-olcontrol) (12 API units)
* [**Geometries (ol/geom/*)**](#geometries-olgeom) (13 API units)
* [**Styling, Renderers & Shaders (ol/style/*, ol/render/*)**](#styling-renderers--shaders-olstyle-olrender) (34 API units)
* [**Vector Formats & Serialization (ol/format/*)**](#vector-formats--serialization-olformat) (56 API units)
* [**Projections, Extents & Tilegrids (ol/proj/*, ol/extent, ol/tilegrid/*)**](#projections-extents--tilegrids-olproj-olextent-oltilegrid) (10 API units)
* [**Events & Map Lifecycle (ol/events/*, ol/MapBrowserEvent)**](#events--map-lifecycle-olevents-olmapbrowserevent) (8 API units)
* [**Utilities & Core Primitives (ol/array, ol/xml, ol/util, etc.)**](#utilities--core-primitives-olarray-olxml-olutil-etc.) (17 API units)

---

## Core Architecture, Map & View

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/Collection`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `extend()`, `forEach()` *(+19 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html) |
| **`ol/DataTile`** | `Class` | `dispatchEvent()`, `getData()`, `getError()`, `getTileCoord()`, `load()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_DataTile-DataTile.html) |
| **`ol/DataTile`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_DataTile.html) |
| **`ol/Feature`** | `Class` | `changed()`, `clone()`, `dispatchEvent()`, `get()`, `getGeometry()` *(+17 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) |
| **`ol/Feature`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Feature.html) |
| **`ol/Geolocation`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAccuracy()`, `getAccuracyGeometry()` *(+20 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Geolocation-Geolocation.html) |
| **`ol/Image`** | `Module` | `decode()`, `load()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Image.html) |
| **`ol/ImageTile`** | `Class` | `dispatchEvent()`, `getImage()`, `getTileCoord()`, `load()`, `setState()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_ImageTile-ImageTile.html) |
| **`ol/Kinetic`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Kinetic-Kinetic.html) |
| **`ol/Map`** | `Class` | `addControl()`, `addInteraction()`, `addLayer()`, `addOverlay()`, `changed()` *(+44 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) |
| **`ol/Map`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Map.html) |
| **`ol/MapBrowserEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) |
| **`ol/MapEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html) |
| **`ol/Object`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getKeys()`, `getProperties()` *(+7 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html) |
| **`ol/Observable`** | `Class` | `changed()`, `dispatchEvent()`, `getRevision()`, `on()`, `once()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html) |
| **`ol/Observable`** | `Module` | `unByKey()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Observable.html) |
| **`ol/Overlay`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getElement()`, `getId()` *(+19 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html) |
| **`ol/Overlay`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Overlay.html) |
| **`ol/Tile`** | `Class` | `dispatchEvent()`, `getTileCoord()`, `load()`, `setState()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Tile-Tile.html) |
| **`ol/Tile`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Tile.html) |
| **`ol/TileState`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_TileState.html) |
| **`ol/VectorTile`** | `Class` | `dispatchEvent()`, `getFeatures()`, `getFormat()`, `getTileCoord()`, `setFeatures()` *(+2 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_VectorTile-VectorTile.html) |
| **`ol/View`** | `Class` | `adjustCenter()`, `adjustResolution()`, `adjustRotation()`, `adjustZoom()`, `animate()` *(+40 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) |
| **`ol/View`** | `Module` | `getView()`, `withExtentCenter()`, `withLowerResolutions()`, `withZoom()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_View.html) |

---

## Layers (ol/layer/*)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/layer/Base`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getExtent()`, `getKeys()` *(+23 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html) |
| **`ol/layer/Base`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base.html) |
| **`ol/layer/BaseImage`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getExtent()` *(+28 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseImage-BaseImageLayer.html) |
| **`ol/layer/BaseTile`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getData()` *(+33 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseTile-BaseTileLayer.html) |
| **`ol/layer/BaseVector`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getExtent()` *(+33 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html) |
| **`ol/layer/Graticule`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getExtent()` *(+35 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Graticule-Graticule.html) |
| **`ol/layer/Graticule`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Graticule.html) |
| **`ol/layer/Group`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getExtent()`, `getKeys()` *(+25 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Group-LayerGroup.html) |
| **`ol/layer/Group.GroupEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Group.GroupEvent.html) |
| **`ol/layer/Heatmap`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getBlur()` *(+41 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Heatmap-Heatmap.html) |
| **`ol/layer/Heatmap`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Heatmap.html) |
| **`ol/layer/Image`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getData()` *(+29 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Image-ImageLayer.html) |
| **`ol/layer/Layer`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getExtent()` *(+28 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html) |
| **`ol/layer/Layer`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer.html) |
| **`ol/layer/Tile`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getData()` *(+33 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html) |
| **`ol/layer/Vector`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getExtent()` *(+33 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html) |
| **`ol/layer/VectorImage`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getExtent()` *(+33 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorImage-VectorImageLayer.html) |
| **`ol/layer/VectorTile`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getBackground()` *(+40 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html) |
| **`ol/layer/VectorTile`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile.html) |
| **`ol/layer/WebGLTile`** | `Class` | `changed()`, `dispatchEvent()`, `dispose()`, `get()`, `getAttributions()` *(+35 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_WebGLTile-WebGLTileLayer.html) |
| **`ol/layer/WebGLTile`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_layer_WebGLTile.html) |

---

## Sources (ol/source/*)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/source`** | `Module` | `sourcesFromTileGrid()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source.html) |
| **`ol/source/arcgisRest`** | `Module` | `createLoader()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_arcgisRest.html) |
| **`ol/source/BingMaps`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getApiKey()` *(+26 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_BingMaps-BingMaps.html) |
| **`ol/source/BingMaps`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_BingMaps.html) |
| **`ol/source/CartoDB`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+27 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_CartoDB-CartoDB.html) |
| **`ol/source/CartoDB`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_CartoDB.html) |
| **`ol/source/Cluster`** | `Class` | `addFeature()`, `addFeatures()`, `changed()`, `clear()`, `dispatchEvent()` *(+39 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster-Cluster.html) |
| **`ol/source/Cluster`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster.html) |
| **`ol/source/DataTile`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+16 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_DataTile-DataTileSource.html) |
| **`ol/source/DataTile`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_DataTile.html) |
| **`ol/source/GeoTIFF`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+17 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF-GeoTIFFSource.html) |
| **`ol/source/GeoTIFF`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF.html) |
| **`ol/source/Google`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Google-Google.html) |
| **`ol/source/Google`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Google.html) |
| **`ol/source/IIIF`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_IIIF-IIIF.html) |
| **`ol/source/Image`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getAttributionsCollapsible()` *(+13 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Image-ImageSource.html) |
| **`ol/source/Image`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Image.html) |
| **`ol/source/Image.ImageSourceEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Image.ImageSourceEvent.html) |
| **`ol/source/ImageArcGISRest`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getAttributionsCollapsible()` *(+20 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageArcGISRest-ImageArcGISRest.html) |
| **`ol/source/ImageCanvas`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getAttributionsCollapsible()` *(+13 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageCanvas-ImageCanvasSource.html) |
| **`ol/source/ImageCanvas`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageCanvas.html) |
| **`ol/source/ImageMapGuide`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getAttributionsCollapsible()` *(+18 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageMapGuide-ImageMapGuide.html) |
| **`ol/source/ImageStatic`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getAttributionsCollapsible()` *(+15 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html) |
| **`ol/source/ImageTile`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+17 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageTile-ImageTileSource.html) |
| **`ol/source/ImageTile`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageTile.html) |
| **`ol/source/ImageWMS`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getAttributionsCollapsible()` *(+22 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageWMS-ImageWMS.html) |
| **`ol/source/mapguide`** | `Module` | `createLoader()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_mapguide.html) |
| **`ol/source/mapserver`** | `Module` | `createLoader()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_mapserver.html) |
| **`ol/source/OGCMap`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getAttributionsCollapsible()` *(+20 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_OGCMap-OGCMap.html) |
| **`ol/source/OGCMapTile`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_OGCMapTile-OGCMapTile.html) |
| **`ol/source/ogcMapUtil`** | `Module` | `createLoader()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_ogcMapUtil.html) |
| **`ol/source/OGCVectorTile`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+22 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_OGCVectorTile-OGCVectorTile.html) |
| **`ol/source/OSM`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html) |
| **`ol/source/OSM`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM.html) |
| **`ol/source/Raster`** | `Class` | `changed()`, `dispatchEvent()`, `dispose()`, `get()`, `getAttributions()` *(+15 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Raster-RasterSource.html) |
| **`ol/source/Raster`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Raster.html) |
| **`ol/source/Raster.RasterSourceEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Raster.RasterSourceEvent.html) |
| **`ol/source/SentinelHub`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+21 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_SentinelHub-SentinelHub.html) |
| **`ol/source/SentinelHub`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_SentinelHub.html) |
| **`ol/source/Source`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getAttributions()`, `getAttributionsCollapsible()` *(+13 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Source-Source.html) |
| **`ol/source/Source`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Source.html) |
| **`ol/source/StadiaMaps`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_StadiaMaps-StadiaMaps.html) |
| **`ol/source/static`** | `Module` | `createLoader()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_static.html) |
| **`ol/source/Tile`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+15 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Tile-TileSource.html) |
| **`ol/source/Tile.TileSourceEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Tile.TileSourceEvent.html) |
| **`ol/source/TileArcGISRest`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+27 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_TileArcGISRest-TileArcGISRest.html) |
| **`ol/source/TileDebug`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+17 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_TileDebug-TileDebug.html) |
| **`ol/source/TileImage`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_TileImage-TileImage.html) |
| **`ol/source/TileJSON`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+25 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON-TileJSON.html) |
| **`ol/source/TileJSON`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON.html) |
| **`ol/source/TileWMS`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+29 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html) |
| **`ol/source/UrlTile`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+22 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_UrlTile-UrlTile.html) |
| **`ol/source/UTFGrid`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `forDataAtCoordinateAndResolution()`, `get()` *(+17 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_UTFGrid-UTFGrid.html) |
| **`ol/source/UTFGrid`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_UTFGrid.html) |
| **`ol/source/Vector`** | `Class` | `addFeature()`, `addFeatures()`, `changed()`, `clear()`, `dispatchEvent()` *(+34 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) |
| **`ol/source/Vector.VectorSourceEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector.VectorSourceEvent.html) |
| **`ol/source/VectorTile`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+22 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_VectorTile-VectorTile.html) |
| **`ol/source/wms`** | `Module` | `createLoader()`, `getFeatureInfoUrl()`, `getLegendUrl()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_wms.html) |
| **`ol/source/WMTS`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+31 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html) |
| **`ol/source/WMTS`** | `Module` | `optionsFromCapabilities()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS.html) |
| **`ol/source/XYZ`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ-XYZ.html) |
| **`ol/source/Zoomify`** | `Class` | `changed()`, `clear()`, `dispatchEvent()`, `get()`, `getAttributions()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Zoomify-Zoomify.html) |
| **`ol/source/Zoomify`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_source_Zoomify.html) |

---

## Interactions & CAD (ol/interaction/*)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/interaction/DblClickDragZoom`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+11 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DblClickDragZoom-DblClickDragZoom.html) |
| **`ol/interaction/defaults`** | `Module` | `defaults()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_defaults.html) |
| **`ol/interaction/DoubleClickZoom`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+10 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DoubleClickZoom-DoubleClickZoom.html) |
| **`ol/interaction/DragAndDrop`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+11 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragAndDrop-DragAndDrop.html) |
| **`ol/interaction/DragAndDrop.DragAndDropEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragAndDrop.DragAndDropEvent.html) |
| **`ol/interaction/DragBox`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getGeometry()` *(+13 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBox.html) |
| **`ol/interaction/DragBox.DragBoxEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox.DragBoxEvent.html) |
| **`ol/interaction/DragPan`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+12 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragPan-DragPan.html) |
| **`ol/interaction/DragRotate`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+12 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotate-DragRotate.html) |
| **`ol/interaction/DragRotateAndZoom`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+12 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom.html) |
| **`ol/interaction/DragZoom`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getGeometry()` *(+13 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragZoom-DragZoom.html) |
| **`ol/interaction/Draw`** | `Class` | `abortDrawing()`, `appendCoordinates()`, `changed()`, `dispatchEvent()`, `extend()` *(+20 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-Draw.html) |
| **`ol/interaction/Draw`** | `Module` | `createBox()`, `createRegularPolygon()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html) |
| **`ol/interaction/Draw.DrawEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.DrawEvent.html) |
| **`ol/interaction/Extent`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getExtent()` *(+14 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Extent-Extent.html) |
| **`ol/interaction/Extent.ExtentEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Extent.ExtentEvent.html) |
| **`ol/interaction/Interaction`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+11 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html) |
| **`ol/interaction/KeyboardPan`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+10 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardPan-KeyboardPan.html) |
| **`ol/interaction/KeyboardZoom`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+10 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardZoom-KeyboardZoom.html) |
| **`ol/interaction/Link`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+13 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Link-Link.html) |
| **`ol/interaction/Link`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Link.html) |
| **`ol/interaction/Modify`** | `Class` | `canInsertPoint()`, `canRemovePoint()`, `changed()`, `dispatchEvent()`, `get()` *(+16 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify-Modify.html) |
| **`ol/interaction/Modify`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify.html) |
| **`ol/interaction/Modify.ModifyEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify.ModifyEvent.html) |
| **`ol/interaction/MouseWheelZoom`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+11 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_MouseWheelZoom-MouseWheelZoom.html) |
| **`ol/interaction/MouseWheelZoom`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_MouseWheelZoom.html) |
| **`ol/interaction/PinchRotate`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+12 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_PinchRotate-PinchRotate.html) |
| **`ol/interaction/PinchZoom`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+12 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_PinchZoom-PinchZoom.html) |
| **`ol/interaction/Pointer`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getKeys()` *(+12 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html) |
| **`ol/interaction/Select`** | `Class` | `changed()`, `clearSelection()`, `deselectFeature()`, `dispatchEvent()`, `get()` *(+19 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html) |
| **`ol/interaction/Select.SelectEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select.SelectEvent.html) |
| **`ol/interaction/Snap`** | `Class` | `addFeature()`, `changed()`, `dispatchEvent()`, `get()`, `getActive()` *(+14 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Snap-Snap.html) |
| **`ol/interaction/Snap`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Snap.html) |
| **`ol/interaction/Translate`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getActive()`, `getHitTolerance()` *(+14 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Translate-Translate.html) |
| **`ol/interaction/Translate.TranslateEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Translate.TranslateEvent.html) |

---

## Controls (ol/control/*)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/control/Attribution`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getCollapsed()`, `getCollapsible()` *(+14 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html) |
| **`ol/control/Control`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getKeys()`, `getMap()` *(+11 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html) |
| **`ol/control/defaults`** | `Module` | `defaults()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_defaults.html) |
| **`ol/control/FullScreen`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getKeys()`, `getMap()` *(+11 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_FullScreen-FullScreen.html) |
| **`ol/control/MousePosition`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getCoordinateFormat()`, `getKeys()` *(+14 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_MousePosition-MousePosition.html) |
| **`ol/control/OverviewMap`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getCollapsed()`, `getCollapsible()` *(+17 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_OverviewMap-OverviewMap.html) |
| **`ol/control/Rotate`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getKeys()`, `getMap()` *(+10 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html) |
| **`ol/control/ScaleLine`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getKeys()`, `getMap()` *(+13 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine-ScaleLine.html) |
| **`ol/control/ScaleLine`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine.html) |
| **`ol/control/Zoom`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getKeys()`, `getMap()` *(+11 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html) |
| **`ol/control/ZoomSlider`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getKeys()`, `getMap()` *(+10 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomSlider-ZoomSlider.html) |
| **`ol/control/ZoomToExtent`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getKeys()`, `getMap()` *(+11 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomToExtent-ZoomToExtent.html) |

---

## Geometries (ol/geom/*)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/geom/Circle`** | `Class` | `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()`, `get()` *(+27 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_Circle-Circle.html) |
| **`ol/geom/Geometry`** | `Class` | `changed()`, `dispatchEvent()`, `get()`, `getClosestPoint()`, `getExtent()` *(+15 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) |
| **`ol/geom/Geometry`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry.html) |
| **`ol/geom/GeometryCollection`** | `Class` | `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()`, `get()` *(+21 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_GeometryCollection-GeometryCollection.html) |
| **`ol/geom/LinearRing`** | `Class` | `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()`, `get()` *(+25 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_LinearRing-LinearRing.html) |
| **`ol/geom/LineString`** | `Class` | `appendCoordinate()`, `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()` *(+29 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_LineString-LineString.html) |
| **`ol/geom/MultiLineString`** | `Class` | `appendLineString()`, `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()` *(+29 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_MultiLineString-MultiLineString.html) |
| **`ol/geom/MultiPoint`** | `Class` | `appendPoint()`, `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()` *(+27 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_MultiPoint-MultiPoint.html) |
| **`ol/geom/MultiPolygon`** | `Class` | `appendPolygon()`, `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()` *(+29 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_MultiPolygon-MultiPolygon.html) |
| **`ol/geom/Point`** | `Class` | `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()`, `get()` *(+24 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_Point-Point.html) |
| **`ol/geom/Polygon`** | `Class` | `appendLinearRing()`, `applyTransform()`, `changed()`, `clone()`, `dispatchEvent()` *(+30 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_Polygon-Polygon.html) |
| **`ol/geom/Polygon`** | `Module` | `circular()`, `fromCircle()`, `fromExtent()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_Polygon.html) |
| **`ol/geom/SimpleGeometry`** | `Class` | `applyTransform()`, `changed()`, `dispatchEvent()`, `get()`, `getClosestPoint()` *(+19 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_geom_SimpleGeometry-SimpleGeometry.html) |

---

## Styling, Renderers & Shaders (ol/style/*, ol/render/*)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/color`** | `Module` | `asArray()`, `asString()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_color.html) |
| **`ol/colorlike`** | `Module` | `asColorLike()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_colorlike.html) |
| **`ol/render`** | `Module` | `getRenderPixel()`, `getVectorContext()`, `toContext()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_render.html) |
| **`ol/render/canvas/Immediate`** | `Class` | `drawCircle()`, `drawFeature()`, `drawGeometry()`, `setStyle()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_render_canvas_Immediate-CanvasImmediateRenderer.html) |
| **`ol/render/Event`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html) |
| **`ol/render/Feature`** | `Class` | `get()`, `getExtent()`, `getGeometry()`, `getId()`, `getProperties()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_render_Feature-RenderFeature.html) |
| **`ol/render/Feature`** | `Module` | `toFeature()`, `toGeometry()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_render_Feature.html) |
| **`ol/render/VectorContext`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_render_VectorContext-VectorContext.html) |
| **`ol/renderer/canvas/ImageLayer`** | `Class` | `changed()`, `dispatchEvent()`, `getRevision()`, `on()`, `once()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_canvas_ImageLayer-CanvasImageLayerRenderer.html) |
| **`ol/renderer/canvas/TileLayer`** | `Class` | `changed()`, `dispatchEvent()`, `getRevision()`, `on()`, `once()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_canvas_TileLayer-CanvasTileLayerRenderer.html) |
| **`ol/renderer/canvas/TileLayer`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_canvas_TileLayer.html) |
| **`ol/renderer/canvas/VectorImageLayer`** | `Class` | `changed()`, `dispatchEvent()`, `getRevision()`, `on()`, `once()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_canvas_VectorImageLayer-CanvasVectorImageLayerRenderer.html) |
| **`ol/renderer/canvas/VectorLayer`** | `Class` | `changed()`, `dispatchEvent()`, `getRevision()`, `on()`, `once()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_canvas_VectorLayer-CanvasVectorLayerRenderer.html) |
| **`ol/renderer/canvas/VectorTileLayer`** | `Class` | `changed()`, `dispatchEvent()`, `getRevision()`, `on()`, `once()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_canvas_VectorTileLayer-CanvasVectorTileLayerRenderer.html) |
| **`ol/renderer/Composite`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_Composite-CompositeMapRenderer.html) |
| **`ol/renderer/webgl/PointsLayer`** | `Class` | `changed()`, `dispatchEvent()`, `getRevision()`, `on()`, `once()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_webgl_PointsLayer-WebGLPointsLayerRenderer.html) |
| **`ol/renderer/webgl/PointsLayer`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_webgl_PointsLayer.html) |
| **`ol/renderer/webgl/TileLayer`** | `Class` | `changed()`, `dispatchEvent()`, `getRevision()`, `on()`, `once()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_webgl_TileLayer-WebGLTileLayerRenderer.html) |
| **`ol/renderer/webgl/TileLayer`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_renderer_webgl_TileLayer.html) |
| **`ol/style/Circle`** | `Class` | `clone()`, `getAnchor()`, `getAngle()`, `getDeclutterMode()`, `getDisplacement()` *(+21 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Circle-CircleStyle.html) |
| **`ol/style/Fill`** | `Class` | `clone()`, `getColor()`, `setColor()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Fill-Fill.html) |
| **`ol/style/flat`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_flat.html) |
| **`ol/style/Icon`** | `Class` | `clone()`, `getAnchor()`, `getColor()`, `getDeclutterMode()`, `getDisplacement()` *(+19 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Icon-Icon.html) |
| **`ol/style/Icon`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Icon.html) |
| **`ol/style/IconImageCache`** | `Class` | `setSize()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_IconImageCache-IconImageCache.html) |
| **`ol/style/IconImageCache`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_IconImageCache.html) |
| **`ol/style/Image`** | `Class` | `clone()`, `getDeclutterMode()`, `getDisplacement()`, `getOpacity()`, `getRotateWithView()` *(+7 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Image-ImageStyle.html) |
| **`ol/style/RegularShape`** | `Class` | `clone()`, `getAnchor()`, `getAngle()`, `getDeclutterMode()`, `getDisplacement()` *(+21 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_RegularShape-RegularShape.html) |
| **`ol/style/RegularShape`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_RegularShape.html) |
| **`ol/style/Stroke`** | `Class` | `clone()`, `getColor()`, `getLineCap()`, `getLineDash()`, `getLineDashOffset()` *(+12 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Stroke-Stroke.html) |
| **`ol/style/Style`** | `Class` | `clone()`, `getFill()`, `getGeometry()`, `getGeometryFunction()`, `getHitDetectionRenderer()` *(+13 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html) |
| **`ol/style/Style`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html) |
| **`ol/style/Text`** | `Class` | `clone()`, `getBackgroundFill()`, `getBackgroundStroke()`, `getDeclutterMode()`, `getFill()` *(+37 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Text-Text.html) |
| **`ol/style/Text`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_style_Text.html) |

---

## Vector Formats & Serialization (ol/format/*)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/format/EsriJSON`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+5 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_EsriJSON-EsriJSON.html) |
| **`ol/format/EsriJSON`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_EsriJSON.html) |
| **`ol/format/Feature`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_Feature-FeatureFormat.html) |
| **`ol/format/Feature`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_Feature.html) |
| **`ol/format/filter`** | `Module` | `and()`, `bbox()`, `between()`, `contains()`, `disjoint()` *(+14 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter.html) |
| **`ol/format/filter/Bbox`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Bbox-Bbox.html) |
| **`ol/format/filter/Contains`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Contains-Contains.html) |
| **`ol/format/filter/Disjoint`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Disjoint-Disjoint.html) |
| **`ol/format/filter/During`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_During-During.html) |
| **`ol/format/filter/DWithin`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_DWithin-DWithin.html) |
| **`ol/format/filter/EqualTo`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_EqualTo-EqualTo.html) |
| **`ol/format/filter/GreaterThan`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_GreaterThan-GreaterThan.html) |
| **`ol/format/filter/GreaterThanOrEqualTo`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_GreaterThanOrEqualTo-GreaterThanOrEqualTo.html) |
| **`ol/format/filter/Intersects`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Intersects-Intersects.html) |
| **`ol/format/filter/IsBetween`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_IsBetween-IsBetween.html) |
| **`ol/format/filter/IsLike`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_IsLike-IsLike.html) |
| **`ol/format/filter/IsNull`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_IsNull-IsNull.html) |
| **`ol/format/filter/LessThan`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_LessThan-LessThan.html) |
| **`ol/format/filter/LessThanOrEqualTo`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_LessThanOrEqualTo-LessThanOrEqualTo.html) |
| **`ol/format/filter/Not`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Not-Not.html) |
| **`ol/format/filter/NotEqualTo`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_NotEqualTo-NotEqualTo.html) |
| **`ol/format/filter/Or`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Or-Or.html) |
| **`ol/format/filter/Within`** | `Class` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Within-Within.html) |
| **`ol/format/GeoJSON`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+5 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GeoJSON-GeoJSON.html) |
| **`ol/format/GeoJSON`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GeoJSON.html) |
| **`ol/format/GML`** | `Class` | `writeFeatures()`, `writeFeaturesNode()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GML-GML.html) |
| **`ol/format/GML2`** | `Class` | `readFeature()`, `readFeatures()`, `readProjection()`, `writeFeatures()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GML2-GML2.html) |
| **`ol/format/GML3`** | `Class` | `readFeature()`, `readFeatures()`, `readProjection()`, `writeFeatures()`, `writeFeaturesNode()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GML3-GML3.html) |
| **`ol/format/GML32`** | `Class` | `readFeature()`, `readFeatures()`, `readProjection()`, `writeFeatures()`, `writeFeaturesNode()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GML32-GML32.html) |
| **`ol/format/GMLBase`** | `Class` | `readFeature()`, `readFeatures()`, `readProjection()`, `writeFeatures()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GMLBase-GMLBase.html) |
| **`ol/format/GPX`** | `Class` | `readFeature()`, `readFeatures()`, `readMetadata()`, `readProjection()`, `writeFeatures()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GPX-GPX.html) |
| **`ol/format/GPX`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_GPX.html) |
| **`ol/format/IGC`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+2 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_IGC-IGC.html) |
| **`ol/format/IGC`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_IGC.html) |
| **`ol/format/IIIFInfo`** | `Class` | `getImageApiVersion()`, `getTileSourceOptions()`, `setImageInfo()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_IIIFInfo-IIIFInfo.html) |
| **`ol/format/IIIFInfo`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_IIIFInfo.html) |
| **`ol/format/JSONFeature`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+2 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html) |
| **`ol/format/KML`** | `Class` | `readCamera()`, `readCameraFromNode()`, `readFeature()`, `readFeatures()`, `readName()` *(+6 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_KML-KML.html) |
| **`ol/format/KML`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_KML.html) |
| **`ol/format/MVT`** | `Class` | `readFeatures()`, `readProjection()`, `setLayers()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_MVT-MVT.html) |
| **`ol/format/OSMXML`** | `Class` | `readFeature()`, `readFeatures()`, `readProjection()`, `writeFeatures()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_OSMXML-OSMXML.html) |
| **`ol/format/Polyline`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+2 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_Polyline-Polyline.html) |
| **`ol/format/Polyline`** | `Module` | `decodeDeltas()`, `decodeFloats()`, `encodeDeltas()`, `encodeFloats()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_Polyline.html) |
| **`ol/format/TextFeature`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+2 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_TextFeature-TextFeature.html) |
| **`ol/format/TopoJSON`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+2 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_TopoJSON-TopoJSON.html) |
| **`ol/format/TopoJSON`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_TopoJSON.html) |
| **`ol/format/WFS`** | `Class` | `readFeature()`, `readFeatureCollectionMetadata()`, `readFeatures()`, `readProjection()`, `readTransactionResponse()` *(+3 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_WFS-WFS.html) |
| **`ol/format/WFS`** | `Module` | `writeFilter()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_WFS.html) |
| **`ol/format/WKB`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+2 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_WKB-WKB.html) |
| **`ol/format/WKT`** | `Class` | `readFeature()`, `readFeatures()`, `readGeometry()`, `readProjection()`, `writeFeature()` *(+2 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_WKT-WKT.html) |
| **`ol/format/WKT`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_WKT.html) |
| **`ol/format/WMSCapabilities`** | `Class` | `read()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_WMSCapabilities-WMSCapabilities.html) |
| **`ol/format/WMSGetFeatureInfo`** | `Class` | `readFeature()`, `readFeatures()`, `readProjection()`, `writeFeatures()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_WMSGetFeatureInfo-WMSGetFeatureInfo.html) |
| **`ol/format/WMTSCapabilities`** | `Class` | `read()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_WMTSCapabilities-WMTSCapabilities.html) |
| **`ol/format/XML`** | `Class` | `read()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_XML-XML.html) |
| **`ol/format/XMLFeature`** | `Class` | `readFeature()`, `readFeatures()`, `readProjection()`, `writeFeatures()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_format_XMLFeature-XMLFeature.html) |

---

## Projections, Extents & Tilegrids (ol/proj/*, ol/extent, ol/tilegrid/*)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/extent`** | `Module` | `applyTransform()`, `boundingExtent()`, `buffer()`, `containsCoordinate()`, `containsExtent()` *(+17 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_extent.html) |
| **`ol/proj`** | `Module` | `addCoordinateTransforms()`, `addEquivalentProjections()`, `addProjection()`, `clearUserProjection()`, `equivalent()` *(+10 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_proj.html) |
| **`ol/proj/proj4`** | `Module` | `epsgLookupMapTiler()`, `fromEPSGCode()`, `fromProjectionCode()`, `register()`, `setEPSGLookup()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_proj_proj4.html) |
| **`ol/proj/Projection`** | `Class` | `getAxisOrientation()`, `getCode()`, `getExtent()`, `getMetersPerUnit()`, `getUnits()` *(+6 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html) |
| **`ol/proj/Projection`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection.html) |
| **`ol/proj/Units`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_proj_Units.html) |
| **`ol/tilegrid`** | `Module` | `createXYZ()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_tilegrid.html) |
| **`ol/tilegrid/TileGrid`** | `Class` | `forEachTileCoord()`, `getExtent()`, `getMaxZoom()`, `getMinZoom()`, `getOrigin()` *(+7 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_tilegrid_TileGrid-TileGrid.html) |
| **`ol/tilegrid/WMTS`** | `Class` | `forEachTileCoord()`, `getExtent()`, `getMatrixIds()`, `getMaxZoom()`, `getMinZoom()` *(+8 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_tilegrid_WMTS-WMTSTileGrid.html) |
| **`ol/tilegrid/WMTS`** | `Module` | `createFromCapabilitiesMatrixSet()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_tilegrid_WMTS.html) |

---

## Events & Map Lifecycle (ol/events/*, ol/MapBrowserEvent)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/Collection.CollectionEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Collection.CollectionEvent.html) |
| **`ol/events`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_events.html) |
| **`ol/events/condition`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html) |
| **`ol/events/Event`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html) |
| **`ol/events/SnapEvent`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_events_SnapEvent.html) |
| **`ol/events/SnapEvent.SnapEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_events_SnapEvent.SnapEvent.html) |
| **`ol/events/Target`** | `Class` | `dispatchEvent()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_events_Target-Target.html) |
| **`ol/Object.ObjectEvent`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) |

---

## Utilities & Core Primitives (ol/array, ol/xml, ol/util, etc.)

| Class / Module | Type | Primary Methods / Members | Official Documentation Link |
| :--- | :---: | :--- | :--- |
| **`ol/array`** | `Module` | `stableSort()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_array.html) |
| **`ol/coordinate`** | `Module` | `add()`, `createStringXY()`, `format()`, `rotate()`, `toStringHDMS()` *(+1 more)* | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html) |
| **`ol/easing`** | `Module` | `easeIn()`, `easeOut()`, `inAndOut()`, `linear()`, `upAndDown()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_easing.html) |
| **`ol/expr/expression`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_expr_expression.html) |
| **`ol/featureloader`** | `Module` | `setWithCredentials()`, `xhr()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_featureloader.html) |
| **`ol/Geolocation.GeolocationError`** | `Class` | `preventDefault()`, `stopPropagation()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_Geolocation.GeolocationError.html) |
| **`ol/has`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_has.html) |
| **`ol/loadingstrategy`** | `Module` | `all()`, `bbox()`, `tile()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_loadingstrategy.html) |
| **`ol/pixel`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_pixel.html) |
| **`ol/size`** | `Module` | `toSize()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_size.html) |
| **`ol/sphere`** | `Module` | `getArea()`, `getDistance()`, `getLength()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_sphere.html) |
| **`ol/structs/LRUCache`** | `Class` | `setSize()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_structs_LRUCache-LRUCache.html) |
| **`ol/tilecoord`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_tilecoord.html) |
| **`ol/transform`** | `Module` | `composeCssTransform()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_transform.html) |
| **`ol/util`** | `Module` | `getUid()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_util.html) |
| **`ol/webgl`** | `Module` | — | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_webgl.html) |
| **`ol/xml`** | `Module` | `getAllTextContent()`, `parse()`, `registerDocument()`, `registerXMLSerializer()` | [Docs &rarr;](https://openlayers.org/en/latest/apidoc/module-ol_xml.html) |

---
