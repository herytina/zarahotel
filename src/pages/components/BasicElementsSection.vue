<template>
  <div class="section section-example" style="background-color: wheat;" v-scroll-reveal.reset="{delay: 500, afterReavel:()=>{secondAnim=true}}">
    <div class="container text-center">
      <div class="row">
        <div v-for="image of images" :key="image">
          <div class="space1">
            <img :src="image" alt="im" height="300" width="275"/>
          </div>
        </div>
      </div>
      <div v-scroll-reveal.reset="{delay:400, afterReavel:()=>{secondAnim=true}}">
       <n-button type="warning" size="lg">RESERVER AU MEILLEUR TARIF</n-button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Button
} from '@/components';
export default {
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      images:[
        "img/zara.jpg", "img/zara1.jpg", "img/zara2.jpg", "img/zara3.jpg"
      ],
      secondAnim :false
    }
  }
};
</script>

<style>
.space1{
  margin-left: 10px;
  margin-bottom: 50px;
}
</style>
