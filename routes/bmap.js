var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
	res.render('bmap/index',{
		layout : false,
		title : '百度地图学习'
	});
})

module.exports = router;