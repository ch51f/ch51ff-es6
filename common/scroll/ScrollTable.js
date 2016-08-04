/**
 * @description 滑动table
 * ScrollTable title 头部左侧名称 fixed [] 头部左侧显示列 fixedWidth 左侧宽度  height 内容区高度 data [] 数据数组
 * Column title 列名 value 数据key width 列宽
 */
import React, {Component, PropTypes} from 'react'

import ClassCore from '../utils/ClassCore'

class ScrollTable extends Component {
	constructor(props){
		super(props)
		// this.cW = 0; 				//内容区宽度
		// this.cH = 0; 				//内容区高度
		this.startX = 0; 			//touchstart X值
		this.startY = 0; 			//touchstart Y值
		this.endX = 0; 				//touchend X值
		this.endY = 0;				//touchend Y值
		this.transformX = 0;		//内容区X偏移量
		this.transformY = 0;		//内容区Y偏移量
		this.vertical = 0;			//是否垂直 默认0 垂直1 水平2
		this.isTouch = false;		//是否touch
		this.state = {
			top_height: 0,			//头部高度
			con_height: 0,			//内容区高度
			con_width: 0,			//内容区宽度
			con_heights: [],		//内容区每行高度
			con_widths: []			//内容区每列宽度
		}
	}
	
	// 初始化前获取内容区总高宽
	componentWillMount() {
		let self = this;
		let {children, data, autoWidth, defaultWidth} = this.props;

		if(!autoWidth) {
			let con_width = 0;

			children.map((item, i) => {
				let {width} = item.props;
				con_width += width ? parseFloat(width) : parseFloat(defaultWidth)
			})

			this.setState({con_width: con_width});
		}
	}

	// 渲染完成后校准高宽
	componentDidMount() {
		let {headT, headC, conT, conC} = this.refs;

		let top_height = 0, con_height = 0, con_width = 0, 
			con_heights = [], con_widths = [];

		top_height = Math.max(headT.offsetHeight, headC.offsetHeight);

		let conT_trs = conT.getElementsByTagName("tr"),
			conC_trs = conC.getElementsByTagName("tr"),
			conC_tds = conC_trs[0].getElementsByTagName("td"),
			headC_trs = headC.getElementsByTagName("tr"),
			headC_tds = headC_trs[0].getElementsByTagName("th");

		for(let i = 0; i < conT_trs.length; i++) {
			let temp = Math.max(conT_trs[i].offsetHeight, conC_trs[i].offsetHeight);
			con_heights.push(temp);
			con_height += temp;
		}

		for(let i = 0; i < conC_tds.length; i++) {
			let temp = Math.max(conC_tds[i].offsetWidth, headC_tds[i].offsetWidth);
			con_widths.push(temp);
			con_width += temp;
		}

		this.setState({top_height: top_height, con_height: con_height, con_width: con_width, con_heights: con_heights, con_widths: con_widths});
	}

	// touchstart
	// 获取 touchstart X,Y值，记录touchstarttime, 删除delay Class, 重置vertical
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

