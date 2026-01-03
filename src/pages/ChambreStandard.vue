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
            UN DESIGN ÉLÉGANT ET INTEMPOREL, PENSÉ POUR UN CONFORT ABSOLU AU
            QUOTIDIEN
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
            <h2 class="title">
              UNE CHAMBRE STANDARD OÙ CONFORT, CALME ET ÉLÉGANCE SE RENCONTRENT
            </h2>
            <h5 class="description">
              Pensées pour offrir un bien-être immédiat, nos chambres standards
              allient sobriété, fonctionnalité et raffinement. Chaque espace est
              conçu pour créer une atmosphère chaleureuse, propice à la détente
              et au repos, tout en répondant aux exigences du confort moderne.
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

              <h3>Un espace accueillant pensé pour votre bien-être</h3>

              <p>
                Spacieuses et lumineuses, nos chambres standards offrent un
                cadre harmonieux où chaque détail a été soigneusement étudié.
                Literie confortable, mobilier élégant et ambiance apaisante
                créent un environnement idéal pour se détendre après une journée
                bien remplie.
              </p>

              <p>
                Que vous soyez en déplacement professionnel ou en séjour de
                loisirs, vous profitez d’un espace fonctionnel et chaleureux,
                conçu pour garantir repos, tranquillité et sérénité. Ici,
                simplicité rime avec qualité et confort durable.
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
