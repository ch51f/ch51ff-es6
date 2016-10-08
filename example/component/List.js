import React, {Component} from 'react'

import List from 'common/list/List'

let list = []

for(let i = 0; i < 20; i++) {
	let temp = {};
	temp.id = i;
	temp.name = "列表项";
	if(i % 2 == 0)
		temp.sub = "副标题";
	temp.url = 'example';
	list.push(temp);
}

export default class Example extends Component {
	render() {
		return (
			<div ref="12312134123ds">
				<List data={list} isLink={true} />
			</div>
		)
	}
}