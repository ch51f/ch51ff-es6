import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import Counter from './components/Counter'
import reducer from './reducers'
import rootSaga from './sagas'
import routes from './routes'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()


const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, loggerMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
	ReactDOM.render(
			<Router history={hashHistory} routes={routes} />,
		document.getElementById('app')
	)
}

render()
// store.subscribe(render)