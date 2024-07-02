<template>
  <div
    id="#download-section"
    data-background-color="black"
    class="container"
  >
    <div class="row mb-5">
        <div class="text-center col-md-3">
          <h3 class="title" v-scroll-reveal.reset="{delay:500, afterReveal:()=>{secondAnim=true}}">ZARA HOTEL</h3>
          <h5 class="description" v-scroll-reveal.reset="{delay:600, afterReveal:()=>{secondAnim=true}}">
            12, rue Rakotonirina Stanislas<br>
            Isoraka – BP 4106<br>
            Antananarivo – Madagascar
            <h5 class="mt-3" v-scroll-reveal.reset="{delay:700, afterReveal:()=>{secondAnim=true}}">
               Téléphone : <br>
            +261 32 05 368 29 <br>
            +261 34 78 459 61 <br>
            </h5>
          </h5>
        </div>
        <div class="text-center col-md-6 mt-5" v-scroll-reveal.reset="{delay:800, afterReveal:()=>{secondAnim=true}}">
          <div v-for="btn of boutons" :key="btn.name">
            <router-link v-popover:popover1 class="navbar-brand" :to="btn.url">
              <ul class="">
                <li>> {{btn.name}}</li>
              </ul>
            </router-link>
          </div>
        </div>
        <div class="text-center">
          <h3 v-scroll-reveal.reset="{delay:1000, afterReveal:()=>{secondAnim=true}}">Suivez-nous</h3>
          <div v-scroll-reveal.reset="{delay:900, afterReveal:()=>{secondAnim=true}}">
            <a
              href="#"
              class="btn btn-neutral btn-round btn-lg"
            >
              <img src="img/zara.jpg" alt="logo" height="100" width="200">
            </a>
          </div>
          <div class="text-center">
            <a
              target="_blank"
              href="https://www.twitter.com/creativetim"
              class="btn btn-neutral btn-icon btn-twitter btn-round btn-lg"
              rel="tooltip"
              title="Follow us"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/creativetim"
              class="btn btn-neutral btn-icon btn-facebook btn-round btn-lg"
              rel="tooltip"
              title="Like us"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company-beta/9430489/"
              class="btn btn-neutral btn-icon btn-linkedin btn-lg btn-round"
              rel="tooltip"
              title="Follow us"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/creativetimofficial/vue-now-ui-kit"
              class="btn btn-neutral btn-icon btn-github btn-round btn-lg"
              rel="tooltip"
              title="Star on Github"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  // The `data` property in a Vue component is used to define the initial data for the component. It
  // returns an object with properties that represent the data used in the component. In this case, the
  // `data` property is defining an object with two properties: `boutons` and `secondAnim`.
  data() {
    return {
      boutons: [
        {
          url: "hotel",
          name :"HOTEL"
        },
        {
          url: "service",
          name :"SERVICES"
        },
        {
          url: "chambre",
          name :"CHAMBBRE"
        },
        {
          url: "contact",
          name :"CONTACTS"
        }
      ],
      secondAnim:true
    }
  }
};
</script>
<style></style>
