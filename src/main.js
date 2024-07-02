/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import 'leaflet/dist/leaflet.css';
import NowUiKit from './plugins/now-ui-kit';
import router from './router';
Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 500,
  scale: 1,
  distance: '20px',
  mobile: true
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
