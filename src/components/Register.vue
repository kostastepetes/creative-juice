<template>
  <div>
    <h2 class="text-center m-4">Sign up for an account</h2>
    <form @submit.prevent="handleSignup" class="container">
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" class="form-control"/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" class="form-control"/>
      </div>
      <div class="form-group" style="display: none;">
        <label for="honeypot">Honeypot:</label>
        <input id="honeypot" type="text" v-model="honeypot" class="form-control"/>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary btn-block m-4">Sign up</button>
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
    const honeypot = ref("");
    const router = useRouter()

    const handleSignup = async () => {
      if (honeypot.value) {
        console.log('Bot detected');
        return;
      }
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
      honeypot,
      handleSignup,
    };
  },
};
</script>