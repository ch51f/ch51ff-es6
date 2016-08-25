var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
	res.render('bmap/index', {
		title : '百度地图调用'
	});
})

router.get("/control", function(req, res, next) {
	res.render('bmap/control', {
		title : '百度地图控件'
	});
})

router.get("/mapfunc", function(req, res, next) {
	res.render('bmap/mapfunc', {
		title : '百度地图控件'
	});
})

module.exports = router;