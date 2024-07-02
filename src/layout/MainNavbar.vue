<template>
  <navbar
    position="fixed"
    type="warning"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img src="img/zara.jpg" width="120" height="50" alt="logo"/>
      </router-link>
    </template>
    <template slot="navbar-menu" >
        <li class="nav-item">
        <router-link v-popover:popover1 class="nav-link" to="hotel">
          <i class="now-ui-icons arrows-1_cloud-download-93 text-white item"></i>
          <p class="text-white item">Hotel</p>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link v-popover:popover1 class="nav-link" to="chambre">
        <i class="now-ui-icons arrows-1_cloud-download-93 text-white item"></i>
        <p class="text-white item">Chambres & suites</p>
      </router-link>
      </li>

      <li class="nav-item">
        <router-link v-popover:popover1 class="nav-link" to="service">
          <i class="now-ui-icons arrows-1_cloud-download-93 text-white item"></i>
          <p class="text-white item">Services</p>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link v-popover:popover1 class="nav-link" to="contact">
        <i class="now-ui-icons arrows-1_cloud-download-93 text-white item"></i>
        <p class="text-white item">Emplacement & Contacts</p>
        </router-link>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/zaraHotel"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/CreativeTimOfficial"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
  .item{
    text-shadow: 1px 2px 3px black;
    font-size: 18px;
  }
  .navigation{
    width: 50%;
  }
</style>
