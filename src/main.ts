// Shoelace imports
import { setBasePath } from '@awesome.me/webawesome/dist/utilities/base-path.js';
// Web Awesome styles
import '@awesome.me/webawesome/dist/styles/webawesome.css';
// Import the components you want to use
import '@awesome.me/webawesome/dist/components/page/page.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/card/card.js';

// Set the base path to the Shoelace assets (e.g. icons, themes)
setBasePath('@awesome.me/webawesome/dist');

// Import base styles for the appß
import './styles.scss';

import Attribution from 'ol/control/Attribution';
import MousePosition from 'ol/control/MousePosition';
import Zoom from 'ol/control/Zoom';
import ZoomSlider from 'ol/control/ZoomSlider';
import type { Coordinate } from 'ol/coordinate';
import type { Extent } from 'ol/extent';
import Tile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import type MapBrowserEvent from 'ol/MapBrowserEvent';
import Overlay from 'ol/Overlay';
// OpenLayers imports
import { addProjection, Projection } from 'ol/proj';
import XYZ from 'ol/source/XYZ';
import TileGrid from 'ol/tilegrid/TileGrid';
import View from 'ol/View';

// Declare slRegionName as a global variable to be set by the dynamic script
declare let slRegionName: string | { error: string } | undefined;
declare let slCoord: { error?: string; x: number; y: number } | undefined;

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
const title = document.getElementById('popup-title')!;
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
  resolutions.unshift(2 ** (zl - 1)); // [128, 64, ..., 1]
}
/** Raster projection */
const projection = new Projection({
  code: 'raster',
  units: 'tile-pixels',
  extent,
});
addProjection(projection);

/** Tile size in pixels (constant for optimization) */
const TILE_SIZE = 256;

/** Second Life Map Layer */
const slLayer = new Tile({
  source: new XYZ({
    projection,
    tileGrid: new TileGrid({
      extent,
      resolutions,
      /** Tile size in pixels */
      tileSize: TILE_SIZE,
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
      const regionsPerTileEdge = 2 ** (zoomLevel - 1);
      const region_x = x * regionsPerTileEdge;
      const region_y = (Math.abs(y) - 1) * regionsPerTileEdge;

      return `${TILE_URL}/map-${zoomLevel}-${region_x}-${region_y}-objects.jpg`;
    },
    attributions: `© <a href="${SL_BASE_URL}">Second Life</a>`,
  }),
});

/** OpenLayers Map */
const map = new OlMap({
  controls: [
    new MousePosition({
      className: 'ol-mouse-position wa-text-end',
      coordinateFormat: (coordinate?: Coordinate) => {
        if (!coordinate) return '';
        return coordinate.map((c) => c.toFixed(0)).join(', ');
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
map.on('singleclick', async (evt: MapBrowserEvent) => {
  const coordinate = evt.coordinate;
  const x = coordinate[0] / TILE_SIZE;
  const y = coordinate[1] / TILE_SIZE;
  // Work out region co-coords, and local co-coords within region
  const int_x = Math.floor(x);
  const int_y = Math.floor(y);

  const local_x = Math.round((x - int_x) * TILE_SIZE);
  const local_y = Math.round((y - int_y) * TILE_SIZE);

  // Add a dynamic script to get this region name, and then trigger a URL change
  // based on the results
  const scriptURL = `${CAPABILITY_BASE_URL}cap/0/b713fe80-283b-4585-af4d-a3b7d9a32492?var=slRegionName&grid_x=${int_x}&grid_y=${int_y}`;
  // Once the script has loaded, we use the result to teleport the user into SL
  slAddDynamicScript(scriptURL, async () => {
    if (!slRegionName || typeof slRegionName !== 'string') {
      return;
    }
    const regionName = encodeURIComponent(slRegionName);
    const regionLocation = `${regionName}/${local_x}/${local_y}`;
    const slurl = `${LOCATION_URI_PREFIX}${regionLocation}`;

    title.innerHTML = `<a href="${slurl}">${slRegionName}</a>`;
    content.innerHTML =
      `<p>Tile: ${int_x}, ${int_y}<br />` +
      `Coordinate: ${Math.round(coordinate[0])}, ${Math.round(coordinate[1])}</p>` +
      `<div slot="footer" class="wa-cluster wa-gap-2xs"><wa-button variant="brand" title="Teleport" href="${slurl}">Teleport</wa-button>` +
      `<wa-button variant="neutral" href="${JOIN_BASE_URL}">Join free today</wa-button></div>` +
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
  onLoadHandler: () => void,
  id: string = 'sl-dynamic-script',
): void {
  const existingScript = document.getElementById(id);
  if (existingScript) {
    // If the script is already loaded, remove it first
    // This is to prevent multiple scripts being loaded if the user clicks multiple times
    // on the map before the script has loaded
    // This is a workaround for the fact that OpenLayers doesn't support dynamic script loading
    // in a way that works across all browsers.
    existingScript.remove();
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
      if (s.readyState === 'complete' || s.readyState === 'loaded') {
        onLoadHandler();
      }
    });

    // Standard onload for Firefox/Safari/Opera etc
    script.onload = () => onLoadHandler();
  }
}

document
  .getElementById('search-form')
  ?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const input = document.getElementById('search-input') as HTMLInputElement;
    const regionName = input.value.trim();
    if (regionName) {
      // Trigger a click on the map to show the popup for the region
      const scriptURL = `${CAPABILITY_BASE_URL}cap/0/d661249b-2b5a-4436-966a-3d3b8d7a574f?var=slCoord&sim_name=${encodeURIComponent(regionName)}`;
      slAddDynamicScript(scriptURL, () => {
        if (!slCoord || slCoord.error) {
          alert('Region not found');
          return;
        }

        const local_x = slCoord.x * TILE_SIZE;
        const local_y = slCoord.y * TILE_SIZE;

        map.getView().setCenter([local_x, local_y]);
        map.getView().setZoom(7); // Set a reasonable zoom level
      });
    }
  });
