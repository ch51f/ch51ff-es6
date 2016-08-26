(function($) {
	var map = new BMap.Map("allmap");

	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");
	map.enableScrollWheelZoom();

	var type = [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP], active_type = 0;

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-base"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	var point, pixel, size, bounds, bounds_sm;

	$exc.on("click", '.p_s', function () {
		point = new BMap.Point(102.707091, 25.002891);
		console.log(point);
		alert("point{lng:" + point.lng + ",lat:" + point.lat + "}");
	}).on("click", '.p_q', function() {
		if(!point) {
			alert("先创建point");
			return false;
		}
		var equals = point.equals(new BMap.Point(102.707091, 25.002891));
		console.log(equals);
		if(equals) {
			alert("true")
		} else {
			alert("false")
		}
	}).on("click", '.pi_s', function () {
		pixel = new BMap.Pixel(102, 25);
		console.log(pixel);
		alert("pixel{x:" + pixel.x + ",y:" + pixel.y + "}");
	}).on("click", '.pi_q', function() {
		if(!pixel) {
			alert("先创建pixel");
			return false;
		}
		var equals = pixel.equals(new BMap.Pixel(102, 24));
		console.log(equals);
		if(equals) {
			alert("true")
		} else {
			alert("false")
		}
	}).on("click", '.s_s', function () {
		size = new BMap.Size(102, 25);
		console.log(size);
		alert("size{width:" + size.width + ",height:" + size.height + "}");
	}).on("click", '.s_q', function() {
		if(!size) {
			alert("先创建size");
			return false;
		}
		var equals = size.equals(new BMap.Size(102, 25));
		console.log(equals);
		if(equals) {
			alert("true")
		} else {
			alert("false")
		}
	})

	// map.pointToPixel(new BMap.Point(102.704042, 25.000935))
	// 0, 955
	// map.pointToPixel(new BMap.Point(102.710142, 25.004845))
	// 1358, 0
	// De : 25.004845 
	// Ee : 102.710142 
	// Ie : 25.000935 
	// Je : 102.704042
})(jQuery)