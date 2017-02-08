import React, {Component} from 'react'

import Button from "common/element/Button"

export default class Example extends Component {
	render() {
		return (
			<section className="button-panel">
				<Button />
				<Button cls_type="primary" />
				<Button cls_type="info" />
				<Button cls_type="success" />
				<Button cls_type="warning" />
				<Button cls_type="emphasize" />
				<Button cls_type="primary" disabled={true} />

				<Button block={true} />
				<Button cls_type="primary" block={true} />
				<Button cls_type="info" block={true} />
				<Button cls_type="success" block={true} />
				<Button cls_type="warning" block={true} />
				<Button cls_type="emphasize" block={true} />
				<Button cls_type="primary" block={true} disabled={true} />

				<Button cls_type="primary" block={true} url='/example' fixed={true}>返回</Button>
			</section>
		)
	}
}
