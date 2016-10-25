import React, {Component, PropTypes} from 'react'

const DX = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
const DW = ["分", "角", "圆", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万"];

class Turn extends Component {
	componentDidMount() {
		let {turn} = this.refs;
		let height = document.body.offsetHeight - 315;
		turn.style.height = height + "px";
	}
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
		let div = num.split(".");
		let z = div[0];
		let temp = "";
		if(num == 0) return "零圆整";
		for(let i = 0; i< z.length; i++) {
			temp += temp.charAt(temp.length - 1) == "零" && this._trunN(z[i]) == "零" ? "" : this._trunN(z[i]);
			if(i != (z.length -1) && z[i] != 0 || (z.length - i + 1) == 6 || (z.length - i + 1) == 10) temp += DW[z.length - i + 1]
		}
		temp = temp.replace(/(^零*)|(零*$)/g, "");  
		temp = temp.replace(/(零万)/g, "万");  
		temp = temp.replace(/(零亿)/g, "亿");  
		temp = temp.replace(/(亿万)/g, "亿");  
		temp += DW[2];
		if(div.length > 1) {
			let x = div[1];
			if(x != "") {
				if(x > 10) {
					let j = Math.floor(x / 10); 
					temp += this._trunN(j);
					temp += DW[1];
					let f = "" + (x % 10)
					temp += this._trunN(f);
					temp += DW[0];
				} else {
					let j = Math.floor(x);
					temp += this._trunN(j);
					temp += DW[1];
				}
			}
		} else {
			temp += "整"
		}
		return temp;
	}
	_getRes() {
		let {data : operations} = this.props;
		let reg = /^\d+\.?\d{0,2}$/;
		let res = ""

		for(let i = 0; i < operations.length; i++) {
			if(operations[i] > 1000000000000) {
				return "无效的数字"
			}
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
			<div ref="turn" className="turn">{this._getRes()}</div>
		)
	}
}

Turn.propTypes = {
	data: PropTypes.array.isRequired
}

export default Turn