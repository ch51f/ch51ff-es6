/**
 * @description 输入框
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Textarea extends Component {
	constructor(props,context) {
		super(props,context);
	}

	render() {
		let {label, placeholder, cls, height, name} = this.props;
		return (
			<div className={cls} >
				{label ? <label className="label">{label}</label> : null}
				<textarea className="textarea"  name={name} placeholder={placeholder ? placeholder : null} style={{height: height}} />
			</div>
		)
	}
}

Textarea.propTypes = {
  label: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	cls: PropTypes.string,
  height: PropTypes.number,
}

Textarea.defaultProps = {
	cls: 'textarea-inner',
  height: 100,
}

export default Textarea
