let Store = {
	list : [{
		id: "D",
		name: "D",
		data: [{
			id: "DoubleList",
			name: "DoubleList",
			url: "example/doublelist",
		}]
	}, {
		id: "L",
		name: "L",
		data: [{
			id: "List",
			name: "List",
			url: "example/list",
		}]
	}],
	getList() {
		return this.list;
	}
}

export default Store