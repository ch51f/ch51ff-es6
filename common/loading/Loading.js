/**
 * @description 遮罩层
 */
import React, {Component, PropTypes} from 'react'

class Loading extends Component {
	render() {
		let {isShow, text} = this.props
		let display = isShow ? 'block' : 'none'
		return (
			<section className="loading" style={{display: display}}>
				<div className="body">
					<div className="icon">
						<div className="item item-a">
							<div className="circle circle-a" />
							<div className="circle circle-b" />
							<div className="circle circle-c" />
							<div className="circle circle-d" />
						</div>
						<div className="item item-b">
							<div className="circle circle-a" />
							<div className="circle circle-b" />
							<div className="circle circle-c" />
							<div className="circle circle-d" />
						</div>
						<div className="item item-c">
							<div className="circle circle-a" />
							<div className="circle circle-b" />
							<div className="circle circle-c" />
							<div className="circle circle-d" />
						</div>
					</div>
					<div className="text">{text}</div>
				</div>
			</section>
		)
	}
}

Loading.propTypes = {
	title: PropTypes.string,
	isShow: PropTypes.bool.isRequired
}

export default Loading;