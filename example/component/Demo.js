import React, {Component} from 'react'

export default class Demo extends Component {
	componentDidMount() {
		this._demoLetConst();
	}
	_demoLetConst() {
		var a = 1;
		let b = 2;
		const c = 3;
		console.log(a)
		console.log(b)
		console.log(c)
	}
	render() {
		return (
			<div ref="demo">
				demo123
			</div>
		)
	}
} 