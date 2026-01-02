<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        :src="require('@/assets/img/contact.jpg')"
        style="background-size: contain; background-position: center"
      />
      <div class="content-center">
        <div class="container">
          <h1
            v-motion="{
              initial: { opacity: 0, x: -100 },
              enter: { opacity: 1, x: 0, transition: { delay: 300 } },
            }"
            class="title"
          >
            ANTANANARIVO – LA VILLE DES MILLE COLLINES
          </h1>
          <div
            v-motion="{
              initial: { opacity: 0, x: -100 },
              enter: { opacity: 1, x: 0, transition: { delay: 500 } },
            }"
            class="text-center"
          >
            <n-button type="warning" size="lg" class="button-zara">
              <router-link
                to="/pricing"
                class="text-white"
                style="text-decoration: none"
              >
                <span style="font-weight: 600" class="textPricingRedirect">
                  RÉSERVEZ VOTRE SÉJOUR AU MEILLEUR TARIF
                </span>
              </router-link>
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
              v-motion="{
                initial: { opacity: 0, x: -100 },
                enter: { opacity: 1, x: 0, transition: { delay: 600 } },
              }"
              class="my-10"
            >
              CONTACTEZ-NOUS
            </h2>
            <p
              v-motion="{
                initial: { opacity: 0, x: -100 },
                enter: { opacity: 1, x: 0, transition: { delay: 700 } },
              }"
              class="my-3 text-grey-darken-1"
            >
              Nos clients sont au cœur de notre engagement. Chaque demande est
              traitée avec soin et attention pour rendre votre séjour
              exceptionnel.
            </p>
            <p
              v-motion="{
                initial: { opacity: 0, x: -100 },
                enter: { opacity: 1, x: 0, transition: { delay: 800 } },
              }"
              class="my-3 text-grey-darken-1"
            >
              Qu’il s’agisse d’une réservation, d’une demande particulière ou
              d’une question, notre équipe est à votre écoute 24h/24 et 7j/7.
              Votre confort et votre satisfaction sont notre priorité.
            </p>
          </div>
        </div>

        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6 size3">
              <div
                v-motion="{
                  initial: { opacity: 0, y: 100 },
                  enter: { opacity: 1, y: 0, transition: { delay: 900 } },
                }"
                class="image-container image-left"
                :style="backgroundStyleLeft"
              >
                <!-- First image on the left side -->
              </div>
            </div>
            <div class="col-md-5 size3">
              <div
                v-motion="{
                  initial: { opacity: 0, y: 100 },
                  enter: { opacity: 1, y: 0, transition: { delay: 1100 } },
                }"
                class="image-container image-right"
                :style="backgroundStyleRight"
              />
            </div>
          </div>
        </div>

        <p
          class="container"
          style="width: 100%; height: 1px; background-color: black"
        />

        <div class="reponsive">
          <v-col>
            <form
              v-motion="{
                initial: { opacity: 0, y: 100 },
                enter: { opacity: 1, y: 0, transition: { delay: 1200 } },
              }"
              @submit.prevent="submit"
            >
              <v-row>
                <v-text-field class="mx-2" label="Nom" />
                <v-text-field class="mx-2" label="Prénom" />
              </v-row>
              <v-row>
                <v-text-field class="mx-2" label="E-mail" />
                <v-text-field class="mx-2" label="Téléphone" />
              </v-row>

              <v-textarea
                class="mx-1"
                label="Message"
                variant="outlined"
                placeholder="Décrivez votre demande ou votre question ici…"
              />

              <v-btn class="me-4 button-zara" type="submit">Envoyer</v-btn>
            </form>
          </v-col>
          <v-col>
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="(item, index) of items"
                :key="index"
                :text="item.nom + ' - ' + item.tel"
                :title="item.action"
              />
            </v-expansion-panels>
          </v-col>
        </div>

        <p
          class="container"
          style="width: 100%; height: 1px; background-color: black"
        />

        <div class="mt-5">
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
                ZARAHOTEL - Votre havre de confort à Antananarivo
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
      LPopup,
    },
    data() {
      return {
        imageUrlLeftSide: require('@/assets/img/contact-2.jpg'),
        imageUrlRightSide: require('@/assets/img/contact-3.jpg'),
        zoom: 16,
        center: [-18.8972486, 47.5099986],
        marker: [-18.8972486, 47.5099986],
        items: [
          {
            action: 'Directeur général',
            nom: 'Dir',
            tel: '034 23 568 96',
          },
          { action: 'Réception', nom: 'Réception', tel: '034 23 568 96' },
          { action: 'Service', nom: 'Service', tel: '034 23 568 96' },
          { action: 'Securité', nom: 'Secours', tel: '034 23 568 96' },
          { action: 'Accueil', nom: 'Accueil', tel: '034 23 568 96' },
        ],
      };
    },
    computed: {
      backgroundStyleLeft() {
        return {
          backgroundImage: `url(${this.imageUrlLeftSide})`,
        };
      },
      backgroundStyleRight() {
        return {
          backgroundImage: `url(${this.imageUrlRightSide})`,
        };
      },
    },
    methods: {
      onMapReady(map) {
        L.control
          .fullscreen({
            position: 'topright',
            title: 'Plein écran',
          })
          .addTo(map);
      },
    },
  };
</script>
<style>
  .textPricingRedirect {
    font-weight: 600;
    color: white;
    text-decoration: none;
  }

  .size3 {
    width: 50%;
  }

  .reponsive {
    display: flex;
    flex-direction: row;
  }

  .button-zara {
    background-color: rgb(221, 186, 71) !important;
  }

  @media screen and (max-width: 991px) {
    .reponsive {
      display: flex;
      flex-direction: column;
    }
  }
</style>
