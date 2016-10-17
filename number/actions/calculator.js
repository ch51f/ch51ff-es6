export function input(data) {
	return {
		type: "INPUT", 
		data 
	}
}

export function remove() {
	return {
		type: "REMOVE"
	}
}

export function clear() {
	return {
		type: "CLEAR"
	}
}

export function dot() {
	return {
		type: "DOT"
	}
}

export function operation(data) {
	return {
		type: "OPERATION",
		data
	}
}

export function result() {
	return {
		type: "RESULT"
	}
}