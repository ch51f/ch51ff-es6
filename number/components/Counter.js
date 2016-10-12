import React, {Component, PropTypes} from 'react'
import {connect} from "react-redux"

class Counter extends Component {
	render() {
		const action = type => this.props.dispatch({type})
		console.log(this.props.counter)
		return (
			<p>
			Clicked: {this.props.counter.Counter.data} {this.props.counter.Calculator.data} times
			{' '}
			<button onClick={() => action('INCREMENT')}> + </button>
			{' '}
			<button onClick={() => action('HAHA')}> - </button>
			{' '}
			<button onClick={() => action('INCREMENT_IF_ODD')}> Increment if odd </button>
			{' '}
			<button onClick={() => action('INCREMENT_ASYNC')}> Increment async </button>
			</p>
		)
	}
}

export default connect(
	state => ({
		counter: state
	})
)(Counter)
