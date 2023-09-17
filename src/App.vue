<script setup>
// import { RouterLink } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
// import HomeView from '../views/HomeView.vue'

</script>

<template>
  
  <NavComponent />

  <router-view/>
  
  <FooterComponent />

</template>

<style scoped>


</style>
