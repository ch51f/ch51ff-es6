import React, { Component } from 'react'
import {Router, Route, IndexRoute} from 'react-router';

import H from '../components/Home'
import C from '../components/Counter'
import App from '../components/App'


const PREFIX = "/example"

const Home = {
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, H)
		})
	}
}

const Counter = {
	path: "counter",
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, C)
		})
	}
}

const rootRoute = {
	component: 'div',
	childRoutes: [{
		path: PREFIX,
		component: App,
		indexRoute: Home,
		childRoutes: [Counter]
	}]
}
export default rootRoute