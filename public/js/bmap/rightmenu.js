(function($) {
	var map = new BMap.Map("allmap");

	var rightmenu = new BMap.ContextMenu();
	var zoom_in_item = new BMap.MenuItem("zoom in", function() {
		map.zoomIn();
	})
	var zoom_out_item = new BMap.MenuItem("zoom out", function() {
		map.zoomOut();
	})
	// zoom_in_item.setIcon(BMAP_CONTEXT_MENU_ICON_ZOOMIN)
	// zoom_out_item.setIcon(BMAP_CONTEXT_MENU_ICON_ZOOMOUT)
	rightmenu.addItem(zoom_in_item);
	rightmenu.addSeparator();
	rightmenu.addItem(zoom_out_item);

	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");
	map.addContextMenu(rightmenu);
	map.enableScrollWheelZoom();

	var type = [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP], active_type = 0;

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-rightmenu"))
			$(this).addClass("active");
	})

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");

	$control.on("click", ".item", function() {
		var $this = $(this);
		var flag = $this.hasClass("active");
		switch($this.data('key')) {
			case 'rightmenu':
				flag ? map.removeContextMenu(rightmenu) : map.addContextMenu(rightmenu);
				break;
			default:
				return false;
		}
		$this.toggleClass("active");
	});


})(jQuery)