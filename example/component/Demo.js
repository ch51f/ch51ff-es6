import React, {Component} from 'react'

export default class Demo extends Component {
	componentDidMount() {
		// this._demoLetConst();
		// this._demoAssignment();
		// this._demoClass();
		this._demoGenerator();
	}
	_demoLetConst() {
		var a = 1;
		let b = 2;
		const c = 3;
		console.log(a)
		console.log(b)
		console.log(c)
	}
	_demoAssignment() {
		let [a, [b, c]] = [1, [3, 5, 6], 7, 9];
		console.log(a)
		console.log(b)
		console.log(c)
		let {a2: a1, b2, c2 = 6} = {a2:2, b2: 4};
		console.log(a1);
		console.log(b2);
		console.log(c2);
	}
	_demoClass() {
		class Point {
			constructor(x, y) {
				this.x = x;
				this.y = y;
				this.getX = function() {
					return this.x
				}
			}

			static abc() {
				console.log(123)
			}

			toString() {
				return '(' + this.x + ', ' + this.y + ')';
			}
		}

		let a = new Point(1, 3);
		// console.log(a.toString());
		// console.log(a.getX());
		// console.log(a.hasOwnProperty('x'))
		// console.log(a.hasOwnProperty('y'))
		// console.log(a.hasOwnProperty('toString'))
		// console.log(a.hasOwnProperty('getX'))
		// console.log(a.__proto__.hasOwnProperty('toString'))
		// console.log(Point.name)

		let aq = [1, 2, 3, 4, 7,5, 6];
		let [...bq] = aq;
		console.log(bq)

		class ColorPoint extends Point {
			constructor(x, y, color) {
				super(x, y);
				this.color = color;
			}

			toString() {
				return this.color + ' ' + super.toString();
			}
		}

		Point.abc();
		let b = new ColorPoint(2, 4, "#fff");
		console.log(b.toString());
	}
	_demoGenerator() {
		function* helloWorldGenerator() {
			yield 'hello';
			yield 'world';
			return 'ending';
		}
		var hw = helloWorldGenerator();
		// console.log(hw.next())
		// console.log(hw.next())
		// console.log(hw.next())
		// console.log(hw.next())
		function* f() {
			console.log("执行了！")
		}

		let generator = f();

		// setTimeout(function() {
		// 	generator.next()
		// }, 2000)

		let arr = [1, [[2, 3], 4], [5, 6]];

		let flat = function* (a) {
			var length = a.length;
			for(let i = 0; i < length; i++) {
				let item = a[i];
				if(typeof item !== 'number') {
					yield* flat(item);
				} else {
					yield item;
				}
			}
		};

		// for(let f of flat(arr)) {
		// 	console.log(f);
		// }

		function* f1() {
			for(var i = 0; true; i++) {
				let reset = yield i;
				if(reset) {i = -1;}
			}
		}

		let g = f1();

		// console.log(g.next())
		// console.log(g.next())
		// console.log(g.next())
		// console.log(g.next())
		// console.log(g.next(true))

		function* foo(x) {
			let y = 2 * (yield(x + 1));
			let z = yield (y / 3);
			return (x + y + z);
		}

		let a = foo(5);
		// console.log(a.next());
		// console.log(a.next());
		// console.log(a.next());

		let b = foo(5);
		// console.log(b.next());
		// console.log(b.next(12));
		// console.log(b.next(13));

		function wrapper(generatorFunction) {
			return function(...args) {
				console.log(...args)
				let generatorObject = generatorFunction(...args);
				generatorObject.next();
				return generatorObject;
			}
		}

		const wrapped = wrapper(function* () {
			console.log(`First input: ${yield}`);
			return 'DONE'
		});
		// console.log(wrapped().next('hello1'))
		// console.log(wrapped().next('hello1'))

		function* dataConsumer() {
			console.log('Started');
			console.log(`1.${yield}`);
			console.log(`2.${yield}`);
			return 'result'
		}

		let genObj = dataConsumer();

		// genObj.next();
		// genObj.next();
		// genObj.next('a');
		// genObj.next('b');
		// genObj.next('c');
		// genObj.next();

		function *foo1() {
			yield 1;
			yield 2;
			yield 3;
			yield 4;
			yield 5;
			return 6;
		}

		// for(let v of foo1()) {
		// 	console.log(v);
		// }

		function* fibonacci() {
			let [prev, curr] = [0, 1];
			for(;;) {
				[prev, curr] = [curr, prev + curr]
				yield curr;
			}
		}

		// for(let n of fibonacci()) {
		// 	if(n > 1000) break;
		// 	console.log(n);
		// }

		function* objectEntries(obj) {
			let propKeys = Reflect.ownKeys(obj);
			for (let propKey of propKeys) {
				yield [propKey, obj[propKey]];
			}
		}

		let jane = {first: 'Jane', last: 'Doe'};

		// for(let [key, value] of objectEntries(jane)) {
		// 	console.log(`${key}:${value}`);
		// }

		function* objectEntries1() {
			let propKeys = Object.keys(this);

			for(let propKey of propKeys) {
				yield [propKey, this[propKeys]];
			}
		}

		jane[Symbol.iterator] = objectEntries1;

		// for(let [key, value] of jane) {
		// 	console.log(`${key}: ${value}`)
		// }

		function * numbers () {
			yield 1
			yield 2
			yield 3
			return 4
			yield 5
		}

		// console.log([...numbers()])

		// console.log(Array.from(numbers()))

		// let [x, y] = numbers();
		// console.log(x)
		// console.log(y)

		// for(let n of numbers()) {
		// 	console.log(n)
		// }

		// let g1 = function* () {
		// 	try {
		// 		yield;
		// 	} catch(e) {
		// 		console.log('内部捕获', e);
		// 	}
		// };

		// let i = g1();
		// i.next()

		// try {
		// 	i.throw('a')
		// 	i.throw('b')
		// } catch(e) {
		// 	console.log('外部捕获', e);
		// }

		let g2 = function* () {
			try {
				yield;
			} catch(e) {
				console.log(e)
			}
		};

		let i2 = g2();
		i2.next();
		i2.throw(new Error('出错了！'))
	}
	render() {
		return (
			<div ref="demo">
				demo123
			</div>
		)
	}
} 