import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

import Input from 'common/form/Input'
import TextareaBox from 'common/form/Textarea'
import CheckboxBox from 'common/form/Checkbox'
import RadioBox from 'common/form/Radio'
import SelectBox from 'common/form/SelectBox'
import Button from 'common/element/Button'

const hobby = [{
	key: 1,
	val: '阅读',
}, {
	key: 2,
	val: '音乐',
}, {
	key: 3,
	val: '电影',
}, {
	key: 4,
	val: '运动',
}]

export default class App extends Component {
	_showBlockData() {
		let {block} = this.refs;
		console.log(`user: ${block.user.value}`);
		console.log(`password: ${block.pwd.value}`);
		console.log(`detail: ${block.detail.value}`);
		if(block.hobby.length > 0) {
			let values = [];
			block.hobby.forEach(function(e) {
				if(e.checked) {
					values.push(e.value);
				}
			});
			console.log(`hobbys: ${values}`);
		}
		console.log(`hobby1: ${block.hobby1.value}`);
		console.log(`hobby2: ${block.hobby2.value}`);
	}
	_showInlineData() {
		let {inline} = this.refs;
		console.log(`user: ${inline.user.value}`);
		console.log(`password: ${inline.pwd.value}`);
		console.log(`detail: ${inline.detail.value}`);
		console.log(`hobby: ${inline.hobby.value}`);
	}
	render() {
		return (
			<div>
				<h4 style={{padding: "15px", 'backgroundColor': "#ddd"}}>block式</h4>
				<form ref="block">
					<Input cls="input-block" label="您的账号:" name="user" placeholder="请输入您的账号" />
					<Input cls="input-block" type="password" name="pwd" label="密码:" placeholder="请输入您的密码" />
					<TextareaBox cls="textarea-block" name="detail" label="描述:" placeholder="描述" />
					<CheckboxBox name="hobby" label="爱好:" data={hobby} />
					<RadioBox name="hobby1" label="爱好:" data={hobby} />
					<SelectBox cls="select-block" name="hobby2" label="爱好:" data={hobby} />
					<Button cls_type="primary" block={true} handler={this._showBlockData.bind(this)}>提交</Button>
				</form>
				<h4 style={{padding: "15px", 'backgroundColor': "#ddd"}}>inner式</h4>
				<form ref="inline">
					<Input label="您的账号:" name="user" placeholder="请输入您的账号" />
					<Input type="password" name="pwd" label="密码:" placeholder="请输入您的密码" />
					<TextareaBox label="描述:" name="detail" placeholder="描述" />
					<SelectBox name="hobby" label="爱好:" data={hobby} />
					<Button cls_type="primary" block={true} handler={this._showInlineData.bind(this)}>提交</Button>
				</form>
			</div>
		)
	}
}
