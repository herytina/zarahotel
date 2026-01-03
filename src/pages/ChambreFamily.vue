<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        class="page-header-image"
        :src="require('@/assets/img/chambre-familiale.jpg')"
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
            UN ESPACE GÉNÉREUX ET CONVIVIAL, PENSÉ POUR ACCUEILLIR TOUTE LA
            FAMILLE DANS UN CONFORT ABSOLU
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
                  RÉSERVEZ VOTRE CHAMBRE FAMILIALE AU MEILLEUR TARIF
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
              LA CHAMBRE IDÉALE POUR PARTAGER DES MOMENTS EN FAMILLE
            </h2>
            <h5 class="description">
              Spécialement conçues pour accueillir les familles et les groupes,
              nos chambres familiales offrent de vastes espaces pouvant recevoir
              confortablement plus de cinq personnes. Fonctionnalité,
              convivialité et élégance s’y rencontrent pour garantir un séjour
              serein et agréable à tous.
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

              <h3>Confort, espace et praticité pour petits et grands</h3>

              <p>
                Pensées pour répondre aux besoins des familles, nos chambres
                familiales disposent d’un agencement spacieux et intelligent,
                permettant à chacun de profiter de son intimité tout en
                partageant des moments précieux ensemble. Literie confortable,
                rangements pratiques et circulation fluide garantissent un
                séjour sans compromis.
              </p>

              <p>
                Idéales pour les séjours prolongés, les vacances en famille ou
                les voyages en groupe, ces chambres offrent un cadre chaleureux
                et apaisant. Ici, tout est réuni pour que chaque membre de la
                famille se sente à l’aise, en sécurité et pleinement détendu, de
                jour comme de nuit.
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
        imageUrl: require('@/assets/img/chambre-familiale-2.jpg'),
        imageUrlLeftSide: require('@/assets/img/chambre-familiale-1.jpg'),
        imageUrlRightSide: require('@/assets/img/chambre-familiale-3.jpg'),
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
