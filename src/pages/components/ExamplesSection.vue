<template>
  <div v-motion="'fade-in'">
    <div class="container-card">
      <div v-motion="'fade-in'">
        <v-card class="mx-auto imageSection">
          <v-img v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 300 } } }"
            class="align-end text-white v-img-wrapper" height="300" :src="img" cover>
            <div :class="title === 'Restaurant' ? 'avatar-wrapper' : 'avatar'">
              <v-avatar class="ma-3" rounded="2" size="200" style="width: 300px; height: 250px;">
                <p class="text-center" style="margin: 0; font-weight: bold; color: aliceblue">
                  {{ title }}
                </p>
                <span class="text-description">
                  {{ text }}
                </span>
              </v-avatar>
            </div>
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
    img: {
      type: String
    }
  },
  data() {
    return {
      images: [
        require("@/assets/img/zara.jpg"), require("@/assets/img/zara1.jpg"), require("@/assets/img/zara2.jpg"), require("@/assets/img/zara3.jpg")
      ],
      secondAnim: true,
      imageUrl: require('@/assets/img/chambre.jpeg')
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
.imageSection {
  width: 55%;
  margin-bottom: 30px;
}

.block {
  padding: 50px;
}

.space {
  margin-left: 10px;
}

.hauteur {
  height: 1000px;
}

.size {
  height: 450px;
  min-width: -webkit-fill-available;
  /* width: 450px; */
}

.move-right {
  display: flex;
  justify-content: flex-end;
}

.v-img-wrapper {
  position: relative;
}

.avatar-wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
  margin-right: 15px;
}

.avatar {
  font-size: 25px;
  margin-bottom: 25px;
  margin-left: 15px;
}

.v-avatar {
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.container-card {
  background-color: white;
  border: 1px solid white;
}

.text-description {
  font-size: 16px;
  color: aliceblue;
  text-align: center;
  padding-left: 4px;
  padding-right: 4px;
}

@media screen and (max-width: 991px) and (min-width: 291px) {
  .size {
    height: 100px;
    width: 150px;
  }
}
</style>
