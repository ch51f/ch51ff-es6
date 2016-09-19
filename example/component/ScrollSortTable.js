import React, {Component} from 'react'

import {ScrollTable, Column} from 'common/scroll/ScrollTable'

import {quickSortObj} from 'common/utils/quickSort'

export default class Example extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}
	componentWillMount() {
		this.setState({data: this._getData()});
	}
	_getData() {
		let data = [];
		for(let i = 1; i < 11; i++) {
			let row = {};
			row.name = "row_" + i;
			if(i == 10) {
				row.name = "我是个很长的名字呵呵呵"
			}
			row.col_1 = Math.round(Math.random()*9+1);
			row.col_2 = Math.round(Math.random()*9+1);
			row.col_3 = Math.round(Math.random()*9+1);
			row.col_4 = Math.round(Math.random()*9+1);
			row.col_5 = Math.round(Math.random()*9+1);
			row.col_6 = Math.round(Math.random()*9+1);
			row.col_7 = Math.round(Math.random()*9+1);
			row.col_8 = Math.round(Math.random()*9+1);
			data.push(row);
		}
		return data;
	}
	_sortHandle(key, i) {
		// let data = quickSortObj(this.state.data, key);

		// this.setState({data: data});
		// console.log(key)
	}
	render() {
		let {data} = this.state;
		let height = document.documentElement.offsetHeight;
		return (
			<div>
				<ScrollTable title="测试排序" values={["name"]} data={data} fixedWidth="80" height={height} autoWidth={true} defaultWidth={100} sort={true} sortHandle={this._sortHandle.bind(this)} >
					<Column title="列1" value="col_1"/>
					<Column title="列2" value="col_2"/>
					<Column title="列3" value="col_3"/>
					<Column title="列4" value="col_4"/>
					<Column title="列5" value="col_5"/>
					<Column title="列6" value="col_6"/>
					<Column title="列7" value="col_7"/>
					<Column title="列8" value="col_8"/>
				</ScrollTable>
			</div>
		)
	}
} 