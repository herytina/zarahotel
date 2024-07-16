<template>
  <div>
    <div
      class="page-header clear-filter"
      filter-color=""
    >
      <v-parallax
        :src="image[0]"
        class="h"
      >
        <div
          v-motion="'fade-in'"
          class="txt"
        >
          <h1
            v-motion="{ initial: { opacity: 0, y: 200 }, enter: { opacity: 1, y: 0, transition: { delay: 300 } } }"
            class="city"
          >
            ZARA HOTEL
          </h1>
          <h3
            v-motion="{ initial: { opacity: 0, y: 150 }, enter: { opacity: 1, y: 0, transition: { delay: 300 } } }"
            class="city"
          >
            ANTANANARIVO
          </h3>
          <div
            v-motion="{ initial: { opacity: 0, x: 100 }, enter: { opacity: 1, x: 0, transition: { delay: 500 } } }"
            style="margin-top: 40px;"
          >
            <n-button
              type="warning"
              size="lg"
            >
              RESERVEZ AU MEILLEUR TARIF >
            </n-button>
          </div>
        </div>
        <div class="container section-images">
          <div class="row">
            <div class="col-md-12">
              <div
                v-motion="{ initial: { opacity: 0, scale: 0.5 }, enter: { opacity: 1, scale: 1, transition: { duration: 1200, easing: 'ease-in-out' } } }"
                class="hero-images-container-1"
              >
                <img
                  :src="image[1]"
                  alt=""
                  class="post"
                >
              </div>
              <div
                v-motion="{ initial: { opacity: 0, scale: 0.5 }, enter: { opacity: 1, scale: 1, transition: { duration: 1200, easing: 'ease-in-out' } } }"
                class="hero-images-container-2"
              >
                <img
                  :src="image[2]"
                  alt=""
                  class="post"
                >
              </div>
            </div>
          </div>
        </div>
      </v-parallax>
    </div>
    <div class="main">
      <div class="section section-images">
        <div>
          <carousel-section />
        </div>
      </div>
    </div>
    <Tabs />
    <ExamplesSection />
    <div
      v-motion="{ initial: { opacity: 0, scale: 0.5 }, enter: { opacity: 1, scale: 1, transition: { duration: 1200, easing: 'ease-in-out' } } }"
      class="section"
    >
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">
              PETIT DEJEUNER
            </h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
            </h5>
            <p>NOS SERVICES</p>
          </div>
        </div>
      </div>
    </div>
    <BasicElementsSection />
    <!-- <progress-pagination></progress-pagination> -->
  </div>
</template>
<script>
import Button from '@/components/Button.vue';
import BasicElementsSection from './components/BasicElementsSection.vue';
import CarouselSection from './components/CarouselSection.vue';
import ExamplesSection from './components/ExamplesSection.vue';
import Tabs from './components/Tabs.vue';

export default {
  name: 'IndexPage',
  bodyClass: 'index-page',
  components: {
    BasicElementsSection,
    CarouselSection,
    Tabs,
    ExamplesSection,
    [Button.name]: Button,
  },
  data() {
    return {
      image : [require('@/assets/img/zara11.jpg'),require('@/assets/img/chambre.jpeg'),require('@/assets/img/service.jpeg')]
    }
  }
}
</script>
<style>
.txt{
  margin-top: 20%;
  margin-left: 20%;
}
.city{
  font-size: 64px;
  font-weight: 600;
  color:aliceblue;
  text-shadow: 1px 2px 3px black;
}
.h{
  height: 100%;
}

@media screen and (min-width: 991px) {
  .post{
    margin-top: -200px;
  }
}
@media screen and (max-width: 991px) {
  .post{
    margin-top: 200px;
  }
  .txt{
    margin-top: 50%;
    margin-left: 10%;
  }
  .city{
  font-size: 40px;
  font-weight: 600;
  color:aliceblue;
  text-shadow: 1px 2px 3px black;
}
}
</style>
