import Vue from 'vue';
import App from '@/app';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    data() {
        return {
            msg: 'input will goes in here'
        }
    },
    render: h => h(App),
}).$mount('#app');