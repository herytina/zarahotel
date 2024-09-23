<template>
  <div
    id="#download-section"
    data-background-color="black"
  >
    <v-row no-gutters>
      <v-col
        class="my-4 mt-16"
        order="first"
      >
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
                {{ item.name }}
              </li>
            </ul>
          </router-link>
        </div>
      </v-col>
      <v-col
        class="pa-2 ma-2 text-center"
      >
        <div v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 700 } } }">
          <img
            :src="logo"
            alt="logo"
            height="150"
            width="200"
            class="rounded-circle"
          >
        </div>
        <h5
          v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 700 } } }"
          class="mt-9"
        >
          Boulevard de l’Europe, Ankasina Antananarivo,<br>
          Madagascar<br>
          mail: zarahotel.reception@gmail.com
          <h5
            v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 800 } } }"
            class="description mt-3"
          >
            +261 32 05 368 29 <br>
            +261 34 78 459 61 <br>
          </h5>
        </h5>
      </v-col>
      <v-col
        order="last"
        class="pa-2 text-center"
      >
        <v-col class="text-center mt-16">
          <h3 v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 500 } } }">
            Suivez-nous
          </h3>
          <div
            class="text-center"
            style="display: flex; flex-direction: column"
          >
            <v-btn
              v-motion="{ initial: { opacity: 0, x: 100 }, enter: { opacity: 1, x: 0, transition: { delay: 900 } } }"
              variant="text"
            >
              <i class="fab fa-twitter btn-footer"/>
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
      logo : require('@/assets/img/zara-hotel-logo-final.png'),
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
