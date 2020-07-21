<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer id="footer">
      <a
        href="https://github.com/GabrielMochi"
        target="_blank"
        class="no-text-decoration black--text"
      >
        &pi;
      </a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  created() {
    const hours = new Date().getHours()
    this.$vuetify.theme.dark = hours >= 18 && hours < 6
  }
}
</script>

<style>
.no-text-decoration {
  text-decoration: none;
}
</style>

<style scoped>
#footer {
  position: absolute !important;
  bottom: 0;
  right: 0;
  margin: 0;
  background: transparent;
}
</style>
