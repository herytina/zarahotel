<template>
  <div
    class="row justify-content-center carol"
  >
    <div class="col-12">
      <el-carousel height="500px">
        <el-carousel-item
          v-for="(img, index) of image"
          :key="index"
        >
          <img
            class="d-block"
            :src="img"
            alt="Third slide"
            style="width: 100%; height: 100%;"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>Yellowstone National Park, United States</h5>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data(){
  return {
    image :[require('@/assets/img/zara11.jpg'),require('@/assets/img/chambre.jpeg'),require('@/assets/img/service.jpeg')]
  }
}
}
</script>
<style>
.carol{
  margin: 100px;
}
@media screen and (max-width: 991px) {
  .carol{
    margin: 10px;
  }
}
</style>
