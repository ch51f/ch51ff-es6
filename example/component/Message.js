import React, {Component} from 'react'

import Message from "../../common/dialog/Message"

export default class Example extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<Message isShow={true}>
					message
				</Message>
			</section>
		)
	}
}