import React, {Component, PropTypes} from 'react'

import ClassCore from '../utils/ClassCore'

export default class Scroll extends Component{
	constructor(props, context) {
		super(props, context);
		this.coord = {
			startX: 0,
			startY: 0,
			endX: 0,
			endY: 0,
			angle: 0,
			translateX: 0,
			translateY: 0,
			maxX: 0,
			maxY: 0,
		}
	}

	// 获取scrollpanel 最大偏移量X,Y
	componentDidMount() {
		let {scroll} = this.refs;
		this.coord.maxY = scroll.scrollHeight - scroll.offsetHeight;
		this.coord.maxX = scroll.scrollWidth - scroll.offsetWidth;
	}

	/*
	 * touchstart
	 * 获取touchstart X,Y
	 * 获取toushstart time
	 * scroll element removeclass ease
	*/
	_touchStart(e) {
		let touch = e.targetTouches[0]; 
		let {el} = this.refs;

		this.coord.startX = touch.pageX; 
		this.coord.startY = touch.pageY;

		this.touchStartTime = new Date();

		ClassCore.removeClass(el, 'ease');
	}

	
	/*
	 * touchmove
	 * 获取touchend X,Y
	 * 现在 endY
	 * scroll
	*/
	_touchMove(e) {
		e.preventDefault()

		let touch = e.targetTouches[0]; 
		let {el} = this.refs;

		this.coord.endX = touch.pageX - this.coord.startX + this.coord.translateX; 
		this.coord.endY = touch.pageY - this.coord.startY + this.coord.translateY; 

		// this.coord.angle = Math.atan2(Math.abs(touch.pageY - this.coord.startY), Math.abs(touch.pageX - this.coord.startX)) * 180 / Math.PI;

		if(this.coord.endY > 0) {
			this.coord.endY = 0;
		}
		if(this.coord.endY < -this.coord.maxY) {
			this.coord.endY = -this.coord.maxY;
		}

		el.style.transform = "translate3d(0," + this.coord.endY + "px,0)";
		el.style.webkitTransform = "translate3d(0," + this.coord.endY + "px,0)"; 
	}

	_touchEnd(e) {
		this.touchEndTime = new Date();
		let timeDif = this.touchEndTime - this.touchStartTime;
		if(timeDif < 300) {
			let more = (300 - timeDif) / 50  * (this.coord.endY - this.coord.translateY);
			this.coord.endY = this.coord.endY + more;
			if(this.coord.endY > 0) {
				this.coord.endY = 0;
			}
			if(this.coord.endY < -this.coord.maxY) {
				this.coord.endY = -this.coord.maxY;
			}
		}
		let {el} = this.refs;
		ClassCore.addClass(el, 'ease');
		el.style.transform = "translate3d(0," + this.coord.endY + "px,0)";
		el.style.webkitTransform = "translate3d(0," + this.coord.endY + "px,0)"; 
		this.coord.translateY = this.coord.endY;
	}

	//计算scrollpanel 高宽，最大为screen高宽 
	_getStyle() {
		let {height, width} = this.props;
		if(!height) {
			height = window.screen.height;
		} else if(height > window.screen.height) {
			height = window.screen.height
		}
		if(!width) {
			width = window.screen.width;
		} else if(height > window.screen.width) {
			width = window.screen.width
		}
		return {height: height, width: width}
	}

	render() {
		let {children} = this.props;
		let style = this._getStyle();
		return (
			<div ref="scroll" style={style} className="scroll-panel" onTouchStart={this._touchStart.bind(this)} onTouchMove={this._touchMove.bind(this)} onTouchEnd={this._touchEnd.bind(this)}>
				<div ref="el" className="con">
					{children}
				</div>
			</div>
		)
	}
}
