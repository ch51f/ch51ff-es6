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
		}, {
			id: "Loading",
			name: "Loading",
			url: "example/loading",
		}]
	}, {
		id: "M",
		name: "M",
		data: [{
			id: "Mask",
			name: "Mask",
			url: "example/mask",
		}]
	}],
	getList() {
		return this.list;
	}
}

export default Store