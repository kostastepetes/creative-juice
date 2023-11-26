<template>
    <h1 class="text-center mt-4"> Submit a Place or Event</h1>
    <h5 class="text-center m-4"> By submitting, you can transform your your place or event you are one step closer to create a creative powerhouse. </h5>
    <form @submit.prevent="submitForm" class="p-5" v-if="!submitted">
      <div class="mb-3">
        <label class="form-label">Name:</label>
        <input v-model="location.name" required class="form-control" placeholder="Enter name of the place/event"/>
      </div>
      <div class="mb-3">
        <label class="form-label">Description:</label>
        <input v-model="location.description" required class="form-control" placeholder="A few words about it..."/>
      </div>
      <div class="mb-3">
        <label class="form-label">Contact Info:</label>
        <input v-model="location.contact_info" required class="form-control" placeholder="A social media link would do it..."/>
      </div>
      <div class="mb-3">
        <label class="form-label">Address:</label>
        <input v-model="location.address" required class="form-control"/>
      </div>
      <div class="mb-3">
        <label class="form-label">Image URL:</label>
        <input v-model="location.imageUrl" required class="form-control" placeholder="Paste an image address of your beautiful place/event..."/>
      </div>
      <div class="mb-3">
        <label class="form-label">City:</label>
        <input v-model="location.city" required class="form-control"/>
      </div>
      <div class="mb-3">
        <label class="form-label">Type:</label>
        <select v-model="location.type" required class="form-control">
            <option disabled value="">Please select a type</option>
            <option value="space">Space</option>
            <option value="event">Event</option>
        </select>
    </div>
      <div class="text-center">
      <button type="submit" class="btn btn-primary mt-2">Submit</button>
      </div>
      <div class="text-center">
      <button @click="goBack" class="btn btn-primary mt-4">Go Back</button>
      </div>
    </form>
    <div v-else>
      <h5 class="text-center m-4">Thank you for your submission. After reviewing it, we will make sure to get it featured.</h5>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { supabase } from '../supabase'
  import { useRouter } from 'vue-router'
  
  let location = ref({
    name: '',
    description: '',
    contact_info: '',
    address: '',
    imageUrl: '',
    city: '',
    type: '',
    approved: false
  })

  let submitted = ref(false)
  const router = useRouter()
  
  const submitForm = async () => {
    let { error } = await supabase
      .from('Locations')
      .insert([location.value])
  
    if (error) {
      console.error('Error: ', error.message)
    } else {
      location.value = {
        name: '',
        description: '',
        contact_info: '',
        address: '',
        imageUrl: '',
        city: '',
        type: '',
        approved: false
      }
      submitted.value = true
    }
  }

  const goBack = () => {
  router.go(-1) // Go back to the previous page
}
  </script>