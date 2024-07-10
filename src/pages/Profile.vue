<template>
  <div>
    <div class="page-header clear-filter">
      <v-parallax
        :src="require('@/assets/img/service.jpeg')"
      />
    </div>
    <div class="section">
      <div
        class="container"
        style="margin-top: -100px;"
      >
        <h3 class="title">
          Le Restaurant de Zara Hotel à Madagascar
        </h3>
        <p
          class="container"
          style="width: 20%; height: 1px; background-color: black;"
        />
        <div class="container">
          <div
            class="row marge"
            style="margin: 50px"
          >
            <div
              v-motion="'fade-in'"
              class="col col-md-10 ml-auto col-xl-6"
            >
              <div class="description">
                <h3>Ambiance élégante, en harmonie et sérénité</h3>
                <p>Une atmosphère qui reflète l’histoire des maisons traditionnelles de l’époque qui se fond dans une expérience contemporaine.</p>
                <p>DECOUVREZ NOS CHAMBRES & TARIFS</p>
                <p>
                  Côté restauration, le petit déjeuner est servi à l’hôtel et depuis Décembre 2014, l’hôtel possède son propre restaurant avec jardin terrasse : la Verrière. Les clients de l’hôtel peuvent bénéficier du service en chambre s’ils le souhaitent mais peuvent également profiter de cet endroit à la fois calme et convivial.
                </p>
              </div>
            </div>
            <div
              v-motion="'fade-in'"
              class="col-md-10 ml-auto col-xl-6"
            >
              <div>
                <img
                  :src="require('@/assets/img/zara2.jpg')"
                  alt="presentation"
                  height="400"
                >
              </div>
            </div>
          </div>
        </div>
        <h3 class="title">
          La salle de petit dejeuner
        </h3>
        <p
          class="container"
          style="width: 20%; height: 1px; background-color: black;"
        />
        <p class="description">
          L’établissement principal possède une salle à manger-verrière qui est réservée aux clients de l’hôtel pour le buffet petit-déjeuner mais aussi pour tout autre repas. Avec une capacité de 15 personnes, cette salle peut aussi être privatisée pour un cocktail, séminaire ou repas d’affaires dans une atmosphère intimiste et calme.
        </p>
        <div class="container">
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
                  height="300"
                  width="350"
                >
              </v-sheet>
            </v-col>
          </v-row>
        </div>
        <div class="container">
          <v-row class="mt-7">
            <v-col class="my-auto">
              <h3 class="">
                Vos Séminaires
              </h3>
              <p style="width: 20%; height: 1px; background-color: black;" />
              <p class="text-grey-darken-1">
                Désormais l’hôtel pavillon de l’emyrne vous propose une salle spécialement dédiée pour vos séminaires et réunions.
                La salle peut accueillir 10 à 14 personnes.
              </p>
            </v-col>
            <v-col>
              <img
                :src="images[1]"
                alt="im"
                height="500"
                width="550"
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfilePage',
  bodyClass: 'profile-page',
  data() {
    return {
      images:[
         require("@/assets/img/zara1.jpg"), require("@/assets/img/zara2.jpg"), require("@/assets/img/zara3.jpg")
      ],
    }
  }
};
</script>
<style></style>
