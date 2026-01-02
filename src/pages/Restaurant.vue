<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        class="page-header-image"
        :src="require('@/assets/img/restaurant.jpeg')"
      />
      <div class="content-center">
        <div class="container">
          <div
            v-motion="{
              initial: { opacity: 0, y: 200 },
              enter: { opacity: 1, y: 0, transition: { delay: 400 } },
            }"
            class="text-center"
          >
            <n-button type="warning" size="lg">
              <router-link
                to="/pricing"
                class="text-white"
                style="text-decoration: none"
              >
                <span style="font-weight: 600" class="textPricingRedirect">
                  RÉSERVEZ VOTRE TABLE
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
            <h2 class="title">UNE EXPÉRIENCE CULINAIRE UNIQUE</h2>
            <h5 class="description">
              Notre restaurant vous accueille dans un cadre chaleureux et
              raffiné, où chaque plat est préparé avec passion à partir de
              produits frais et soigneusement sélectionnés. Ici, la cuisine
              devient un véritable moment de partage et d’émotion.
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
              <h3>Une cuisine authentique et généreuse</h3>
              <p>
                Chaque plat est conçu avec soin par notre chef, mêlant tradition
                et créativité. Nous mettons un point d’honneur à sublimer les
                saveurs locales à travers des recettes savoureuses et
                équilibrées.
              </p>
              <p>
                Que ce soit pour un déjeuner entre amis, un dîner en famille ou
                une occasion spéciale, notre équipe vous accueille avec
                professionnalisme et convivialité.
              </p>

              <div>
                <n-button type="warning" size="lg">
                  <router-link
                    to="/pricing"
                    class="text-white"
                    style="text-decoration: none"
                  >
                    <span style="font-weight: 600" class="textPricingRedirect">
                      CONTACTEZ-NOUS POUR RÉSERVER
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
        imageUrlLeftSide: require('@/assets/img/restaurant-1.jpg'),
        imageUrlRightSide: require('@/assets/img/restaurant-2.jpg'),
        imageUrl: require('@/assets/img/restaurant-3.jpg'),
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
</style>
