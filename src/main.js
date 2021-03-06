import Vue from 'vue';
import UUID from 'vue-uuid';
import App from './App.vue';
import './assets/app.scss';
// eslint-disable-next-line
import $ from 'jquery';
import 'bootstrap';
import './registerServiceWorker'

Vue.use(UUID);

Vue.config.productionTip = false;

Vue.filter('formatDate', (date) => {
	const a = new Date(date);
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const year = a.getFullYear();
	const month = months[a.getMonth()];
	const day = a.getDate();
	const hour = `0${a.getHours()}`;
	const min = `0${a.getMinutes()}`;
	return `${day}. ${month} ${year}, ${hour.substr(-2)}:${min.substr(-2)}`;
});

new Vue({
	render: h => h(App),
}).$mount('#app');
