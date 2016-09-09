$(function() {
	console.log(moment().format())
	console.log(moment())
	console.log(moment("2016-09-09"))
	console.log(moment("09-09-2016", "MM-DD-YYYY"))
	console.log(moment().isValid())
	console.log(moment().millisecond())
})