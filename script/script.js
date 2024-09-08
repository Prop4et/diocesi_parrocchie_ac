var map = L.map('map').setView([43.16296, 13.72274], 13);
// var map = L.map('map').setView([-104.05, 48.99], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


