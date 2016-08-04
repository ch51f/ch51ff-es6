/**
 * @description 水印
 * @params text 水印内容 默认 "ch51ff ch51ff"
 */

import React, {Component, PropTypes} from 'react';
class WaterMark extends Component{
	constructor(props,context) {
		super(props,context);
	}

	componentDidMount() {
		let text = this.props.text || this.state.text;
		let {els} = this.props;

		let ctx = this.refs.canvas.getContext('2d');
		ctx.font="10px Arial"; 
		ctx.fillStyle = "#e1e1e1";
		ctx.rotate(20 * Math.PI / 180);
		ctx.fillText(text, 10, 10); 

		var img = this.convertCanvasToImage(this.refs.canvas);

		els.map((el) => {
			document.getElementById(el).style.backgroundImage = "url(" + img.src + ")";
		})
	}

	convertCanvasToImage(canvas) {
		var image = new Image(); 
		image.src = canvas.toDataURL("image/png"); 
		return image; 
	}


	render() {
		return (
			<section>
				<canvas className="watermark-canvas" width="200" height="80" ref="canvas">
					Your browser does not support the HTML5 canvas tag.
				</canvas>
			</section>
		);
	}
}

WaterMark.propTypes = {
	els: PropTypes.array,
	text: PropTypes.string
}

WaterMark.defaultProps = {
	els: [],
	text: "ch51ff ch51ff"
}

export default WaterMark;