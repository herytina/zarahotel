<template>
  <div
    v-motion="'fade-in'"
    :style="{ backgroundColor: bg || 'rgb(248, 248, 248)' }"
  >
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-12 col-lg-8">
          <h2 class="title">
            {{ title }}
          </h2>
          <h5 class="description">
            {{ text }}
          </h5>
        </div>
      </div>
    </div>
    <div>
      <div v-motion="'fade-in'">
        <v-card
          class="mx-auto"
          max-width="1000"
        >
          <v-img
            v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 300 } } }"
            class="align-end text-white"
            height="300"
            :src="image"
            cover
          >
            <v-avatar
              class="ma-3"
              rounded="2"
              size="200"
              style="background-color: rgba(0, 0, 0, 0.7);"
            >
              <p
                class="text-center"
                style="margin: 0; font-weight: bold; color: aliceblue"
              >
                {{ title }}
              </p>
            </v-avatar>
          </v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import Velocity from 'velocity-animate';

export default {
  props: {
    bg: {
      type: String,
      default: 'rgb(248, 248, 248)',
    },
    title: {
      type: String,
      default: 'Salles',
    },
    text: {
      type: String,
      default: 'The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.',
    },
    image: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    },
  },
  data() {
    return {
      images:[
        require("@/assets/img/zara.jpg"), require("@/assets/img/zara1.jpg"), require("@/assets/img/zara2.jpg"), require("@/assets/img/zara3.jpg")
      ],
      secondAnim: true,
      imageUrl :require('@/assets/img/chambre.jpeg')
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
      };
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.marginLeft = "-200px";
      el.style.opacity = 0;
    },
    enter(el, done) {
      let delay = parseInt(el.getAttribute('delay'));
      let left = parseInt(el.getAttribute('left'));
      Velocity(
        el,
        { opacity: 1, marginLeft: left },
        { delay, duration: 700, complete: done }
      )
    },

    beforeEnterB(el) {
      el.style.marginLeft = "-200px";
      el.style.opacity = 0;
    },
    enterB(el, done) {
      let delay = parseInt(el.getAttribute('delay'));
      let left = parseInt(el.getAttribute('left'));
      Velocity(
        el,
        { opacity: 1, marginLeft: left },
        { delay, duration: 1000, complete: done }
      )
    },
  },
};
</script>
<style>
.block{
  padding: 50px;
}
.space{
  margin-left: 10px;
}
.hauteur{
  height:1000px;
}
.size{
  height: 450px;
  width: 450px;
}
@media screen and (max-width: 991px) and (min-width: 291px) {
  .size{
    height: 100px;
    width: 150px;
  }
}
</style>
