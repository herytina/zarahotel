<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        :src="require('@/assets/img/anosy.jpeg')"
        style="background-size:contain; background-position: center;"
      />
      <div class="content-center">
        <div class="container">
          <h1 class="title">
            ANTANANARIVO
            LA VILLE DES MILLE COLLINES
          </h1>
          <div class="text-center">
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
            <h2 class=" my-10">
              CONTACTEZ-NOUS
            </h2>
            <p class="my-3 text-grey-darken-1">
              NOS CLIENTS SONT LE CŒUR DE NOTRE BOUTIQUE HÔTEL
            </p>
            <p class="my-3 text-grey-darken-1">
              Tout ce dont vous avez besoin et quand vous en avez besoin, vous n’avez qu’à demander.
            </p>
          </div>
        </div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6 size">
              <div
                class="image-container image-left"
                :style="backgroundStyle"
              >
                <!-- First image on the left side -->
              </div>
              <!-- Second image on the left side of the article -->
            </div>
            <div class="col-md-5 size">
              <!-- First image on the right side, above the article -->
              <div
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

        <v-row>
          <v-col>
            <form @submit.prevent="submit">
              <v-row>
                <v-text-field
                  class="mx-5"
                  label="Nom"
                />

                <v-text-field
                  label="Prenom"
                />
              </v-row>
              <v-row>
                <v-text-field
                  class="mx-5"
                  label="E-mail"
                />
                <v-text-field
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

          <v-col />
        </v-row>
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">
              RÉSERVER
            </h2>
            <h5 class="description">
              NOUS VOUS GARANTISSONS LE MEILLEUR TARIF
            </h5>
            <h5 class="description">
              Profitez également de nos offres.
            </h5>
            <p>
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
.size{
  width: 50%;
}
</style>
