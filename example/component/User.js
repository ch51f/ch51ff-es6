import React, {Component} from "react"

export default class User extends Component {
	render() {
		return (
			<div>
				I'm {this.props.params.id}
			</div>
		)
	}
}