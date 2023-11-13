<template>
    <div>
      <Register v-if="isSignUp" />
      <Login v-else />
      <div class="text-center">
      <button @click="isSignUp = !isSignUp" class="btn btn-secondary btn-block">
        {{
          isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account yet? Sign Up"
        }}
      </button>
    </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import Register from "../components/Register.vue";
  import Login from "../components/Login.vue";
  
  export default {
    components: { Register, Login },
    setup() {
      const isSignUp = ref(true);
  
      return {
        isSignUp,
      };
    },
  };
  </script>
  
  <style scoped></style>