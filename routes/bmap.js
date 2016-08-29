var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
	res.render('bmap/index', {
		title : '百度地图调用'
	});
})

router.get("/base", function(req, res, next) {
	res.render('bmap/base', {
		title : '百度地图基础类'
	});
})

router.get("/to", function(req, res, next) {
	res.render('bmap/to', {
		title : '百度地图坐标转换'
	});
})

router.get("/event", function(req, res, next) {
	res.render('bmap/event', {
		title : '百度地图事件'
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

router.get("/rightmenu", function(req, res, next) {
	res.render('bmap/rightmenu', {
		title : '百度地图右键菜单'
	});
})

router.get("/overlay", function(req, res, next) {
	res.render('bmap/overlay', {
		title : '百度地图覆盖物'
	});
})

router.get("/marker", function(req, res, next) {
	res.render('bmap/marker', {
		title : '百度地图图像标注'
	});
})

module.exports = router;