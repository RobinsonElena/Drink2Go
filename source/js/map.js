const mainPinIcon = L.icon({
  iconUrl: "img/map-pin.svg",
  iconSize: [38, 50],
  iconAnchor: [0, 25],
});

const mainPinMarker = L.marker(
  {
    lat: 59.968285,
    lng: 30.317106,
  },
  {
    icon: mainPinIcon,
  }
);

const map = L.map('map-canvas')
  .setView({
    lat: 59.968285,
    lng: 30.317106
  }, 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

mainPinMarker.addTo(map);
