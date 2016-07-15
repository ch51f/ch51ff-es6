/**
 * @description 二维列表封装
 * @params data [{id:'', name:'', data: [{id:'', name: ''}]}] 显示数据 默认 []
 * @params isLink 是否是链接 默认 flase
 * @params isOutLink 是否是内部路由 默认 false
 * @params hideBar 是否显示快速导航 默认 false
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

class DoubleList extends Component{

	_renderCell(item, key) {
		return (
			<div key={key} className="item" ref={item.name}>
				<div className="first">{item.name}</div>
				{item.data.length > 0 ? item.data.map((item, key)=>{return this._renderSubCell(item, key)}):null}
			</div>
		)
	}

	_renderSubCell(item, key) {
		let isLink = this.props.isLink,
			url = item.url,
			isOutLink = this.props.isOutLink;
		return (
			<span key={key}>
				{isLink ? isOutLink ? (
					<a className="second" href={url}>{item.name}</a>
				) : (
					<Link className="second" to={url} >{item.name}</Link>
				) : (
					<span className="second">{item.name}</span>
				)}
			</span>
		)
	}

	_readerShortcut(item, key) {
		return (
			<a key={key} onClick={this._shortcutTo.bind(this, item.name)}>{item.name}</a>
		)
	}

	_shortcutTo(name) {
		window.scrollTo(0, this.refs[name].offsetTop);
	}

	render() {
		let data = this.props.data,
			hideBar = this.props.hideBar;
		return (
			<section className="double-list">
				{data.map((item, key)=>{return this._renderCell(item, key)})}
				{!hideBar ? (
					<div className="bar">
						<div>
							{data.map((item, key)=>{return this._readerShortcut(item, key)})}
						</div>
					</div>
				) : null}
			</section>
		);
	}
}

export default DoubleList