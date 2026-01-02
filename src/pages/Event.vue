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
          <div
            v-motion="{
              initial: { opacity: 0, y: 200 },
              enter: { opacity: 1, y: 0, transition: { delay: 400 } },
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
                  RÉSERVER UNE SALLE DE SÉMINAIRE
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
              Des salles de séminaire pensées pour la performance
            </h2>
            <h5 class="description">
              Offrez à vos équipes un environnement propice à la réflexion, à
              l’échange et à la prise de décision. Nos salles de séminaire
              allient confort, modernité et fonctionnalité afin de garantir le
              succès de tous vos événements professionnels.
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
              <h3>Un cadre professionnel, moderne et modulable</h3>
              <p>
                Nos salles de séminaire sont conçues pour s’adapter à tous vos
                formats d’événements : réunions stratégiques, formations,
                conférences, ateliers collaboratifs ou présentations
                professionnelles.
              </p>
              <p>
                Chaque espace bénéficie d’un aménagement modulable, d’un
                équipement audiovisuel performant et d’une atmosphère propice à
                la concentration et à l’échange. Notre équipe vous accompagne à
                chaque étape afin de garantir une organisation fluide et
                efficace.
              </p>
              <p>
                Que vous accueilliez un petit comité ou un groupe plus large,
                nous vous proposons des solutions sur mesure, adaptées à vos
                objectifs et à votre image professionnelle.
              </p>

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
