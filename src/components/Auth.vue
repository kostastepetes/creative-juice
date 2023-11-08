<template>
    <div>
      <Register v-if="isSignUp" />
      <Login v-else />
      <button @click="isSignUp = !isSignUp">
        {{
          isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account yet? Sign Up"
        }}
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import Register from "./Register.vue";
  import Login from "./Login.vue";
  
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