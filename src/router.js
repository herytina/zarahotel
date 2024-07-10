import { createRouter, createWebHistory } from 'vue-router';
import MainFooter from './layout/MainFooter.vue';
import MainNavbar from './layout/MainNavbar.vue';
import Landing from './pages/Landing.vue';
import Profile from './pages/Profile.vue';
import StarterPage from './pages/StarterPage.vue';
import indexPage from './pages/indexPage.vue';



  const routes = [
    {
      path: '/',
      name: 'indexPage',
      components: { default: indexPage, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/hotel',
      name: 'hotel',
      components: { default: indexPage, header: MainNavbar, footer: MainFooter },
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
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
