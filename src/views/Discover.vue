<template>
    <Navbar :session="session"/>
    <div class="container mt-4">
      <select id="type" v-model="type" class="form-select">
        <option value="" disabled>Select the location that applies to you</option>
        <option value="All">All</option>
        <option value="space">Creative Space</option>
        <option value="event">Events</option>
      </select>
      <div class="row mt-4">
        <div v-for="location in filteredLocations" :key="location.id" class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <img :src="location.imageUrl" height="300"/>
            <div class="card-body">
              <h5 class="card-title">{{ location.name }}</h5>
              <p class="card-text">{{ location.description }}</p>
              <p class="card-text bg-custom rounded-pill p-2">{{ location.address }}</p>
              <p class="card-text bg-custom rounded-pill p-2">{{ location.city }}</p>
              <p class="card-text bg-custom rounded-pill p-2">{{ location.type }}</p>
              <p class="card-text bg-primary rounded-pill p-2"><a :href="location.contact_info" target="_blank">Check it out</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue'
  import { supabase } from '../supabase'
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  
  let locations = ref([])
  let type = ref('')
  
  const session = ref(null);
  
  onMounted(async () => {
    let { data, error } = await supabase
      .from('Locations')
      .select('name, description, contact_info, address, imageUrl, city, type')
  
    if (error) {
      console.error('Error: ', error.message)
      return
    }
  
    locations.value = data
    console.log("Locations: ", locations.value);
  })
  
  onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
      session.value = data.session;
    });
  
    supabase.auth.onAuthStateChange((_, _session) => {
      session.value = _session;
    });
  });
  
  let filteredLocations = computed(() => {
  return locations.value.filter(location => 
    (type.value === 'All' || type.value === '' || (location.type && location.type.toLowerCase() === type.value.toLowerCase()))
  )
})
  </script>
  
  <style scoped>
a {
    text-decoration: none !important;
    color: white !important;
}
a:hover {
  filter: brightness(70%)!important; /* You can adjust the percentage to control the darkness on hover */
}  </style>