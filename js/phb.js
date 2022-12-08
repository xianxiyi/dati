// import {
// 	addstore
// } from './store.js';
var phb = new Vue({
	el: '#phb',
	data: {
		topid: '', //排名id
		topstore: '',
	},
	methods: {
		update: function() {
			this.topid='';
			this.topstore='';
			for(var i=0;i<store.length;i++){
				this.topid=this.topid+store[i].name+'\n';
				this.topstore=this.topstore+store[i].fs+'\n';
			}
		}
	}
})
// export {
// 	phb
// };
