// Creating map object
var myMap = L.map('map', {
    center: [37.75, -122.23],
    zoom: 5
  });
  
var esriStreets = L.esri.basemapLayer('Streets')
.addTo(myMap);


// Link to GeoJSON
var NewYork_Tracts = "http://data.beta.nyc//dataset/d6ffa9a4-c598-4b18-8caf-14abde6a5755/resource/74cdcc33-512f-439c-a43e-c09588c4b391/download/60dbe69bcd3640d5bedde86d69ba7666geojsonmedianhouseholdincomecensustract.geojson";
var Chicago_Tracts = 

// Grabbing our GeoJSON data..
d3.json(Tracts, function(data) {
    console.log(data);

    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(myMap);
  });

