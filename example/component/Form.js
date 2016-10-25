import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

import Input from 'common/form/Input'

export default class App extends Component {
	render() {
		return (
			<div>
				<h4 style={{padding: "15px"}}>block式</h4>
				<div>
					<Input cls="input-block" label="您的账号:" placeholder="请输入您的账号" />
					<Input cls="input-block" type="password" label="密码:" placeholder="请输入您的密码" />
				</div>
			</div>
		)
	}
}