import React, {Component} from 'react'

import {ScrollTable, Column} from '../../common/scroll/ScrollTable'

import Store from '../store/ScrollTableStore'

export default class Example extends Component {
	render() {
		let data = Store.getList();
		return (
			<div>
				<ScrollTable title="姓名" fixed={["name"]} data={data} width="60">
					<Column title="姓名" value="name" width="60" />
					<Column title="年龄" value="age" width="40" />
					<Column title="性别" value="male" width="40" />
					<Column title="地址" value="address" width="120" />
					<Column title="电话" value="mobile" />
					<Column title="职业" value="profession" />
					<Column title="职位" value="position"  width="60" />
				</ScrollTable>
			</div>
		)
	}
} 