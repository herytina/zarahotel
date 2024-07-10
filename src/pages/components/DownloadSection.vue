<template>
  <div
    id="#download-section"
    data-background-color="black"
    class="container"
  >
    <v-row no-gutters>
      <v-col
        class="pa-2 ma-2 text-center"
        order="first"
      >
        <h3
          v-motion="'fade-in'"
          class="title"
        >
          ZARA HOTEL
        </h3>
        <h5
          v-motion="'fade-in'"
          class="mt-9"
        >
          12, rue Rakotonirina Stanislas<br>
          Isoraka – BP 4106<br>
          Antananarivo – Madagascar
          <h5
            v-motion="'fade-in'"
            class="mt-3"
          >
            Téléphone : <br>
            +261 32 05 368 29 <br>
            +261 34 78 459 61 <br>
          </h5>
        </h5>
      </v-col>
      <v-col class="my-15">
        <div
          v-for="(item, i) in boutons"
          :key="i"
          :value="item.url"
          color="primary"
          class="ml-16"
        >
          <router-link
            v-popover:popover1
            class="navbar-brand"
            :to="item.url"
          >
            <ul class="ml-15">
              <li class="mt-3 ml-5 text-h6">
                > {{ item.name }}
              </li>
            </ul>
          </router-link>
        </div>
      </v-col>
      <v-col
        order="last"
        class="pa-2 my-8 text-center"
      >
        <div class="text-center">
          <h3 v-motion="'fade-in'">
            Suivez-nous
          </h3>
          <div v-motion="'fade-in'">
            <a
              href="#"
              class="btn btn-neutral btn-round btn-lg"
            >
              <img
                :src="require('@/assets/img/zara.jpg')"
                alt="logo"
                height="100"
                width="200"
                class="rounded-circle"
              >
            </a>
          </div>
          <div class="text-center">
            <a
              target="_blank"
              href="https://www.twitter.com/creativetim"
              class="btn btn-neutral btn-icon btn-twitter btn-round btn-lg"
              rel="tooltip"
              title="Follow us"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/creativetim"
              class="btn btn-neutral btn-icon btn-facebook btn-round btn-lg"
              rel="tooltip"
              title="Like us"
            >
              <i class="fab fa-facebook-square" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company-beta/9430489/"
              class="btn btn-neutral btn-icon btn-linkedin btn-lg btn-round"
              rel="tooltip"
              title="Follow us"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boutons: [
        {
          url: "hotel",
          name :"HOTEL"
        },
        {
          url: "service",
          name :"SERVICES"
        },
        {
          url: "chambre",
          name :"CHAMBBRE"
        },
        {
          url: "contact",
          name :"CONTACTS"
        }
      ],
      secondAnim:true
    }
  }
};
</script>
<style></style>
