/**
 * @description 滑动table
 */
import React, {Component, PropTypes} from 'react'

import ClassCore from '../utils/ClassCore'

class ScrollTable extends Component {

	constructor(props){
		super(props)
		this.cW = 0;
		this.cH = 0;
		this.startX = 0;
		this.startY = 0;
		this.endX = 0;
		this.endY = 0;
		this.transformX = 0;
		this.transformY = 0;
		this.vertical = true;
	}
	
	componentWillMount() {
		let self = this;
		let {children, data} = this.props;
		children.map((item) => {
			let {width} = item.props;
			self.cW += width ? parseInt(width) : 100;
		})
		this.cH = 40 * data.length;
	}

	_touchStart (e){
		e = e?e:window.event; 
		let touch = e.targetTouches[0]; 
		this.startX = touch.pageX;
		this.startY = touch.pageY;

		this.touchStartTime = new Date();

		const {headC, conT, conC} = this.refs;


		ClassCore.removeClass(headC, 'scroll-delay');
		ClassCore.removeClass(conT, 'scroll-delay');
		ClassCore.removeClass(conC, 'scroll-delay');
	}
	_touchMove (e){
		e = e?e:window.event; 
		let touch = e.targetTouches[0] 
		e.preventDefault();
		this.endY = touch.pageY - this.startY+ this.transformY;
		this.endX = touch.pageX - this.startX + this.transformX;
		let angle = Math.atan2(Math.abs(touch.pageY - this.startY), Math.abs(touch.pageX - this.startX)) * 180 / Math.PI;
		if(angle > 45) {
			this.vertical = true;
		} else {
			this.vertical = false;
		} 

		let max = 0;

		const {height} = this.props;
		if(this.vertical) {
			max = - this.cH + parseInt(height);
			if(this.endY > 0) {
				this._transformY(0);
				this.endY = 0;
			} else if(this.endY < max) {
				this._transformY(max);
				this.endY = max;
			} else {
				this._transformY(this.endY);
			}
			this.endX = this.transformX;
		} else {
			max = - this.cW + document.documentElement.offsetWidth;
			if(this.endX > 0) {
				this._transformX(0);
				this.endX = 0;
			} else if(this.endX < max) {
				this._transformX(max);
				this.endX = max;
			} else {
				this._transformX(this.endX);
			}
			this.endY = this.transformY;
		} 
	}
	_touchEnd (e){
		this.touchEndTime = new Date();
		let timeDif = this.touchEndTime - this.touchStartTime;
		let more = 0;
		const {height} = this.props;

		const {headC, conT, conC} = this.refs;


		ClassCore.addClass(headC, 'scroll-delay');
		ClassCore.addClass(conT, 'scroll-delay');
		ClassCore.addClass(conC, 'scroll-delay');

		if(timeDif < 300) {
			if(this.vertical) {
				more = (300 - timeDif) / 50 * (this.endY - this.transformY);
				this.endY = this.endY + more;
				if(this.endY > 0) {
					this.endY = 0;
				}
				if(this.endY < -this.cH + parseInt(height)) {
					this.endY = -this.cH + parseInt(height)
				}
				this._transformY(this.endY);
			} else {
				more = (300 -timeDif) / 50 * (this.endX - this.transformX);
				this.endX = this.endX + more;
				if(this.endX > 0) {
					this.endX = 0;
				}
				if(this.endX < -this.cW + document.documentElement.offsetWidth) {
					this.endX = -this.cW + document.documentElement.offsetWidth
				}
				this._transformX(this.endX);
			}
		}

		this.transformX = this.endX;
		this.transformY = this.endY;
	}
	_transformX(x) {
		const {headC, conC} = this.refs;
		headC.style.transform = "translate3d(" + x + "px," + 0 + "px,0)";
		conC.style.transform = "translate3d(" + x + "px," + this.transformY + "px,0)";
		headC.style.webkitTransform = "translate3d(" + x + "px," + 0 + "px,0)";
		conC.style.webkitTransform = "translate3d(" + x + "px," + this.transformY + "px,0)";
	}
	_transformY(y) {
		const {conT, conC} = this.refs;
		conT.style.transform = "translate3d(" + 0 + "px," + y + "px,0)";
		conC.style.transform = "translate3d(" + this.transformX + "px," + y + "px,0)";
		conT.style.webkitTransform = "translate3d(" + 0 + "px," + y + "px,0)";
		conC.style.webkitTransform = "translate3d(" + this.transformX + "px," + y + "px,0)";
	}


	_renderHeadTh(col, i) {
		let {title, value, width} = col.props;
		let w = width ? parseInt(width) : 100;
		return (
			<th key={i} className="column" style={{width: w}}>{title}</th>
		)
	}

	_renderFixedTitle(row, i) {
		let {fixed} = this.props;
		let data = [];
		fixed.map((item) => {
			data.push(row[item]);
		})
		return (
			<tr key={i}>
				{data.map((col, i) => {
					return this._renderFixedTitleCol(col, i)
				})}
			</tr>
		)
	}
	_renderFixedTitleCol(col, i) {
		return (
			<td key={i}>{col}</td>
		)
	}

	_renderCon(row, i) {
		let {children} = this.props;
		let data = [];
		children.map((item) => {
			let temp = {value: ""};
			temp.width = item.props.width ? parseInt(item.props.width) : 100;
			if(row.hasOwnProperty(item.props.value)) {
				temp.value = row[item.props.value]
			}
			data.push(temp)
		})
		return (
			<tr key={i}>
				{data.map((col, i) => {
					return this._renderConCol(col, i)
				})}
			</tr>
		)
	}
	_renderConCol(col, i) {
		return (
			<td key={i} style={{width: col.width}}>{col.value}</td>
		)
	}

	render() {
		let {title, children, data, fixedWidth, height} = this.props;
		return (
			<div className="scroll-table" ref="scroll" onTouchStart={this._touchStart.bind(this)} onTouchMove={this._touchMove.bind(this)} onTouchEnd={this._touchEnd.bind(this)} >
				<div className="head">
					<div className="fixed-name" style={{width: fixedWidth}}>{title}</div>
					<div className="scroll-panel"style={{paddingLeft: fixedWidth}}>
						<table className="columns" ref="headC" style={{width: this.cW}}>
							<tbody>
								<tr>
									{children.map((col, i) => {
										return this._renderHeadTh(col, i);
									})}
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="content" style={{height: height}}>
					<table className="fixed-title" ref="conT" style={{width: fixedWidth}}>
						<tbody>
							{data.map((row, i) => {
								return this._renderFixedTitle(row, i);
							})}
						</tbody>
					</table>
					<div className="scroll-panel"style={{paddingLeft: fixedWidth}}>
						<table className="con" ref="conC" style={{width: this.cW}}>
							<tbody>
								{data.map((row, i) => {
									return this._renderCon(row, i);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

class Column extends Component {
	render() {
		return (
			<div>Column</div>
		)
	}
}


export {ScrollTable, Column}