import Vue from 'vue';
import Router from 'vue-router';
import MainFooter from './layout/MainFooter.vue';
import MainNavbar from './layout/MainNavbar.vue';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Profile from './pages/Profile.vue';
import StarterPage from './pages/StarterPage.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/hotel',
      name: 'hotel',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/chambre',
      name: 'chambre',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/service',
      name: 'service',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: { default: StarterPage, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
