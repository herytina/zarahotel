<template>
  <div class="sections section-example">
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-12 col-lg-8 container-child">
          <h5>
            Offrez-vous un moment de détente inoubliable avec notre piscine
            chauffée, nos massages apaisants, une terrasse charmante, un bar
            convivial et une salle de sport équipée pour allier relaxation et
            bien-être absolu.
          </h5>
        </div>
      </div>
    </div>
    <div class="text-center">
      <v-row class="mx-10">
        <v-col v-for="(image, index) in images" :key="image">
          <v-sheet class="ma-2 card-offer">
            <img :src="image" alt="im" class="size" />
            <div class="reserve-btn">
              <v-btn class="reserve-btn-name">{{ btnName[index] }}</v-btn>
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
          require('@/assets/img/Massage.jpeg'),
          require('@/assets/img/piscine.jpeg'),
          require('@/assets/img/sport.jpg'),
        ],
        btnName: ['Reservez', 'Contacter', 'Contacter'],
        secondAnim: true,
      };
    },
  };
</script>

<style scoped>
  .sections {
    padding: 18px 0;
    position: relative;
    background: #ffffff;
  }

  .container-child {
    padding-bottom: 45px;
  }

  .v-sheet {
    position: relative;
  }

  .reserve-btn {
    background-color: #919fad75;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    position: absolute;
  }

  .reserve-btn-name {
    background-color: rgb(221, 186, 71);
    color: white;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 4px;
  }

  .card-offer:hover .reserve-btn {
    background: rgba(var(--bs-dark-rgb), 0.9) !important;
  }

  @media screen and (max-width: 991px) {
    .size {
      height: 100px;
      width: 100%;
      max-width: 400px;
    }

    .reserve-btn {
      transform: none;
      height: auto;
      background: rgba(var(--bs-dark-rgb), 0.9) !important;
      margin-top: 10px;
      position: relative;
      box-shadow: none;
      padding: 10px;
    }

    .reserve-btn-name {
      background: rgba(var(--bs-dark-rgb), 0.9);
      color: white;
      text-decoration: underline;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 4px;
    }
  }
</style>
