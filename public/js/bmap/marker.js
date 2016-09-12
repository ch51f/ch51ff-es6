(function($) {
	var map = new BMap.Map("allmap");

	map.centerAndZoom(new BMap.Point(102.707092, 25.002890), 25);
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("昆明");
	map.enableScrollWheelZoom();

	var type = [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP], active_type = 0;

	var $menu = $("#menu"), $m_items = $(".item", $menu);
	$m_items.each(function() {
		if($(this).hasClass("m-marker"))
			$(this).addClass("active");
	});

	var marker_obj = {
		offset: new BMap.Size(0, 0), //位置偏移量
		// icon: ICON, //图标
		enableMassClear: true, //是否被clearOVerlays清除
		enableDragging: true, //是否可拖拽
		enableClicking: true, // 是否可点击
		raiseOnDrag: true, //是否开启拖拽完成动画
		// draggingCursor: cursor, //拖拽样式
		rotation: 0, //旋转
		// shadow: ICON, //阴影
		title: "地图中心", //hover显示标题
	}

	var marker = new BMap.Marker(new BMap.Point(102.707092, 25.002890), marker_obj);

	map.addOverlay(marker);

	var $control = $("#control"), $exc = $("#exc"), $zoom = $("#zoom");
})(jQuery)