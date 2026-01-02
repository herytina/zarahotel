import { createRouter, createWebHistory } from 'vue-router';
import MainFooter from './layout/MainFooter.vue';
import MainNavbar from './layout/MainNavbar.vue';
import Profile from './pages/Profile.vue';
import indexPage from './pages/indexPage.vue';
import Aparment from './pages/Aparment.vue';
import Event from './pages/Event.vue';
import EcoResponsibility from './pages/EcoResponsibility.vue';
import Pricing from './pages/Pricing.vue';
import Chambre from './pages/Chambre.vue';
import Restaurant from './pages/Restaurant.vue';
import Contact from './pages/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'indexPage',
    components: { default: indexPage, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/hotel',
    name: 'hotel',
    components: { default: indexPage, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/chambre',
    name: 'chambre',
    components: { default: Chambre, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/service',
    name: 'service',
    components: { default: Profile, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: Contact,
      header: MainNavbar,
      footer: MainFooter,
    },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/apartment',
    name: 'ApartmentPage',
    components: { default: Aparment, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/eventroom',
    name: 'EventRoomPage',
    components: { default: Event, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/ecoresponsibility',
    name: 'EcoResponsibilityPage',
    components: {
      default: EcoResponsibility,
      header: MainNavbar,
      footer: MainFooter,
    },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/pricing',
    name: 'PricingPage',
    components: {
      default: Pricing,
      header: MainNavbar,
      footer: MainFooter,
    },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    components: { default: Restaurant, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 200 },
      footer: { backgroundColor: 'black' },
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
