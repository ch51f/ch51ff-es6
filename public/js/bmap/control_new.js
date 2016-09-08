(function($) {
	var map = new BMap.Map("allmap");

	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	// map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");
	map.enableScrollWheelZoom();

	var type = [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP], active_type = 0;

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-control_new"))
			$(this).addClass("active");
	})

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
			getMyAnchor();
		}
		var e2 = document.createElement("input");
		e2.type = "button";
		e2.className = "btn";
		e2.value = "getOffset";
		e2.onclick = function() {
			getMyOffset()
		}
		div.appendChild(e1)
		div.appendChild(e2)

		map.getContainer().appendChild(div);

		return div; 
	}

	var my_control = new myControl();
	map.addControl(my_control);
	// console.log(my_control.getAnchor());
	// console.log(my_control.getOffset())
	// console.log(my_control.isVisible())

	var getMyAnchor = function() {
		var anchor = my_control.getAnchor();
		console.log(anchor)
		alert(anchor)
	}

	var getMyOffset = function() {
		var offset = my_control.getOffset();
		console.log(offset)
		alert("{width:" + offset.width + ", height:" + offset.height + "}")
	}

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");
})(jQuery)