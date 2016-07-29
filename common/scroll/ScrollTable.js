/**
 * @description 滑动table
 */
import React, {Component, PropTypes} from 'react'

class ScrollTable extends Component {

	constructor(props){
		super(props)
		this.cW = 0;
	}
	
	componentWillMount() {
		let self = this;
		let {children} = this.props;
		children.map((item) => {
			let {width} = item.props;
			self.cW += width ? parseInt(width) : 100;
		})
	}

	_renderHeadTh(col) {
		let {title, value, width} = col.props;
		let w = width ? parseInt(width) : 100;
		return (
			<th key={value} className="column" style={{width: w}}>{title}</th>
		)
	}

	_renderFixedTitle(row, i) {
		let {fixed, width} = this.props;
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
		let {title, children, data, width} = this.props;
		return (
			<div className="scroll-table" ref="scroll">
				<div className="head">
					<div className="fixed-name" style={{width: width}}>{title}</div>
					<div className="scroll-panel"style={{paddingLeft: width}}>
						<table className="columns" ref="headC" style={{width: this.cW}}>
							<tbody>
								<tr>
									{children.map((col) => {
										return this._renderHeadTh(col);
									})}
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="content">
					<table className="fixed-title" style={{width: width}}>
						<tbody>
							{data.map((row, i) => {
								return this._renderFixedTitle(row, i);
							})}
						</tbody>
					</table>
					<div className="scroll-panel"style={{paddingLeft: width}}>
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