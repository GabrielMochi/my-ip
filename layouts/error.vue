<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center">
            <h1 v-if="error.statusCode === 404" class="display-1 text-uppercase">
              There is nothing to see here
            </h1>
            <h1 v-else class="display-1 text-uppercase">
              Something really wrong happened
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.no-decoration {
  text-decoration: none !important;
}
</style>
