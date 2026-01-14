<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        class="page-header-image"
        :src="require('@/assets/img/chambre-std.jpg')"
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
            Un équilibre parfait entre confort, modernité et praticité pour un
            séjour tout en douceur
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
                  RÉSERVEZ VOTRE CHAMBRE AU MEILLEUR TARIF
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
            <!-- <h2 class="title">
              UNE CHAMBRE STANDARD OÙ CONFORT, CALME ET ÉLÉGANCE SE RENCONTRENT
            </h2> -->
            <h5>
              si vous cherchez le luxe au meilleur prix, la chambre standard est
              le lieu idéal pour vous
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

              <div style="margin-top: 30%">
                <h3>Aménagement de la chambre</h3>
                <p>
                  dans une superficie de plus de 20m2 la chambre Standard de
                  ZARA HOTEL contient un grand lit queen size modelable en deux
                  lits une place.
                </p>

                <ul class="features">
                  <li>Salle de bain privative</li>
                  <li>Coin bureau</li>
                  <li>Accès wifi</li>
                  <li>Coffre-fort</li>
                  <li>Chaînes TV câblées</li>
                  <li>Minibar</li>
                  <li>Climatiseur réversible</li>
                  <li>Lampe liseuse</li>
                </ul>
              </div>

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
        imageUrl: require('@/assets/img/chambre-std-1.jpg'),
        imageUrlLeftSide: require('@/assets/img/chambre-std-2.jpg'),
        imageUrlRightSide: require('@/assets/img/chambre-std-3.jpg'),
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
