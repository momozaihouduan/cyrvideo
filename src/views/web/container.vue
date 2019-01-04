<template>
  <div>
    <webmenu></webmenu>
    <router-view/>
    <webfooter></webfooter>
  </div>
</template>

<script>
import webmenu from './components/webmenu'
import webfooter from './components/webfooter'
export default {
  name: 'container',
  components: {
    webmenu,
    webfooter
  }
}
</script>

<style scoped>
</style>
