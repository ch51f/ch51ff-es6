import React, {Component} from 'react'

import {ActionSheet, Action} from "common/dialog/ActionSheet"
import Mask from "common/mask/Mask"

export default class Example extends Component {
	constructor(props) {
		super(props)
		this.state = {
			action: true
		}
	}
	_cancel() {
		this.setState({action: false})
	}
	_actionHandel(str) {
		alert(str);
	}
	render() {
		let {action:show} = this.state;
		return (
			<section>
				<ActionSheet isShow={show} cancelHandel={this._cancel.bind(this)}>
					<Action title="示例菜单1" handel={this._actionHandel.bind(this, "示例菜单1")} />
					<Action title="示例菜单2" handel={this._actionHandel.bind(this, "示例菜单2")} />
					<Action title="示例菜单3" handel={this._actionHandel.bind(this, "示例菜单3")} />
					<Action title="示例菜单4" handel={this._actionHandel.bind(this, "示例菜单4")} />
				</ActionSheet>
				<Mask isShow={show} />
			</section>
		)
	}
}