<template>
    <Navbar :session="session"/>
    <div class="container py-4">
      <div class="row mt-4 mb-4">
        <div class="col-lg-6">
          <img src="..\assets\Creative_Juice_Logo_4-removebg-preview.png" class="img-fluid" alt="Responsive image">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <h1>Our Vision</h1>
          <p class="mt-2">Our vision is to create a community of creative people and enable an idea-sharing and knowledge exchange environment where different creatives can network with each other online or face-to-face over coffee.</p>
        </div>
      </div>
      <div class="row mt-4 mb-4">
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <h1>Creative Networking</h1>
          <p class="mt-2">Our members gain the ability to feel accepted and a valuable part of a broad community. They create strong relationships with like-minded people and find new mentors or collaborators.</p>
        </div>
        <div class="col-lg-6">
          <img src="..\assets\undraw_conversation_re_c26v.svg" class="img-fluid" alt="Responsive image">
        </div>
      </div>
      <div class="row mt-4 mb-4">
        <div class="col-lg-6">
          <img src="..\assets\undraw_hang_out_re_udl4.svg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <h1>Knowledge Transfer</h1>
          <p class="mt-2">Our members will be able to participate into an unlimited transfer of a wide variety of info and tips and become a link into a stable chain of knowledge and inspiration.</p>
        </div>
      </div>
    </div>

    <Footer/>
  </template>
  
  <script>
  import { onMounted, ref } from "vue";
  import { supabase } from "../supabase";
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
   name: 'About',
   components: { Navbar, Footer },
   setup() {
     const session = ref(null);
  
     onMounted(() => {
       supabase.auth.getSession().then(({ data }) => {
         session.value = data.session;
       });
  
       supabase.auth.onAuthStateChange((_, _session) => {
         session.value = _session;
       });
     });
  
     return { session };
   },
  };
  </script>
  
  <style scoped>
  </style>