<template>
  <div class="hauteur" style="background-color: wheat;" v-scroll-reveal.reset="{ delay: 450, scale: 1.5, afterReveal:()=>{secondAnim = true} } ">
    <div class="col block">
        <div v-scroll-reveal.reset="{delay:500, afterReveal:()=>{secondAnim = true}}">
          <div v-if="secondAnim">
            <Transition
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              appear
            >
              <div delay="0" left="0">
                <div class="row">
                  <div v-for="image of images" :key="image">
                    <div class="space">
                        <img :src="image" alt="im" height="450" width="450"/>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div v-scroll-reveal.reset="{delay:500, afterReveal:()=>{secondAnim = true}}">
          <div v-if="secondAnim">
            <Transition
              v-on:before-enter="beforeEnterB"
              v-on:enter="enterB"
              appear
            >
              <div delay="200" left="0">
                <div class="row" style="margin-top: 330px;">
                  <div v-for="image of images" :key="image">
                    <div class="space">
                      <img :src="image" alt="im" height="450" width="450"/>
                    </div>
                  </div>
                </div>
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
        "img/zara.jpg", "img/zara1.jpg", "img/zara2.jpg", "img/zara3.jpg"
      ],
      secondAnim: false
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
</style>
