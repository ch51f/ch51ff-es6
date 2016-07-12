var express = require("express")
var path = require('path')

var app = express()

app.get("/test/*", function(req, res) {
	res.sendFile(path.resolve(__dirname, "./index.html"))
})

app.listen(5151, function() {
	console.log("Server listening on http://localhost: 5151, Ctrl+C to stop")
})