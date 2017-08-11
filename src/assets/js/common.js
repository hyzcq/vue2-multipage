//注册时，vux必须放在 import Vue from 'vue'; 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了
import {AlertPlugin, LoadingPlugin, ToastPlugin} from 'vux'
import Vue from 'vue';

//------ VUX UI 注册，如果不需要  VUX UI 请删除以下注册 -------
Vue.use(AlertPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(LoadingPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(ToastPlugin);

import axios from 'axios';

import FastClick from 'fastclick';
FastClick.attach(document.body);

var Rxports = {
	/**
	  * 封装axios
	  * @param {String} type			请求的类型，默认post
	  * @param {String} url				请求地址
	  * @param {String} time			超时时间
	  * @param {Object} data			请求参数
	  * @param {String} dataType		预期服务器返回的数据类型，xml html json ...
	  * @param {Object} headers			自定义请求headers
	  * @param {Function} success		请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
	  * @param {Function} error			请求失败
	  * @param return 
	*/
	ajax:function (opt){
		var opts = opt || {};
		if (!opts.url) {
			Vue.$vux.toast.text('参数错误', 'middle')
			return false;
		}
		axios({
			method: opts.type || 'post',
			// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  			// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
			baseURL:'http://t.lanchenglv.com/tp5demo/index.php/',
			url: opts.url,
			params: opts.data || {},
			headers: opts.headers || {
			  	'Content-Type':'application/x-www-form-urlencoded'
			},
			timeout: opts.time || 10*1000,
			responseType: opts.dataType || 'json'
		}).then(function(res){
			if(res.status == 200 ){
				if(opts.success){
					opts.success(res.data,res);
				}
			}else{
				if (data.error) {
					opts.error(error);
				}else{
					Vue.$vux.toast.text('数据接收失败', 'middle')
				}
			}
		}).catch(function (error){
			console.log(error);
			if (opts.error) {
				opts.error(error);
			}else{
				Vue.$vux.toast.text('数据接收失败', 'middle')
			}
		});
	},
	/*遍历数组与对象,回调的第一个参数为索引或键名,第二个或元素或键值*/
    each: function (obj, fn) {
    	var That = this;
        if (obj) { //排除null, undefined
            var i = 0
            if (That.isArrayLike(obj)) {
                for (var n = obj.length; i < n; i++) {
                    if (fn(i, obj[i]) === false)
                        break
                }
            } else {
                for (i in obj) {
                    if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
                        break
                    }
                }
            }
        }
    },
	/**
	  * 获取url传过来的参数
	  * @param name 	获取的参数
	  * @param Url 		自定义获取参数的链接
	  * @param return
	*/
	getUrlQuery:function (name,Url){
		//URL GET 获取值
		var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i"),
        url = Url || location.href;
		if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, " "));
		return "";
	}
};

export default Rxports;