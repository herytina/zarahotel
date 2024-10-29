<template>
  <navbar
    position="fixed"
    type="dark"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    class="d-flex justify-space-between align-center px-8"
  >
    <div
      v-if="!showButton"
      class="d-flex align-center"
    >
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
          Boulevard de l’Europe, Ankasina Antananarivo
        </p>
      </router-link>
    </div>
    <template
      #navbar-menu
    >
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
        <!-- <router-link
          v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 650 } } }"
          class="nav-link"
          to="chambre"
        >
          <i class="now-ui-icons objects_umbrella-13 text-white item" />
          <p class="text-white item">
            Hébergement
          </p>
        </router-link> -->
        <div v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 650 } } }">
          <v-menu
            open-on-hover
          >
            <template #activator="{ props }">
              <div
                v-bind="props"
                class="nav-link"
              >
                <i class="now-ui-icons objects_umbrella-13 text-white item" />
                <p class="text-white item">
                  Hébergement
                </p>
              </div>
            </template>

            <v-list>
              <v-list-group value="Chambres">
                <template #activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    title="Chambres"
                  />
                </template>

                <v-list-group value="Chambre supérieur">
                  <template #activator="{ props }">
                    <v-list-item
                      v-bind="props"
                      title="Chambre supérieur"
                    />
                  </template>

                  <v-list-item
                    v-for="(title, i) in chambresArborecent"
                    :key="i"
                  >
                    <!-- Utilisation de router-link -->
                    <router-link
                      to="chambre"
                      class="router-link v-hover"
                      style="text-decoration: none; color:inherit;"
                    >
                      {{ title.title }}
                    </router-link>
                  </v-list-item>
                </v-list-group>

                <v-list-item
                  v-for="(title, i) in chambres"
                  :key="i"
                >
                  <!-- Utilisation de router-link -->
                  <router-link
                    to="chambre"
                    class="router-link"
                    style="text-decoration: none; color:inherit;"
                  >
                    {{ title.title }}
                  </router-link>
                </v-list-item>
              </v-list-group>

              <!-- <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>
                  <v-btn class="w-100">
                    {{ item.title }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item> -->

              <!-- <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :title="item.title"
                :value="item.title"
              /> -->

              <v-list-item
                v-for="(title, i) in items"
                :key="i"
              >
                <!-- Utilisation de router-link -->
                <router-link
                  to="chambre"
                  class="router-link"
                  style="text-decoration: none; color:inherit;"
                >
                  {{ title.title }}
                </router-link>
              </v-list-item>

            </v-list>
          </v-menu>
        </div>
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
        <!-- <router-link
          v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 800 } } }"
          class="nav-link"
          to="service"
        >
          <i class="now-ui-icons shopping_box text-white item" />
          <p class="text-white item">
            Salle
          </p>
        </router-link> -->

        <div v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 800 } } }">
          <v-menu
            open-on-hover
          >
            <template #activator="{ props }">
              <div
                v-bind="props"
                class="nav-link"
              >
                <i class="now-ui-icons objects_umbrella-13 text-white item" />
                <p class="text-white item">
                  Salles
                </p>
              </div>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in itemSalle"
                :key="i"
              >
                <!-- Utilisation de router-link -->
                <router-link
                  to="service"
                  class="router-link"
                  style="text-decoration: none; color:inherit;"
                >
                  {{ item.title }}
                </router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
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

      <!--<li
        v-motion="{ initial: { opacity: 0, y: -100 }, enter: { opacity: 1, y: 0, transition: { delay: 1100 } } }"
        class="nav-item"
      >
        <a
          class="nav-link"
          data-placement="bottom"
          href="https://reservit.com"
          target="_blank"
        >
          <i class="now-ui-icons text-white item clothes_tie-bow" />
          <p class="text-white item">RESERVATION</p>
        </a>
      </li>
      
       <div
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
  <!-- Bouton flottant en bas à droite -->
  <v-btn
    v-if="showButton"
    color="warning"
    icon="arrows-1_minimal-up"
    bottom
    right
    style="position: fixed; bottom: 30px; right: 70px;z-index: 999999;"
    size="small"
    @click="scrollToTop"
  >
    <i class="now-ui-icons text-white item arrows-1_minimal-up" />
  </v-btn>
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
      showButton: false,
      logo : require('@/assets/img/zara-hotel-logo-final.png'),
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
      items: [
        { title: 'Appartement' },
        { title: 'Studio' }
      ],
      chambres : [
        { title: 'Chambre de luxe' },
        { title: 'Chambre standard' },
        { title: 'Chambre familiale' },
        { title: 'Suites' },
      ],
      chambresArborecent : [
        { title: 'Nuit de noces' },
        { title: 'Business' },
      ],
      itemSalle: [
        { title : 'Reunion/ Conférence'},
        { title : 'Banquet'}
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
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
