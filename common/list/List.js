import React, {Component} from 'react'
import {Link} from 'react-router'

import Arrow from '../svg/ArrowRight'

export default class List extends Component {
	_renderItem(item) {
		let {isLink} = this.props;
		if(isLink) {
			return (
				<Link key={item.id} to={item.url} className="item link">
					<span className="title">{item.name}</span>
					<span className="sub-title">{item.sub}</span>
					<Arrow />
				</Link>
			)
		} else {
			return (
				<div key={item.id} className="item">
					<span className="title">{item.name}</span>
					<span className="sub-title">{item.sub}</span>
				</div>
			)
		}
	}
	render() {
		let {data} = this.props;
		return (
			<div className="list">{data.map((item) => {return this._renderItem(item)})}</div>
		)
	}
}