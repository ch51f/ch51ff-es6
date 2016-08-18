/*
 * 生成水印图片
 * text 水印文字内容(可显示12个字)
 * color 水印文字颜色
*/
function watermark(text = "", color = "#e1e1e1") {
	let canvas = document.createElement("canvas");
	text = text.slice(0,12);
	canvas.style.display = "none"; 
	canvas.width = 150; 
	canvas.height = 65; 
	document.body.appendChild(canvas); 
	let ctx = canvas.getContext('2d'); 
	ctx.font="10px Helvetica Neue, Arial"; 
	ctx.fillStyle = color; 
	ctx.rotate(20 * Math.PI / 180); 
	ctx.fillText(text, 10, 10); 

	return canvas.toDataURL("image/png");
}

export default watermark;