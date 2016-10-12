import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import Counter from './counter'
import Calculator from './calculator'

const reducer = combineReducers({
	Counter,
	Calculator,
	routing: routerReducer
})

export default reducer