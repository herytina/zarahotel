<template>
  <nav
    :class="classes"
    class="navbar"
  >
    <v-toobar class="container">
      <div class="navbar-translate">
        <slot v-bind="slotData" />
        <navbar-toggle-button
          :toggled="showMenu"
          @click="toggle"
        />
      </div>
      <div
        v-if="$slots['navbar-menu'] || $slots['navbar-menu']"
        id="navigation"
        v-click-outside="close"
        class="navbar-collapse collapse"
        :style="menuImage ? `background: url(${menuImage}) 0% 0% / cover;` : ''"
        :class="[
          { show: showMenu },
          { 'has-image': menuImage },
          navMenuClasses
        ]"
        data-color="orange"
      >
        <v-spacer />
        <slot name="before-menu" />
        <ul
          class="navbar-nav"
          :class="menuClasses"
        >
          <slot
            name="navbar-menu"
            v-bind="slotData"
          />
        </ul>
      </div>
    </v-toobar>
  </nav>
</template>
<script>
import NavbarToggleButton from './NavbarToggleButton';
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

export default {
  name: 'NavBar',
  components: {
    NavbarToggleButton
  },
  provide() {
    return {
      closeNavbar: this.close
    };
  },
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'relative'
    },
    menuClasses: {
      type: [String, Object, Array]
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value);
      }
    },
    navMenuClasses: {
      type: String,
      default: ''
    },
    menuImage: {
      type: String
    },
    expand: {
      type: [String, Boolean],
      default: 'lg'
    }
  },
  data() {
    return {
      showMenu: false,
      extraNavClasses: '',
      currentScrollValue: 0
    };
  },
  computed: {
    slotData() {
      return {
        toggle: this.toggle,
        open: this.open,
        close: this.close,
        isToggled: this.showMenu
      };
    },
    classes() {
      let color = `bg-${this.type}`;
      let navPosition = `navbar-${this.position}`;
      let colorOnScrollTransparent =
        this.colorOnScroll && this.currentScrollValue < this.colorOnScroll;

      if (this.position === 'fixed') {
        navPosition = 'fixed-top';
      }

      return [
        { 'navbar-transparent': this.transparent || colorOnScrollTransparent },
        { [color]: !this.transparent && this.colorOnScroll === 0 },
        this.expand ? `navbar-expand-${this.expand}` : '',
        navPosition,
        this.extraNavClasses
      ];
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.scrollListener);
  },
  methods: {
    setNav(value) {
      let htmlClasses = document.querySelector('html').classList;
      if (value) {
        htmlClasses.add('nav-open');
      } else {
        htmlClasses.remove('nav-open');
      }
      let isOpen = htmlClasses.contains('nav-open');
      let eventToTrigger = isOpen ? 'open' : 'close';
      this.showMenu = isOpen;
      this.$emit(eventToTrigger);
    },
    toggle() {
      this.setNav(!this.showMenu);
    },
    open() {
      this.setNav(true);
    },
    close() {
      if (this.showMenu) {
        this.setNav(false);
      }
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `bg-${this.type}`;
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = '';
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    }
  }
};
</script>
<style>
  .contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
}
</style>
