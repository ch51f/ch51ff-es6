(function($) {
	var map = new BMap.Map("allmap");

	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");
	map.enableScrollWheelZoom();

	var type = [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP], active_type = 0;

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-overlay"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	var markers = [];

	$exc.on('click', '.s_m', function() {
		var bounds = map.getBounds();
		var lng = rnd(bounds.Je, bounds.Ee)
		var lat = rnd(bounds.De, bounds.Ie)
		var marker = new BMap.Marker(new BMap.Point(lng, lat));
		markers.push(marker);
		map.addOverlay(marker);
	}).on('click', '.r_m', function() {
		if(markers.length == 0)
			return false;
		map.removeOverlay(markers.pop());
	}).on('click', '.r_a', function() {
		map.clearOverlays()
	}).on('click', '.g_w', function() {
		var infowindow = map.getInfoWindow()
		console.log(infowindow);
	}).on('click', '.g_o', function() {
		var overlays = map.getOverlays()
		console.log(overlays);
	}).on('click', '.g_p', function() {
		var panes = map.getPanes()
		console.log(panes);
	})


	function rnd(min, max){
		min = min * Math.pow(10, 6)
		max = max * Math.pow(10, 6)
		return (min + Math.floor(Math.random() * (max - min + 1))) / Math.pow(10, 6); 
	}
})(jQuery)