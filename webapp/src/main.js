// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import jQuery from 'jquery';
import material from 'bootstrap-material-design';
import App from './App';
import router from './router';

window.$ = jQuery;
window.jQuery = jQuery;
window.material = material;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
