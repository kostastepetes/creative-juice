<template>
    <div>
      <h2 class="text-center m-4">Sign in to your account</h2>
      <form @submit.prevent="handleSignin" class="container">
        <div class="form-group">
          <label for="email">Email:</label>
          <input id="email" type="email" v-model="email" class="form-control"/>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input id="password" type="password" v-model="password" class="form-control"/>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-block m-4">Sign in</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { supabase } from "../supabase";
  import { useRouter } from 'vue-router'

  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
      const router = useRouter()

  
      const handleSignin = async () => {
        try {
          // Use the Supabase provided method to handle the signin
          const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
          });

          
          if (error) throw error;
          router.push('/')
        } catch (error) {
          alert(error.error_description || error.message);
        }
      };
  
      return {
        email,
        password,
        handleSignin,
      };
    },
  };
  </script>