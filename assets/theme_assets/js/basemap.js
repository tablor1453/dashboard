const maxBoundArea = L.latLngBounds(L.latLng(-18.41, 145.41), L.latLng(13.6, 90.65));
// const basemap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© OpenStreetMap',
//     minZoom: 5,
// });

// zoom: 5,
// maxZoom: 4,
// center: [-2, 119],

var map = L.map('leaflet-basic', {
    minZoom: 5,
    maxBounds: maxBoundArea
}).setView([-2, 119], 5);

map.setMaxZoom(9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();