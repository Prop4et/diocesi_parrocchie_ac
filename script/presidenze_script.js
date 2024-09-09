var parrocchiePres =[{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [43.16296, 13.72274]
    },
    "properties": {
      "name": "Santa Caterina",
      "tipologia": "Presidenza",
      "popupContent":"<p><b>Parrocchia</b>: Santa Caterina <p><b>Comune</b>: Fermo <p><b>Presidente</b>: Enrico Rossi"
      
    }
}]

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#3234a8",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var parrocchiePresLayer = L.geoJSON(parrocchiePres, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(L.latLng(43.16296, 13.72274), geojsonMarkerOptions);
    },
    onEachFeature: onEachFeature
}).addTo(map);


function toggleLayer2(isChecked) {
    geoJsonLayer.eachLayer(function(layer) {
        if (layer.feature.properties.nome === 'Fermo') {
            // Toggle the visibility by setting opacity based on checkbox state
            if (isChecked) {
                map.addLayer(parrocchiePresLayer)
            } else {
                map.removeLayer(parrocchiePresLayer)
            }
        }
    });
}

document.getElementById('toggleLayer2').addEventListener('change', function() {
    toggleLayer2(this.checked);
});