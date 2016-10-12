export default function counter(state = {data: 0}, action) {
	switch(action.type) {
		case 'INCREMENT':
			state.data += 1
			return state
		case 'INCREMENT_IF_ODD':
			return (state % 2 !== 0) ? state + 1 : state
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}