/**
 * @description ActionSheet
 * @params isShow 是否显示
 * @params children [...Action]
 * @params cancelHandle 取消事件
 * 
 */
import React, {Component, PropTypes} from 'react'

class ActionSheet extends Component {
	render() {
		let {isShow, cancelHandel, children} = this.props;
		if(!isShow) return null;
		return (
			<section className="actionsheet">
				<div className="content">
					{children}
				</div>
				<div className="foot">
					<button className="cancel" onClick={cancelHandel}>取消</button>
				</div>
			</section>
		)
	}
}

ActionSheet.propTypes = {
	isShow: PropTypes.bool,
	cancelHandel: PropTypes.func.isRequired,
}

ActionSheet.defaultProps = {
	isShow: false,
}

/**
 * @description Action
 * @params ttitle action显示之
 * @params handle action点击事件
 * 
 */

class Action extends Component {
	render() {
		let {title, handle} = this.props;
		return (
			<div className="action" onClick={handle}>{title}</div>
		)
	}
}

Action.propTypes = {
	title: PropTypes.string.isRequired,
	handle: PropTypes.func.isRequired,
}


export {ActionSheet, Action}