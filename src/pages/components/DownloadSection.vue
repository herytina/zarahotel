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
          v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 500 } } }"
          class=""
        >
          ZARA HOTEL
        </h3>
        <h5
          v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 700 } } }"
          class="mt-9"
        >
          12, rue Rakotonirina Stanislas<br>
          Isoraka – BP 4106<br>
          Antananarivo – Madagascar
          <h5
            v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 800 } } }"
            class="description mt-3"
          >
            Téléphone : <br>
            +261 32 05 368 29 <br>
            +261 34 78 459 61 <br>
          </h5>
        </h5>
      </v-col>
      <v-col class="my-4">
        <div
          v-for="(item, i) in boutons"
          :key="i"
          v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 700 } } }"
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
        class="pa-2 text-center"
      >
        <v-col class="text-center">
          <h3 v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 500 } } }">
            Suivez-nous
          </h3>
          <div v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 700 } } }">
            <v-btn
              variant="text"
            >
              <img
                :src="require('@/assets/img/zara.jpg')"
                alt="logo"
                height="100"
                width="200"
                class="rounded-circle"
              >
            </v-btn>
          </div>
          <div class="text-center mt-16">
            <v-btn
              v-motion="{ initial: { opacity: 0, x: 100 }, enter: { opacity: 1, x: 0, transition: { delay: 900 } } }"
              variant="text"
            >
              <i class="fab fa-twitter" />
            </v-btn>
            <v-btn
              v-motion="{ initial: { opacity: 0, x: 100 }, enter: { opacity: 1, x: 0, transition: { delay: 1000 } } }"
              variant="text"
            >
              <i class="fab fa-facebook-square" />
            </v-btn>
            <v-btn
              v-motion="{ initial: { opacity: 0, x: 100 }, enter: { opacity: 1, x: 0, transition: { delay: 1100 } } }"
              variant="text"
            >
              <i class="fab fa-instagram" />
            </v-btn>
          </div>
        </v-col>
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
