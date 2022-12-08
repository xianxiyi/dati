// const module={
// 	exports:{}
// };
// const require=(fileModule)=>fileModule.exports;
// function createInventFile(module,exports){
// 	exports.get_right_name=get_right_name;
// 	exports.onestore=onestore;
// 	return module;
// }
var store = new Array();
var onestore = {};
onestore.frontstore = [52, 47, 42, 32, 32, 22, 22, 22, 22, 22];
onestore.otherstore = 20;
//加分及加人
var adstore = function() {
	//var length = 0;
	//遍历answer

	for (var k = 0; k < right_name.length; k++) {
		var name = right_name[k];
		for (var i = 0; i < store.length || store.length == 0; i++) {
			if (store.length != 0 && store[i].name == name) {
				if (k < 10) {
					store[i].fs += onestore.frontstore[k];
				} else {
					store[i].fs += onestore.otherstore;
				}
				break;
			} else if (i == store.length - 1 || store.length == 0) { //遍历到最后一个人时
				var newman = {};
				newman.name = name;
				if (k < 10)
					newman.fs = onestore.frontstore[k];
				else {
					newman.fs = onestore.otherstore;
				}
				store.push(newman);
				break;
			}
		}
	}


	sortstore();
	//length = store.length;
	right_name.length = 0; //清空回答数组
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
var right_name = new Array();

//var  = function(name, danmu,answer) {
function add_to_right(name) {
	//没有答案时返回

	//第一个人直接加入
	if (right_name.length == 0) {
		right_name.push(name);
		return;
	}
	//遍历本题回答观众

	for (var i = 0; i < right_name.length; i++) {
		if (right_name[i] == name) { //已经回答过直接退出
			break;
		} else if (right_name.length - 1 == i) { //遍历到最后一个时

			right_name.push(name); //添加到数组中
		}
	}
}


// export {
// 	//getstore,
// 	add_to_right,
// 	addstore,
// 	get_right_name,
// 	onestore
// };
