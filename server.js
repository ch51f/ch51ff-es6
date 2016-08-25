var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

// webpack + react 模块
var react = require('./routes/react');

// 百度地图模块
var bmap = require('./routes/bmap');

var app = express();
var port = 18080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"))
});

app.use("/example", react);
app.use("/bmap", bmap);

app.listen(port, function() {
    console.log('ch51ff environment is OK!');
})