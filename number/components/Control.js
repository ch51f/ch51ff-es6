import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {input} from '../actions/calculator'

class Ctr extends Component {
	_input(txt) {
		this.props.dispatch(input(txt))
	}
	render() {
		const action = type => this.props.dispatch({type})

		return (
			<div className="control clearfix">
				<a className="btn btn-2">C</a>
				<a className="btn">←</a>
				<a className="btn">+</a>
				<a className="btn" onClick={() => action('HAHA')}>1</a>
				<a className="btn" onClick={() => action('INCREMENT')}>2</a>
				<a className="btn" onClick={this._input.bind(this, 3)}>3</a>
				<a className="btn">-</a>
				<a className="btn" onClick={this._input.bind(this, 4)}>4</a>
				<a className="btn" onClick={this._input.bind(this, 5)}>5</a>
				<a className="btn" onClick={this._input.bind(this, 6)}>6</a>
				<a className="btn">*</a>
				<a className="btn" onClick={this._input.bind(this, 7)}>7</a>
				<a className="btn" onClick={this._input.bind(this, 8)}>8</a>
				<a className="btn" onClick={this._input.bind(this, 9)}>9</a>
				<a className="btn">/</a>
				<a className="btn btn-2" onClick={this._input.bind(this, 0)}>0</a>
				<a className="btn">.</a>
				<a className="btn">=</a>
			</div>
		)
	}
}

export default connect(
	state => ({
		calculator: state
	})
)(Ctr)