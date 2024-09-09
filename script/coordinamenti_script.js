

var parrocchieCoord =[{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [43.2627,13.7203]
    },
    "properties": {
      "name": "SS Redentore",
      "tipologia": "Coordinamento",
      "popupContent":"<p><b>Parrocchia</b>: SS Redentore <p><b>Comune</b>: Casette d'Ete <p><b>Presidente</b>: Enrico Rossi"
    }
}]

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#fcba03",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var parrocchieCoordLayer = L.geoJSON(parrocchieCoord, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(L.latLng(43.2627,13.7203), geojsonMarkerOptions);
    },
    onEachFeature: onEachFeature
}).addTo(map);


function toggleLayer3(isChecked) {
    geoJsonLayer.eachLayer(function(layer) {
        if (layer.feature.properties.nome === 'Fermo') {
            // Toggle the visibility by setting opacity based on checkbox state
            if (isChecked) {
                map.addLayer(parrocchieCoordLayer)
            } else {
                map.removeLayer(parrocchieCoordLayer)
            }
        }
    });
}

document.getElementById('toggleLayer3').addEventListener('change', function() {
    toggleLayer3(this.checked);
});