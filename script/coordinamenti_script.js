

var parrocchieCoord =[
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [41.916700,13.7203]
        },
        "properties": {
            "name": "SS. Redentore",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: SS. Redentore <p><b>Comune</b>: Casette d'Ete <p><b>Coordinatore</b>: Adriana Ciferri"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.265560, 13.713810]
        },
        "properties": {
            "name": "SS. Angeli Custodi",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: SS. Angeli Custodi <p><b>Comune</b>: Cascinare <p><b>Coordinatore</b>: Alessia Barbi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.110760, 13.566400]
        },
        "properties": {
            "name": "S. Paolo Apostolo",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: S. Paolo Apostolo <p><b>Comune</b>: Piane di Montegiorgio <p><b>Coordinatore</b>: Arianna Vecchi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.3115772,13.7276278]
        },
        "properties": {
            "name": "Cristo Re",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: Cristo Re <p><b>Comune</b>: Civitanova Marche <p><b>Coordinatore</b>: Elena Zanetti"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.229237, 13.685735]
        },
        "properties": {
            "name": "Sant'Elpidio Abate",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: Sant'Elpidio Abate <p><b>Comune</b>: S. Elpidio a Mare <p><b>Coordinatore</b>: Elisa Meconi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [42.9781048, 13.352206]
        },
        "properties": {
            "name": "SS. Ilario e Donato",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: SS. Ilario e Donato <p><b>Comune</b>: Amandola <p><b>Coordinatore</b>: Emanuele Cocci"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.366359, 13.6232259]
        },
        "properties": {
            "name": "SS. Stefano e Giacomo",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: SS. Stefano e Giacomo <p><b>Comune</b>: Potenza Picena <p><b>Coordinatore</b>: Giovanna Pesareis"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.2366026, 13.5953938] 
        },
        "properties": {
            "name": "S. Stefano Protomartire",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: S. Stefano Protomartire <p><b>Comune</b>: Monte S. Giusto <p><b>Coordinatore</b>: Keti Silenzi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.3161606, 13.6808858] 
        },
        "properties": {
            "name": "S. Paolo Apostolo",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: S. Paolo Apostolo <p><b>Comune</b>: Civitanova Alta <p><b>Coordinatore</b>: Luca Ferrari"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.1801957, 13.7931002] 
        },
        "properties": {
            "name": "S. Giorgio Martire",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: S. Giorgio Martire <p><b>Comune</b>: Porto S. Giorgio <p><b>Coordinatore</b>: Maria Assunta Matricardi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.1602981, 13.7193074] 
        },
        "properties": {
            "name": "S. Domenico",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: S. Domenico <p><b>Comune</b>: Fermo <p><b>Coordinatore</b>: Maria Assunta Ciccaleni"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.166364, 13.4163228]
        },
        "properties": {
            "name": "S. Maria",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: S. Maria <p><b>Comune</b>: Loro Piceno <p><b>Coordinatore</b>: Sandro Ciabocco"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.2570596, 13.7413156] 
        },
        "properties": {
            "name": "S. Maria Addolorata",
            "tipologia": "Coordinamento",
            "popupContent":"<p><b>Parrocchia</b>: S. Maria Addolorata <p><b>Comune</b>: Porto S. Elpidio <p><b>Coordinatore</b>: Sarah Luciani"
        }
    }
]


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
        return L.circleMarker(L.latLng(feature.geometry.coordinates[0], feature.geometry.coordinates[1]), geojsonMarkerOptions);
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