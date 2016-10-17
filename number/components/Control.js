import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'


class Ctr extends Component {
	render() {
		let {input, remove, clear, dot, operation, result} = this.props;
		return (
			<div className="control clearfix">
				<a className="btn btn-2" onClick={clear.bind(this)}>C</a>
				<a className="btn" onClick={remove.bind(this)}>←</a>
				<a className="btn" onClick={operation.bind(this, "+")}>+</a>
				<a className="btn" onClick={input.bind(this, 1)}>1</a>
				<a className="btn" onClick={input.bind(this, 2)}>2</a>
				<a className="btn" onClick={input.bind(this, 3)}>3</a>
				<a className="btn" onClick={operation.bind(this, "-")}>-</a>
				<a className="btn" onClick={input.bind(this, 4)}>4</a>
				<a className="btn" onClick={input.bind(this, 5)}>5</a>
				<a className="btn" onClick={input.bind(this, 6)}>6</a>
				<a className="btn" onClick={operation.bind(this, "*")}>*</a>
				<a className="btn" onClick={input.bind(this, 7)}>7</a>
				<a className="btn" onClick={input.bind(this, 8)}>8</a>
				<a className="btn" onClick={input.bind(this, 9)}>9</a>
				<a className="btn" onClick={operation.bind(this, "/")}>/</a>
				<a className="btn btn-2" onClick={input.bind(this, 0)}>0</a>
				<a className="btn" onClick={dot.bind(this)}>.</a>
				<a className="btn" onClick={result.bind(this)}>=</a>
			</div>
		)
	}
}

Ctr.propTypes = {
	input: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
	clear: PropTypes.func.isRequired,
	dot: PropTypes.func.isRequired,
	operation: PropTypes.func.isRequired,
	result: PropTypes.func.isRequired,
}

export default Ctr