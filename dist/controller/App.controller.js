// sap.ui.require("map1map1/model/gMap");

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/vbm/AnalyticMap"
], function(Controller, JSONModel, AnalyticMap) {
	"use strict";
	
	AnalyticMap.GeoJSONURL = "map1map1/Geo.json";
	
	return Controller.extend("map1map1.controller.App", {
		onInit: function() {
			// this.getView().byId("map").addStyleClass("myMap");
			// jQuery.sap.require("map1map1.model.gMap");
			// var oModel = new JSONModel();
			// var oData = {
			// 	"TravelMode": [{
			// 		TravelModeId: "DRIVING",
			// 		Description: "Driving"
			// 	}, {
			// 		TravelModeId: "WALKING",
			// 		Description: "Walking"
			// 	}, {
			// 		TravelModeId: "BICYCLING",
			// 		Description: "Bicycling"
			// 	}, {
			// 		TravelModeId: "TRANSIT",
			// 		Description: "Transit"
			// 	}]
			// };
			// oModel.setData(oData);
			// this.getView().setModel(oModel);
			var oModel = new sap.ui.model.json.JSONModel("test-resources/sap/ui/vbm/demokit/sample/AnalyticMapRoutes/Data.json");
		    this.getView().setModel(oModel);
		},
		
		onRegionClick: function(e) {
			sap.m.MessageToast.show("onRegionClick " + e.getParameter("code"));
		},

		onRegionContextMenu: function(e) {
			sap.m.MessageToast.show("onRegionContextMenu " + e.getParameter("code"));
		},
		onAfterRendering: function() {
			// jQuery.sap.require("map1map1.model.gMap");
			// // window.addEventListener('load', function() {
			// // var script = document.createElement('script');
			// // script.type = 'text/javascript';
			// // script.src =
			// // 	'https://maps.googleapis.com/maps/api/js?key=AIzaSyDDOo_tmMzVBI6MknManz2Z2ybWPbDjY5Y&avoid=TOLLS&libraries=places';
			// // document.body.appendChild(script);
			// this.directionsService = new google.maps.DirectionsService();
			// this.directionsDisplay = new google.maps.DirectionsRenderer();
			// var mapOptions = {
			// 	center: new google.maps.LatLng(45, 32),
			// 	zoom: 10,
			// 	mapTypeId: google.maps.MapTypeId.ROADMAP
			// };
			// var pos;
			// var myMap = new google.maps.Map(this.getView().byId("map").getDomRef(), mapOptions);
			// var infoWindow = new google.maps.InfoWindow;
			// // var geocoder = new google.maps.Geocoder();
			// var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
			// this.directionsDisplay.setMap(myMap);

			// // direction renderer
			// //				    var oStartSearch = new sap.m.Input("start", {
			// //				        value: '{start}',
			// //				        enabled: true,
			// //				        width: '180px',
			// //				        placeholder: "Start Address",
			// //				        layoutData: new sap.m.FlexItemData({
			// //				            growFactor: 2
			// //				        })
			// //				    }).placeAt("buttons").setBindingContext(oContext).addStyleClass('inputField');
			// //
			// //				    var oEndSearch = new sap.m.Input("end", {
			// //				        value: '{end}',
			// //				        enabled: true,
			// //				        width: '180px',
			// //				        placeholder: "End Address",
			// //				        layoutData: new sap.m.FlexItemData({
			// //				            growFactor: 2
			// //				        })
			// //				    }).placeAt("buttons").setBindingContext(oContext).addStyleClass('inputField');
			// //
			// //				    var oSegmentedBtn = new sap.m.SegmentedButton({
			// //				        selectedButton: "transitBtn",
			// //				        select: function(oEvent) {
			// //				            directions.setTravelMode(sap.ui.getCore().byId(oEvent.getParameters().id).getText().toUpperCase());
			// //				        }
			// //				    });
			// //
			// //				    oSegmentedBtn.addButton(new sap.m.Button("drivingBtn", {
			// //				        text: "Driving",
			// //				        width: "110px"
			// //				    }));
			// //				    oSegmentedBtn.addButton(new sap.m.Button("walkingBtn", {
			// //				        text: "Walking",
			// //				        width: "110px"
			// //				    }));
			// //				    oSegmentedBtn.addButton(new sap.m.Button("bicyclingBtn", {
			// //				        text: "Bicycling",
			// //				        width: "110px"
			// //				    }));
			// //				    oSegmentedBtn.addButton(new sap.m.Button("transitBtn", {
			// //				        text: "Transit",
			// //				        width: "110px"
			// //				    }));
			// //
			// //				    var oSegmentedButtonBar = new sap.m.Bar({
			// //				        contentMiddle: [oSegmentedBtn]
			// //				    });
			// //
			// //				    var oFlexBox = new sap.m.VBox('fb', {
			// //				        items: [oStartSearch, oEndSearch, oSegmentedButtonBar]
			// //				    }).placeAt("buttons");

			// if (navigator.geolocation) {
			// 	navigator.geolocation.getCurrentPosition(function(position) {
			// 		pos = {
			// 			lat: position.coords.latitude,
			// 			lng: position.coords.longitude
			// 		};

			// 		infoWindow.setPosition(pos);
			// 		infoWindow.setContent('Location found.');
			// 		infoWindow.open(myMap);
			// 		myMap.setCenter(pos);
			// 		var oMarker = new google.maps.Marker({
			// 			map: myMap,
			// 			position: pos,
			// 			info: "Current Location"
			// 		});
			// 		// myMap.addMarker(oMarker);
			// 		var planeSymbol = {
			// 			path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
			// 			scale: 0.0333,
			// 			strokeOpacity: 1,
			// 			color: 'black',
			// 			strokeWeight: 1,
			// 			anchor: new google.maps.Point(300, 300)
			// 		};
			// 		var flightPlanCoordinates = [{
			// 			lat: pos.lat,
			// 			lng: pos.lng
			// 		}, {
			// 			lat: 54.291,
			// 			lng: 158.027
			// 		}, {
			// 			lat: 21.291,
			// 			lng: -157.821
			// 		}, {
			// 			lat: -18.142,
			// 			lng: 178.431
			// 		}, {
			// 			lat: -33.890542,
			// 			lng: 151.27
			// 		}];
			// 		var flightPath = new google.maps.Polyline({
			// 			path: flightPlanCoordinates,
			// 			map: myMap,
			// 			geodesic: true,
			// 			strokeColor: 'black',
			// 			strokeOpacity: 0.3,
			// 			strokeWeight: 2,
			// 			icons: [{
			// 				icon: planeSymbol,
			// 				offset: '100%'
			// 			}]
			// 		});
			// 		oMarker = new google.maps.Marker({
			// 			map: myMap,
			// 			position: flightPlanCoordinates[1],
			// 			icon: iconBase + 'placemark_circle_highlight_maps.png'
			// 		});
			// 		// 	myMap.addPolyline(flightPath);
			// 		var count = 0;
			// 		window.setInterval(function() {
			// 			count = (count + 1) % 2000;
			// 			var icons = flightPath.get('icons');
			// 			icons[0].offset = (count / 20) + '%';
			// 			flightPath.set('icons', icons);
			// 		}, 20);
			// 	});
			// 	var heatmapData = [
			// 		new google.maps.LatLng(37.782, -122.447),
			// 		new google.maps.LatLng(37.782, -122.445),
			// 		new google.maps.LatLng(37.782, -122.443),
			// 		new google.maps.LatLng(37.782, -122.441),
			// 		new google.maps.LatLng(37.782, -122.439),
			// 		new google.maps.LatLng(37.782, -122.437),
			// 		new google.maps.LatLng(37.782, -122.435),
			// 		new google.maps.LatLng(37.785, -122.447),
			// 		new google.maps.LatLng(37.785, -122.445),
			// 		new google.maps.LatLng(37.785, -122.443),
			// 		new google.maps.LatLng(37.785, -122.441),
			// 		new google.maps.LatLng(37.785, -122.439),
			// 		new google.maps.LatLng(37.785, -122.437),
			// 		new google.maps.LatLng(37.785, -122.435)
			// 	];
			// 	var heatmap = new google.maps.visualization.HeatmapLayer({
			// 		data: heatmapData
			// 	});
			// 	heatmap.setMap(myMap);
			// }
			// });
		},
		onChangeHandler: function() {
			var directionsService = this.directionsService;
			var directionsDisplay = this.directionsDisplay;
			this._calculateAndDisplayRoute(directionsService, directionsDisplay);
		},
		_calculateAndDisplayRoute: function(directionsService, directionsDisplay) {
				var travelMode = this.getView().byId("idTravelMode").getSelectedItem();
				var origin = this.getView().byId("inStSearch").getValue();
				var destination = this.getView().byId("inEnSearch").getValue();
				if (travelMode !== null) {
					travelMode = travelMode.getProperty("key");
					directionsService.route({
						origin: origin,
						destination: destination,
						travelMode: travelMode
					}, function(response, status) {
						if (status === 'OK') {
							directionsDisplay.setDirections(response);
						} else {
							sap.m.MessageToast.show('Directions request failed due to ' + status);
						}
					});
					// var origin1 = new google.maps.LatLng(55.930385, -3.118425);
					// var origin2 = 'Greenwich, England';
					// var destinationA = 'Stockholm, Sweden';
					// var destinationB = new google.maps.LatLng(50.087692, 14.421150);

					var service = new google.maps.DistanceMatrixService();
					service.getDistanceMatrix({
						origins: origin,
						destinations: destination,
						travelMode: travelMode
						// transitOptions: TransitOptions,
						// drivingOptions: DrivingOptions,
						// unitSystem: UnitSystem,
						// avoidHighways: Boolean,
						// avoidTolls: Boolean,
					}, function (response, status) {
						if (status == 'OK') {
							var origins = response.originAddresses;
							var destinations = response.destinationAddresses;

							for (var i = 0; i < origins.length; i++) {
								var results = response.rows[i].elements;
								for (var j = 0; j < results.length; j++) {
									var element = results[j];
									var distance = element.distance.text;
									var duration = element.duration.text;
									var from = origins[i];
									var to = destinations[j];
								}
							}
						}
					}
);

				} else {
					sap.m.MessageToast.show("Travel Mode is Empty");
				}
			}
			// }, function() {}
			// 
			// )
			// }
			// navigator.geolocation.watchPosition(function(position) {
			// 	var pos = {
			// 		lat: position.coords.latitude,
			// 		lng: position.coords.longitude
			// 	};
			// 	var marker = new google.maps.Marker({
			// 		map: map,
			// 		position: pos,
			// 		icon: iconBase + 'placemark_circle_highlight_maps.png'
			// 	});
			// 	infowindow.setPosition(pos);
			// 	infowindow.setContent('Location found.');
			// 	map.setCenter(pos);
			// }, function() {
			// 	noGeolocation('Error: The Geolocation service failed.');
			// }, {
			// 	enableHighAccuracy: true,
			// 	maximumAge: 10e3,
			// 	timeout: 20e3
			// });

		// },
		// noGeolocation: function(message) {
		// 	var opts = {
		// 			map: map,
		// 			position: ll(60, 105),
		// 			content: message
		// 		},
		// 		info = new google.maps.InfoWindow(opts);
		// 	map.setCenter(opts.position);
		// },
		// ll: function(y, x) {
		// 	return new google.maps.LatLng(y, x);
		// },

	});
});