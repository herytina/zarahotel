<template>
  <div>
    <l-map
      style="height: 300px; width: 100%"
      :zoom="zoom"
      :center="center"
      @ready="onMapReady"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <l-marker :lat-lng="marker">
        <l-popup>
          ZARAHOTEL
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import 'leaflet.fullscreen';
import L from 'leaflet';


export default {
  name: 'MapPage',
  bodyClass: 'map-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data(){
    return{
      zoom: 16,
      center: [-18.8972486,47.5099986],
      marker: [-18.8972486,47.5099986],
     
    }
  },
  methods: {
    onMapReady(map) {
      L.control.fullscreen({
        position: 'topright',
        title: 'Plein écran',
      }).addTo(map);
    },
  },
};
</script>
<style scoped></style>