import React, {Component} from 'react'

import Button from "../../common/element/Button"

export default class Example extends Component {
	render() {
		return (
			<section>
				<Button />
				<Button type="primary" />
				<Button type="info" />
				<Button type="success" />
				<Button type="warning" />
				<Button type="emphasize" />
				<Button type="primary" disabled={true} />

				<Button block={true} />
				<Button type="primary" block={true} />
				<Button type="info" block={true} />
				<Button type="success" block={true} />
				<Button type="warning" block={true} />
				<Button type="emphasize" block={true} />
				<Button type="primary" block={true} disabled={true} />

				<Button type="primary" block={true} url='/example' />
			</section>
		)
	}
}