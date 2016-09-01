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

	 map.enableScrollWheelZoom()

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-event"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	var func_click = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.point)
		console.log(e.pixel)
		console.log(e.overlay)
		alert("click")
	}

	var func_dblclick = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.point)
		console.log(e.pixel)
		alert("dblclick")
	}

	var func_rightclick = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.point)
		console.log(e.pixel)
		console.log(e.overlay)
		alert("rightclick")
	}

	var func_maptypechange = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("maptypechange")
	}

	var func_mousemove = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.point)
		console.log(e.pixel)
		console.log(e.overlay)
		alert("mousemove")
	}

	var func_mouseover = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("mouseover")
	}

	var func_mouseout = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("mouseout")
	}

	var func_movestart = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("movestart")
	}

	var func_moving = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("moving")
	}

	var func_moveend = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("moveend")
	}

	var func_zoomstart = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("zoomstart")
	}

	var func_zoomend = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("zoomend")
	}

	var func_addoverlay = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("addoverlay")
	}

	var func_addcontrol = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("addcontrol")
	}

	var func_removecontrol = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("removecontrol")
	}

	var func_removeoverlay = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("removeoverlay")
	}

	var func_clearoverlays = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		alert("clearoverlays")
	}





	var func_dragstart = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.pixel)
		console.log(e.point)
		alert("dragstart")
	}

	var func_dragging = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.pixel)
		console.log(e.point)
		alert("dragging")
	}

	var func_dragend = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.pixel)
		console.log(e.point)
		alert("dragend")
	}

	var func_touchstart = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.pixel)
		console.log(e.point)
		alert("touchstart")
	}

	var func_touching = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.pixel)
		console.log(e.point)
		alert("touching")
	}

	var func_touchend = function(e) {
		console.log(e)
		console.log(e.type)
		console.log(e.target)
		console.log(e.pixel)
		console.log(e.point)
		alert("touchend")
	}

	var addEvent = function(type, func) {
		map.addEventListener(type, func);
	}

	var removeEvent = function(type, func) {
		map.removeEventListener(type, func);
	}


	addEvent("click", func_click);


	$control.on("click", ".item", function() {
		var $this = $(this);
		var flag = $this.hasClass("active");
		switch($this.data('key')) {
			case 'click':
				flag ? removeEvent("click", func_click) : addEvent("click", func_click);
				break;
			case 'dblclick':
				flag ? removeEvent("dblclick", func_dblclick) : addEvent("dblclick", func_dblclick);
				break;
			case 'rightclick':
				flag ? removeEvent("rightclick", func_rightclick) : addEvent("rightclick", func_rightclick);
				break;
			case 'maptypechange':
				flag ? removeEvent("maptypechange", func_maptypechange) : addEvent("maptypechange", func_maptypechange);
				break;

			case 'mousemove':
				flag ? removeEvent("mousemove", func_mousemove) : addEvent("mousemove", func_mousemove);
				break;
			case 'mouseover':
				flag ? removeEvent("mouseover", func_mouseover) : addEvent("mouseover", func_mouseover);
				break;
			case 'mouseout':
				flag ? removeEvent("mouseout", func_mouseout) : addEvent("mouseout", func_mouseout);
				break;

			case 'movestart':
				flag ? removeEvent("movestart", func_movestart) : addEvent("movestart", func_movestart);
				break;
			case 'moving':
				flag ? removeEvent("moving", func_moving) : addEvent("moving", func_moving);
				break;
			case 'moveend':
				flag ? removeEvent("moveend", func_moveend) : addEvent("moveend", func_moveend);
				break;

			case 'zoomstart':
				flag ? removeEvent("zoomstart", func_zoomstart) : addEvent("zoomstart", func_zoomstart);
				break;
			case 'zoomend':
				flag ? removeEvent("zoomend", func_zoomend) : addEvent("zoomend", func_zoomend);
				break;

			case 'addoverlay':
				flag ? removeEvent("addoverlay", func_addoverlay) : addEvent("addoverlay", func_addoverlay);
				break;
			case 'removeoverlay':
				flag ? removeEvent("removeoverlay", func_removeoverlay) : addEvent("removeoverlay", func_removeoverlay);
				break;
			case 'clearoverlays':
				flag ? removeEvent("clearoverlays", func_clearoverlays) : addEvent("clearoverlays", func_clearoverlays);
				break;

			case 'addcontrol':
				flag ? removeEvent("addcontrol", func_addcontrol) : addEvent("addcontrol", func_addcontrol);
				break;
			case 'removecontrol':
				flag ? removeEvent("removecontrol", func_removecontrol) : addEvent("removecontrol", func_removecontrol);
				break;

			default:
				return false;
		}
		$this.toggleClass("active");
	});
})(jQuery)