import React from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'

import {App, Home, List, DoubleList, Mask, Loading} from './component'

export default (
	<Router history={browserHistory}>
		<Route path="/example" component={App}>
			<IndexRoute component={Home} />
			<Route path="list" component={List} />
			<Route path="doublelist" component={DoubleList} />
			<Route path="mask" component={Mask} />
			<Route path="loading" component={Loading} />
		</Route>
	</Router>
)