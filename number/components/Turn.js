import React, {Component, PropTypes} from 'react'

const DX = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
const DW = ["分", "角", "圆", "拾", "佰", "仟", "万", "亿"];

class Turn extends Component {
	_trunN(num) {
		let temp = ""
		temp += DX[num];
		return temp;
	}
	_trun(num, flag = false) {
		console.log(num)
		let temp = "";
		let div = num.split(".");
		if(num == 0) return "零圆";
		if(num > 10000) {
			num = "" + (parseInt(num) % 10000)
		}
		if(num > 1000) {
			let q = Math.floor(num / 1000);
			temp += this._trunN(q);
			temp += DW[5];
			num = "" + (parseInt(num) % 1000)
		}
		if(num > 100) {
			let b = Math.floor(num / 100);
			temp += this._trunN(b);
			temp += DW[4];
			num = "" + (parseInt(num) % 100)
		}
		if(num > 10) {
			let s = Math.floor(num / 10);
			temp += this._trunN(s);
			temp += DW[3];
			num = "" + (parseInt(num) % 10)
		}
		if(num > 1) {
			let g = Math.floor(num);
			temp += this._trunN(g);
			if(flag)temp += DW[2];
		}
		if(div.length > 1 && flag) {
			if(div[1] != "") {
				if(div[1] > 10) {
					let j = Math.floor(div[1] / 10);
					temp += this._trunN(j);
					temp += DW[1];
					let f = "" + (div[1] % 10)
					temp += this._trunN(f);
					temp += DW[0];
				} else {
					let j = Math.floor(div[1]);
					temp += this._trunN(j);
					temp += DW[1];
				}
			}
		}
		return temp;
	}
	_trunNum(num) {
		let temp = "";
		if(num > 100000000) {
			let y = "" + (Math.floor(num) / 100000000)
			temp += this._trun(y);
			temp += DW[7]
		} 
		if(num > 10000) {
			let w = "" + (Math.floor(num) / 10000)
			temp += this._trun(w);
			temp += DW[6]
		}
		temp += this._trun(num, true)
		return temp
	}
	_getRes() {
		let {data : operations} = this.props;
		let reg = /^\d+\.?\d{0,2}$/;
		let res = ""

		for(let i = 0; i < operations.length; i++) {
			if(reg.test(operations[i])) {
				res += this._trunNum(operations[i]);
			} else {
				res += operations[i]
			}
		}
		return res
	}
	render() {
		return (
			<div className="turn">{this._getRes()}</div>
		)
	}
}

Turn.propTypes = {
	data: PropTypes.array.isRequired
}

export default Turn