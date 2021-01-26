<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/header'
  export default {
    name: 'app',
    components: {
      'app-header': Header
    },
      created () {
      this.$store.dispatch('AutoLogin')
    }
  }
</script>

<style>

</style>