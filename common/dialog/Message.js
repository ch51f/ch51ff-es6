import React, {Component, PropTypes} from 'react'

export default class Message extends Component{
	constructor(props, context) {
		super(props, context);
	}

	render() {
		let {children, isShow} = this.props;
		let cls = "fch-message";
		let that = this;
		if(isShow) {
			cls += " show" ;
		}
		return (
			<div className={cls}>
				<div className="con">
					{children}
				</div>
			</div>
		)
	}
}