import {
	//getstore,
	addstore,
	//getanswer
} from './store.js';
var phb = new Vue({
	el: '#phb',
	data: {
		pmid1: '', //排名id
		pmid2: '',
		pmid3: '',
		pmid4: '',
		pmid5: '',
		pms1: '', //排名分数
		pms2: '',
		pms3: '',
		pms4: '',
		pms5: '',
		name: ''
	},
	methods: {
		update: function() {
			//var finalanswer=getanswer();
			var store=addstore();
			//var store = getstore();
			console.log(store);
			if (store.length > 0) {
				this.pmid1 = store[0].name;
				this.pms1 = store[0].fs;
			}
			if (store.length > 1) {
				this.pmid2 = store[1].name;
				this.pms2 = store[1].fs;
			}
			if (store.length > 2) {
				this.pmid3 = store[2].name;
				this.pms3 = store[2].fs;
			}
			if (store.length > 3) {
				this.pmid4 = store[3].name;
				this.pms4 = store[3].fs;
			}
			if (store.length > 4) {
				this.pmid5 = store[4].name;
				this.pms5 = store[4].fs;
			}
		}
	}
})
export {
	phb
};
