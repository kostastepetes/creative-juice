<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-custom">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="..\assets\Creative_Juice_Logo_8-removebg-preview.png" alt="Logo" width="90" height="70">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link"  href="#">Community</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Discover</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item" v-if="session">
              <a class="nav-link" href="/profile">Profile <font-awesome-icon :icon="['far', 'user']" style="color: #000205;" /></a>
            </li>
            <li class="nav-item" v-if="session">
              <button class="btn btn-primary" @click="signOut">Sign Out <font-awesome-icon :icon="['fas', 'right-from-bracket']" style="color: #ffffff;" /></button>
            </li>
            <li class="nav-item" v-else>
              <a class="nav-link active" href="/auth">Login/Register <font-awesome-icon :icon="['fas', 'right-from-bracket']" style="color: #000000;" /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

export default {
  name: 'Navbar',
  props: ['session'],
  setup() {
    const router = useRouter();
    return {
      signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
          router.push('/auth');
        }
      }
    };
  }
};
  </script>
  
  <style scoped>
  </style>