<script setup>
// Importing necessary functions from Vue.js and 'supabase' module
import { onMounted, ref } from 'vue'
import { supabase } from './supabase'

// Creating a reactive variable to hold the session data
const session = ref()

// Hook that runs when the component is mounted
onMounted(() => {
  // Fetching the current session from supabase when the component is mounted
  supabase.auth.getSession().then(({ data }) => {
    // Assigning the fetched session data to the reactive session variable
    session.value = data.session
  })

  // Listening for changes in authentication state
  supabase.auth.onAuthStateChange((_, _session) => {
    // Assigning the updated session data to the reactive session variable
    session.value = _session
  })
})
</script>

<template>
  <div>
    <!-- Rendering different router views based on whether session data is available or not -->
    <router-view v-if="session" :session="session" />
    <router-view v-else />
  </div>
</template>
