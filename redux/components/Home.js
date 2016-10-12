import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
	render() {
		console.log(this)
		return (
			<div>
				<p>test</p>	
			</div>
		)
	}
}

export default connect(
	state => ({
		counter: state
	})
)(Home)
