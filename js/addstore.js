// import {
// 	get_right_name,
// 	onestore
// } from "./store.js"
//const file=createInventFile(module,module.exports);
//const store=require(file);

var addstore = new Vue({
	el: '#addstore',
	data: {
		asname: '',
		astore: ''
	},
	methods: {
		alter: function() {
			//var finalanswer = get_right_name();

			console.log(right_name);
			this.asname = '';
			this.astore = '';
			for (var i = 0; i < right_name.length; i++) {
				this.asname = this.asname + '\n' + right_name[i];
				if (i < 10) {
					this.astore = this.astore + '\n' + onestore.frontstore[i];
				} else {
					this.astore = this.astore + '\n' + onestore.otherstore;
				}
			}
			adstore();
		}
	}
})
// export {
// 	addstore
// };
