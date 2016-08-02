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
		const {type, disabled, block, children, handler, url, out_link} = this.props;
		let btnClass = classNames({
			'btn-default': true,
			'btn-primary': type === 'primary',
			'btn-info': type === 'info',
			'btn-warning': type === 'warning',
			'btn-success': type === 'success',
			'btn-emphasize': type === 'emphasize',
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
				<button className={btnClass} onClick={handler}>{children}</button>
			)
		} else {
			return (
				<button className={btnClass}>{children}</button>
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
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool.isRequired,
	block: PropTypes.bool.isRequired,
	handler: PropTypes.func,
	url: PropTypes.string,
	out_link: PropTypes.bool
}

Button.defaultProps = {
	children: '按钮',
	type: "",
	disabled: false,
	block: false,
}

export default Button;