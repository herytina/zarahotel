<template>
  <div class="section section-example">
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-12 col-lg-8">
          <h2 class="title">Autre service, piscine, salle de sport, massage</h2>
          <h5 class="description">
            Offrez-vous un moment de détente inoubliable avec notre piscine
            chauffée, nos massages apaisants, une terrasse charmante, un bar
            convivial et une salle de sport équipée pour allier relaxation et
            bien-être absolu.
          </h5>
        </div>
      </div>
    </div>
    <div class="text-center">
      <v-row class="mx-10" no-gutters>
        <v-col v-for="image of images" :key="image">
          <v-sheet class="ma-2">
            <img :src="image" alt="im" class="size" />
            <div class="reserve-btn">
              <v-btn>RESERVEZ</v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
  import { Button } from '@/components';
  export default {
    components: {
      [Button.name]: Button,
    },
    data() {
      return {
        images: [
          require('@/assets/img/zara.jpg'),
          require('@/assets/img/zara1.jpg'),
          require('@/assets/img/zara2.jpg'),
        ],
        secondAnim: true,
      };
    },
  };
</script>

<style>
  .v-sheet {
    position: relative;
  }

  .v-sheet:hover {
    .reserve-btn {
      display: block;
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      transform: translateY(-100%);
    }
  }

  .reserve-btn {
    background: rgba(var(--bs-dark-rgb)) !important;
    height: 80px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    transform: translateY(-100%);
    display: none;
    position: absolute;
    width: -webkit-fill-available;
  }

  .space1 {
    margin-left: 10px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 991px) {
    .size {
      height: 100px;
      width: 400px;
    }

    .reserve-btn {
      display: block;
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      transform: none;
      height: auto;
      background: none !important;
      margin-top: 10px;
    }
  }
</style>
