(function($) {
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");
	map.enableScrollWheelZoom();

	var type = [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP], active_type = 0;

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-mapfunc"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	$exc.on('click', '.caz', function() {
		map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 18);
	}).on('click', '.panto', function() {
		map.panTo(new BMap.Point(102.709092, 25.004890));
	}).on('click', '.panby', function() {
		map.panBy(50, -50);
	}).on('click', '.reset', function() {
		map.reset();
	}).on('click', '.center', function() {
		map.setCenter(new BMap.Point(102.709092, 25.004890));
	}).on('click', '.type', function() {
		active_type = active_type == 3 ? 0 : active_type + 1;
		map.setMapType(type[active_type]);
		active_type == 1 ? map.setCurrentCity("昆明") : null
	}).on('click', '.city', function() {
		map.setCurrentCity('北京');
	}).on('click', '.viewport', function() {
		map.setViewport([new BMap.Point(102.707092, 25.002890), new BMap.Point(102.709092, 25.004890)])
	}).on('click', '.zoom', function() {
		map.setZoom(10)
	}).on('click', '.highresolution', function() {
		var highresolution = map.highResolutionEnabled();
		console.log(highresolution);
		alert(highresolution);
	}).on('click', '.zoomin', function() {
		map.zoomIn()
	}).on('click', '.zoomout', function() {
		map.zoomOut()
	})


})(jQuery)