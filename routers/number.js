var express = require('express');
var path = require('path');
var router = express.Router();

// 微信端样式
router.get("/*", function(req, res, next) {
    res.sendFile(path.resolve(__dirname, "..", "webpack/number.html"))
});

module.exports = router;
