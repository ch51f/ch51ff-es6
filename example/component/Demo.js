import React, {Component} from 'react'

export default class Demo extends Component {
	componentDidMount() {
		// this._demoLetConst();
		// this._demoAssignment();
		this._demoClass();
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
	render() {
		return (
			<div ref="demo">
				demo123
			</div>
		)
	}
} 