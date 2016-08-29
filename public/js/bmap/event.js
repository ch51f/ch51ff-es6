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
		if($(this).hasClass("m-event"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	map.addEventListener("click", function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.point)
		console.log(e.pixel)
		console.log(e.overlay)
		alert("click")
	});

	map.addEventListener("dblclick", function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.point)
		console.log(e.pixel)
		alert("dblclick")
	})

	map.addEventListener("rightclick", function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.point)
		console.log(e.pixel)
		console.log(e.overlay)
		alert("rightclick")
	});

	map.addEventListener("maptypechange", function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("maptypechange")
	});


})(jQuery)