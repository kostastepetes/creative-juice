<template>
    <div v-if="!formSubmitted">
      <div class="waitlist-form container mt-4">
        <h1 class="mb-4 text-center">Join the Waitlist</h1>
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input id="name" v-model="name" class="form-control">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input id="email" type="email" v-model="email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="city" class="form-label">City:</label>
          <input id="city" v-model="city" class="form-control">
        </div>
        <div class="text-center mt-2">
          <button @click="submitForm" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="mb-4 text-center mt-5">You've successfully entered the Waitlist! We will let you know when Creative Juice finally becomes available in your area!</h4>
    </div>
    <div class="text-center mt-4">
      <button @click="goBack" class="btn btn-primary mb-4">Go Back</button> 
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { supabase } from '../supabase';
  import { useRouter } from 'vue-router'
  
  const name = ref('');
  const email = ref('');
  const city = ref('');
  const formSubmitted = ref(false);

  const router = useRouter()

  const goBack = () => {
  router.go(-1) // Go back to the previous page
}
  
  const submitForm = async () => {
    let { error } = await supabase
      .from('Waitlist')
      .insert([{ name: name.value, email: email.value, city: city.value }]);
  
    if (error) {
      console.error('Error: ', error.message);
    } else {
      formSubmitted.value = true;
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>