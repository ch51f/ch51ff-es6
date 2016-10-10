var express = require('express');
var router = express.Router();

var fixedTitle = function(str) {
	var prefix = "百度地图";
	var connector = "-";
	return prefix + connector + str;
}

router.get("/", function(req, res, next) {
	res.render('bmap/index', {
		title : fixedTitle('调用')
	});
})

router.get("/base", function(req, res, next) {
	res.render('bmap/base', {
		title : fixedTitle('基础类')
	});
})

router.get("/to", function(req, res, next) {
	res.render('bmap/to', {
		title : fixedTitle('坐标转换')
	});
})

router.get("/event", function(req, res, next) {
	res.render('bmap/event', {
		title : fixedTitle('事件')
	});
})

router.get("/control", function(req, res, next) {
	res.render('bmap/control', {
		title : fixedTitle('控件')
	});
})

router.get("/control_new", function(req, res, next) {
	res.render('bmap/control_new', {
		title : fixedTitle('自定义控件')
	});
})

router.get("/mapfunc", function(req, res, next) {
	res.render('bmap/mapfunc', {
		title : fixedTitle('方法')
	});
})

router.get("/rightmenu", function(req, res, next) {
	res.render('bmap/rightmenu', {
		title : fixedTitle('右键菜单')
	});
})

router.get("/overlay", function(req, res, next) {
	res.render('bmap/overlay', {
		title : fixedTitle('覆盖物')
	});
})

router.get("/marker", function(req, res, next) {
	res.render('bmap/marker', {
		title : fixedTitle('图像标注')
	});
})

router.get("/layer", function(req, res, next) {
	res.render('bmap/layer', {
		title : fixedTitle('图层类')
	});
})

module.exports = router;