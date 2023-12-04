<template>
    <Navbar :session="session"/>
    <div class="container py-4">
      <div class="row mt-4 mb-4">
        <div class="col-lg-6" ref="col1">
          <img src="..\assets\Creative_Juice_Logo_4-removebg-preview.png" class="img-fluid" alt="Responsive image">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center" ref="col2">
          <h1>Our Vision</h1>
          <p class="mt-2">Our vision is to create a community of creative people and enable an idea-sharing and knowledge exchange environment where different creatives can network with each other online or face-to-face over coffee.</p>
        </div>
      </div>
      <div class="row mt-4 mb-4">
        <div class="col-lg-6 d-flex flex-column justify-content-center"  ref="col3">
          <h1>Creative Networking</h1>
          <p class="mt-2">Our members gain the ability to feel accepted and a valuable part of a broad community. They create strong relationships with like-minded people and find new mentors or collaborators.</p>
        </div>
        <div class="col-lg-6"  ref="col4">
          <img src="..\assets\undraw_conversation_re_c26v.svg" class="img-fluid" alt="Responsive image">
        </div>
      </div>
      <div class="row mt-4 mb-4">
        <div class="col-lg-6"  ref="col5">
          <img src="..\assets\undraw_hang_out_re_udl4.svg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center" ref="col6">
          <h1>Knowledge Transfer</h1>
          <p class="mt-2">Our members will be able to participate into an unlimited transfer of a wide variety of info and tips and become a link into a stable chain of knowledge and inspiration.</p>
        </div>
      </div>
    </div>

    <Footer/>
  </template>
  
  <script>
  import { onMounted, ref, nextTick } from "vue";
  import { supabase } from "../supabase";
  import { gsap } from "gsap";
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
   name: 'About',
   components: { Navbar, Footer },
   setup() {
    const session = ref(null);
    const col1 = ref(null);
    const col2 = ref(null);
    const col3 = ref(null);
    const col4 = ref(null);
    const col5 = ref(null);
    const col6 = ref(null);
  
     onMounted(() => {
       supabase.auth.getSession().then(({ data }) => {
         session.value = data.session;
       });
  
       supabase.auth.onAuthStateChange((_, _session) => {
         session.value = _session;
       });

       nextTick().then(() => {
      gsap.from(col1.value, { x: "-100%", duration: 1 });
      gsap.from(col2.value, { x: "100%", duration: 1 });
      gsap.from(col3.value, { x: "-100%", duration: 1 });
      gsap.from(col4.value, { x: "100%", duration: 1 });
      gsap.from(col5.value, { x: "-100%", duration: 1 });
      gsap.from(col6.value, { x: "100%", duration: 1 });
      });
    });
  
    return { session, col1, col2, col3, col4, col5, col6 };
   },
  };
  </script>
  
  <style scoped>
  </style>