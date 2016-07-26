import React from 'react';

class Addition extends React.Component {
	render() {
		let color = this.props.color || "#22A7FB",
			size = (this.props.size || 30) + "px" ;
		return (
			<svg width={size} height={size} viewBox="0 0 200 200" fill={color}>
				<g transform="scale(0.1953125, 0.1953125)"><path d="M772.256 549.343h-226.31v226.31c0 20.863-16.898 37.722-37.722 37.722-20.858 0-37.716-16.857-37.716-37.722v-226.31h-226.31c-20.862 0-37.722-16.898-37.722-37.722 0-20.817 16.857-37.715 37.722-37.715h226.31v-226.31c0-20.823 16.857-37.722 37.716-37.722 20.823 0 37.722 16.898 37.722 37.722v226.31h226.31c20.823 0 37.722 16.898 37.722 37.715 0 20.823-16.898 37.723-37.722 37.723z"></path></g>
			</svg>
		);
	}
}

export default Addition;