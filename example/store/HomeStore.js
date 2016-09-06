let Store = {
	list : [{
		id: "A",
		name: "A",
		data: [{
			id: "ActionSheet",
			name: "ActionSheet",
			url: "example/actionsheet",
		}, {
			id: "Alert",
			name: "Alert",
			url: "example/alert",
		}, {
			id: "Authority",
			name: "Authority",
			url: "example/authority",
		}]
	}, {
		id: "B",
		name: "B",
		data: [{
			id: "Button",
			name: "Button",
			url: "example/button",
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
		}, {
			id: "Message",
			name: "Message",
			url: "example/message",
		}]
	}, {
		id: "S",
		name: "S",
		data: [{
			id: "ScrollPanel",
			name: "ScrollPanel",
			url: 'example/scrollpanel'
		}, {
			id: "ScrollTable",
			name: "ScrollTable",
			url: 'example/scrolltable'
		}, {
			id: "Svg",
			name: "Svg",
			url: "example/svg",
		}]
	}, {
		id: "W",
		name: "W",
		data: [{
			id: "WaterMark",
			name: "WaterMark",
			url: 'example/watermark'
		}]
	}],
	getList() {
		return this.list;
	}
}

export default Store