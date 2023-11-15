<template>
    <div v-if="session">
    </div>
    <div class="container-fluid bg-custom py-3 mb-2" v-else>
      <div class="row m-0 justify-content-center ">
        <div class="col-sm-8 col-md-6 d-flex align-items-center justify-content-center">
          <p class="mb-0 me-3 text-black">{{ infoText }}</p>
          <a :href="url"><button class="btn btn-primary btn-lg rounded-pill border-dark border-2 text-black">{{ ctaText }}</button></a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfoBar',
    props: ['session', 'infoText', 'ctaText', 'url']
  }
  </script>
  
  <style scoped>
  </style>