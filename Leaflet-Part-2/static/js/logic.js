// Create the tile layers that will be the background of our map and the map object.

// Create the 'topo' tile layer.
let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create the 'street' tile layer as a second background of the map
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create the 'satellite' tile layer 
let sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; <a href="https://www.esri.com">Esri</a>'
});


// Create the layer groups, base maps, and overlays for our two sets of data, earthquakes and tectonic_plates.
// Add a control to the map that will allow the user to change which layers are visible.

// Create the layer groups
let earthquakes = L.layerGroup();
let techtonic_plates = L.layerGroup();

// Create the map object with center and zoom options.
let myMap = L.map("map", {
  center: [28.75, -100.05],
  zoom: 4,
  layers: [sat, earthquakes, techtonic_plates]  // add the 'street' base tile layer to the map.
});

// Create a baseMaps object
let baseMaps = {
  "Satellite Map": sat,
  "Street Map": street,
  "Topographic Map": topo
};

// Create overlays for earthquakes and tectonic plates
let overlayMaps = {
  "Earthquakes": earthquakes,
  "Techtonic Plates": techtonic_plates
};

// Add a control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);


// Make a request that retrieves the earthquake geoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson").then(function (data) {
  
  // This function returns the style data for each of the earthquakes we plot on
  // the map. Pass the magnitude and depth of the earthquake into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.6,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "black",
      radius: getRadius(feature.properties.mag),
      weight: 0.5
    };
  }

  // This function determines the color of the marker based on the depth of the earthquake.
  function getColor(depth) {
    if (depth <= 70) {
      return "#98ee00"; // Green for shallow earthquakes
    }
    else if (depth <= 150) {
      return "#d4ee00"; // Yellow 
    }
    else if (depth <= 300) {
      return "#eecc00"; // Orange for moderate earthquakes
    }
    else if (depth <= 500) {
      return "#ea822c"; // Red-orange
    }
    else {
      return "#ea2c2c";  // Red for deep earthquakes
    }
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  function getRadius(magnitude) {
    return magnitude * 8;
  }

  // Add a GeoJSON layer to the map once the file is loaded.
  L.geoJson(data, {
    // Turn each feature into a circleMarker on the map.
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, styleInfo(feature));
    },
    // Set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // Create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`<h3>Magnitude: ${feature.properties.mag}</h3>
        <hr><p>${feature.properties.place}</p>
        <p>Depth: ${feature.geometry.coordinates[2]}km`);
    }

  // Add the data to the earthquake layer instead of directly to the map.
  }).addTo(earthquakes);

  // Create a legend control object.
  let legend = L.control({
    position: "bottomright"
  });

  // Then add all the details for the legend
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    // Initialize depth intervals and colors for the legend
    let limits = [0,70,150,300,500];
    let colors = ["#98ee00", "#d4ee00", "#eecc00", "#ea822c", "#ea2c2c"];
    let labels = ['<strong>Earthquake Depth</strong>'];



    // Loop through our depth intervals to generate a label with a colored square for each interval.
    for (let i = 0; i < limits.length; i++) {
      labels.push(
        '<i style="background:' + colors[i] + '"></i> ' +
        limits[i] + (limits[i + 1] ? '&ndash;' + limits[i + 1] + ' km' : '+ km')
      );
    }

    // Join the labels into one string and add it to the div
    div.innerHTML = labels.join("<br>");

    return div;
  };

  // Finally, add the legend to the map.
  legend.addTo(myMap);

  // Make a request to get our Tectonic Plate geoJSON data.
  d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function (plate_data) {
    // Save the geoJSON data, along with style information, to the tectonic_plates layer.
    L.geoJSON(plate_data, {
      style: function (feature) {
        return {
          color: "orange",
          weight: 2,
          opacity: 1
        };
      }

    // Add to techtonic_plates layer
    }).addTo(techtonic_plates);

  // Then add the tectonic_plates layer to the map.
  }).addTo(myMap);
  
});
