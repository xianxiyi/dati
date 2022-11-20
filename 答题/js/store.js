import {
	returnanswer
} from "./readfile.js";
var store = new Array();
//加分及加人
var addstore = function() {
	//var length = 0;
	var pg_as = returnanswer();
	//遍历answer
	for (var k = 0; k < finalanswer.length; k++) {
		var exist = false;
		var name = finalanswer[k].name;
		var daan = finalanswer[k].answer;
		//正确时加分
		if (daan == pg_as.answer) {
			for (var i = 0; i < store.length; i++) {
				if (store[i].name == name) {
					store[i].fs += 5;
					exist = true;
					break;
				} else {}
			}
			if (exist == false) {
				var newman = {};
				newman.name = name;
				newman.fs = 5;
				store.push(newman);
			}
		}

	}
	sortstore();
	//length = store.length;
	finalanswer.length=0;
	return store;
}
//排序
var sortstore = function() {
	var exchange = store.length - 1;
	//交换位置不为0
	for (var i = 0; exchange > 0; i++) {
		//上一趟交换的最后位置，后面已排序
		var bound = exchange;
		//本次交换的最后位置，初始为未交换
		exchange = 0;
		//到上次交换位置时，停止交换
		for (var j = 0; j < bound; j++) {
			if (store[j].fs < store[j + 1].fs) {
				//交换
				var t = store[j].fs;
				store[j].fs = store[j + 1].fs;
				store[j + 1].fs = t;
				t = store[j].name;
				store[j].name = store[j + 1].name;
				store[j + 1].name = t;
				//本次交换的位置
				exchange = j;
			}
		}
	}
}
//export default{addstore};
var finalanswer = new Array();
var panduan = function(name, danmu) {

	var exist = false;
	//遍历本题回答观众
	for (var i = 0; i < finalanswer.length; i++) {
		if (finalanswer[i].name == name) {
			finalanswer[i].answer = danmu;
			exist = true;
			break;
		}
	}
	if (exist == false) {
		var newman = {};
		newman.name = name;
		newman.answer = danmu;
		finalanswer.push(newman);
	}
	/*if(danmu==pg_as.answer){
		addstore(name);
		sortstore();
	}*/
}
/*var getstore=function(){
	return store;
}*/
/*var getanswer = function() {
	return finalanswer;
}*/
export {
	//getstore,
	panduan,
	addstore,
	//getanswer
};
