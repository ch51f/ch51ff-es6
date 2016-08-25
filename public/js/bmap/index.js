(function($) {
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-index"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	console.log("默认鼠标指针样式：" + map.getDefaultCursor())
	console.log("可用setDefaultCursor(sursor:String)设置")
	console.log("拖拽鼠标指针样式：" + map.getDraggingCursor())
	console.log("可用setDraggingCursor(sursor:String)设置")

	$control.on("click", ".item", function() {
		var $this = $(this);
		var flag = $this.hasClass("active");
		switch($this.data('key')) {
			case 'drag':
				flag ? map.disableDragging() : map.enableDragging();
				break;
			case 'wheel':
				flag ? map.disableScrollWheelZoom() : map.enableScrollWheelZoom();
				break;
			case 'double':
				flag ? map.disableDoubleClickZoom() : map.enableDoubleClickZoom();
				break;
			case 'keyboard':
				flag ? map.disableKeyboard() : map.enableKeyboard();
				break;
			case 'inertial':
				flag ? map.disableInertialDragging() : map.enableInertialDragging();
				break;
			case 'continuous':
				flag ? map.disableContinuousZoom() : map.enableContinuousZoom();
				break;
			case 'pinch':
				flag ? map.disablePinchToZoom() : map.enablePinchToZoom();
				break;
			case 'resize':
				flag ? map.disableAutoResize() : map.enableAutoResize();
				break;
			default:
				return false;
		}
		$this.toggleClass("active");
	});
	$exc.on('click', '.zoom', function() {
		var zoom = map.getZoom();
		console.log(zoom);
		alert(zoom);
	}).on('click', '.bounds', function() {
		var bounds = map.getBounds();
		alert("leftdown {lng:" + bounds.Ll.lng + ",lat:" + bounds.Ll.lat + "},\nrighttop {lng:" + bounds.ul.lng + ",lat:" + bounds.ul.lat + "}");
		console.log(bounds);
	}).on('click', '.center', function() {
		var center = map.getCenter();
		console.log(center);
		alert("lng:" + center.lng + ",lat:" + center.lat);
	}).on('click', '.type', function() {
		var type = map.getMapType();
		console.log(type);
		alert(type.af);
	}).on('click', '.size', function() {
		var size = map.getSize();
		console.log(size);
		alert("height:" + size.height + ",width:" + size.width);
	}).on('click', '.viewport', function() {
		var viewport = map.getViewport();
		console.log(viewport);
	}).on('click', '.distance', function() {
		var bounds = map.getBounds();
		var distance = map.getDistance(bounds.Ll, bounds.ul);
		console.log(distance);
		alert(distance);
	}) 
	$zoom.on('click', '.btn-zoom', function() {
		var min = $.trim($(".min-zoom", $zoom).val()),
			max = $.trim($(".max-zoom", $zoom).val());

		if(min != "" && !isNaN(min)) {
			map.setMinZoom(min);
		} else {
			map.setMinZoom(3);
		}
		if(max != "" && !isNaN(max)) {
			map.setMaxZoom(max);
		} else {
			map.setMaxZoom(19);
		}
	})
})(jQuery)