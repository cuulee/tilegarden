"use-strict"

document.addEventListener('DOMContentLoaded', function onload() {
    // create map object
    var map = L.map('map', {
        center: [41, -77.5], zoom: 7
    })

    // add basemap
    //L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    // add garden map
    L.tileLayer('http://localhost:5000/database/postgres/table/pa_gardens/{z}/{x}/{y}.png').addTo(map)
})