var express = require("express")
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, 'src')));

app.get("/test/*", function(req, res) {
	res.sendFile(path.resolve(__dirname, "test/index.html"))
})

app.listen(5100, function() {
	console.log("Server listening on http://localhost: 5100, Ctrl+C to stop")
})