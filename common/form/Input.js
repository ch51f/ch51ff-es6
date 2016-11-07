/**
 * @description 输入框
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Input extends Component {
	constructor(props,context) {
		super(props,context);
	}

	render() {
		let {type, label, placeholder, cls, name} = this.props;
		return (
			<div className={cls} >
				{label ? <label className="label">{label}</label> : null}
				<input className="input" type={type ? type : null} name={name} placeholder={placeholder ? placeholder : null} />
			</div>
		)
	}
}

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	cls: PropTypes.string,
	name: PropTypes.string.isRequired,
}

Input.defaultProps = {
	cls: 'input-inner'
}

export default Input
