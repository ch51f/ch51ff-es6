import React, {Component} from 'react'

import DoubleList from 'common/list/DoubleList'

import Store from '../store/DoubleListStore'

class example extends Component {
	render() {
		let data = Store.getList()
		return (
			<div>
				<DoubleList data={data} isLink={true} />
			</div>
		)
	}
}

export default example