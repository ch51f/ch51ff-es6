import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class Show extends Component {
	_turnNum(num) {
		return parseFloat(num).toLocaleString();
	}
	_getOperation() {
		let {operations} = this.props.Calculator;
		if(operations.length == 0) return "";
		let operation = "";
		for(let i = 0; i < operations.length; i++) {
			let text = operations[i];
			if(text == "" || isNaN(text)) {
				operation += text;
			} else {
				operation += this._turnNum(text)
			}
		} 
		return operation;
	}
	render() {
		return(
			<div className="show">
				<div className="inner">{this.props.calculator.Calculator.data}</div>
			</div>
		)
	}
}

Show.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default connect(
	state => ({
		calculator: state
	})
)(Show)