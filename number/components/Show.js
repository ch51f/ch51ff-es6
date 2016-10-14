import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
 
class Show extends Component {
	_turnNum(num) {
		return parseFloat(num).toLocaleString();
	}
	_getOperation() {
		let {data : operations} = this.props;
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
		return "" + operation;
	}
	render() {
		return(
			<div className="show">
				<div className="inner">{this._getOperation()}</div>
			</div>
		)
	}
}

Show.propTypes = {
	data: PropTypes.array.isRequired
}

export default Show