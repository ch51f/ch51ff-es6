import React, {Component} from 'react'

import Loading from 'common/loading/Loading'

export default class Example extends Component {
	render() {
		return (
			<Loading isShow={true} text='正在加载...' />
		)
	}
}