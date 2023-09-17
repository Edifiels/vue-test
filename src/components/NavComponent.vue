<script setup>
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" @click="$router.push({name: 'home'})">
        Евгений Маркин
      </a>
      <button class="btn btn-outline-light" @click="$router.push({name: 'home'})"  type="button">Главная</button>
    </div>
  </nav>
</template>


<style scoped>
nav {
  background: transparent !important;
  border-bottom: 1px solid #888888;
}

nav a {
  color: #dbdbdb;
  font-weight: 600;
  cursor: pointer;
}

nav a:hover {
  background: transparent !important;
  color: #949494;
}
</style>