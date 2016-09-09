(function($) {
	var map = new BMap.Map("allmap");

	var anchor = [BMAP_ANCHOR_TOP_LEFT, BMAP_ANCHOR_TOP_RIGHT, BMAP_ANCHOR_BOTTOM_LEFT, BMAP_ANCHOR_BOTTOM_RIGHT];
	var length_unit = [BMAP_UNIT_METRIC, BMAP_UNIT_IMPERIAL];
	var navigation_control_type = [BMAP_NAVIGATION_CONTROL_LARGE, BMAP_NAVIGATION_CONTROL_SMALL, BMAP_NAVIGATION_CONTROL_PAN, BMAP_NAVIGATION_CONTROL_ZOOM];
	var map_type_control_type = [BMAP_MAPTYPE_CONTROL_HORIZONTAL, BMAP_MAPTYPE_CONTROL_DROPDOWN, BMAP_MAPTYPE_CONTROL_MAP];
	var status_code = [BMAP_STATUS_PERMISSION_DENIED, BMAP_STATUS_SERVICE_UNAVAILABLE, BMAP_STATUS_TIMEOUT];
	var map_type = [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]
	var navigation_control_obj = {
		// anchor: 1,
		// offset: new BMap.Size(100, 100),
		// type: 2,
		// showZoomInfo: false,
		// enableGeolacation: true,
	}
	var scale_control_obj = {
		// anchor: 0,
		// offset: new BMap.Size(10, 10),
	}

	var copyright_control_obj = {
		anchor: 3,
		offset: new BMap.Size(10, 10),
	}

	var overview_map_control_obj = {
		// anchor: 2,
		// offset: new BMap.Size(10, 50),
		// size: new BMap.Size(300, 300),
		// isOpen: true,
	}

	var map_type_control_obj = {
		// type: BMAP_MAPTYPE_CONTROL_MAP,
		// maptype: map_type,
	}

	var geolocation_control_obj = {
		// anchor: 3,
		// offset: new BMap.Size(10, 10),
		// showAddressBar: false,
		// enableAutoLocation: true,
		// // locationIcon: Icon
	}


	var map_type_control = new BMap.MapTypeControl(map_type_control_obj);
	var overview_map_control = new BMap.OverviewMapControl(overview_map_control_obj);
	var navigation_control = new BMap.NavigationControl(navigation_control_obj);
	var copyright_control = new BMap.CopyrightControl(copyright_control_obj);
	var scale_control = new BMap.ScaleControl(scale_control_obj);
	var geolocation_control = new BMap.GeolocationControl(geolocation_control_obj);
	var panorama_control = new BMap.PanoramaControl();

	scale_control.setUnit(BMAP_UNIT_IMPERIAL)
	console.log(scale_control.getUnit())
	scale_control.setUnit(BMAP_UNIT_METRIC)
	console.log(scale_control.getUnit())
	var copyright = {
		id: 1,
		content: "我的版权信息",
		bounds: new BMap.Bounds(new BMap.Point(102.424067, 24.714754), new BMap.Point(103.032328, 25.215284)),
	}
	var copyright_1 = {
		id: 2,
		content: "author by ch51ff",
		bounds: new BMap.Bounds(new BMap.Point(102.424067, 24.714754), new BMap.Point(103.032328, 25.215284)),
	}

	copyright_control.addCopyright(copyright);
	copyright_control.addCopyright(copyright_1);

	map.addControl(copyright_control)


	console.log(copyright_control.getCopyright(1));
	console.log(copyright_control.getCopyrightCollection());
	copyright_control.removeCopyright(1)
	console.log(copyright_control.getCopyrightCollection());

	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.setCurrentCity("昆明");

	$(".control-panel").css({left: "100px"});

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