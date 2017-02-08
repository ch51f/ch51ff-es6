/**
 * @description ajax封装
 * @create date 2016-05-18
 * @author 
 */
import Ajax from './Ajax.js';


let get = function(url, success, error, before, complete) {
	Ajax({
		url: url,
		type: 'get',
		beforeSend: function() {
			before();
		},
		complete: function() {
			complete();
		},
		success: function(res) {
			success(res);
		},
		error: function(err) {
			alert(err);
		}
	})
}

let post = function(url, data, success, error, before, complete) {
	Ajax({
		url: url,
		data: data,
		beforeSend: function() {
			before();
		},
		complete: function() {
			complete();
		},
		success: function(res) {
			success(res);
		},
		error: function(err) {
			alert(err);
		}
	})
}

let fs_ajax = function(url, data, login_url, before, complete, cb) {
	cb = arguments[arguments.length - 1]
	complete = arguments[arguments.length - 2]
	before = arguments[arguments.length - 3]
	Ajax({
		url: url,
		data: {data: JSON.stringify(data)},
		beforeSend: function() {
			before();
		},
		complete: function() {
			complete();
		},
		success: function(res) {
			if(res.result) {
				cb(res.data, res);
			} else {
				if(res.errorcode == null) {
					alert("输出格式错误");
					return;
				}
				if(res.errorcode == -1) {
					alert("系统维护");
				} else if (res.errorcode == -2 || res.errorcode == 1) {
					if(typeof login_url == "string") {
						fs_ajax(login_url, {url: location.href}, function(res) {
							location.href = res;
						})
					} else {
						// alert("请先登陆")
						cb(false, res);
					}
				} else if (res.errorcode == 0) {
					// alert(res.data);
						cb(false, res);
					
				} else if (res.errorcode == 2) {
					cb(false, res);
				} else {
					cb(res.data, res);
				}
			}
		},
		error: function(err) {
			// alert(err);
			alert('网络错误，请稍后重试')
		}
	})
}

exports.fs_ajax = fs_ajax;
exports.get = get;
exports.post = post;

// //ajax基础配置
// function AjaxConfig(){
// 	this.paramsConfig = {
// 		url: '',
// 		data: {},
// 		beforeSend: function(){},
// 		complete: function(){},
// 		error: function(err){return err},
// 		success: function(res, response){}
// 	};
// 	this.combineParams = function(config, params,callback){
// 		for(var key in params){
// 			if(config.hasOwnProperty(key)){
// 				config[key] = params[key];
// 			}
// 		}
// 		callback(config);
// 	}
// }

// //get请求
// function Get(options){
// 	Get.fn.initRequest(options);
// }
// Get.fn = Get.prototype = {
// 	initRequest: function(options){
// 		AjaxConfig.apply(this);
// 		this.combineParams(this.paramsConfig, options, function(config){
// 			Ajax(config);
// 		});
// 	}
// }

// //post请求
// function Post(options){
// 	Post.fn.initRequest(options);
// }
// Post.fn = Post.prototype = {
// 	initRequest: function(options){
// 		AjaxConfig.apply(this);
// 		this.combineParams(this.paramsConfig, options, function(config){
// 			Ajax(config);
// 		});
// 	}
// }

// //ajax请求数据并做相应的数据回调信息处理
// function fsAjax(options){
// 	fsAjax.fn.initRequest(options);
// }
// fsAjax.fn = fsAjax.prototype = {
// 	initRequest: function(params){
// 		AjaxConfig.apply(this);
// 		this.combineParams(this.paramsConfig, params, function(config){
// 			Ajax({
// 				url: config.url,
// 				data: config.data,
// 				beforeSend: config.beforeSend,
// 				complete: config.complete,
// 				error: config.error,
// 				success: function(res){
// 					if(res.result){
// 						config.success(res.data, res);
// 					}else{
// 						if(res.errorcode == null){
// 							config.error('输出格式错误');
// 							return;
// 						}
// 						if(res.errorcode == -1){
// 							config.error('系统维护');
// 							return;
// 						}
// 						if(res.errorcode == 0){
// 							config.error(res.data);
// 							return;
// 						}
// 						if(res.errorcode == 2){
// 							config.success(false, res);
// 							return;
// 						}
// 						config.success(res.data, res);
// 					}
// 				}
// 			});
// 		});
// 	}
// }

// exports.get = Get;
// exports.post = Post;
// exports.fs_ajax = fsAjax;