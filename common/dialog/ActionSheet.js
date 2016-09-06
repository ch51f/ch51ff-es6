/**
 * @description ActionSheet
 */
import React, {Component, PropTypes} from 'react'

class ActionSheet extends Component {
	render() {
		let {isShow, cancelHandel, children} = this.props;
		return (
			<section className="actionsheet" style={{display: isShow ? "block" : "none"}}>
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

class Action extends Component {
	render() {
		let {title, handel} = this.props;
		return (
			<div className="action" onClick={handel}>{title}</div>
		)
	}
}

Action.propTypes = {
	title: PropTypes.string.isRequired,
	handel: PropTypes.func.isRequired,
}


export {ActionSheet, Action}