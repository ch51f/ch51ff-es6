import Moment from 'moment';
const utils = {
	max_price: 99999999.99,
	isPrice(price) {
		if(isNaN(price)) return false;
		if(parseFloat(price) > this.max_price) return false;
		let re = /^\d+(?:\.\d{1,2})?$|^\d*[.]$/;
		return re.test(price);
	},
	isMobile(num) {
		let re = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])(\d{1,8})?$|^1(3|4|5|7|8)$|^1$/;
		return re.test(num);
	},
	isFullMobile(num) {
		if(isNaN(num)) return false;
		if(num.toString().length != 11) return false;
		return this.isMobile(num);
	},
	isPercent(percent) {
		if(isNaN(percent)) return false;
		if(parseFloat(percent) > 100) return false;
		let re = /^\d+(?:\.\d{1,2})?$|^\d*[.]$/;
		return re.test(percent);
	},
	trim(str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},
	turn_date(str, type = "YYYY-MM-DD HH:mm:ss") {
		return Moment(str).format(type);
	}
}

export default utils;