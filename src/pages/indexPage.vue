<template>
  <div>
    <div
      class="page-header clear-filter"
      filter-color=""
    >
      <v-parallax
        :src="image[0]"
        class="h"
      >
        <div class="logo">
          <router-link
            class="navbar-brand"
            to="/"
          >
            <img
              v-motion="{ initial: { opacity: 0, y: -100 }, enter: { opacity: 1, y: 0, transition: { delay: 500 } } }"
              :src="logo"
              width="300"
              height="250"
              alt="logo"
              class="radius"
            >
          </router-link>
        </div>
        <!-- <div class="responsive">
          <v-container class="bg-lime-lighten-3 container-with-opacity w-66">
            <v-card class="opacity-100">
              <v-row
                no-gutters
              >
                <v-col>
                  <p class="text-center text-caption">
                    DATE D'ARRIVER
                  </p>
                  <v-menu
                    ref="menuC"
                    v-model="commingDate"
                    v-model:return-value="dateC"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                  >
                    <template #activator="{ attrsC }">
                      <v-text-field
                        v-model="formattedDateC"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrsC"
                        required
                        density="compact"
                        @click="openMenuC"
                      />
                    </template>
                    <v-date-picker
                      v-model="dateC"
                    />
                  </v-menu>
                </v-col>

                <v-col>
                  <p class="text-center text-caption">
                    DATE DE DEPART
                  </p>
                  <v-menu
                    ref="menuL"
                    v-model="leavingDate"
                    v-model:return-value="dateL"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                  >
                    <template #activator="{ attrsL }">
                      <v-text-field
                        v-model="formattedDateL"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrsL"
                        required
                        density="compact"
                        @click="openMenuL"
                      />
                    </template>
                    <v-date-picker
                      v-model="dateL"
                    />
                  </v-menu>
                </v-col>

                <v-col>
                  <p class="text-center text-caption">
                    CHAMBRES
                  </p>
                  <v-select
                    prepend-icon="mdi-phone"
                    :items="[0,1,2,3,4]"
                    density="compact"
                  />
                </v-col>

                <v-col>
                  <p class="text-center text-caption">
                    ADULTES
                  </p>
                  <v-select
                    prepend-icon="mdi-phone"
                    :items="[0,1,2,3,4]"
                    density="compact"
                  />
                </v-col>

                <v-col>
                  <p class="text-center text-caption">
                    ENFANTS
                  </p>
                  <v-select
                    prepend-icon="mdi-phone"
                    :items="[0,1,2,3,4]"
                    density="compact"
                  />
                </v-col>

                <v-col class="bg-lime-lighten-3 mx-auto">
                  .v-col-auto
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </div>
        <div class="responsiveR w-66 mx-auto">
          <v-expansion-panels variant="popout">
            <v-expansion-panel>
              <v-expansion-panel-title>
                Réservation
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col>
                    <p class="text-center text-caption">
                      DATE D'ARRIVER
                    </p>
                    <v-menu
                      ref="menuC"
                      v-model="commingDate"
                      v-model:return-value="dateC"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                    >
                      <template #activator="{ attrsC }">
                        <v-text-field
                          v-model="formattedDateC"
                          readonly
                          v-bind="attrsC"
                          required
                          density="compact"
                          @click="openMenuC"
                        />
                      </template>
                      <v-date-picker
                        v-model="dateC"
                      />
                    </v-menu>
                  </v-col>
                  <v-col>
                    <p class="text-center text-caption">
                      DATE DE DEPART
                    </p>
                    <v-menu
                      ref="menuL"
                      v-model="leavingDate"
                      v-model:return-value="dateL"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                    >
                      <template #activator="{ attrsL }">
                        <v-text-field
                          v-model="formattedDateL"
                          readonly
                          v-bind="attrsL"
                          required
                          density="compact"
                          @click="openMenuL"
                        />
                      </template>
                      <v-date-picker
                        v-model="dateL"
                      />
                    </v-menu>
                  </v-col>
                </v-row>

                <p class="text-caption">
                  CHAMBRES
                </p>
                <v-select
                  :items="[0, 1, 2, 3, 4]"
                  density="compact"
                />

                <v-row>
                  <v-col>
                    <p class="text-center text-caption">
                      ADULTES
                    </p>
                    <v-select
                      :items="[0, 1, 2, 3, 4]"
                      density="compact"
                    />
                  </v-col>
                  <v-col>
                    <p class="text-center text-caption">
                      ENFANTS
                    </p>
                    <v-select
                      :items="[0, 1, 2, 3, 4]"
                      density="compact"
                    />
                  </v-col>
                </v-row>
                <v-btn
                  block
                  variant="flat"
                  size="small"
                  color="warning"
                  flat
                >
                  Réserver
                </v-btn>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div> -->
        <div
          v-motion="'fade-in'"
          class="txt"
        >
          <h1
            v-motion="{ initial: { opacity: 1, y: 5 }, enter: { opacity: 1, y: 0, transition: {repeat: Infinity,
                                                                                               repeatType: 'mirror', duration : 1300
            }, } }"
            class="city"
          >
            ZARA HOTEL
          </h1>
          <h3
            v-motion
            :initial="{ opacity: 0, y: 150 }"
            :enter=" { opacity: 1, y: 0, transition: { 
              type: 'spring',
              stiffness: '100',
              delay: 100,
            } }"
            class="city"
          >
            ANTANANARIVO
          </h3>
          <div
            v-motion="{ initial: { opacity: 0, x: 100 }, enter: { opacity: 1, x: 0, transition: { delay: 500 } } }"
            style="margin-top: 40px;"
          >
            <n-button
              type="warning"
              size="lg"
            >
              RESERVEZ AU MEILLEUR TARIF >
            </n-button>
          </div>
        </div>
        <!-- <div class="container section-images">
          <div class="row">
            <div class="col-md-12">
              <div
                v-motion="{ initial: { opacity: 0, scale: 0.5 }, enter: { opacity: 1, scale: 1, transition: { duration: 1200, easing: 'ease-in-out' } } }"
                class="hero-images-container-1"
              >
                <img
                  :src="image[1]"
                  alt=""
                  class="post"
                >
              </div>
              <div
                v-motion="{ initial: { opacity: 0, scale: 0.5 }, enter: { opacity: 1, scale: 1, transition: { duration: 1200, easing: 'ease-in-out' } } }"
                class="hero-images-container-2"
              >
                <img
                  :src="image[2]"
                  alt=""
                  class="post"
                >
              </div>
            </div>
          </div>
        </div> -->
      </v-parallax>
    </div>
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-12 col-lg-8">
          <h2 class="title">
            Zara hotel description
          </h2>
          <h5 class="description">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            More importantly, looking at them will give you a picture of what
            you can built with this powerful Bootstrap 4 ui kit.
          </h5>
          <p>NOS SERVICES</p>
        </div>
      </div>
    </div>
    <!-- <div class="main">
      <div>
        <carousel-section />
      </div>
    </div>
    <Tabs /> -->
    <ExamplesSection title="Hebergement"/>
    <ExamplesSection  title="Restaurant" bg="none"/>
    <ExamplesSection  />
    
    <div
      v-motion="{ initial: { opacity: 0, scale: 0.5 }, enter: { opacity: 1, scale: 1, transition: { duration: 1200, easing: 'ease-in-out' } } }"
    />
    <BasicElementsSection />

    <!-- <progress-pagination></progress-pagination> -->
  </div>
  <div class="m-3">
    <v-row>
      <v-col>
        <p>Descrip location</p>
      </v-col>
      <v-col>
        <Map />
      </v-col>
    </v-row>
  </div>
  <div class="container text-center mb-6">
    <div class="row justify-content-md-center">
      <div class="col-md-12 col-lg-8">
        <h2 class="title">
          Newsletter
        </h2>
        <h5 class="description">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to go.
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button.vue';
import BasicElementsSection from './components/BasicElementsSection.vue';
// import CarouselSection from './components/CarouselSection.vue';
import ExamplesSection from './components/ExamplesSection.vue';
// import Tabs from './components/Tabs.vue';
import Map from './components/map.vue'
export default {
  name: 'IndexPage',
  bodyClass: 'index-page',
  components: {
    BasicElementsSection,
    // CarouselSection,
    // Tabs,
    ExamplesSection,
    Map,
    [Button.name]: Button,
  },
  data() {
    return {
      image : [require('@/assets/img/zara11.jpg'),require('@/assets/img/chambre.jpeg'),require('@/assets/img/service.jpeg')],
      logo : require('@/assets/img/zara-hotel-logo-final.png'),
      commingDate : false,
      leavingDate : false,
      dateC: null,
      dateL: null,

    }
  },
  computed: {
    formattedDateC() {
      return this.dateC ? this.dateC.toLocaleDateString() : '';
    },
    formattedDateL() {
      return this.dateL ? this.dateL.toLocaleDateString() : '';
    },
  },
  methods: {
    openMenuC() {
      this.commingDate = true;
    },
    openMenuL() {
      this.leavingDate = true;
    },
    closeMenu() {
      this.commingDate = false;
      this.leavingDate = false;
    },
  },
}
</script>
<style>
.txt{
  margin-left: 20%;
}
.logo{
  margin-top: 10%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: center
}
.responsiveR{
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-select .v-input__control {
  min-height: 32px; /* Ajuste la hauteur */
}

.custom-select .v-select__selections {
  font-size: 12px; /* Ajuste la taille de la police */
}
.city{
  font-size: 64px;
  font-weight: 600;
  color:aliceblue;
  text-shadow: 1px 2px 3px rgb(236, 183, 7);
}
.h{
  height: 100%;
}

.container-with-opacity {
  overflow: hidden;
}

.container-with-opacity::before {
  opacity: 0.5;
  z-index: -1;
}

@media screen and (min-width: 991px) {
  .post{
    margin-top: -200px;
  }
  .responsiveR{
    display: none;
  }
}
@media screen and (max-width: 991px) {
  .post{
    margin-top: 200px;
  }
  .responsive{
    display: none;
  }
  .responsiveR{
    display: flex;
    z-index: 99999;
  }
  .logo{
    margin-top: 30%;
  }
  .txt{
    margin-top: 10%;
    margin-left: 10%;
  }
  .city{
  font-size: 40px;
  font-weight: 600;
  color:aliceblue;
  text-shadow: 1px 2px 3px black;
}
}
</style>
