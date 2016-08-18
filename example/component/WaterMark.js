import React, {Component} from 'react'

import watermark from "common/utils/WaterMark"

export default class Example extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<div id="demo" style={{width: "100%", height: 300, backgroundImage: "url(" + watermark("水印 水印 水印 水印 ", "#f20") + ")"}}></div>
			</section>
		)
	}
}