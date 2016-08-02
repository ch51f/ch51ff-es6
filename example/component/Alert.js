import React, {Component} from 'react'

import Alert from "../../common/dialog/Alert"
import Mask from "../../common/mask/Mask"

export default class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true
		}
	}

	_hide() {
		this.setState({show: false})
	}

	render() {
		let {show} = this.state;
		return (
			<section>
				<Mask isShow={show} />
				<Alert isShow={show} message="我是一个alert,我也可以多行显示，但是不要太过分！" handle={this._hide.bind(this)} />
			</section>
		)
	}
}