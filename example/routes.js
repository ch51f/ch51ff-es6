import React from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'

import {App, Home, List, DoubleList, Mask, Loading, Svg, Authority, Demo, ScrollTable, Button, ScrollPanel, Alert, Message, WaterMark, ActionSheet, ScrollSortTable} from './component'

export default (
	<Router history={browserHistory}>
		<Route path="/example" component={App}>
			<IndexRoute component={Home} />
			<Route path="list" component={List} />
			<Route path="doublelist" component={DoubleList} />
			<Route path="mask" component={Mask} />
			<Route path="loading" component={Loading} />
			<Route path="svg" component={Svg} />
			<Route path="authority" component={Authority} />
			<Route path="demo" component={Demo} />
			<Route path="scrolltable" component={ScrollTable} />
			<Route path="scrollsorttable" component={ScrollSortTable} />
			<Route path="button" component={Button} />
			<Route path="scrollpanel" component={ScrollPanel} />
			<Route path="alert" component={Alert} />
			<Route path="message" component={Message} />
			<Route path="watermark" component={WaterMark} />
			<Route path="actionsheet" component={ActionSheet} />
		</Route>
	</Router>
)