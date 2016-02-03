var map = L.mapbox.map('map', 'brendangatens.london_se_minimal', { zoomControl:false });

var lat = 51.501763;
var long = -0.053602

var geoJson = [{
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [long, lat]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"placeType": "Pub",
  		"placeName": "The Mayflower",
  		"linkText": "View write up"
  	}
  }];


for (var i in geoJson) {
  var item = geoJson[i];
  
  var coordinates = [].concat(item.geometry.coordinates).reverse();

  var icon = L.icon({
      iconUrl:       item.properties.marker,
      iconRetinaUrl: item.properties.marker, 
      iconSize:      [44, 44], // size of the icon
      iconAnchor:    [8, 42],   // point of the icon which will correspond to marker's location
      popupAnchor:   [0, -5]  // point from which the popup should open relative to the iconAnchor
  });
  
  var marker = L.marker(coordinates, { icon: icon });
  
  marker.addTo(map);
};

map.setView([lat, long], 16);