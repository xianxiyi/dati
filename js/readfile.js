//FileReader读取文件

// import {
// 	app
// } from "./app.js";

var lines;
window.onload = function() {
	const input = document.getElementById("datafile");
	input.addEventListener('change', () => {
		console.log("no");
		const reader = new FileReader()
		reader.readAsText(input.files[0], 'utf8') // input.files[0]为第一个文件

		reader.onload = () => {
			// reader.result为获取结果
			
			lines = reader.result.split('\n');
			app.start();
		}
		app.text='读取中，请稍等';
	}, false)

}


function random_select() {
	var select = getRandomInt(0, lines.length);
	var answerarray = lines[select].match(/[\{|｛][^\}|｝]+[\｝|}]/g);
	if (answerarray != null) {
		var choose = getRandomInt(0, answerarray.length);
		//用横线代替答案所在位置
		//临时变量
		var t = lines[select].replace(answerarray[choose], '___');
		//其他空去掉括号
		var title = t.replace(/\{|}|｛|｝/g, '');
		//去掉大括号
		var answer = answerarray[choose].replace(/\{|}|｛|｝/g, '');
		return {
			"title": title,
			"answer": answer
		}
	} else {
		return false
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
// export {
// 	random_select
// };
