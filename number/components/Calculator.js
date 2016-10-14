import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {input, remove, clear, dot} from '../actions/calculator'

import Control from './Control'
import Show from './Show'
import Turn from './Turn'

class Calculator extends Component {
	_input(txt) {
		let {operations} = this.props;
		let num = operations[operations.length - 1];
		if(num.length > 14) {
			alert("已到上限(15)");
			return false;
		} 
		// var reg = $(this).val().match(/\d+\.?\d{0,2}/);
		this.props.dispatch(input(txt))
	}
	_remove() {
		this.props.dispatch(remove())
	}
	_clear() {
		this.props.dispatch(clear())
	}
	_dot() {
		this.props.dispatch(dot())
	}
	render() {
		let  {operations} = this.props;
		return (
			<div className="calculator">
				<Control input={this._input.bind(this)} remove={this._remove.bind(this)} clear={this._clear.bind(this)} dot={this._dot.bind(this)} />
				<Show data={operations} />
				<Turn />
			</div>
		)
	}
}

export default connect(
	state => ({
		operations: state.Calculator.operations
	})
)(Calculator)