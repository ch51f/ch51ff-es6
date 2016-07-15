import React from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'

import {App, Home, List, DoubleList} from './component'

export default (
	<Router history={browserHistory}>
		<Route path="/example" component={App}>
			<IndexRoute component={Home} />
			<Route path="list" component={List} />
			<Route path="doublelist" component={DoubleList} />
		</Route>
	</Router>
)