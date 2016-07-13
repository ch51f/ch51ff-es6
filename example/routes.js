import React from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'

import {App, Home, About, Users, UserIndex, User} from './component'

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
			<Route path="/users" component={Users} >
				<IndexRoute component={UserIndex} />
				<Route path=":id" component={User} />
			</Route>
		</Route>
	</Router>
)