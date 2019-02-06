// Creating map object
var myMap = L.map('map', {
    center: [40.730610, -73.935242],
    // [36.80, -98.55] //Center of USA
    zoom: 12
  });
  
var esriBase = L.esri.basemapLayer('ImageryClarity')
.addTo(myMap);
var esriLabels = L.esri.basemapLayer('ImageryLabels')
.addTo(myMap);
// var esriStreets = L.esri.basemapLayer('ImageryTransportation')
// .addTo(myMap);


// Link to GeoJSON
var incomeGroups = "../static/js/MHHI-3.json";
var daytimeGroups = "../static/js/DaytimePop-3.json";
var densityGroups = "../static/js/PopDensity-3.json";
var growthGroups = "../static/js/PopGrowth-3.json";


var geojson;

// Grab data with d3
d3.json(incomeGroups, function(data) {
    console.log(data);

  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "MEDHINC_CY",

    // Set color scale
    scale: ["#32CD32", "#228B22"],

    // Number of breaks in step range
    steps: 5,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "black",
      weight: 0.25,
      fillOpacity: 1.0
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<br>Block Group:<br>" + feature.properties.NAME + "<br>Median Household Income:<br>" +
          "$" + feature.properties.MEDHINC_CY);
      }
    }).addTo(myMap);


// // Grabbing our GeoJSON data..
// d3.json(incomeGroups, function(data) {
//     console.log(data);

//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJson(data).addTo(myMap);
//   });
});
