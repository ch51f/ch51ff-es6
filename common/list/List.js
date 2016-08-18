/**
 * @description 列表封装
 * @params data [{id:'id', name:'标题', sub:"副标题", url:"链接地址（选填）"}] 显示数据 默认 []
 * @params isLink 是否是链接 默认 flase
 * @params isOutLink 是否是内部路由 默认 false
 */

import React, {Component} from 'react'
import {Link} from 'react-router'

import Arrow from '../svg/ArrowRight'

class List extends Component {
	_renderItem(item) {
		let {isLink, isOutLink} = this.props;
		let color = "#ddd"
		if(isLink) {
			if(isOutLink) {
				return (
					<a key={item.id} href={item.url} className="item link">
						<span className="title">{item.name}</span>
						<span className="sub-title">{item.sub}</span>
						<i className="icon">
							<Arrow size="20" color={color} />
						</i>
					</a>
				)
			} else {
				return (
					<Link key={item.id} to={item.url} className="item link"> 
						<span className="title">{item.name}</span> 
						<span className="sub-title">{item.sub}</span> 
						<i className="icon"> 
							<Arrow size="20" color={color} /> 
						</i> 
					</Link> 
				)
			}
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
			<section className="list">{data.map((item) => {return this._renderItem(item)})}</section>
		)
	}
}

export default List