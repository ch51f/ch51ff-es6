import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {input, remove, clear, dot, operation, result} from '../actions/calculator'

import Control from './Control'
import Show from './Show'
import Turn from './Turn'

class Calculator extends Component {
	_input(txt) {
		let {operations} = this.props;
		let num = operations[operations.length - 1];
		let reg = /^\d+\.?\d{0,1}$/;
		let reg_1 = /^(\+|\-|\*|\/)$/;
		if(reg_1.test(num)) {
			this.props.dispatch(input(txt))
		} else {
			if(parseInt(num) > 99999999999 && num.indexOf(".") == -1) {
				alert("已到上限(12)");
				return false;
			} 
			if(!reg.test(num)) {
				alert("只能输入2位小数");
				return false;
			}
			this.props.dispatch(input(txt))
		}
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
	_operation(txt) {
		this.props.dispatch(operation(txt))
	}
	_result() {
		this.props.dispatch(result())
	}
	render() {
		let  {operations} = this.props;
		return (
			<div className="calculator">
				<Control input={this._input.bind(this)} remove={this._remove.bind(this)} clear={this._clear.bind(this)} dot={this._dot.bind(this)} operation={this._operation.bind(this)} result={this._result.bind(this)}/>
				<Show data={operations} />
				<Turn data={operations} />
			</div>
		)
	}
}

export default connect(
	state => ({
		operations: state.Calculator.operations
	})
)(Calculator)