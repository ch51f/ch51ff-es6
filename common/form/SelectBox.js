/**
 * @description selectbox
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import {ActionSheet, Action} from 'common/dialog/ActionSheet'
import {ArrowRight} from 'common/svg'
import Mask from "common/mask/Mask"


class SelectBox extends Component {
	constructor(props,context) {
		super(props,context);
    this.state = {
			action: false,
      val: "",
      key: -1,
		}
	}

  _openSheet() {
    this.setState({action: true})
  }

  _cancelSheet() {
		this.setState({action: false})
	}

  _actionHandel(str) {
    let {data} = this.props;
    for(let i = 0; i < data.length; i++) {
      if(data[i].key == str) {
        this.setState({val: data[i].val, key: data[i].key, action: false})
        break;
      }
    }
  }

  _renderAction(item, index) {
    return (<Action key={index} title={item.val} handel={this._actionHandel.bind(this, item.key)} />)
  }

	render() {
    let {action:show, val} = this.state;
		let {label, cls, data, name} = this.props;
		return (
			<div className={cls} >
				{label ? <label className="label">{label}</label> : null}
        <div className="select" onClick={this._openSheet.bind(this)}>
          <input ref={name} name={name}  type="text" disabled='disabled' value={val}/>
          <i className="select-icon"><ArrowRight size="20" color="#ddd" /></i>
        </div>
        <ActionSheet isShow={show} cancelHandel={this._cancelSheet.bind(this)}>
          {data.map((item, index) => this._renderAction(item, index))}
        </ActionSheet>
        <Mask isShow={show} />
			</div>
		)
	}
}

SelectBox.propTypes = {
	label: PropTypes.string,
  name: PropTypes.string.isRequired,
	cls: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

SelectBox.defaultProps = {
	cls: 'select-inner',
}

export default SelectBox
