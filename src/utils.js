const browser = {
	versions: function() {
		let u = navigator.userAgent,
			app = navigator.appVersion;
		return { //移动终端浏览器版本信息
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1,
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecke') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 
			ios: !!u.match(/\(i[^;]+;( U;)> CPU.+Mac OS X/), //iso终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应用程序， 没有头部与底部
			app: app //appVersion
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

const _addEvent = function(target, event, func) {
	if(target.addEventListener) {
		target.addEventListener(event, func);
	} else if(target.attachEvent) {
		target.attachEvent('on' + event, func);
	} else {
		target['on' + event] = func;
	}
}

const _removeEvent = function(target, event, func) {
	if(target.removeEventListener) {
		target.removeEventListener(event, func);
	} else if(target.detachEvent) {
		target.detachEvent('on' + event, func);
	} else {
		delete target['on' + event];
	}
}

const _fixedWechatTitle = function (title) {
	document.title = title;
	if(browser.versions.ios) {
		let iframe = document.createElement("iframe");
		iframe.src="favicon.ico";
		_addEvent()
		iframe.addEventListener("load", function() {
			setTimeout(function() {
				iframe.removeEventListener("load", function() {});
				iframe.parentNode.removeChild(iframe);
			}, 0);
		})
		document.body.appendChild(iframe);
	}
}

const ClassCore = {
	//添加Class
	addClass: function(el, cName) {
		if(!cName)
			return false;
		if(el.classList) {
			el.classList.add(cName);
		} else if(!this.hasClass(cName)) {
			el.className + ' ' + cName;
		}
		return el;
	},
	// 删除Class
	removeClass: function(el, cName) {
		if(!cName)
			return false;
		if(el.classList) {
			el.classList.remove(cName);
		} else if(this.hasClass(cName)) {
			el.className = el.className
				.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
				.replace(/\s+/g, " ") // multiple spaces to one
				.replace(/^\s*|\s*$/g, ''); // trim the ends
		}
		return el;
	},
	// 判断是否存在某个类
	hasClass: function(el, cName) {
		if(!cName)
			return false;
		if(el.classList) {
			return el.classList.contains(cName);
		}
		return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
	},
	// toggle Class
	toggleClass: function(el, cName) {
		return this.hasClass(el, cName) ? this.removeClass(el, cName) : this.addClass(el, cName);
	}
};

const myMath = {
	divGroup: function() {
		if(arguments.length == 0)
			return 0;
		if(arguments.length == 1)
			return arguments[0];
		let result = arguments[0];
		for(let i = 1; i < arguments.length; i++) {
			result = this.div(result, arguments[i]);
		}
		return result;
	},
	div: function(arg1, arg2) {
		let t1 = 0, t2 = 0, r1, r2;
		try {
			t1 = arg1.toString().split(".")[1].length;
		} catch(e) {
			console.log(e)
		}
		try {
			t2 = arg2.toString().split(".")[1].length;
		} catch(e) {
			console.log(e)
		}
		r1 = Number(arg1.toString().replace(".", ""));
		r2 = Number(arg2.toString().replace(".", ""));
		return this.mul((r1 / r2), Math.pow(10, t2 - t1));
	},
	mulGroup: function() {
		if(arguments.length == 0)
			return 0;
		let result = 1;
		for(let i in arguments) {
			result = this.mul(result, arguments[i]);
		}
		return result;
	},
	mul: function(arg1, arg2) {
		let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length;
		} catch(e) {
			console.log(e);
		}
		try {
			m += s2.split(".")[1].length;
		} catch(e) {
			console.log(e);
		}
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	},
	subGroup: function() {
		if(arguments.length == 0)
			return 0;
		if(arguments.length == 1)
			return arguments[0];
		let result = arguments[0];
		for(let i = 1; i < arguments.length; i++) {
			result = this.sub(result, arguments[i]);
		}
		return result;
	},
	sub: function(arg1, arg2) {
		let r1, r2, m, n;
		if(arg1 == null)
			arg1 = 0;
		if(arg2 == null)
			arg2 = 0;
		try {
			r1 = arg1.toString().split(".")[1].length;
		} catch(e) {
			console.log(e);
			r1 = 0;
		}
		try {
			r2 = arg2.toString().split(".")[1].length;
		} catch(e) {
			console.log(e);
			r2 = 0;
		}
		m = Math.pow(10, Math.max(r1, r2));
		n = (r1 >= r2) ? r1 : r2;
		return ((this.mul(arg1, m) - this.mul(arg2, m)) / m);
	},
	addGroup: function() {
		if(arguments.length == 0)
			return 0;
		let result = 0;
		for(let i in arguments) {
			result = this.add(result, arguments[i]);
		}
		return result;
	},
	add: function(arg1, arg2) {
		let r1, r2, m, c;
		if(arg1 == null)
			arg1 = 0;
		if(arg2 == null)
			arg2 = 0;
		try {
			r1 = arg1.toString().split(".")[1].length;
		} catch(e) {
			r1 = 0;
		}
		try {
			r2 = arg2.toString().split(".")[1].length;
		} catch(e) {
			r2 = 0;
		}
		c = Math.abs(r1 - r2);
		m = Math.pow(10, Math.max(r1, r2));
		if(c > 0) {
			let cm = Math.pow(10, c);
			if(r1 > r2) {
				arg1 = Number(arg1.toString().replace(".", ""));
				arg2 = Number(arg2.toString().replace(".", "")) * cm;
			} else {
				arg1 = Number(arg1.toString().replace(".", "")) * cm;
				arg2 = Number(arg2.toString().replace(".", ""));
			}
		} else {
			arg1 = Number(arg1.toString().replace(".", ""));
			arg2 = Number(arg2.toString().replace(".", ""));
		}
		return (arg1 + arg2) / m;
	},
	floor: function(value, precision) {
		if(!precision)
			precision = 0;
		if(isNaN(precision))
			return "invalid precision";
		if(precision < 0)
			return "invalid precision";
		if(isNaN(value))
			return "invalid value";
		value = Number(value);
		let tmp = Math.pow(10, precision);
		value = this.Mul(value, tem);
		value = Math.floor(value);
		value = this.Div(value, tmp);
		return value;
	}
}