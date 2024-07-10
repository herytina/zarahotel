<template>
  <navbar
    position="fixed"
    type="warning"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <div>
      <router-link
        class="navbar-brand"
        to="/"
      >
        <img
          :src="logo"
          width="120"
          height="50"
          alt="logo"
          class="radius"
        >
      </router-link>
    </div>
    <template #navbar-menu>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="hotel"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93 text-white item" />
          <p class="text-white item">
            Hotel
          </p>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
          class="nav-link"
          to="chambre"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93 text-white item" />
          <p class="text-white item">
            Chambres & suites
          </p>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
          class="nav-link"
          to="service"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93 text-white item" />
          <p class="text-white item">
            Services
          </p>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
          class="nav-link"
          to="contact"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93 text-white item" />
          <p class="text-white item">
            Emplacement & Contacts
          </p>
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
          <i class="fab fa-twitter" />
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
          <i class="fab fa-facebook-square" />
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
          <i class="fab fa-instagram" />
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
export default {
  name: 'MainNavbar',
  components: {
    Navbar,
  },
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  data() {
    return {
      logo : require('@/assets/img/zara.jpg')
    }
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
  .radius{
    border-radius: 50%;
  }
</style>
