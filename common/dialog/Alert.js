/**
 * @description Alert
 */
import React, {Component, PropTypes} from 'react'

class Alert extends Component {
	render() {
		let {title, message, isShow, handle, btnTxt} = this.props;
		return (
			<div className="alert-wrap" style={{display: isShow ? "block" : "none"}}>
				<div className="head">{title}</div>
				<div className="con">{message}</div>
				<div className="foot">
					<button onClick={handle}>{btnTxt}</button>
				</div>
			</div>
		)
	}
}

Alert.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	isShow: PropTypes.bool,
	btnTxt: PropTypes.string,
	handle: PropTypes.func.isRequired
}

Alert.defaultProps = {
	title: "系统提示",
	message: "系统提示",
	isShow: true,
	btnTxt: "确定"
}

export default Alert