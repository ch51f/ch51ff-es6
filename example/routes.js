import React from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'

import {App, Home, About, Users, UserIndex, User} from './component'

export default (
	<Router history={browserHistory}>
		<Route path="/example" component={App}>
			<IndexRoute component={Home} />
			<Route path="/example/about" component={About} />
			<Route path="/example/users" component={Users} >
				<IndexRoute component={UserIndex} />
				<Route path=":id" component={User} />
			</Route>
		</Route>
	</Router>
)