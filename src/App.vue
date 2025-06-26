<template>
  <div id="app">
    <router-view name="header" class="header" />
    <div class="wrapper body">
      <router-view />
    </div>
    <router-view name="footer" class="footer" />
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.header {
  font-family: Lato;
}

.body {
  font-family: Lato;
}

.footer {
  font-family: Lato;
}
</style>
