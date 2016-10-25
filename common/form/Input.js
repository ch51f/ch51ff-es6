/**
 * @description 按钮
 * @params type 类型 default text
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Input extends Component {
	constructor(props,context) {
		super(props,context);
	}

	render() {
		let {type, label, placeholder, cls} = this.props;
		return (
			<div className={cls} >
				{label ? <label className="label">{label}</label> : null}
				<input className="input" type={type ? type : null} placeholder={placeholder ? placeholder : null} />
			</div>
		)
	}
}

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	cls: PropTypes.string
}

Input.defaultProps = {
	cls: 'block-input'
}

export default Input