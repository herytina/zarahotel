import '@/assets/demo/demo.css';
import '@/assets/scss/now-ui-kit.scss';
import 'bootstrap/scss/bootstrap.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import frLocale from 'element-plus/es/locale/lang/fr';
import VueLazyload from 'vue-lazyload';
import globalComponents from './globalComponents';
import globalDirectives from './globalDirectives';
import globalMixins from './globalMixins';

export default {
  install(Vue) {
    Vue.use(ElementPlus, { frLocale })
    Vue.use(globalDirectives);
    Vue.use(globalMixins);
    Vue.use(globalComponents);
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
      }
    });
  }
};
