<template>
  <main>
    <div class="p-5 mb-4 bg-body-tertiary bg-body-tertiary-top-margin rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Мини сайт обо мне</h1>
        <p class="col-md-8 fs-4">Краткая история о том почему я решил стать программистом</p>
        <button class="btn btn-primary btn-lg" @click="$router.push({ name: 'my_history' })"
          type="button">Читать!</button>
      </div>
    </div>
    <div class="row align-items-md-stretch">
      <div class="col-md-6 card-items">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Хочешь взглянуть на исходники?</h2>
          <button class="btn btn-outline-light" @click="openGitHubRepo" type="button">Github</button>
        </div>
      </div>
      <div class="col-md-6 card-items">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Посмотреть на мои фотографии</h2>
          <button class="btn btn-outline-light" @click="$router.push({ name: 'my_selfie' })" type="button">Мое
            селфи</button>
          <button class="btn btn-outline-light btn-margin" @click="$router.push({ name: 'my_school_photo' })"
            type="button">Фото со школы</button>
        </div>
      </div>
    </div>
    <div class="row row-margin-top">
      <div class="col-md card-items">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Демо ролик</h2>
          <button class="btn btn-outline-light btn-margin" @click="$router.push({ name: 'my_video', params: { videoSource: 'media/video/demo.mp4' } })" type="button">Нажми на меня и посмотри
            видео!</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    openGitHubRepo() {
      window.open('https://github.com/Edifiels/vue-test', '_blank');
    },
  },
};
</script>

<style>
.bg-body-tertiary {
  background: #2b3035 !important;
  color: #dee2e6;
}

.bg-body-tertiary-top-margin {
  margin-top: 26px;
}

.align-items-md-stretch .card-items .btn-margin {
  margin-left: 8px;
}

.row.row-margin-top {
  margin-top: 26px;
}
</style>