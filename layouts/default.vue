<template>
  <div class="antialiased">
    <header-main/>
    <menu-main/>
    <nuxt/>
    <footer-main/>
  </div>
</template>

<script>
import HeaderMain from '~/components/header/Header'
import MenuMain from '~/components/menu/Menu'
import FooterMain from '~/components/footer/Footer'
export default {
  components: {
    HeaderMain,
    MenuMain,
    FooterMain
  }
}
</script>

<style>
body {
  width: 100%;
}
</style>