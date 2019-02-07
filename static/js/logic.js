// Creating map object
// var myMap = L.map('map', {
//     center: [40.505493, -82.681290],
//     zoom: 6
//   });
 

var esriBase = L.esri.basemapLayer('Topographic')
.addTo(myMap);
// var esriLabels = L.esri.basemapLayer('ImageryLabels')
// .addTo(myMap);
// var esriStreets = L.esri.basemapLayer('ImageryTransportation')
// .addTo(myMap);

// var baseMaps = {
//   "Imagery": esriBase,
//   "Labels": esriLabels
// };

// var overlayMaps = {
//   "Pizza": city
// };

// L.control.layers(baseMaps, overlayMaps).addTo(map);

  // Link to GeoJSON
var incomeGroups = "../static/js/MHHI-3.json";
var daytimeGroups = "../static/js/DaytimePop-3.json";
var densityGroups = "../static/js/PopDensity-3.json";
var growthGroups = "../static/js/PopGrowth-3.json";


// INCOME LAYER
var income;

// Grab data with d3
d3.json(incomeGroups, function(data) {
    console.log(data);

  // Create a new choropleth layer
  income = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "MEDHINC_CY",

    // Set color scale
    scale: ["#09ff00", "#00FF7F", "#006400"],

    // Number of breaks in step range
    steps: 5,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "gray",
      weight: 0.15,
      fillOpacity: 1.0
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<br>Block Group:<br>" + feature.properties.NAME + "<br>Median Household Income:<br>" +
          "$" + feature.properties.MEDHINC_CY)
    .addTo(myMap);
  }
});


// POPULATION LAYER
var population;

// Grab data with d3
d3.json(daytimeGroups, function(data) {
    console.log(data);

  // Create a new choropleth layer
  population = L.choropleth(data, {

    // Define what  property in the features to use
    valueProperty: "DPOP_CY",

    // Set color scale
    scale: ["#FFD500", "#DF1E26", "#5E0A0B"],

    // Number of breaks in step range
    steps: 5,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "gray",
      weight: 0,
      fillOpacity: 1.0
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<br>Block Group:<br>" + feature.properties.NAME + "<br>Daytime Population:<br>" +
          "$" + feature.properties.DPOP_CY)
    .addTo(myMap);
  }
  });


// PIZZA LAYER
var pizza_places = "http://127.0.0.1:5000/api/v1.0/Locations";

latitude = [];
longitude = [];

var pizzaIcon = L.icon({
  iconUrl: 'https://cdn0.iconfinder.com/data/icons/location-9/49/restaurant-pin-3-2-512.png',
  iconSize: [20, 25],
  iconAnchor: [0, 0],
  popupAnchor: [10, 5],
});

 d3.json(pizza_places, function(data) {
   console.log(data);
   // Creating a GeoJSON layer with the retrieved data
   for (var i = 0; i < 2882; i++) {
     var latitude = data.data[i][6];
     var longitude = data.data[i][7];
     var city = [latitude,longitude]
     L.marker(city, {icon: pizzaIcon})
       .bindPopup(data.data[i][16] + "<br>Average Price:<br>" + data.data[i][11])
       .addTo(myMap);
   }

 });  

});
});