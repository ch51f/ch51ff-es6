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