<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        class="page-header-image"
        :src="require('@/assets/img/appartement.jpg')"
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
            UN APPARTEMENT SPACIEUX ET INDÉPENDANT, ALLIANT LIBERTÉ, CONFORT ET
            ÉLÉGANCE POUR UN SÉJOUR EN TOUTE AUTONOMIE
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
            <h2 class="title">
              UN APPARTEMENT CONÇU POUR VIVRE COMME CHEZ SOI
            </h2>
            <h5 class="description">
              Idéal pour les séjours prolongés, les familles ou les voyageurs en
              quête d’indépendance, notre appartement offre des volumes généreux
              et des espaces distincts pour vivre, se reposer et se détendre.
              Une solution parfaite entre le confort d’un hôtel et la liberté
              d’un véritable lieu de vie.
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
                :style="backgroundStyleLeftSide"
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
                :style="backgroundStyleRightSide"
              />

              <h3>Un espace de vie fonctionnel, confortable et raffiné</h3>

              <p>
                Pensé pour offrir un maximum de confort et de praticité,
                l’appartement dispose d’un agencement harmonieux avec des
                espaces bien définis. Le mobilier élégant, la literie de qualité
                et les équipements modernes créent une atmosphère chaleureuse et
                propice à la détente.
              </p>

              <p>
                Que vous voyagiez pour affaires, en famille ou pour un long
                séjour, cet appartement vous permet de profiter d’une totale
                autonomie tout en bénéficiant des services et du standing du
                Zara Hotel. Un lieu idéal pour se sentir chez soi, loin de chez
                soi.
              </p>

              <div>
                <v-btn
                  height="72"
                  min-width="164"
                  variant="tonal"
                  class="button-zara text-white"
                >
                  DÉCOUVRIR NOS TARIFS ET CONDITIONS
                </v-btn>
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
        imageUrl: require('@/assets/img/appartement-2.jpg'),
        imageUrlLeftSide: require('@/assets/img/appartement-1.jpg'),
        imageUrlRightSide: require('@/assets/img/appartement-3.jpg'),
      };
    },
    computed: {
      backgroundStyle() {
        return {
          backgroundImage: `url(${this.imageUrl})`,
        };
      },
      backgroundStyleLeftSide() {
        return {
          backgroundImage: `url(${this.imageUrlLeftSide})`,
        };
      },
      backgroundStyleRightSide() {
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

  .button-zara {
    background-color: rgb(221, 186, 71) !important;
  }

  @media screen and (max-width: 991px) {
    .position {
      margin-top: -200px;
    }

    .section-story-overview {
      .image-container {
        margin-bottom: 30px;
        &:nth-child(2) {
          margin-top: 0px !important;
        }
      }
    }

    .section {
      padding: 0px !important;
    }
  }

  @media screen and (max-width: 768px) {
    .image-container {
      &.image-left {
        margin-bottom: 30px !important;
      }
    }

    .section {
      padding: 0px !important;
    }
  }
</style>
