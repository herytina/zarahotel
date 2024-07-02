<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/anosy.jpeg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">ANTANANARIVO
LA VILLE DES MILLE COLLINES</h1>
          <div class="text-center">
            <n-button type="warning" size="lg">RESERVEZ AU MEILLEUR TARIF ></n-button>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">CONTACTEZ-NOUS</h2>
            <h5 class="description">
              NOS CLIENTS SONT LE CŒUR DE NOTRE BOUTIQUE HÔTEL
            </h5>
            <h5 class="description">Tout ce dont vous avez besoin et quand vous en avez besoin, vous n’avez qu’à demander.</h5>
          </div>
        </div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/chambre.jpeg')"
              >
                <!-- First image on the left side -->

              </div>
              <!-- Second image on the left side of the article -->

            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/chambre.jpeg')"
              ></div>
            </div>
          </div>
        </div>
        <p class="container" style="width: 100%; height: 1px; background-color: black;"></p>

        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">RÉSERVER</h2>
            <h5 class="description">NOUS VOUS GARANTISSONS LE MEILLEUR TARIF</h5>
            <h5 class="description">Profitez également de nos offres.</h5>
            <p><n-button type="warning" size="lg">ALLONS-Y ! ></n-button></p>
          </div>
        </div>
        <p class="container" style="width: 100%; height: 1px; background-color: black;"></p>

        <div class="mt-5">
          <l-map style="height: 400px" :zoom="zoom" :center="center" @ready="onMapReady"
>
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="center" :icon="customIcon">
              <l-popup>
                <span>Zara Hotel</span>
              </l-popup>
            </l-marker>
          </l-map>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { Button, FormGroupInput } from '@/components';
import L from 'leaflet';
import 'leaflet.fullscreen';
import 'leaflet.fullscreen/Control.FullScreen.css';
import { LMap, LMarker, LPopup, LTileLayer } from 'vue2-leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    'l-map': window.Vue2Leaflet.LMap,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      zoom: 17,
      center: [-18.89735, 47.5101739],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '© OpenStreetMap contributors',
      customIcon: L.icon({
        iconUrl: 'img/location.png',  // Chemin vers votre icône
        iconSize: [25, 25],             // Taille de l'icône
        iconAnchor: [12, 41],           // Point d'ancrage de l'icône (la base de l'icône sera à cette position)
        popupAnchor: [1, -34],          // Point où la popup apparaîtra relativement à l'icône
        shadowSize: [41, 41],           // Taille de l'ombre de l'icône
      }),
    };
  },
   methods: {
    // The `onMapReady(map)` method is a function that is called when the Leaflet map component is
    // ready. Inside this method, it adds a fullscreen control to the map. The `L.control.fullscreen()`
    // function creates a fullscreen control button that allows the user to view the map in fullscreen
    // mode.
    onMapReady(map) {
      L.control.fullscreen({
        position: 'topright',
        title: 'Plein écran',
        titleCancel: 'Quitter plein écran',
      }).addTo(map);
    }
  }
};
</script>
<style></style>
