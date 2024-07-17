<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        :src="require('@/assets/img/anosy.jpeg')"
        style="background-size:contain; background-position: center;"
      />
      <div class="content-center">
        <div class="container">
          <h1
            v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 300 } } }"
            class="title"
          >
            ANTANANARIVO
            LA VILLE DES MILLE COLLINES
          </h1>
          <div
            v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 500 } } }"
            class="text-center"
          >
            <n-button
              type="warning"
              size="lg"
            >
              RESERVEZ AU MEILLEUR TARIF >
            </n-button>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2
              v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 600 } } }"
              class=" my-10"
            >
              CONTACTEZ-NOUS
            </h2>
            <p
              v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 700 } } }"
              class="my-3 text-grey-darken-1"
            >
              NOS CLIENTS SONT LE CŒUR DE NOTRE BOUTIQUE HÔTEL
            </p>
            <p
              v-motion="{ initial: { opacity: 0, x: -100 }, enter: { opacity: 1, x: 0, transition: { delay: 800 } } }"
              class="my-3 text-grey-darken-1"
            >
              Tout ce dont vous avez besoin et quand vous en avez besoin, vous n’avez qu’à demander.
            </p>
          </div>
        </div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6 size3">
              <div
                v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 900 } } }"
                class="image-container image-left"
                :style="backgroundStyle"
              >
                <!-- First image on the left side -->
              </div>
              <!-- Second image on the left side of the article -->
            </div>
            <div class="col-md-5 size3">
              <!-- First image on the right side, above the article -->
              <div
                v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 1100 } } }"
                class="image-container image-right"
                :style="backgroundStyle"
              />
            </div>
          </div>
        </div>
        <p
          class="container"
          style="width: 100%; height: 1px; background-color: black;"
        />

        <div class="reponsive">
          <v-col>
            <form
              v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 1200 } } }"
              @submit.prevent="submit"
            >
              <v-row>
                <v-text-field
                  class="mx-2"
                  label="Nom"
                />

                <v-text-field
                  class="mx-2"
                  label="Prenom"
                />
              </v-row>
              <v-row>
                <v-text-field
                  class="mx-2"
                  label="E-mail"
                />
                <v-text-field
                  class="mx-2"
                  label="Télephone"
                />
              </v-row>
            
              <v-textarea
                class="mx-1"
                label="Message"
                variant="outlined"
              />

              <v-btn
                class="me-4"
                color="warning"
                type="submit"
              >
                envoyer
              </v-btn>
            </form>
          </v-col>
          <v-col>
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="(item, index) of items"
                :key="index"
                :text="item.nom + item.tel"
                :title="item.action"
              />
            </v-expansion-panels>
          </v-col>
        </div>
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2
              v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 1300 } } }"
              class="title"
            >
              RÉSERVER
            </h2>
            <h5
              v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 1400 } } }"
              class="description"
            >
              NOUS VOUS GARANTISSONS LE MEILLEUR TARIF
            </h5>
            <h5
              v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 1500 } } }"
              class="description"
            >
              Profitez également de nos offres.
            </h5>
            <p v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 1600 } } }">
              <n-button
                type="warning"
                size="lg"
              >
                ALLONS-Y ! >
              </n-button>
            </p>
          </div>
        </div>
        <p
          class="container"
          style="width: 100%; height: 1px; background-color: black;"
        />

        <div
          class="mt-5"
        >
          <l-map
            style="height: 400px; width: 100%"
            :zoom="zoom"
            :center="center"
            @ready="onMapReady"
          >
            <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <l-marker :lat-lng="marker">
              <l-popup>
                ZARAHOTEL
              </l-popup>
            </l-marker>
          </l-map>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import 'leaflet.fullscreen';
import L from 'leaflet';


export default {
  name: 'LandingPage',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data(){
    return{
      imageUrl :require('@/assets/img/chambre.jpeg'),
      zoom: 16,
      center: [-18.8972486,47.5099986],
      marker: [-18.8972486,47.5099986],
      items : [
        {action:'Directeur général',nom:'test dir', tel:'034 23 568 96'},
        {action:'Sécretariat',nom:'test sec', tel:'034 23 568 96'},
        {action:'Service',nom:'test serv', tel:'034 23 568 96'}
        ,{action:'Securiter',nom:'test secourt', tel:'034 23 568 96'},
        {action:'Acceuille',nom:'test Accueille', tel:'034 23 568 96'}
      ]
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`
      };
    },
  },
  methods: {
    onMapReady(map) {
      L.control.fullscreen({
        position: 'topright',
        title: 'Plein écran',
      }).addTo(map);
    },
  },
};
</script>
<style>
.size3{
  width: 50%;
}
.reponsive{
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 991px) {
  .reponsive{
  display: flex;
  flex-direction: column;
}
}
</style>
