var map = L.mapbox.map('map', 'brendangatens.london_se_minimal', { zoomControl:false });

var geoJson = [{
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.051249, 51.463184]
  	},
  	"properties": {
    	"marker": "/assets/marker-ghost.svg",
  		"image": "/assets/nunhead-cemetery-01.jpg",
  		"url": "#",
  		"placeType": "Cemetery & Nature Reserve",
  		"placeName": "Nunhead Cemetery",
  		"linkText": "View write up"
  	}
  }];


for (var i in geoJson) {
  var item = geoJson[i];
  
  var coordinates = [].concat(item.geometry.coordinates).reverse();

  var icon = L.icon({
      iconUrl:       item.properties.marker,
      iconRetinaUrl: item.properties.marker,
      shadowUrl: "/assets/shadow.svg",
      iconSize:      [44, 44], // size of the icon
      iconAnchor:    [13, 42],   // point of the icon which will correspond to marker's location
      shadowAnchor: [8, 42],
      popupAnchor:   [-1, -4]  // point from which the popup should open relative to the iconAnchor
  });
  
  var marker = L.marker(coordinates, { icon: icon });
  
  marker.addTo(map);
};

map.setView([51.463184, -0.051249], 16);