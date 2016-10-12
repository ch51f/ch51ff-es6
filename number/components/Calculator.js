import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {input} from '../actions/calculator'

import Control from './Control'
import Show from './Show'
import Turn from './Turn'

class Calculator extends Component {
	render() {
		return (
			<div className="calculator">
				<p onClick={() => action('HAHA')}>{this.props.calculator.Calculator.data}</p>
				<Control />
				<Show />
				<Turn />
			</div>
		)
	}
}

export default connect(
	state => ({
		calculator: state
	})
)(Calculator)