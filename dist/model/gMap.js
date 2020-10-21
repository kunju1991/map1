window.addEventListener('load', function() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src =
		'https://maps.googleapis.com/maps/api/js?key=AIzaSyDDOo_tmMzVBI6MknManz2Z2ybWPbDjY5Y&avoid=TOLLS&libraries=places&libraries=visualization';
	document.body.appendChild(script);
});

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		scrollwheel: false,
		center: {
			lat: 23.0225,
			lng: 72.5714
		} //Initial Location on Map
	});
}