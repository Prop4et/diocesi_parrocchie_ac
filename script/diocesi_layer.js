fetch('fermo1.geojson')
    .then(response => response.json())
    .then(data => {
                // Add GeoJSON layer to the map
                L.geoJSON(data, {
                    style: function(feature) {
                        switch (feature.properties.nome) {
                            case 'Fermo': return {color: "#ff0000"};
                        }
                    }
                }).addTo(map);
            })
            .catch(error => {
                console.error('Error loading the GeoJSON:', error);
            });
