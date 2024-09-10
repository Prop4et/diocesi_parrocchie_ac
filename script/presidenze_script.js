var parrocchiePres =[
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.1561235, 13.7350437]
        },
        "properties": {
            "name": "Santa Caterina d'Alessandria",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: Santa Caterina d'Alessandria<p><b>Comune</b>: Fermo <p><b>Presidente</b>: Enrico Rossi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.359667, 13.695094]
        },
        "properties": {
            "name": "Sant'Anna",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: Sant'Anna' <p><b>Comune</b>: Porto Potenza Picena <p><b>Presidente</b>: Arianna Galassi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.313944, 13.582937]
        },
        "properties": {
            "name": "S. Bartolomeo Apostolo",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: S. Bartolomeo Apostolo <p><b>Comune</b>: Morrovalle <p><b>Presidente</b>: Camilla Marchionni"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.111757, 13.603666]
        },
        "properties": {
            "name": "San Giovanni Battista",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: San Giovanni Battista <p><b>Comune</b>: Grottazzolina <p><b>Presidente</b>: Filippo Scibè"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.268487, 13.751238]
        },
        "properties": {
            "name": "S. Pio X",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: S. Pio X <p><b>Comune</b>: Porto S. Elpidio <p><b>Presidente</b>: Francesca Carassai"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.128876, 13.626707]
        },
        "properties": {
            "name": "Sacro Cuore di Gesù",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: Sacro Cuore di Gesù <p><b>Comune</b>: Ponzano di Fermo <p><b>Presidente</b>: Joele Tosoni"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.249033, 13.511822]
        },
        "properties": {
            "name": "SS. Pietro, Paolo e Donato",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: SS. Pietro, Paolo e Donato <p><b>Comune</b>: Corridonia <p><b>Presidente</b>: Mariangela Scarficcia"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [48.137264, 11.581357]
        },
        "properties": {
            "name": "Gruppo Estero",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: Gruppo Estero <p><b>Comune</b>: Monaco Di Baviera <p><b>Presidente</b>: Alberto Damiani"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.206154, 13.670812]
        },
        "properties": {
            "name": "S. Michele Arcangelo",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: S. Michele Arcangelo <p><b>Comune</b>: Monte Urano <p><b>Presidente</b>: Noemi Iacoponi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.132454, 13.536757]
        },
        "properties": {
            "name": "SS. Giovanni B. e Nicolò",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: SS. Giovanni B. e Nicolò <p><b>Comune</b>: Montegiorgio <p><b>Presidente</b>: Samuele Tempestilli"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.227681, 13.626882]
        },
        "properties": {
            "name": "UP San Serafino",
            "tipologia": "Presidenza",
            "popupContent":"<p><b>Parrocchia</b>: UP San Serafino <p><b>Comune</b>: Montegranaro <p><b>Presidente</b>: Tonia Lattanzi"
        }
    }
]

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
        return L.circleMarker(L.latLng(feature.geometry.coordinates[0], feature.geometry.coordinates[1]), geojsonMarkerOptions);
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