<template>
  <div
    v-motion="'fade-in'"
    style="background-color:rgb(248, 248, 248);"
  >
    <div class="col block">
      <div v-motion="'fade-in'">
        <div v-if="secondAnim">
          <Transition
            appear
            @before-enter="beforeEnter"
            @enter="enter"
          >
            <div
              delay="0"
              left="0"
            >
              <v-row
                class="mb-6"
                no-gutters
              >
                <v-col
                  v-for="image of images"
                  :key="image"
                >
                  <v-sheet class="pa-2 ma-2">
                    <img
                      :src="image"
                      alt="im"
                      class="size"
                    >
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </Transition>
        </div>
      </div>
      <div v-motion="'fade-in'">
        <div v-if="secondAnim">
          <Transition
            appear
            @before-enter="beforeEnterB"
            @enter="enterB"
          >
            <div
              delay="200"
              left="0"
            >
              <v-row
                class="mb-6"
                no-gutters
              >
                <v-col
                  v-for="image of images"
                  :key="image"
                >
                  <v-sheet class="pa-2 ma-2">
                    <img
                      :src="image"
                      alt="im"
                      class="size"
                    >
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Velocity from 'velocity-animate';

export default {
  data() {
    return {
      images:[
        require("@/assets/img/zara.jpg"), require("@/assets/img/zara1.jpg"), require("@/assets/img/zara2.jpg"), require("@/assets/img/zara3.jpg")
      ],
      secondAnim: true
    }
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
  }
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
