<template>
  <div>
    <div class="page-header clear-filter">
      <parallax
        class="page-header-image"
        style="background-image:url('img/service.jpeg')"
      >
      </parallax>
    </div>
    <div class="section">
      <div class="container"  style="margin-top: -100px;">
        <h3 class="title">Le Restaurant de Zara Hotel à Madagascar</h3>
        <p class="container" style="width: 20%; height: 1px; background-color: black;"></p>
        <div class="container">
          <div class="row marge" style="margin: 50px" >
            <div class="col col-md-10 ml-auto col-xl-6" v-scroll-reveal.reset="{delay:600}">
                  <div class="description">
                    <h3>Ambiance élégante, en harmonie et sérénité</h3>
                    <p>Une atmosphère qui reflète l’histoire des maisons traditionnelles de l’époque qui se fond dans une expérience contemporaine.</p>
                    <p>DECOUVREZ NOS CHAMBRES & TARIFS</p>
                    <p>
                      Côté restauration, le petit déjeuner est servi à l’hôtel et depuis Décembre 2014, l’hôtel possède son propre restaurant avec jardin terrasse : la Verrière. Les clients de l’hôtel peuvent bénéficier du service en chambre s’ils le souhaitent mais peuvent également profiter de cet endroit à la fois calme et convivial.


                    </p>
                  </div>
            </div>
            <div class="col-md-10 ml-auto col-xl-6" v-scroll-reveal.reset="{delay:600}">
                <div>
                  <img src="img/zara2.jpg" alt="presentation" height="400"/>
                </div>
            </div>
          </div>
        </div>
        <h3 class="title">La salle de petit dejeuner</h3>
        <p class="container" style="width: 20%; height: 1px; background-color: black;"></p>
        <p class="description">L’établissement principal possède une salle à manger-verrière qui est réservée aux clients de l’hôtel pour le buffet petit-déjeuner mais aussi pour tout autre repas. Avec une capacité de 15 personnes, cette salle peut aussi être privatisée pour un cocktail, séminaire ou repas d’affaires dans une atmosphère intimiste et calme.</p>
        <div class="row">
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            tab-nav-classes="nav-pills-just-icons"
            type="primary"
          >
            <tab-pane title="Profile">
              <i slot="label" class="now-ui-icons design_image"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg6.jpg" class="img-raised" />
                    <img src="img/bg11.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Home">
              <i slot="label" class="now-ui-icons location_world"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg1.jpg" alt="" class="img-raised" />
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Messages">
              <i slot="label" class="now-ui-icons sport_user-run"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg6.jpg" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
        <h3 class="">Vos Séminaires</h3>
        <p style="width: 20%; height: 1px; background-color: black;"></p>
        <p class="description">Désormais l’hôtel pavillon de l’emyrne vous propose une salle spécialement dédiée pour vos séminaires et réunions.
La salle peut accueillir 10 à 14 personnes.</p>
      </div>
    </div>
  </div>
</template>
<script>
import { TabPane, Tabs } from '@/components';

export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style></style>
