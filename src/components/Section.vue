<template>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <h1>{{ headerText }}</h1>
          <p class="mt-2">{{ subheaderText }}</p>
          <a href="/auth"> <button class="btn btn-primary btn-lg rounded-pill border-dark border-2 text-black" >{{ctaText}}</button></a>
        </div>
        <div class="col-lg-6">
          <img src="..\assets\Creative_Juice_Logo-removebg-preview.png" class="img-fluid" alt="Responsive image">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Section',
    props: ['headerText', 'subheaderText', 'ctaText']
  }
  </script>
  
  <style scoped>
  </style>