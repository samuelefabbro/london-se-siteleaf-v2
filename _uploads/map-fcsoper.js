var map = L.mapbox.map('map', 'brendangatens.london_se_minimal', { zoomControl:false });

var geoJson = [{
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.057418, 51.465823]
  	},
  	"properties": {
    	"marker": "/assets/marker-shopbag.svg",
  		"image": "/assets/f-c-soper-00-thumb.jpg",
  		"url": "http://www.london-se.com/f-c-soper/",
  		"placeType": "Fishmonger",
  		"placeName": "F.C. Soper",
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

map.setView([51.465823, -0.057418], 16);