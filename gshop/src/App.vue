<template>
  <div id="app">
 <router-view/>
  <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide"
export default {
  name: 'App',
  components: {
  FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
#app
  width: 100%
  heigth 100%
  background #f5f5f5
</style>
