<template>
  <div>
    <div class="page-header clear-filter" filter-color="">
      <v-parallax :src="image[0]" class="h">
        <div class="logo">
          <router-link class="navbar-brand" to="/">
            <img v-motion="{
              initial: { opacity: 0, y: -100 },
              enter: { opacity: 1, y: 0, transition: { delay: 500 } },
            }" :src="logo" width="300" height="250" alt="logo" class="radius" />
          </router-link>
        </div>
        <div v-motion="'fade-in'" class="txt">
          <h5 v-motion="{
            initial: { opacity: 1, y: 5 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 1300,
              },
            },
          }" class="city">
            Le Havre d'excellence
          </h5>
          <h5 v-motion :initial="{ opacity: 0, y: 150 }" :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: '100',
              delay: 100,
            },
          }" class="city">
            au carrefour de votre itinéraire
          </h5>
          <p v-motion :initial="{ opacity: 0, y: 150 }" :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: '100',
              delay: 100,
            },
          }" class="city-2">
            Boulevard de l’Europe, Ankasina Antananarivo
          </p>
          <p v-motion :initial="{ opacity: 0, y: 150 }" :enter="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: '100',
              delay: 100,
            },
          }" class="city-2">
            info@zarahotel.mg
          </p>
          <div v-motion="{
            initial: { opacity: 0, x: 100 },
            enter: { opacity: 1, x: 0, transition: { delay: 500 } },
          }" class="reservationTarif">
            <n-button size="lg" class="button">
              <router-link to="/pricing" class="text-white" style="text-decoration: none">
                <span style="font-weight: 600" class="textPricingRedirect">
                  RESERVEZ AU MEILLEUR TARIF
                </span>
              </router-link>
            </n-button>
          </div>
        </div>
      </v-parallax>
    </div>
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-12 col-lg-8" style="padding: 45px">
          <h5>
            Découvrez ZARA HOTEL, un charmant complexe hôtelier
            <b>3 étoiles</b>
            situé à Ankasina, Boulevard de l'Europe, Antananarivo. Profitez de
            <b>
              chambres confortables, d'une cuisine raffinée et savoureuse, d'un
              service attentionné et d'un cadre paisible
            </b>
            , idéal pour vos séjours d'affaires ou de détente.
          </h5>
        </div>
      </div>
    </div>
    <CarouselSection :data="carouselHebergement" />
    <CarouselSection :data="carouselRestaurant" />
    <CarouselSection :data="carouselSalle" />

    <div v-motion="{
      initial: { opacity: 0, scale: 0.5 },
      enter: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1200, easing: 'ease-in-out' },
      },
    }" />
    <BasicElementsSection />
  </div>
  <div class="m-3">
    <v-row class="info-map">
      <v-col>
        <p>
          ZARA HOTEL bénéficie d’un emplacement stratégique : à 10 minutes du
          quartier d’affaires d’Ankorondrano, 5 minutes du marché artisanal
          Coum, et 5 minutes de la gare routière MAKI Andohatapenaka. Un accès
          idéal pour vos séjours pratiques et touristiques.
        </p>
      </v-col>
      <v-col>
        <Map />
      </v-col>
    </v-row>
  </div>
  <div class="container text-center mb-6">
    <div class="row justify-content-md-center">
      <div class="col-md-12 col-lg-8">
        <h2 class="title">Newsletter</h2>
        <h5>
          Restez informé avec notre Newsletter !
          <br />
          <br />
          Abonnez-vous dès maintenant pour recevoir les dernières actualités,
          offres spéciales et événements exclusifs de notre complexe hôtelier.
          Soyez le premier à découvrir nos promotions et à profiter d’un séjour
          inoubliable.
        </h5>
      </div>
      <div style="width: 50%">
        <v-form ref="form" @submit.prevent="submitNewsletter">
          <v-text-field label="Email" v-model="email" required />
          <v-checkbox label="J’accepte les conditions générales" v-model="acceptConditions" required />
          <v-btn class="me-4 button-zara" type="submit">Envoyer</v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button.vue';
