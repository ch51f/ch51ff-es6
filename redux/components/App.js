import React, {Component, PropTypes} from 'react'

class App extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<p>test</p>	
				{this.props.children}
			</div>
		)
	}
}

export default App