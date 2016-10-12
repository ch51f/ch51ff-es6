import React, { Component } from 'react'
import {Router, Route, IndexRoute} from 'react-router';

import App from '../components/App'
import Cal from '../components/Calculator'
import C from '../components/Counter'

const PREFIX = "/example"

const Calculator = {
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, Cal)
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
		indexRoute: Calculator,
		childRoutes: [Counter]
	}]
}
export default rootRoute