import BasicElementsSection from './components/BasicElementsSection.vue';
import CarouselSection from './components/CarouselSection.vue';
import Map from './components/map.vue';
import { sendEmailService } from "../services/sendEmail.service";
export default {
  name: 'IndexPage',
  bodyClass: 'index-page',
  components: {
    BasicElementsSection,
    Map,
    CarouselSection,
    [Button.name]: Button,
  },
  data() {
    return {
      image: [
        require('@/assets/img/HotelsZara.jpeg'),
        require('@/assets/img/chambre.jpeg'),
        require('@/assets/img/service.jpeg'),
      ],
      imageExempleSection: [
        require('@/assets/img/hebergement.jpeg'),
        require('@/assets/img/restaurant.jpeg'),
        require('@/assets/img/salle.jpeg'),
      ],
      logo: require('@/assets/img/zara-hotel-logo-final.png'),
      commingDate: false,
      leavingDate: false,
      dateC: null,
      dateL: null,
      hebergementDescription:
        'Notre service d’hébergement propose 40 chambres élégantes, un appartement spacieux, une suite luxueuse et un studio moderne, alliant charme, confort et modernité pour un séjour inoubliable.',
      restaurantDescription:
        'Découvrez notre restaurant au charme unique, spécialisé dans la cuisine européenne. Dégustez des plats raffinés, préparés avec des ingrédients frais, pour une expérience culinaire authentique et savoureuse.',
      sallesDescription:
        'Nos salles modernes et polyvalentes accueillent ateliers, séminaires, mariages et plus. Équipées et élégantes, elles offrent un cadre idéal pour réussir tous vos événements, privés ou professionnels.',
      carouselHebergement: {
        images: [
          require('@/assets/img/hebergement.jpeg'),
          require('@/assets/img/caroussel-heb-2.jpg'),
          require('@/assets/img/caroussel-hebergement-3.jpg'),
        ],
        title: 'Hebergement',
        description:
          'Notre service d’hébergement propose 40 chambres élégantes, un appartement spacieux, une suite luxueuse et un studio moderne, alliant charme, confort et modernité pour un séjour inoubliable.',
      },
      carouselRestaurant: {
        images: [
          require('@/assets/img/restaurant.jpeg'),
          require('@/assets/img/restaurant-1.jpg'),
          require('@/assets/img/restaurant-2.jpg'),
          require('@/assets/img/restaurant-3.jpg'),
        ],
        title: 'Restaurant',
        description:
          'Découvrez notre restaurant au charme unique, spécialisé dans la cuisine européenne. Dégustez des plats raffinés, préparés avec des ingrédients frais, pour une expérience culinaire authentique et savoureuse.  ',
      },
      carouselSalle: {
        images: [
          require('@/assets/img/salle.jpeg'),
          require('@/assets/img/salle-1.jpg'),
          require('@/assets/img/salle-2.jpg'),
          require('@/assets/img/salle-3.jpg'),
        ],
        title: 'Salles',
        description:
          'Nos salles modernes et polyvalentes accueillent ateliers, séminaires, mariages et plus. Équipées et élégantes, elles offrent un cadre idéal pour réussir tous vos événements, privés ou professionnels.',
      },
      email: '',
      acceptConditions: false,
      action: '',
    };
  },
  computed: {
    formattedDateC() {
      return this.dateC ? this.dateC.toLocaleDateString() : '';
    },
    formattedDateL() {
      return this.dateL ? this.dateL.toLocaleDateString() : '';
    },
  },
  methods: {
    showSuccessToast() {
      // Basic usage
      this.$toast.success('Abonnement confirmé !', {
        // Optional: override global options for this specific toast
        timeout: 2000
      });
    },
    openMenuC() {
      this.commingDate = true;
    },
    openMenuL() {
      this.leavingDate = true;
    },
    closeMenu() {
      this.commingDate = false;
      this.leavingDate = false;
    },
    async submitNewsletter() {
      const payload = { email: this.email };
      this.action = 'newsLetter';
      if (this.acceptConditions) {
        await sendEmailService(payload, this.action);
        this.showSuccessToast();
      }

    }
  },
};
</script>
<style>
.info-map {
  text-align: center;
  align-items: center;
}

.txt {
  margin-left: 20%;
}

.logo {
  margin-top: 10%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reservationTarif {
  margin-top: 40px;

  .button {
    background-color: rgb(221, 186, 71);
  }
}

.responsiveR {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-select .v-input__control {
  min-height: 32px;
  /* Ajuste la hauteur */
}

.custom-select .v-select__selections {
  font-size: 12px;
  /* Ajuste la taille de la police */
}

.city {
  font-size: 54px;
  font-weight: 600;
  color: aliceblue;
  text-shadow: 1px 2px 3px rgb(221, 186, 71);
  margin-bottom: 25px;
}

.city-2 {
  font-size: 20px;
  font-weight: 600;
  color: aliceblue;
  text-shadow: 1px 2px 3px rgb(221, 186, 71);
  margin-bottom: 25px;
}

.h {
  height: 100%;
}

.container-with-opacity {
  overflow: hidden;
}

.container-with-opacity::before {
  opacity: 0.5;
  z-index: -1;
}

.textPricingRedirect {
  font-weight: 600;
}

@media screen and (min-width: 991px) {
  .post {
    margin-top: -200px;
  }

  .responsiveR {
    display: none;
  }
}

@media screen and (max-width: 991px) {
  .post {
    margin-top: 200px;
  }

  .responsive {
    display: none;
  }

  .responsiveR {
    display: flex;
    z-index: 99999;
  }

  .logo {
    margin-top: 30%;
  }

  .txt {
    margin-top: 10%;
    margin-left: 10%;
  }

  .city {
    font-size: 40px;
    font-weight: 600;
    color: aliceblue;
    text-shadow: 1px 2px 3px black;
  }
}

@media screen and (max-width: 576px) {
  .reservationTarif {
    margin-top: 40px;
    width: 90%;
  }

  .txt {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }
}
</style>
