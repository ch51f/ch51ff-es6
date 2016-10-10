import React, { Component } from 'react'
import {Router, Route, IndexRoute} from 'react-router';

import H from '../components/Home'

class App extends Component {
	render() {
		return (
			<div>
				<p>test</p>	
				{this.props.children}
			</div>
		)
	}
}

const PREFIX = "/"

const Home = {
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, H)
		})
	}
}

const rootRoute = {
	component: 'div',
	childRoutes: [{
		path: PREFIX,
		component: App,
		indexRoute: Home,
		childRoutes: [Home]
	}]
}
export default rootRoute