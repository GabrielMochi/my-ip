<template>
  <v-container fluid class="fill-height">
    <div id="quote-container">
      <p class="overline">{{ advice }}</p>
    </div>
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <h1 ref="ip-label" class="display-4">{{ ip }}</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn outlined @click="copyIp">Copy</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: ['ip', 'advice'],
  computed: {
    ...mapState(['ip', 'advice'])
  },
  methods: {
    copyIp() {
      const ipLabel = this.$refs['ip-label']
      const el = document.createElement('textarea')

      el.value = ipLabel.textContent
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      el.style.visibility = 0
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
}
</script>

<style scoped>
#quote-container {
  display: block;
  position: absolute;
  top: calc(50vh - 160px);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  text-align: center;
}
</style>
