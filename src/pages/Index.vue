<template>
  <div>
    <div class="page-header clear-filter" filter-color="">
      <parallax
        class="page-header-image"
        style="background-image:url('img/zara11.jpg')"
      >
      </parallax>
      <div class="txt" v-scroll-reveal="{ delay: 500 }">
          <h1 class="city">ZARA HOTEL</h1>
          <h3 class="city">ANTANANARIVO</h3>
          <div style="margin-top: 40px;" v-scroll-reveal.reset="{ delay: 700}">
            <n-button type="warning" size="lg">RESERVEZ AU MEILLEUR TARIF ></n-button>
          </div>
      </div>
    </div>
    <div class="main">
      <div class="section section-images">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container" v-scroll-reveal.reset="{ delay: 350, distance: '30px' }">
                <img src="img/chambre.jpeg" alt="" />
              </div>
              <div class="hero-images-container-1" v-scroll-reveal.reset="{ delay: 450, distance: '20px', }">
                <img src="img/service.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <carousel-section></carousel-section>
        </div>
      </div>
    </div>
    <tabs-section></tabs-section>
    <examples-section></examples-section>
    <div class="section" v-scroll-reveal.reset="{ delay: 450, scale: 1.5 } ">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">PETIT DEJEUNER</h2>
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
    <basic-elements></basic-elements>
    <!-- <progress-pagination></progress-pagination> -->
  </div>
</template>
<script>
import { Button, Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import CarouselSection from './components/CarouselSection';
import ExamplesSection from './components/ExamplesSection';
import TabsSection from './components/Tabs';
export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    BasicElements,
    TabsSection,
    CarouselSection,
    ExamplesSection,
    [Button.name]: Button,
  }
};
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
</style>
