import React, {Component} from 'react'

export default class Demo extends Component {
	componentDidMount() {
		this._testSymbol()
	}
	_testSymbol() {
		let mySymbol = Symbol();

		// let a = {};
		// a[mySymbol] = 'Hello!';

		// let a = {
		// 	[mySymbol]: 'Hello!'
		// }

		let a ={};
		Object.defineProperty(a, mySymbol, {value: 'Hello!'})

		console.log(a[mySymbol]);

		let log_levels = {
			DEBUG: Symbol('debug'),
			INFO: Symbol('info'),
			WARN: Symbol('warn')
		};

		console.log(log_levels.DEBUG, 'debug message');
		console.log(log_levels.INFO, 'info message');

		let obj = {};
		let aa = Symbol('aa');
		let bb = Symbol('bb');

		obj[aa] = "Hello";
		obj[bb] = "World";

		let objectSymbols = Object.getOwnPropertySymbols(obj);

		console.info(objectSymbols);

		let obja = {};
		let foo = Symbol("foo");

		obja.a = "a";

		Object.defineProperty(obja, foo, {value: "foobar"});

		for(let i in obja) {
			console.log(i);
		}

		console.log(Object.getOwnPropertyNames(obja))

		console.log(Object.getOwnPropertySymbols(obja))

		console.log(Reflect.ownKeys(obja))
	}
	_testPromise() {
		// this._timeout(1000).then((value) => {
		// 	console.log(value)
		// })
		let promise = new Promise(function(resolve, reject) {
			console.log('Promise');
			resolve();
		})

		promise.then(function() {
			console.log("Resolved.")
		});

		console.log("Hi!")
	}
	_timeout(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, ms, 'done')
		})
	}
	render() {
		return (
			<div>
				Demo
			</div>
		)
	}
} 