<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        class="page-header-image"
        :src="require('@/assets/img/salle.jpeg')"
      />
      <div class="content-center">
        <div class="container">
          <h1
            v-motion="{
              initial: { opacity: 0, y: 100 },
              enter: { opacity: 1, y: 0, transition: { delay: 500 } },
            }"
            class="title"
          >
            un cadre spacieux, moderne et modulable
          </h1>
          <div
            v-motion="{
              initial: { opacity: 0, y: 200 },
              enter: { opacity: 1, y: 0, transition: { delay: 400 } },
            }"
            class="text-center"
          >
            <n-button type="button" size="lg" class="button-zara">
              <router-link
                to="/pricing"
                class="text-white"
                style="text-decoration: none"
              >
                <span style="font-weight: 600" class="textPricingRedirect">
                  RÉSERVEZ VOTRE APPARTEMENT AU MEILLEUR TARIF
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
          <div
            v-motion="{
              initial: { opacity: 0, x: 100 },
              enter: { opacity: 1, x: 0, transition: { delay: 800 } },
            }"
            class="col-md-8 ml-auto mr-auto text-center"
          >
            <h5>
              Avec une capacité d’accueil de 10 à 200 personnes nos salles de
              réception sont conçues pour s’adapter à tous vos formats
              d’évènements : réunions corporate, conférences, atelier,
              célébration familiale ou cérémonies religieuses
            </h5>
          </div>
        </div>

        <div class="separator separator-primary" />

        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                v-motion="{
                  initial: { opacity: 0, y: 100 },
                  enter: { opacity: 1, y: 0, transition: { delay: 500 } },
                }"
                class="image-container image-left"
                :style="backgroundStyleLeft"
              ></div>

              <div
                v-motion="{
                  initial: { opacity: 0, y: 100 },
                  enter: { opacity: 1, y: 0, transition: { delay: 300 } },
                }"
                class="image-container position"
                :style="backgroundStyle"
              ></div>
            </div>

            <div class="col-md-5">
              <div
                v-motion="{
                  initial: { opacity: 0, y: 100 },
                  enter: { opacity: 1, y: 0, transition: { delay: 800 } },
                }"
                class="image-container image-right"
                :style="backgroundStyleRight"
              />

              <div style="margin-top: 30%">
                <h3>Equipements</h3>
                <ul class="features">
                  <li>Groupe éléctrogène</li>
                  <li>Accès wifi</li>
                  <li>Flipchart</li>
                  <li>Vidéo projecteur</li>
                  <li>Micro & haut parleur</li>
                </ul>
              </div>

              <div>
                <n-button type="warning" size="lg" class="button-zara">
                  <router-link
                    to="/pricing"
                    class="text-white"
                    style="text-decoration: none"
                  >
                    <span style="font-weight: 600" class="textPricingRedirect">
                      DEMANDER UN DEVIS PERSONNALISÉ
                    </span>
                  </router-link>
                </n-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Button, FormGroupInput } from '@/components';

  export default {
    name: 'LandingPage',
    bodyClass: 'landing-page',
    components: {
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          message: '',
        },
        imageUrlLeftSide: require('@/assets/img/salle-2.jpg'),
        imageUrlRightSide: require('@/assets/img/salle-3.jpg'),
        imageUrl: require('@/assets/img/salle-1.jpg'),
      };
    },
    computed: {
      backgroundStyle() {
        return {
          backgroundImage: `url(${this.imageUrl})`,
        };
      },
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
  };
</script>

<style>
  .textPricingRedirect {
    font-weight: 600;
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 991px) {
    .position {
      margin-top: -200px;
    }
  }
  .button-zara {
    background-color: rgb(221, 186, 71) !important;
  }
</style>
