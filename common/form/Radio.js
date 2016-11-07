/**
 * @description radio
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Radio extends Component {
	constructor(props,context) {
		super(props,context);
	}

  _renderRadiobox(item, i) {
    let {name} = this.props;
    return (<label key={i} className="radio"><input type="radio" name={name} value={item.key} /><span className="radio-icon"><i /></span><span className="radio-txt">{item.val}</span></label>)
  }

	render() {
		let {label, cls, data} = this.props;
		return (
			<div className={cls} >
				{label ? <label className="label">{label}</label> : null}
        <div className='content'>
          {data.map((item, index) => this._renderRadiobox(item, index))}
        </div>
			</div>
		)
	}
}

Radio.propTypes = {
	label: PropTypes.string,
  name: PropTypes.string.isRequired,
	cls: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

Radio.defaultProps = {
	cls: 'radio-box',
}

export default Radio
