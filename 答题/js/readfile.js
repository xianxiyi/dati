var xhr = new XMLHttpRequest();
var count;
var sended=new Array();
//访问服务器
var begin = function() {
	var suiji = getRandomInt(0, count);
	for(var i=0;i<sended.length;i++){
		//出过时换题
		if(sended.length==count){
			console.log("已经出完啦！");
			return;
		}
		if(suiji==sended[i]){
			suiji=getRandomInt(0,count);
			i=0;
		}
	}
	//加入已出的题
	sended.push(suiji);
	xhr.open("get", "http://127.0.0.1:3000/begin?number=" + suiji);
	xhr.send(null);
	xhr.onreadystatechange = getStatusCallback;
}
var sendtext;
//获取题目内容
var getStatusCallback = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		sendtext = xhr.responseText;
	} else {}
}
var paragraph;
var answerarray;
var answer;
//将题目内容分为答案和问题
var getanswer = function() {
	if (sendtext != null) {
		//获得答案
		//英文括号/\{[^\}]+\}/g
		answerarray = sendtext.match(/[\{|｛][^\}|｝]+[\｝|}]/g);
		if (answerarray != null) {
			var choose = getRandomInt(0, answerarray.length);
			//用横线代替答案所在位置
			//临时变量
			var t = sendtext.replace(answerarray[choose], '___');
			//其他空去掉括号
			paragraph = t.replace(/\{|}|｛|｝/g, '');
			//去掉大括号
			answer = answerarray[choose].replace(/\{|}|｛|｝/g, '');
		}
	}
}
var read = function() {
	begin();
	getanswer();
	return returnanswer();
}
var returnanswer = function() {
	if (paragraph != null) {
		var paragraph_answer = {};
		paragraph_answer.answer = answer;
		paragraph_answer.paragraph = paragraph;
		return paragraph_answer;
	} else {
		return false;
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
var xhr2 = new XMLHttpRequest();
var getcount = function() {
	xhr2.open("get", "http://127.0.0.1:3000/getcount");
	xhr2.send(null);
	xhr2.onreadystatechange = getStatusCallback2;
}

//获取题目数量

var getStatusCallback2 = function() {
	if (xhr2.readyState == 4 && xhr2.status == 200) {
		count = xhr2.responseText.length;
	} else {}
}
export {
	read,
	returnanswer,
	getcount
};
