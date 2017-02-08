/**
 * @description 按钮
 * @params children 按钮内部结构
 * @params type button type=""
 * @params cls_type 按钮颜色样式
 * @params disaabled 是否禁用
 * @params block 是否是块按钮
 * @params handler 按钮事件
 * @params url 按钮内部链接
 * @params out_link 按耐外部链接
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

class Button extends Component {
	constructor(props,context) {
		super(props,context);
	}

	_renderButton() {
		const {type, cls_type, disabled, block, children, handler, url, out_link, fixed} = this.props;
		let btnClass = classNames({
			'btn-default': true,
			'btn-primary': cls_type === 'primary',
			'btn-info': cls_type === 'info',
			'btn-warning': cls_type === 'warning',
			'btn-success': cls_type === 'success',
			'btn-emphasize': cls_type === 'emphasize',
			'btn-block': block,
			'btn-disabled': disabled,
			'btn-fixed': fixed,
		});

		if(url) {
			if(out_link) {
				return (
					<a href={url} className={btnClass}>{children}</a>
				)
			} else {
				return (
					<Link to={url} className={btnClass}>{children}</Link>
				)
			}
		} else if(handler) {
			return (
				<button type={type} className={btnClass} onClick={handler}>{children}</button>
			)
		} else {
			return (
				<button type={type} className={btnClass}>{children}</button>
			)
		}
	}

	render() {
		return (
			this._renderButton()
		)
	}
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	type: PropTypes.string,
	cls_type: PropTypes.string.isRequired,
	disabled: PropTypes.bool.isRequired,
	block: PropTypes.bool.isRequired,
	handler: PropTypes.func,
	url: PropTypes.string,
	out_link: PropTypes.bool,
	fixed: PropTypes.bool,
}

Button.defaultProps = {
	children: '按钮',
	type: "button",
	cls_type: "",
	disabled: false,
	block: false,
	fixed: false,
}

export default Button;
