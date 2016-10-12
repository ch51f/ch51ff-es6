let aaa = {
	operations: ["1"],
	flag: 1,
	data: 0
}


export default function calculator(state = {data: 0}, action) {
	switch(action.type) {
		case 'INPUT':
			// state.operations[state.operations.length - 1] += action.data;
			state.data = action.data
			return state
		case 'HAHA':
			state.data += 1
			return state
		default:
			return state
	}
}