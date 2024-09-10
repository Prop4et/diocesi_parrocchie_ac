var others = [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.208024, 13.709198]
        },
        "properties": {
            "name": "Santi Lorenzo e Caterina",
            "tipologia": "others",
            "popupContent":"<p><b>Parrocchia</b>: Santi Lorenzo e Caterina<p><b>Comune</b>: S. Elpidio a Mare <p><b>-</b>: Giuliano Alberti"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.328289, 13.713943]
        },
        "properties": {
            "name": "San Carlo Borromeo",
            "tipologia": "others",
            "popupContent":"<p><b>Parrocchia</b>: San Carlo Borromeo<p><b>Comune</b>: Civitanova Marche <p><b>Educatrice ACR</b>: Erika Cardelli"
        }
    },
]

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#000000",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var othersLayer = L.geoJSON(others, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(L.latLng(feature.geometry.coordinates[0], feature.geometry.coordinates[1]), geojsonMarkerOptions);
    },
    onEachFeature: onEachFeature
}).addTo(map);


function toggleLayer4(isChecked) {
    geoJsonLayer.eachLayer(function(layer) {
        if (layer.feature.properties.nome === 'Fermo') {
            // Toggle the visibility by setting opacity based on checkbox state
            if (isChecked) {
                map.addLayer(othersLayer)
            } else {
                map.removeLayer(othersLayer)
            }
        }
    });
}

document.getElementById('toggleLayer4').addEventListener('change', function() {
    toggleLayer4(this.checked);
});