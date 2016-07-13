import React, {Component} from 'react'

export default class Users extends Component {
	render() {
		return (
			<div>
				This is Users
				<div>{this.props.children}</div>
			</div>
		)
	}
}