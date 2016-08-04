import React, {Component} from 'react'

import WaterMark from "../../common/watermark/WaterMark"

export default class Example extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<div id="demo" style={{widh: "100%", height: 300}}></div>
				<WaterMark text="水印-水印水印" els={['demo']} />
			</section>
		)
	}
}