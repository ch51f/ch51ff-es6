import React, {Component} from 'react'

export default class Demo extends Component {
	componentDidMount() {
		// this._timeout(1000).then((value) => {
		// 	console.log(value)
		// })
		let promise = new Promise(function(resolve, reject) {
			console.log('Promise');
			resolve();
		})

		promise.then(function() {
			console.log("Resolved.")
		});

		console.log("Hi!")
	}
	_timeout(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, ms, 'done')
		})
	}
	render() {
		return (
			<div>
				Demo
			</div>
		)
	}
} 