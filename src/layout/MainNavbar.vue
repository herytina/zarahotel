<template>
  <div>
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
            v-motion="{ initial: { opacity: 0, y: -100 }, enter: { opacity: 1, y: 0, transition: { delay: 500 } } }"
            :src="logo"
            width="120"
            height="50"
            alt="logo"
            class="radius"
          >
        </router-link>
      </div>
      <template
        #navbar-menu
      >
        <li class="nav-item">
          <router-link
            v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 500 } } }"
            class="nav-link"
            to="hotel"
          >
            <i class="now-ui-icons design_app text-white item" />
            <p class="text-white item">
              Hotel
            </p>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 650 } } }"
            class="nav-link"
            to="chambre"
          >
            <i class="now-ui-icons objects_umbrella-13 text-white item" />
            <p class="text-white item">
              Chambres & suites
            </p>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 800 } } }"
            class="nav-link"
            to="service"
          >
            <i class="now-ui-icons shopping_box text-white item" />
            <p class="text-white item">
              Services
            </p>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 950 } } }"
            class="nav-link"
            to="contact"
          >
            <i class="now-ui-icons location_pin text-white item" />
            <p class="text-white item">
              Emplacement & Contacts
            </p>
          </router-link>
        </li>

        <li
          v-motion="{ initial: { opacity: 0, y: -100 }, enter: { opacity: 1, y: 0, transition: { delay: 1100 } } }"
          class="nav-item"
        >
          <a
            class="nav-link"
            data-placement="bottom"
            href="https://twitter.com/CreativeTim"
            target="_blank"
          >
            <i class="fab fa-twitter" />
            <p class="text-white item">RESERVATION</p>
          </a>
        </li>

        <li
          v-motion="{ initial: { opacity: 0, y: -100 }, enter: { opacity: 1, y: 0, transition: { delay: 1100 } } }"
          class="nav-item"
        >
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

        <li
          v-motion="{ initial: { opacity: 0, y: -100 }, enter: { opacity: 1, y: 0, transition: { delay: 1100 } } }"
          class="nav-item"
        >
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
  </div>
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
    font-size: 16px;
  }
  .navigation{
    width: 50%;
  }
  .radius{
    border-radius: 50%;
  }
</style>
