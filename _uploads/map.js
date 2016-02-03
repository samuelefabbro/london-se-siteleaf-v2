var map = L.mapbox.map('map', 'brendangatens.london_se_minimal');

var geoJson = [{
    type: 'Feature',
  	"geometry": {
  	  "type": "Point",
  	  "coordinates": [-0.026283, 51.477975]},
  	"properties": {
    	"marker": "/assets/marker-cutlery-round.svg",
  		"image": "",
  		"url": "#",
  		"placeType": "Cafe",
  		"placeName": "Deptford Project",
  		"linkText": "View write up"
    }
	}, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.036974, 51.46447]
  	},
  	"properties": {
    	"marker": "/assets/marker-coffee.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Coffee Shop",
  		"placeName": "Browns of Brockley",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.037223, 51.454606]
  	},
  	"properties": {
    	"marker": "/assets/marker-wine.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Wine Bar",
  		"placeName": "Mr. Lawrence",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.02492, 51.467904]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Market",
  		"placeName": "Brockley Market",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.051249, 51.463184]
  	},
  	"properties": {
    	"marker": "/assets/marker-ghost.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Cemetery & Nature Reserve",
  		"placeName": "Nunhead Cemetery",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.022657, 51.476047]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pizza Bus",
  		"placeName": "The Big Red",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.025417, 51.474661]
  	},
  	"properties": {
    	"marker": "/assets/marker-cocktail.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Cocktail Bar",
  		"placeName": "Little Nan's Bar",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.054623, 51.438088]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "Sylvan Post",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.061, 51.440737]
  	},
  	"properties": {
    	"marker": "/assets/marker-skull.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Museum",
  		"placeName": "Horniman Museum",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.050269, 51.470919]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "The Telegraph (at the Earl Of Derby)",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.054089, 51.439761]
  	},
  	"properties": {
    	"marker": "/assets/marker-coffee.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Coffee Shop",
  		"placeName": "St. David's Coffee House",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.053602, 51.501763]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "The Mayflower",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.079399, 51.474117]
  	},
  	"properties": {
    	"marker": "/assets/marker-museum.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Museum",
  		"placeName": "South London Gallery",
  		"linkText": "View write up"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.025382, 51.460181]
  	},
  	"properties": {
    	"marker": "/assets/marker-park.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Park",
  		"placeName": "Hilly Fields",
  		"linkText": "View write up"
  	}
  }

];

// Coming Soon ------------------------------------------------------------------------//

