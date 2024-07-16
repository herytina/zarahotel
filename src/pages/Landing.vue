<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        class="page-header-image"
        :src="require('@/assets/img/chambre.jpeg')"
      />
      <div class="content-center">
        <div class="container">
          <h1
            v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 500 } } }"
            class="title"
          >
            DESIGN DU DÉBUT DU SIÈCLE ADAPTÉ À L’ÉPOQUE ACTUELLE
          </h1>
          <div
            v-motion="{ initial: { opacity: 0, y: 200 }, enter: { opacity: 1, y: 0, transition: { delay: 400 } } }"
            class="text-center"
          >
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
          <div 
            v-motion="{ initial: { opacity: 0, x: 100 }, enter: { opacity: 1, x: 0, transition: { delay: 800 } } }"
            class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">
              CHAQUE CHAMBRE DU
              ZARA HOTEL
              EST UNIQUE
            </h2>
            <h5 class="description">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record low
              maximum sea ice extent tihs year down to low ice extent in the
              Pacific and a late drop in ice extent in the Barents Sea.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary" />
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 500 } } }"
                class="image-container image-left"
                :style="backgroundStyle"
              >
                <!-- First image on the left side -->
              </div>
              <!-- Second image on the left side of the article -->
              <div
                v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 300 } } }"
                class="image-container position"
                :style="backgroundStyle"
              >
                <n-button
                  type="warning"
                  size="lg"
                >
                  RESERVEZ AU MEILLEUR TARIF >
                </n-button>
              </div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 800 } } }"
                class="image-container image-right"
                :style="backgroundStyle"
              />
              <h3>
                So what does the new record for the lowest level of winter ice
                actually mean
              </h3>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>
              <p>
                For a start, it does not automatically follow that a record
                amount of ice will melt this summer. More important for
                determining the size of the annual thaw is the state of the
                weather as the midnight sun approaches and temperatures rise.
                But over the more than 30 years of satellite records, scientists
                have observed a clear pattern of decline, decade-by-decade.
              </p>


              <div>
                <v-btn
                  height="72"
                  min-width="164"
                  variant="tonal"
                >
                  VOIR NOS TARIFS ET CONDITIONS >
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
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      imageUrl :require('@/assets/img/chambre.jpeg')
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
      };
    },
  },
};
</script>
<style>
@media screen and (max-width: 991px) {
  .position{
    margin-top: -200px;
  }
}

</style>
