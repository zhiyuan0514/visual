// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'

import { Row, Col,Spin} from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Spin', Spin);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
