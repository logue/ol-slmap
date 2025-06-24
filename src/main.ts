import { addProjection, Projection } from 'ol/proj';
import Attribution from 'ol/control/Attribution';
import Map from 'ol/Map';
import MousePosition from 'ol/control/MousePosition';
import Overlay from 'ol/Overlay';
import Tile from 'ol/layer/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import Zoom from 'ol/control/Zoom';
import ZoomSlider from 'ol/control/ZoomSlider';
import type { Extent } from 'ol/extent';
import type MapBrowserEvent from 'ol/MapBrowserEvent';
import type { Coordinate } from 'ol/coordinate';
import './styles.scss';

// Declare slRegionName as a global variable to be set by the dynamic script
declare let slRegionName: any | undefined;

/**
 * The maximum width/height of the SL grid in regions:
 * 2^20 regions on a side = 1,048,786    ("This should be enough for anyone")
 * NOTE: This must be a power of 2 and divisible by 2^(max zoom) = 256
 */
const MAP_GRID_EDGE_SIZE = 1048576; // 2^20
const MIN_ZOOM_LEVEL = 1;
const MAX_ZOOM_LEVEL = 8;
const CAPABILITY_BASE_URL = 'https://cap.secondlife.com/';
const JOIN_BASE_URL = 'https://join.secondlife.com/';
const LOCATION_URI_PREFIX = 'secondlife://';
const SL_BASE_URL = 'https://secondlife.com/';
const TILE_URL = 'https://secondlife-maps-cdn.akamaized.net';

/**
 * Elements that make up the popup.
 */
const container = document.getElementById('popup')!;
const content = document.getElementById('popup-content')!;
const closer = document.getElementById('popup-closer')!;
/**
 * Create an overlay to anchor the popup to the map.
 */
const overlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
});

/**
 * Add a click handler to hide the popup.
 * @return Don't follow the href.
 */
