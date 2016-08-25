(function($) {
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-control"))
			$(this).addClass("active");
	})
})(jQuery)