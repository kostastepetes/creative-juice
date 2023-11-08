<template>
    <div>
      <h2>Sign up for an account</h2>
      <form @submit.prevent="handleSignup">
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div>
          <button type="submit">Sign up</button>
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

  
      const handleSignup = async () => {
        try {
          // Use the Supabase provided method to handle the signup
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            email_confirm: true,
          });
          if (error) throw error;
          router.push('/account')
        } catch (error) {
          alert(error.error_description || error.message);
        }
      };
  
      return {
        email,
        password,
        handleSignup,
      };
    },
  };
  </script>