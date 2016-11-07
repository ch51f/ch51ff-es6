/**
 * @description checkbox
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Checkbox extends Component {
	constructor(props,context) {
		super(props,context);
	}

  _renderCheckbox(item, i) {
    let {name} = this.props;
    return (<label key={i} className="checkbox"><input type="checkbox" name={name} value={item.key} /><span className="checkbox-icon"><i /></span><span className="checkbox-txt">{item.val}</span></label>)
  }

	render() {
		let {label, cls, data} = this.props;
		return (
			<div className={cls} >
				{label ? <label className="label">{label}</label> : null}
        <div className='content'>
          {data.map((item, index) => this._renderCheckbox(item, index))}
        </div>
			</div>
		)
	}
}

Checkbox.propTypes = {
	label: PropTypes.string,
  name: PropTypes.string.isRequired,
	cls: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

Checkbox.defaultProps = {
	cls: 'checkbox-box',
}

export default Checkbox