		this.vertical = 0;
	}

	// touchmove
	// 阻止默认事件，记录touchend X,Y值， 计算角度，获取是否是垂直scroll, 内容区scroll
	_touchMove (e){
		e = e?e:window.event; 
		e.preventDefault();
		let touch = e.targetTouches[0] 

		this.endY = touch.pageY - this.startY+ this.transformY;
		this.endX = touch.pageX - this.startX + this.transformX;

		if(this.vertical == 0) {
			let angle = Math.atan2(Math.abs(touch.pageY - this.startY), Math.abs(touch.pageX - this.startX)) * 180 / Math.PI;
			this.vertical = angle > 45 ? 1 : 2;
		} else {
			let max = 0;
			if(this.vertical == 1) {
				let {height} = this.props;
				let {con_height, top_height} = this.state;
				height = parseFloat(height) - top_height;
				max = -con_height + parseInt(height);
				this.endX = this.transformX;
				if(this.endY > 0) {
					this.endY = 0;
				} else if(this.endY < max) {
					this.endY = max;
				}
				this._transformY(this.endY);
			} else if(this.vertical == 2) {
				let {con_width} = this.state;
				let {fixedWidth} = this.props
				max = -con_width + document.documentElement.offsetWidth - fixedWidth;
				this.endY = this.transformY;
				if(this.endX > 0) {
					this.endX = 0;
				} else if(this.endX < max) {
					this.endX = max;
				}
				this._transformX(this.endX);
			} 
		}
	}

	// touchend
	// 获取touchengtime, 添加 delay class，判断时候有delay偏移，计算偏移X,Y
	_touchEnd (e){
		this.touchEndTime = new Date();
		let timeDif = this.touchEndTime - this.touchStartTime;
		let more = 0;

		const {headC, conT, conC} = this.refs;
		ClassCore.addClass(headC, 'scroll-delay');
		ClassCore.addClass(conT, 'scroll-delay');
		ClassCore.addClass(conC, 'scroll-delay');

		if(timeDif < 300 && this.vertical != 0) {
			if(this.vertical == 1) {
				let {con_height, top_height} = this.state;
				let {height} = this.props;

				height = parseFloat(height) - top_height;
				more = (300 - timeDif) / 50 * (this.endY - this.transformY);
				this.endY = this.endY + more;
				if(this.endY > 0) {
					this.endY = 0;
				}
				if(this.endY < -con_height + parseInt(height)) {
					this.endY = -con_height + parseInt(height)
				}
				this._transformY(this.endY);
			} else {
				let {con_width} = this.state;
				let {fixedWidth} = this.props
				more = (300 -timeDif) / 50 * (this.endX - this.transformX);
				this.endX = this.endX + more;
				if(this.endX > 0) {
					this.endX = 0;
				}
				if(this.endX < -con_width + document.documentElement.offsetWidth - fixedWidth) {
					this.endX = -con_width + document.documentElement.offsetWidth - fixedWidth
				}
				this._transformX(this.endX);
			}
		}

		this.transformX = this.endX;
		this.transformY = this.endY;
	}

	// X 偏移
	_transformX(x) {
		const {headC, conC} = this.refs;
		headC.style.transform = "translate3d(" + x + "px," + 0 + "px,0)";
		conC.style.transform = "translate3d(" + x + "px," + this.transformY + "px,0)";
		headC.style.webkitTransform = "translate3d(" + x + "px," + 0 + "px,0)";
		conC.style.webkitTransform = "translate3d(" + x + "px," + this.transformY + "px,0)";
	}

	// Y 偏移
	_transformY(y) {
		const {conT, conC} = this.refs;
		conT.style.transform = "translate3d(" + 0 + "px," + y + "px,0)";
		conC.style.transform = "translate3d(" + this.transformX + "px," + y + "px,0)";
		conT.style.webkitTransform = "translate3d(" + 0 + "px," + y + "px,0)";
		conC.style.webkitTransform = "translate3d(" + this.transformX + "px," + y + "px,0)";
	}


	// headT
	_renderHeadTh(col, i) {
		let {autoWidth, defaultWidth} = this.props;
		let {title, value, width, children} = col.props;
		let {top_height, con_widths} = this.state;
		let cls = "column";
		if(autoWidth) {
			return (
				<th key={i} className={cls} style={{height: top_height, width: con_widths[i]}}>{children ? children : title}</th>
			)
		} else {
			return (
				<th key={i} className={cls} style={{height: top_height, width: width ? width : defaultWidth}}>{children ? children : title}</th>
			)
		}
	}

	// conT
	_renderFixedTitle(row, i) {
		let {values} = this.props;
		let data = [];
		values.map((item) => {
			data.push(row[item]);
		})
		return (
			<tr key={i}>
				{data.map((col) => {
					return this._renderFixedTitleCol(col, i)
				})}
			</tr>
		)
	}
	// conT内容
	_renderFixedTitleCol(col, i) {
		let {con_heights} = this.state;
		return (
			<td key={i} style={{height: con_heights[i]}}>{col}</td>
		)
	}

	// conC
	_renderCon(row, i) {
		let {children, autoWidth, defaultWidth} = this.props;
		let data = [];
		children.map((item) => {
			let temp = {value: ""};
			temp.width = item.props.width ? parseInt(item.props.width) : defaultWidth;
			if(row.hasOwnProperty(item.props.value)) {
				temp.value = row[item.props.value]
			}
			data.push(temp)
		})
		return (
			<tr key={i}>
				{data.map((col, j) => {
					return this._renderConCol(col, j, i)
				})}
			</tr>
		)
	}
	// conC内容
	_renderConCol(col, i, j) {
		let {autoWidth} = this.props;
		let {con_heights, con_widths} = this.state;
		if(autoWidth) {
			return (
				<td key={i} style={{height: con_heights[j], width: con_widths[i]}}>{col.value}</td>
			)
		} else {
			return (
				<td key={i} style={{height: con_heights[j], width: col.width}}>{col.value}</td>
			)
		}
	}

	render() {
		let {title, children, data, fixedWidth, height, autoWidth} = this.props;
		let {top_height, con_height, con_width} = this.state;
		height = parseFloat(height) - top_height;
		let headTStyle = {
			width: fixedWidth
		};
		if(top_height > 0) {
			headTStyle.height = top_height;
			headTStyle.lineHeight = top_height + "px";
		}
		let cls = autoWidth ? "scroll-table no-wrap" : "scroll-table";
		return (
			<div className={cls} ref="scroll" onTouchStart={this._touchStart.bind(this)} onTouchMove={this._touchMove.bind(this)} onTouchEnd={this._touchEnd.bind(this)} >
				<div className="head">
					<div className="fixed-name" ref="headT" style={headTStyle}>{title}</div>
					<div className="panel"style={{paddingLeft: fixedWidth}}>
						<table className="columns" ref="headC" style={{width: con_width}}>
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
					<div className="panel"style={{paddingLeft: fixedWidth}}>
						<table className="con" ref="conC" style={{width: con_width}}>
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


class Column extends Component {}


export {ScrollTable, Column}