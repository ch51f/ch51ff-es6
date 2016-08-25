(function($) {
	var $wrap = $(".bmap-wrap"),
		$left = $(".bmap-left", $wrap),
		$right = $(".bmap-right", $wrap);

	init();
	// 初始化界面
	function init() {
		var h = document.body.offsetHeight;
		$wrap.height(h);
	}

	$(window).resize(function() {
		init();
	})
})(jQuery);