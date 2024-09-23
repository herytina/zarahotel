<template>
  <div
    class="section section-example"
  >
  <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-12 col-lg-8">
          <h2 class="title">
            Autre service, piscine, salle de sport,massage
          </h2>
          <h5 class="description">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            More importantly, looking at them will give you a picture of what
          </h5>
        </div>
      </div>
    </div>
    <div class="text-center">
      <v-row
        class="mx-10"
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
            <v-btn>
              RESERVEZ
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
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
        require("@/assets/img/zara.jpg"), require("@/assets/img/zara1.jpg"), require("@/assets/img/zara2.jpg")
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
  height:250px;
  width:350px
}
@media screen and (max-width: 991px) {
  .size{
    height: 100px;
    width: 400px;
  }
}
</style>
