var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
	res.render('moment/index', {
		title : "Moment.js 使用方法"
	});
})

module.exports = router;