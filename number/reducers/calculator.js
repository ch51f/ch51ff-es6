let data = {
	operations: ["0"]
}

function input(data, operations) {
	let reg = /^(\+|\-|\*|\/)$/;
	let last_operation = operations[operations.length - 1];
	if(reg.test(last_operation)) {
		operations.push(data.toString());
	} else {
		if(last_operation === "0") {
			operations[operations.length - 1] = data.toString();
		} else {
			operations[operations.length - 1] += data
		}
	}
	return operations;
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
	return data;
}

function operation(type, operations) {
	let last_operation = operations[operations.length - 1];
	let reg = /^\d+\.?\d{0,1}$/;
	if(reg.test(last_operation)) {
		operations.push(type)
	} else {
		operations[operations.length - 1] = type
	}
	return operations;
}

function result(operations) {
	if(!(operations.length == 1)) {
		let reg = /^(\+|\-|\*|\/)$/;
		let nums = [], opts = [];
		let res = "0"
		for(let i = 0; i < operations.length; i++) {
			reg.test(operations[i]) ? opts.push(operations[i]) : nums.push(operations[i]);
		}
		res = cal(nums, opts);
		operations.splice(0,operations.length)
		operations.push(res)
	}
	return operations;
}

function cal(nums, opts) {
	let res = "";
	if(opts.length == 1) {
		switch(opts[0]) {
			case "+":
				res = add(nums[0], nums[1]).toString();
				break;
			case "-":
				res = dec(nums[0], nums[1]).toString();
				break;
			case "*":
				res = mul(nums[0], nums[1]).toString();
				break;
			case "/":
				res = div(nums[0], nums[1]).toString();
				break;
		}
		return res;
	} else {
		for(let i = 0; i < opts.length; i++) {
			let reg = /^(\*|\/)$/;
			if(reg.test(opts[i])) {
				switch(opts[i]) {
					case "*":
						nums[i] = mul(nums[0], nums[1]).toString();
						break;
					case "/":
						nums[i] = div(nums[0], nums[1]).toString();
						break;
					default:
				}
				nums.splice(i+1, 1);
				opts.splice(i, 1);
				return cal(nums, opts);
			}
		}
		switch(opts[0]) {
			case "+":
				res[0] = add(nums[0], nums[1]).toString();
				break;
			case "-":
				res[0] = dec(nums[0], nums[1]).toString();
				break;
		}
		nums.splice(1, 1);
		opts.splice(0, 1);
		return cal(nums, opts);
	}
}

function add(x, y) {
	return parseFloat(x) + parseFloat(y);
}

function dec(x, y) {
	return ( parseFloat(x)- parseFloat(y)) > 0 ? (parseFloat(x) - parseFloat(y)) : 0;
}
function mul(x, y) {
	return  parseFloat(x) * parseFloat(y);
}

function div(x, y) {
	return  parseFloat(x) / parseFloat(y);
}

export default function calculator(state = data, action) {
	switch(action.type) {
		case 'INPUT':
			state.operations = input(action.data, state.operations);
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
		case 'OPERATION':
			state.operations = operation(action.data, state.operations)
			return state
		case 'RESULT':
			state.operations = result(state.operations);
			return state
		default:
			return state
	}
}