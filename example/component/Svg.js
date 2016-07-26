import React, {Component} from 'react'

import {Addition, ArrowRight, Card, Contact, Deal, Edit, Grow, ListIcon, Location, Pen, Phone, Point, Shield, User, Work} from '../../common/svg'


export default class Example extends Component {
	render() {
		let size = 50;
		return (
			<div className="fch-svg-list clearfix">
				<span className="item">
					<Addition size={size} />
				</span>
				<span className="item">
					<ArrowRight size={size} />
				</span>
				<span className="item">
					<Card size={size} />
				</span>
				<span className="item">
					<Contact size={size} />
				</span>
				<span className="item">
					<Deal size={size} />
				</span>
				<span className="item">
					<Edit size={size} />
				</span>
				<span className="item">
					<Grow size={size} />
				</span>
				<span className="item">
					<ListIcon size={size} />
				</span>
				<span className="item">
					<Location size={size} />
				</span>
				<span className="item">
					<Pen size={size} />
				</span>
				<span className="item">
					<Phone size={size} />
				</span>
				<span className="item">
					<Point size={size} />
				</span>
				<span className="item">
					<Shield size={size} />
				</span>
				<span className="item">
					<User size={size} />
				</span>
				<span className="item">
					<Work size={size} />
				</span>
			</div>
		)
	}
}