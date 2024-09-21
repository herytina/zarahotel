<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <DownloadSection />
  </footer>
</template>
<script>
import DownloadSection from '../pages/components/DownloadSection.vue';
export default {
  components: {
    DownloadSection
  },
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
