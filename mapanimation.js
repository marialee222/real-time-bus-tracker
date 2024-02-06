// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// Add access token
mapboxgl.accessToken =
  'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';

// create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// Initialize the marker
let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);

// Counter represents the index of the current bus stop
let counter = 0;

// Wait for the map to finish loading before adding the marker line
map.on('load', function () {
// Create a GeoJSON source with a simple line
  map.addSource('line', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [],
      },
    },
  });

// Add a line layer for the bus route
  map.addLayer({
    id: 'line',
    type: 'line',
    source: 'line',
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#007bff',
      'line-width': 4,
    },
  });

// Add an event listener to the button
  document.getElementById('move-button').addEventListener('click', move);
});

function move() {
// Move the marker and update the line on the map
  if (counter < busStops.length) {
    marker.setLngLat(busStops[counter]);
    counter++;
    updateLine();
  }
}

function updateLine() {
// Update the line's coordinates with the new marker position
  const lineCoordinates = busStops.slice(0, counter + 1);
  map.getSource('line').setData({
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: lineCoordinates,
    },
  });
}
