/**
 * @description 遮罩层
 */
import React, {Component, PropTypes} from 'react'

class Mask extends Component {
	render() {
		let {isShow} = this.props
		let display = isShow ? 'block' : 'none'
		return (
			<section className="mask" style={{display:display}} />
		);
	}
}

Mask.propTypes = {
	isShow: PropTypes.bool.isRequired
}

export default Mask;