<template>
  <div class="row justify-content-center carol">
    <div class="col-12">
      <el-carousel
        height="300px"
        style="width: 65%; border-radius: 5px; margin: auto"
        :autoplay="true"
        :interval="4000"
      >
        <el-carousel-item v-for="(img, index) of data.images" :key="index">
          <img
            class="d-block"
            :src="img"
            alt="Third slide"
            style="width: 100%; height: 100%"
          />
          <div class="carousel-caption d-none d-md-block">
            <!-- <v-avatar class="v-avatar" rounded="2" style="left: -20%"> -->
            <div class="caption-bg">
              <p
                class="text-center"
                style="margin: 0; font-weight: bold; color: aliceblue"
              >
                {{ data.title }}
              </p>
              <span class="text-description">
                {{ data.description }}
              </span>
            </div>

            <!-- </v-avatar> -->
          </div>
          <!-- TODO -->

          <!-- FIN -->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CarouselSection',
    props: {
      data: Object,
    },
  };
</script>
<style>
  * .caption-bg {
    background: #13141685;
    width: 40%;
    padding: 0.5rem;
    border-radius: 5px;
    position: relative;
    left: -20%;
  }

  .el-carousel__arrow {
    background: #0c0c0d85;
  }

  .carol {
    margin: 100px;
  }

  @media screen and (max-width: 991px) {
    .carol {
      margin: 10px;
    }
  }
</style>