closer.onclick = (): boolean => {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

/** Max map size [minx, miny, maxx, maxy] */
const extent: Extent = [0, 0, MAP_GRID_EDGE_SIZE, MAP_GRID_EDGE_SIZE];
/** All Resolution */
const resolutions: number[] = [];
for (let zl = MIN_ZOOM_LEVEL; zl <= MAX_ZOOM_LEVEL; zl++) {
  resolutions.unshift(Math.pow(2, zl - 1)); // [128, 64, ..., 1]
}
/** Raster projection */
const projection = new Projection({
  code: 'raster',
  units: 'tile-pixels',
  extent,
});
addProjection(projection);

/** Second Life Map Layer */
const slLayer = new Tile({
  source: new XYZ({
    projection,
    tileGrid: new TileGrid({
      extent,
      resolutions,
      /** Tile size in pixels */
      tileSize: 256,
      /** Tile origin in pixels */
      origin: [0, 0],
    }),
    tileUrlFunction: (tileCoord: Coordinate) => {
      const z = tileCoord[0];
      const x = tileCoord[1];
      const y = tileCoord[2];

      const zoomLevel = Math.abs(z - MAX_ZOOM_LEVEL);
      /**
       * Calculate the region co-ordinates based on the tile co-ordinates.
       */
      const regionsPerTileEdge = Math.pow(2, zoomLevel - 1);
      const region_x = x * regionsPerTileEdge;
      const region_y = (Math.abs(y) - 1) * regionsPerTileEdge;

      return `${TILE_URL}/map-${zoomLevel}-${region_x}-${region_y}-objects.jpg`;
    },
    attributions: `© <a href="${SL_BASE_URL}">Second Life</a>`,
  }),
});

/** OpenLayers Map */
const map = new Map({
  controls: [
    new MousePosition({
      className: 'text-end text-warning',
      coordinateFormat: (o?: Coordinate) => {
        if (!o) return '';
        const ret: string[] = [];
        o.forEach(e => ret.push(e.toFixed(0)));
        return ret.join(', ');
      },
      target: document.getElementById('mouse-position')!,
    }),
    new Zoom(),
    new ZoomSlider(),
    new Attribution({ collapsible: false }),
  ],
  target: 'map',
  layers: [
    slLayer,
    /*
    new Tile({
      source: new TileDebug({
        template: "z:{z} x:{x} y:{y}",
        projection: slLayer.getSource().getProjection(),
        tileGrid: slLayer.getSource().getTileGrid(),
        zDirection: 1,
      }),
    }),
    */
  ],
  overlays: [overlay],
  view: new View({
    projection,
    center: [255230, 256510], // Center of the SL grid
    // Start at zoom level 1, so we can see the whole grid
    // Note: OpenLayers uses a zoom level of 0 for the highest zoom level,
    // so we need to subtract 1 from the zoom level.
    zoom: 1,
    minZoom: MIN_ZOOM_LEVEL - 1,
    maxZoom: MAX_ZOOM_LEVEL - 1,
    extent,
    resolution: 1,
    resolutions,
  }),
});

/**
 * Add a click handler to the map to render the popup.
 */
map.on('singleclick', async (evt: MapBrowserEvent<any>) => {
  const coordinate = evt.coordinate;
  const x = coordinate[0] / 256;
  const y = coordinate[1] / 256;
  // Work out region co-ords, and local co-ords within region
  const int_x = Math.floor(x);
  const int_y = Math.floor(y);

  const local_x = Math.round((x - int_x) * 256);
  const local_y = Math.round((y - int_y) * 256);

  // Add a dynamic script to get this region name, and then trigger a URL change
  // based on the results
  const scriptURL = `${CAPABILITY_BASE_URL}cap/0/b713fe80-283b-4585-af4d-a3b7d9a32492?var=slRegionName&grid_x=${int_x}&grid_y=${int_y}`;
  // Once the script has loaded, we use the result to teleport the user into SL
  slAddDynamicScript(scriptURL, async () => {
    if (slRegionName == null || slRegionName.error) {
      return;
    }
    const regionName = encodeURIComponent(slRegionName);
    const regionLocation = `${regionName}/${local_x}/${local_y}`;
    const slurl = `${LOCATION_URI_PREFIX}${regionLocation}`;

    content.innerHTML =
      `<h3><a href="${slurl}">${slRegionName}</a></h3>` +
      `<p>Tile: ${int_x}, ${int_y}<br />` +
      `Coordinate: ${Math.round(coordinate[0])}, ${Math.round(coordinate[1])}</p>` +
      `<div class="d-grid gap-2"><a class="btn btn-primary" title="Teleport" href="${slurl}">Teleport</a>` +
      `<a class="btn btn-secondary" href="${JOIN_BASE_URL}">Join free today</a></div>` +
      `</div>`;
    overlay.setPosition(coordinate);
  });
});

/**
 * Loads the script with the given URL by adding a script tag to the document.
 *
 * @private
 * @param scriptURL the script to load
 * @param onLoadHandler a callback to call when the script is loaded (optional)
 */
function slAddDynamicScript(
  scriptURL: string,
  onLoadHandler: Function,
  id: string = 'sl-dynamic-script'
): void {
  if (document.getElementById(id)) {
    // If the script is already loaded, remove it first
    // This is to prevent multiple scripts being loaded if the user clicks multiple times
    // on the map before the script has loaded
    // This is a workaround for the fact that OpenLayers doesn't support dynamic script loading
    // in a way that works across all browsers.
    document.body.removeChild(document.getElementById(id) as HTMLScriptElement);
  }
  const script = document.createElement('script');
  script.src = scriptURL;
  script.id = id;
  script.type = 'text/javascript';
  document.body.appendChild(script);

  if (onLoadHandler) {
    // Need to use ready state change for IE as it doesn't support onload for scripts
    script.addEventListener('readystatechange', () => {
      const s = script as HTMLScriptElement & { readyState?: string };
      if (s.readyState == 'complete' || s.readyState == 'loaded') {
        onLoadHandler();
      }
    });

    // Standard onload for Firefox/Safari/Opera etc
    script.onload = () => onLoadHandler();
  }
}
