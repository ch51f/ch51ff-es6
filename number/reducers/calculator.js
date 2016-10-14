let data = {
	operations: ["0"]
}

function input(data, num_str) {
	if(num_str === "0") {
		return data.toString()
	} else {
		return num_str += data
	}
}

function remove(operations) {
	let last_operation = operations[operations.length - 1];
	if(last_operation.length == 1) {
		if(operations.length == 1) {
			operations[0] = "0";
		} else {
			operations.pop();
		}
	} else {
		operations[operations.length - 1] = last_operation.substring(0,last_operation.length - 1);
	}

	return operations;
}

function clear(operations) {
	operations.splice(0,operations.length)
	operations.push("0")
	return operations;
}

function dot(data) {
	let flag = data.indexOf(".");
	if(flag == -1) {
		data += "."
	}
	return data
}


export default function calculator(state = data, action) {
	switch(action.type) {
		case 'INPUT':
			state.operations[state.operations.length - 1] = input(action.data, state.operations[state.operations.length - 1]);
			return state
		case 'REMOVE':
			state.operations = remove(state.operations);
			return state
		case 'CLEAR':
			state.operations = clear(state.operations);
			return state
		case 'DOT':
			state.operations[state.operations.length - 1] = dot(state.operations[state.operations.length - 1]);
			return state
		default:
			return state
	}
}