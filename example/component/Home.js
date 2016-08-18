import React, {Component} from 'react'

import DoubleList from 'common/list/DoubleList'

import Store from '../store/HomeStore'

export default class Home extends Component {
	render() {
		let data = Store.getList()
		return (
			<div>
				<DoubleList data={data} isLink={true} />
			</div>
		)
	}
}