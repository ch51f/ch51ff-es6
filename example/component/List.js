import React, {Component} from 'react'

import List from '../../common/list/List'

let list = []

for(let i = 0; i < 20; i++) {
	let temp = {};
	temp.id = i;
	temp.name = "list name";
	temp.sub = "this sub";
	temp.url = 'example/list';
	list.push(temp);
}

export default class Example extends Component {
	render() {
		return (
			<div>
				<List data={list} isLink={true} />
			</div>
		)
	}
}