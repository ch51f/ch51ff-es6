/**
 * @description 没有权限页面
 * @params txt  	提示内容 默认 "您没有权限访问该页面，请与管理员联系"
 * @params mobile 	显示电话 默认 ""
 *
 */

import React, {Component, PropTypes} from 'react';

import Shield from '../svg/Shield';

class Authority extends Component {
	render() {
		let {txt} = this.props;
		return (
			<section className="authority">
				<div className="con">
					<i className="img"><Shield size="80" color="#ff5a5e" /></i>
					<p className="txt">{txt}</p>
				</div>
			</section>
		);
	}
}

Authority.propTypes = {
	txt: PropTypes.string,
}

Authority.defaultProps = {
	txt: '您没有权限访问该页面，请与管理员联系',
}

export default Authority;