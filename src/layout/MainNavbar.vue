<template>
  <navbar
    position="fixed"
    type="warning"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    class="d-flex justify-space-between align-center mx-8"
  >
    <div class="d-flex align-center">
      <router-link
        class="navbar-brand"
        to="/"
      >
        <img
          v-motion="{ initial: { opacity: 0, y: -100 }, enter: { opacity: 1, y: 0, transition: { delay: 500 } } }"
          :src="logo"
          width="70"
          height="50"
          alt="logo"
          class="radius"
        >
      </router-link>
      <router-link
        class="navbar-brand d-flex flex-row item text-white"
        to="contact"
      >
        <i class="now-ui-icons location_pin" />
        <p class="text-caption">
          Ampefiloha | 101 Antananarivo-Madagascar
        </p>
      </router-link>
    </div>
    <template
      #navbar-menu
    >
      <div class="d-flex">
        <!-- <li class="nav-item">
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
        </li> -->

        <li class="nav-item">
          <router-link
            v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 650 } } }"
            class="nav-link"
            to="chambre"
          >
            <i class="now-ui-icons objects_umbrella-13 text-white item" />
            <p class="text-white item">
              Hébergement
            </p>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 650 } } }"
            class="nav-link"
            to="chambre"
          >
            <i class="now-ui-icons design_app text-white item" />
            <p class="text-white item">
              Restaurant
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
              Contacts
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
            <i class="now-ui-icons text-white item clothes_tie-bow" />
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
      </div>
      
      <!-- <div
        v-motion="{
          initial: { opacity: 0, x: -100 },
          enter: { opacity: 1, x: 0, transition: { delay: 500 } },
        }"
      >
        <v-list
          density="compact"
          class="d-flex flex-row bg-lime-lighten-3 nav-item"
        >
          <v-list-item
            v-for="(item, index) in navItems" 
            :key="index" 
            class="nav-item"
            :value="item"
          >
            <router-link
              v-motion="item.motion"
              :class="item.linkClass"
              :to="item.to"
            >
              <i :class="item.iconClass" />
              <p :class="item.textClass">
                {{ item.text }}
              </p>
            </router-link>
          </v-list-item>
        </v-list>
      </div> -->
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
      logo : require('@/assets/img/zara.jpg'),
      navItems: [
        {
          to: 'hotel',
          iconClass: 'now-ui-icons design_app text-white item',
          textClass: 'text-white item',
          text: 'Hotel',
          linkClass: 'nav-link d-flex flex-row text-caption',
          motion: {
            initial: { opacity: 0, x: -100 },
            enter: { opacity: 1, x: 0, transition: { delay: 500 } },
          },
        },
        {
          to: 'chambre',
          iconClass: 'now-ui-icons objects_umbrella-13 text-white item',
          textClass: 'text-white item',
          text: 'Chambres & suites',
          linkClass: 'nav-link d-flex flex-row text-caption px-2 align-top',
          motion: {
            initial: { opacity: 0, x: -100 },
            enter: { opacity: 1, x: 0, transition: { delay: 650 } },
          },
        },
        {
          to: 'service',
          iconClass: 'now-ui-icons shopping_box text-white item',
          textClass: 'text-white item',
          text: 'Services',
          linkClass: 'nav-link d-flex flex-row text-caption px-2 align-top',
          motion: {
            initial: { opacity: 0, x: -100 },
            enter: { opacity: 1, x: 0, transition: { delay: 800 } },
          },
        },
        {
          to: 'contact',
          iconClass: 'now-ui-icons location_pin text-white item',
          textClass: 'text-white item',
          text: 'Emplacement & Contacts',
          linkClass: 'nav-link d-flex flex-row text-caption px-2 align-top',
          motion: {
            initial: { opacity: 0, x: -100 },
            enter: { opacity: 1, x: 0, transition: { delay: 950 } },
          },
        },
        {
          to: 'contact',
          iconClass: 'now-ui-icons location_pin text-white item',
          textClass: 'text-white item',
          text: 'Réservation',
          linkClass: 'nav-link d-flex flex-row text-caption px-2 align-top',
          motion: {
            initial: { opacity: 0, x: -100 },
            enter: { opacity: 1, x: 0, transition: { delay: 950 } },
          },
        },
      ],
    }
  }
};
</script>

<style scoped>
  .item{
    text-shadow: 4px 3px 3px black;
    font-size: 14px;
  }
  .radius{
    border-radius: 50%;
  }
</style>
