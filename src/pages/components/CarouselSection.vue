<template>
      <div class="row justify-content-center" style="margin: 100px;">
        <div class="col-12">
          <el-carousel height="500px" >
            <el-carousel-item >
              <img class="d-block" src="img/bg1.jpg" alt="First slide" style="width: 100%;"/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Nature, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bg3.jpg" alt="Second slide" style="width: 100%;"/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Somewhere Beyond, United States</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bg4.jpg" alt="Third slide" style="width: 100%;"/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Yellowstone National Park, United States</h5>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style></style>
