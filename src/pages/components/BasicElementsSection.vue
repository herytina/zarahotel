<template>
  <div
    class="section section-example"
    style="background-color:rgb(248, 248, 248);"
  >
    <div class="container text-center">
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
      <div v-motion="'fade-in'">
        <n-button
          type="warning"
          size="lg"
        >
          RESERVER AU MEILLEUR TARIF
        </n-button>
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
        require("@/assets/img/zara.jpg"), require("@/assets/img/zara1.jpg"), require("@/assets/img/zara2.jpg"), require("@/assets/img/zara3.jpg")
      ],
      secondAnim :true
    }
  }
};
</script>

<style>
.space1{
  margin-left: 10px;
  margin-bottom: 50px;
}
.size{
  height:300px;
  width:450px
}
@media screen and (max-width: 991px) {
  .size{
    height: 100px;
    width: 400px;
  }
}
</style>
