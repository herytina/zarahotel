<template>
  <div v-motion="'fade-in'">
    <div class="container-card">
      <div v-motion="'fade-in'">
        <v-card class="mx-auto imageSection">
          <v-img v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: 300 } } }"
            class="align-end text-white v-img-wrapper" height="300" :src="img" cover>
            <div :class="title === 'Restaurant' ? 'avatar-wrapper' : 'avatar'">
              <v-avatar class="v-avatar" rounded="2">
                <p class="text-center" style="margin: 0; font-weight: bold; color: aliceblue">
                  {{ title }}
                </p>
                <span class="text-description">
                  {{ text }}
                </span>
              </v-avatar>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
  props: {
    bg: {
      type: String,
      default: 'rgb(248, 248, 248)',
    },
    title: {
      type: String,
      default: 'Salles',
    },
    text: {
      type: String,
      default: 'The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.',
    },
    image: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    },
    img: {
      type: String
    }
  },
  data() {
    return {
      images: [
        require("@/assets/img/zara.jpg"),
        require("@/assets/img/zara1.jpg"),
        require("@/assets/img/zara2.jpg"),
        require("@/assets/img/zara3.jpg")
      ],
      secondAnim: true,
      imageUrl: require('@/assets/img/chambre.jpeg')
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
      };
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.marginLeft = "-200px";
      el.style.opacity = 0;
    },
    enter(el, done) {
      let delay = parseInt(el.getAttribute('delay'));
      let left = parseInt(el.getAttribute('left'));
      Velocity(
        el,
        { opacity: 1, marginLeft: left },
        { delay, duration: 700, complete: done }
      )
    },
    beforeEnterB(el) {
      el.style.marginLeft = "-200px";
      el.style.opacity = 0;
    },
    enterB(el, done) {
      let delay = parseInt(el.getAttribute('delay'));
      let left = parseInt(el.getAttribute('left'));
      Velocity(
        el,
        { opacity: 1, marginLeft: left },
        { delay, duration: 1000, complete: done }
      )
    },
  },
};
</script>

<style>
.imageSection {
  width: 55%;
  margin-bottom: 30px;
  position: relative;
}

.block {
  padding: 50px;
}

.space {
  margin-left: 10px;
}

.hauteur {
  height: 1000px;
}

.size {
  height: 450px;
  min-width: -webkit-fill-available;
}

.move-right {
  display: flex;
  justify-content: flex-end;
}

.v-img-wrapper {
  position: relative;
}

.avatar-wrapper,
.avatar {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
}

.avatar-wrapper {
  margin-top: 15px;
}

.v-avatar {
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px !important;
  height: 250px !important;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;

}

.v-avatar p {
  font-weight: bold;
  color: aliceblue;
  text-align: center;
  font-size: 1.25rem;
}

.text-description {
  font-size: 1rem;
  color: aliceblue;
  text-align: left;
  font-family: Lato;
  padding-top: 5px;
  font-weight: 300;
}

.container-card {
  background-color: white;
  border: 1px solid white;
}

/* Desktop styles (screens larger than 992px) */
@media screen and (min-width: 992px) {
  .avatar-wrapper {
    top: 10px;
    right: 15px;
  }

  .avatar {
    top: auto;
    bottom: 25px;
    left: 15px;
    right: auto;
  }

  .v-avatar {
    width: 250px !important;
    height: 250px !important;
  }
}

/* Tablet and mobile styles (screens up to 991px) */
@media screen and (max-width: 991px) {

  .avatar-wrapper,
  .avatar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 0.875rem;
  }

  .v-avatar {
    width: 170px !important;
    height: 180px !important;
    padding: 10px;
  }

  .v-avatar p {
    font-size: 0.875rem;
  }

  .text-description {
    font-size: 0.75rem;
  }
}

/* Small mobile screens (up to 576px) */
@media screen and (max-width: 576px) {

  .avatar-wrapper,
  .avatar {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.75rem;
  }

  .v-avatar {
    width: 140px !important;
    height: 180px !important;
    padding: 8px;
    right: 28px;

  }

  .v-avatar p {
    font-size: 0.75rem;
  }

  .text-description {
    font-size: 0.625rem;
  }
}
</style>