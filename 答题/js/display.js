import {
	read,
	getcount
} from "./readfile.js";
import {
	phb
} from "./phb.js";
var app = new Vue({
	el: '#app',
	data: {
		text: 'hello', //题目
		answer: 'this is the answer', //答案
		datitimer: '',
		datitime: '15000', //答题时间
		showbutton: true,
		countdown: 15, //计数
		jishitimer: '',
		jishitime: '1000', //计时时间
		showanswer: false,
		answertime: '5000', //显示答案时间
		answertimer: '',
		showcount: false,
		Ttimer:'',
		Ttime:'1000'//异步处理时间
	},
	//*
	methods: {
		start: function() {
			this.showbutton = false;
			getcount();
			this.alter();
			this.Ttimer=setTimeout(read,this.Ttime);
		},
		alter: function() {
			var pg_as = read();
			if (pg_as != false) {
				this.text = pg_as.paragraph;
				this.answer = pg_as.answer;
				this.showanswer = false;
			}
			this.countdown = 15;
			this.showcount = true;
			this.jishitimer = setInterval(this.substactTime, this.jishitime);
			this.datitimer = setTimeout(this.setshowanswer, this.datitime);
		},
		substactTime: function() {
			this.countdown--;
		},
		setshowanswer: function() {
			
			this.showanswer = true;
			this.showcount = false;
			clearInterval(this.jishitimer);
			this.answertimer = setTimeout(this.setphb, this.answertime);
		},
		setphb: function() {
			phb.update();
			this.alter();
		}
	}, //*/
	beforeDestroy() {
		clearInterval(this.timer);
		clearInterval(this.jishitimer);
	},
})
