import React, {Component} from 'react'

import {ScrollTable, Column} from '../../common/scroll/ScrollTable'

import Store from '../store/ScrollTableStore'

export default class Example extends Component {
	render() {
		let data = Store.getList(), temp = [];
		// for(let i = 0; i < 7; i++) {
		// 	temp.push(data[i])
		// }
		let height = document.documentElement.offsetHeight;
		return (
			<div>
				<ScrollTable title="姓名" values={["profession"]} data={data} fixedWidth="60" height={height} autoWidth={true} defaultWidth={100} >
					<Column title="姓名姓名姓名" value="name">
						<p>姓名</p>
						<p>姓名姓名</p>
					</Column>
					<Column title="年龄" value="age"/>
					<Column title="性别" value="male"/>
					<Column title="地址" value="address" width={80}/>
					<Column title="电话" value="mobile"/>
					<Column title="职业" value="profession"/>
					<Column title="职位" value="position"/>
				</ScrollTable>
			</div>
		)
	}
} 