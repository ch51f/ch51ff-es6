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
		if($(this).hasClass("m-control"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	$control.on("click", ".item", function() {
		var $this = $(this);
		var flag = $this.hasClass("active");
		switch($this.data('key')) {
			case 'maptype':
				flag ? map.removeControl(map_type_control) : map.addControl(map_type_control);
				break;
			case 'overviewmap':
				flag ? map.removeControl(overview_map_control) : map.addControl(overview_map_control);
				break;
			case 'navigation':
				flag ? map.removeControl(navigation_control) : map.addControl(navigation_control);
				break;
			case 'copyright':
				flag ? map.removeControl(copyright_control) : map.addControl(copyright_control);
				break;
			case 'scale':
				flag ? map.removeControl(scale_control) : map.addControl(scale_control);
				break;
			case 'geolocation':
				flag ? map.removeControl(geolocation_control) : map.addControl(geolocation_control);
				break;
			case 'panorama':
				flag ? map.removeControl(panorama_control) : map.addControl(panorama_control);
				break;
			default:
				return false;
		}
		$this.toggleClass("active");
	});

})(jQuery)