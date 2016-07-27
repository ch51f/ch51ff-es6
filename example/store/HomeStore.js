let Store = {
	list : [{
		id: "A",
		name: "A",
		data: [{
			id: "Authority",
			name: "Authority",
			url: "example/authority",
		}]
	}, {
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
	}, {
		id: "S",
		name: "S",
		data: [{
			id: "Svg",
			name: "Svg",
			url: "example/svg",
		}]
	}],
	getList() {
		return this.list;
	}
}

export default Store