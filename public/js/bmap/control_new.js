(function($) {
	var map = new BMap.Map("allmap");

	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	// map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");
	map.enableScrollWheelZoom();

	var anchor = [BMAP_ANCHOR_TOP_LEFT, BMAP_ANCHOR_TOP_RIGHT, BMAP_ANCHOR_BOTTOM_LEFT, BMAP_ANCHOR_BOTTOM_RIGHT];

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-control_new"))
			$(this).addClass("active");
	})

	var zoomControl = function() {
		this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
		this.defaultOffset = new BMap.Size(10, 50);
	}

	zoomControl.prototype = new BMap.Control();
	
	zoomControl.prototype.initialize = function(map) {
		var div = document.createElement("div");
		div.className = "zoom_control";

		var e1 = document.createElement("input");
		e1.type = "button";
		e1.className = "btn";
		e1.value = "zoomIn";
		e1.onclick = function() {
			map.zoomIn();
		}
		var e2 = document.createElement("input");
		e2.type = "button";
		e2.className = "btn";
		e2.value = "zoomOut";
		e2.onclick = function() {
			map.zoomOut();
		}
		div.appendChild(e1)
		div.appendChild(e2)

		map.getContainer().appendChild(div);

		return div; 
	}

	var myControl = function() {
		this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
		this.defaultOffset = new BMap.Size(10, 10);
	}

	myControl.prototype = new BMap.Control();

	myControl.prototype.initialize = function(map) {
		var div = document.createElement("div");
		div.className = "my_control";

		var e1 = document.createElement("input");
		e1.type = "button";
		e1.className = "btn";
		e1.value = "getAnchor";
		e1.onclick = function() {
			getZoomAnchor();
		}
		var e2 = document.createElement("input");
		e2.type = "button";
		e2.className = "btn";
		e2.value = "getOffset";
		e2.onclick = function() {
			getZoomOffset()
		}
		var e3 = document.createElement("input");
		e3.type = "button";
		e3.className = "btn";
		e3.value = "isVisible"
		e3.onclick = function() {
			getZoomVisible()
		}
		var e4 = document.createElement("input");
		e4.type = "button";
		e4.className = "btn";
		e4.value = "toggleZoom";
		e4.onclick = function() {
			toggleZoom();
		}
		var e5 = document.createElement("input");
		e5.type = "button";
		e5.className = "btn";
		e5.value = "toggleAnchor";
		e5.onclick = function() {
			toggleAnchor();
		}
		var e6 = document.createElement("input");
		e6.type = "button";
		e6.className = "btn";
		e6.value = "toggleOffset";
		e6.onclick = function() {
			toggleOffset();
		}


		div.appendChild(e1)
		div.appendChild(e2)
		div.appendChild(e3)
		div.appendChild(e4)
		div.appendChild(e5)
		div.appendChild(e6)

		map.getContainer().appendChild(div);

		return div; 
	}

	var my_control = new myControl();
	var zoom_control = new zoomControl();
	map.addControl(my_control);
	map.addControl(zoom_control);

	var getZoomAnchor = function() {
		var anchor = zoom_control.getAnchor();
		console.log(anchor)
		alert(anchor)
	}

	var getZoomOffset = function() {
		var offset = zoom_control.getOffset();
		console.log(offset)
		alert("{width:" + offset.width + ", height:" + offset.height + "}")
	}

	var getZoomVisible = function() {
		var visible = zoom_control.isVisible();
		console.log(visible);
		alert(visible)
	}

	var toggleZoom = function() {
		var visible = zoom_control.isVisible();
		if(visible) {
			zoom_control.hide();
		} else {
			zoom_control.show();
		}
	}

	var toggleAnchor = function() {
		var anchor = zoom_control.getAnchor();
		if(anchor == 2) {
			zoom_control.setAnchor(3);
		} else {
			zoom_control.setAnchor(2);
		}
	}

	var toggleOffset = function() {
		var offset = zoom_control.getOffset();
		if(offset.height == 50) {
			zoom_control.setOffset(new BMap.Size(50, 100))
		} else {
			zoom_control.setOffset(new BMap.Size(10, 50))
		}
	}


	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");
})(jQuery)