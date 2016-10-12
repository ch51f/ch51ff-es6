import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {Router, browserHistory, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import reducer from './reducers'
import rootSaga from './sagas'
import routes from './routes'

import './less/main.less'


const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()


const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, loggerMiddleware)
)
sagaMiddleware.run(rootSaga)
const history = syncHistoryWithStore(browserHistory, store)

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>,
		document.getElementById('app')
	)
}

render()
store.subscribe(render)
