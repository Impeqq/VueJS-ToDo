import Vue from 'vue';

import vuetify from '@/plugins/vuetify';

import vueHeadful from 'vue-headful';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.component('vue-headful', vueHeadful);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
