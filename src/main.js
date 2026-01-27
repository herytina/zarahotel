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
import { createApp } from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import { MotionPlugin } from '@vueuse/motion';
import 'leaflet/dist/leaflet.css';
import 'leaflet.fullscreen/Control.FullScreen.css';
import NowUiKit from './plugins/now-ui-kit';
import vuetify from './plugins/vuetify'; // You need to create this file
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css'; 

const app = createApp(App);
app.use(NowUiKit);
app.use(MotionPlugin);
app.use(vuetify);
app.use(router);
// Toast configuration
app.use(VueToast, {
  position: 'top-right', 
  timeout: 3000,     
  type: 'success',    
});

app.mount('#app');
