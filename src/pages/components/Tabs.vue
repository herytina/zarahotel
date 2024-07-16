<template>
  <div class="section">
    <div
      class="row marge"
    >
      <div
        v-motion="'fade-in'"
        class="col-md-10 ml-auto col-xl-4 mr-auto"
      >
        <div v-if="secondAnim">
          <Transition
            appear
            @before-enter="beforeEnter"
            @enter="enter"
          >
            <div
              delay="0"
              left="0"
              style="height: 700;"
            >
              <img
                :src="require('@/assets/img/zara2.jpg')"
                alt="presentation"
                height="500"
              >
            </div>
          </Transition>
        </div>
      </div>
      <div
        v-motion="'fade-in'"
        class="col-md-10 ml-auto col-xl-4 mr-auto"
      >
        <div v-if="secondAnim">
          <Transition
            appear
            @before-enter="beforeEnterM"
            @enter="enterM"
          >
            <div
              delay="200"
              top="150"
            >
              <h1 class="center">
                HISTOIRE ET MODERNITER AU COEUR D'ANTANANARIVO
              </h1>
            </div>
          </Transition>
        </div>
      </div>
      <div class="col-md-10 ml-auto col-xl-4 mr-auto">
        <div>
          <p>
            I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things
            could be at. So when you get something that has the name Kanye
            West on it, it’s supposed to be pushing the furthest
            possibilities. I will be the leader of a company that ends up
            being worth billions of dollars, because I got the answers. I
            understand culture. I am the nucleus.
          </p>
          <div v-motion="'fade-in'">
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
    <div class="container">
      <div
        class="row"
        style="margin: 50px"
      >
        <div
          v-motion="'fade-in'"
          class="col-md-10 ml-auto col-xl-6"
        >
          <div v-if="secondAnim">
            <Transition
              appear
              @before-enter="beforeEnterBL"
              @enter="enterBL"
            >
              <div
                delay="500"
                top="0"
              >
                <img
                  :src="require('@/assets/img/zara2.jpg')"
                  alt="presentation"
                  class="size0"
                >
              </div>
            </Transition>
          </div>
        </div>
        <div
          v-motion="'fade-in'"
          class="col col-md-10 ml-auto col-xl-6"
        >
          <div>
            <h1>CHAMBRE & SUITES</h1>
            <img
              :src="require('@/assets/img/zara.jpg')"
              alt="presentation"
              class="size1"
            >
            <h3>Ambiance élégante, en harmonie et sérénité</h3>
            <p>Une atmosphère qui reflète l’histoire des maisons traditionnelles de l’époque qui se fond dans une expérience contemporaine.</p>
            <p>DECOUVREZ NOS CHAMBRES & TARIFS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Button
} from '@/components';
import Velocity from 'velocity-animate';
export default {
  name:'TabPage',
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      secondAnim: true
    }
  },
  methods:{
    beforeEnter(el) {
      el.style.marginLeft = "-100px";
      el.style.opacity = 0;
    },
    enter(el, done){
      let delay = parseInt(el.getAttribute('delay'));
      let left = parseInt(el.getAttribute('left'));
      Velocity(
        el,
        { opacity: 1, marginLeft:left },
        {delay, duration :700, complete:done}
      )
    },
    beforeEnterM(el) {
      el.style.opacity = 0;
    },
     enterM(el, done){
      let delay = parseInt(el.getAttribute('delay'));
      let top = parseInt(el.getAttribute('top'));
      Velocity(
        el,
        { opacity: 1, marginTop:top },
        {delay, duration :500, complete:done}
      )
    },
    beforeEnterR(el) {
      el.style.marginRight = "-150px";
      el.style.opacity = 0;
    },
    enterR(el, done){
      let delay = parseInt(el.getAttribute('delay'));
      let right = parseInt(el.getAttribute('right'));
      Velocity(
        el,
        { opacity: 1, marginRight:right },
        {delay, duration :700, complete:done}
      )
    },
    beforeEnterBL(el) {
      el.style.marginRight = "-150px";
      el.style.opacity = 0;
    },
    enterBL(el, done){
      let delay = parseInt(el.getAttribute('delay'));
      let right = parseInt(el.getAttribute('right'));
      Velocity(
        el,
        { opacity: 1, marginRight:right },
        {delay, duration :700, complete:done}
      )
    },
  }
}
</script>
<style>
.marge{
  background-color:rgb(248, 248, 248);
  padding:50px 150px;
}
.size0{
  height: 600px;
}
.size1{
  height: 300px;
}
@media screen and (max-width: 991px) {
  .size0{
    height: 200px;
  }
  .size1{
    height: 150;
  }
  .marge{
  padding:5px 5px;
}
}
</style>
