import React, {Component, PropTypes} from 'react'

class App extends Component {
	render() {
		return (
			<div>
				<p>开始学习redux</p>	
				{this.props.children}
			</div>
		)
	}
}

export default App