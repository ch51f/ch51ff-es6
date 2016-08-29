(function($) {
	var map = new BMap.Map("allmap");

	var map_type_control = new BMap.MapTypeControl();
	var overview_map_control = new BMap.OverviewMapControl();
	var navigation_control = new BMap.NavigationControl();
	var copyright_control = new BMap.CopyrightControl();
	var scale_control = new BMap.ScaleControl();
	var geolocation_control = new BMap.GeolocationControl();
	var panorama_control = new BMap.PanoramaControl();

	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.addControl(map_type_control);
	map.setCurrentCity("昆明");

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-to"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	$exc.on("click", '.pi_t_po', function() {
		var point = map.pixelToPoint(new BMap.Pixel(674, 478));
		console.log(point);
		alert("pixel{x:674,y:478} to point{lng:" + point.lng + ",lat:" + point.lat + "}");

	}).on("click", '.po_t_pi', function() {
		var pixel = map.pointToPixel(new BMap.Point(102.707092, 25.002890));
		console.log(pixel);
		alert("point{lng:102.707092,lat:25.002890} to pixel{x:" + pixel.x + ",y:" + pixel.y + "}");
	})

})(jQuery)