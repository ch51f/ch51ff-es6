/**
 * @description 按钮
 * @params type 样式
 * @params disaabled 是否禁用
 * @params type 样式
 * @params type 样式
 * @params type 样式
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

class Button extends Component {
	constructor(props,context) {
		super(props,context);
	}

	_renderButton() {
		const {type, cls_type, disabled, block, children, handler, url, out_link} = this.props;
		let btnClass = classNames({
			'btn-default': true,
			'btn-primary': cls_type === 'primary',
			'btn-info': cls_type === 'info',
			'btn-warning': cls_type === 'warning',
			'btn-success': cls_type === 'success',
			'btn-emphasize': cls_type === 'emphasize',
			'btn-block': block,
			'btn-disabled': disabled,
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
	out_link: PropTypes.bool
}

Button.defaultProps = {
	children: '按钮',
	type: "button",
	cls_type: "",
	disabled: false,
	block: false,
}

export default Button;