var comingSoon = [{
  type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.069287, 51.469671]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Restaurant",
  		"placeName": "Peckham Refreshment Rooms",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.067152, 51.470805]
  	},
  	"properties": {
    	"marker": "/assets/marker-cocktail.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Cafe & Bar",
  		"placeName": "Frank's",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.02599, 51.476672]
  	},
  	"properties": {
    	"marker": "/assets/marker-coffee.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Cafe",
  		"placeName": "Cafe Bianca",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.021474, 51.456394]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "Ladywell Tavern",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.076148, 51.499657]
  	},
  	"properties": {
    	"marker": "/assets/marker-wine.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Wine Bar & Restaurant",
  		"placeName": "40 Maltby Street",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.075316, 51.499213]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Tapas Restaurant & Bar",
  		"placeName": "Bar Tozino",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.071443, 51.45757]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "The Actress",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.106449, 51.453032]
  	},
  	"properties": {
    	"marker": "/assets/marker-water.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Swimming Pool",
  		"placeName": "Brockwell Lido",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.041966, 51.447433]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Indian Restaurant",
  		"placeName": "Babur",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.072409, 51.467115]
  	},
  	"properties": {
    	"marker": "/assets/marker-coffee.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Cafe",
  		"placeName": "Anderson & Co",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.08174, 51.499548]
  	},
  	"properties": {
    	"marker": "/assets/marker-museum.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Gallery",
  		"placeName": "White Cube",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.073063, 51.469652]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Indian Restaurant",
  		"placeName": "Ganapati",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.091474, 51.451012]
  	},
  	"properties": {
    	"marker": "/assets/marker-bicycle.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Sports Arena",
  		"placeName": "Herne Hill Velodrome",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.033527, 51.475942]
  	},
  	"properties": {
    	"marker": "/assets/marker-coffee.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Cafe",
  		"placeName": "The London Particular",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.072007, 51.502827]
  	},
  	"properties": {
    	"marker": "/assets/marker-museum.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Museum",
  		"placeName": "Design Museum",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.033806, 51.459321]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Cafe & Restaurant",
  		"placeName": "Brockley Mess",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.069913, 51.469506]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Bar",
  		"placeName": "Bar Story",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.086367, 51.445963]
  	},
  	"properties": {
    	"marker": "/assets/marker-museum.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Museum",
  		"placeName": "Dulwich Picture Gallery",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.036942, 51.463919]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Gastropub",
  		"placeName": "The Gantry",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.028697, 51.475184]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "Royal Albert",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.022818, 51.46765]
  	},
  	"properties": {
    	"marker": "/assets/marker-shopbag.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Reclamation Yard",
  		"placeName": "Aladdin's Cave",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.027462, 51.469554]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Restaurant",
  		"placeName": "Meze Mangal",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.075794, 51.499386]
  	},
  	"properties": {
    	"marker": "/assets/marker-cutlery.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Food Market",
  		"placeName": "Ropewalk",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.000485, 51.45332]
  	},
  	"properties": {
    	"marker": "/assets/marker-coffee.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Coffee & Flower Shop",
  		"placeName": "You Don't Bring Me Flowers",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.081719, 51.50069]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "The Garrison",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.0152, 51.455542]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "Ravensbourne Arms",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.037112, 51.455209]
  	},
  	"properties": {
    	"marker": "/assets/marker-frame.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Ballroom",
  		"placeName": "Rivoli Ballroom",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.070303, 51.467697]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "The Montpelier",
  		"linkText": "Write up coming soon"
  	}
  }, {
  	type: 'Feature',
  	"geometry": {
      "type": "Point", 
      "coordinates": [-0.024464, 51.444551]
  	},
  	"properties": {
    	"marker": "/assets/marker-beer.svg",
  		"image": "/assets/arloandmoe/arlo-and-moe-01.jpg",
  		"url": "#",
  		"placeType": "Pub",
  		"placeName": "Catford Bridge Tavern",
  		"linkText": "Write up coming soon"
  	}
  }
  
];

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
  
  // Create custom popup content
  var popupContent = (
    '<a target="_blank" class="popup" href="' + item.properties.url + '">' +
      '<img src="' + item.properties.image + '">' +
      '<div class="popup-info"><h4>' + item.properties.placeType + '</h4>' +
      '<h2>' + item.properties.placeName + '</h2>' +
      '<p>' + item.properties.linkText + '</p></div>' +
    '</a>'
  );

  // http://leafletjs.com/reference.html#popup
  marker.bindPopup(popupContent,{
      closeButton: true,
      minWidth: 300,
  });
  
  marker.addTo(map);
};


// Coming Soon Markers

for (var i in comingSoon) {
  var item = comingSoon[i];
  
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
  
  // Create custom popup content
  var popupContent = (
      '<div class="popup-info"><h4>' + item.properties.placeType + '</h4>' +
      '<h2>' + item.properties.placeName + '</h2>' +
      '<p class="linkSoon">' + item.properties.linkText + '</p></div>'
  );

  // http://leafletjs.com/reference.html#popup
  marker.bindPopup(popupContent,{
      closeButton: true,
      minWidth: 220,
  });
  
  marker.addTo(map);
};

var southWest = new L.LatLng(51.55829, -0.25389),
    northEast = new L.LatLng(51.38228, 0.19535),
    bounds = new L.LatLngBounds(southWest, northEast);

map.setView([51.481018, -0.044564], 13).setMaxBounds(bounds);