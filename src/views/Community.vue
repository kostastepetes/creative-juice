<template>
    <Navbar :session="session"/>
    <div class="container">
      <button class="btn btn-primary mt-4" @click="goToCoffeeRequest">Request a Meetup over Coffee</button>
      <input v-model="search" type="text" placeholder="Search profiles..." class="form-control my-3">
      <label for="job">Occupation:</label>
      <select id="job" v-model="job" class="form-select">
        <option value="" disabled>Select the title that applies to you</option>
        <option value="3D Art">3D Art</option>
        <option value="Game Design">Game Design</option>
        <option value="Acting">Acting</option>
        <option value="Illustration">Illustration</option>
        <option value="Animation">Animation</option>
        <option value="Interior Design">Interior Design</option>
        <option value="Architecture">Architecture</option>
        <option value="Modeling">Modeling</option>
        <option value="Art/Creative Director">Art/Creative Director</option>
        <option value="Music/Audio">Music/Audio</option>
        <option value="Brand Strategist">Brand Strategist</option>
        <option value="Painting">Painting</option>
        <option value="Brand/Graphic Design">Brand/Graphic Design</option>
        <option value="Photography">Photography</option>
        <option value="Creative Code">Creative Code</option>
        <option value="Product Design">Product Design</option>
        <option value="Creative Writing">Creative Writing</option>
        <option value="Sculpting">Sculpting</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Set Design">Set Design</option>
        <option value="Events">Events</option>
        <option value="Typography">Typography</option>
        <option value="Experiences">Experiences</option>
        <option value="Videography">Videography</option>
        <option value="Fashion Design">Fashion Design</option>
        <option value="Video Editing">Video Editing</option>
        <option value="Film">Film</option>
        <option value="Web/App Development">Web/App Development</option>
        <option value="Furniture Design">Furniture Design</option>
        <option value="Other">Other</option>
      </select>
      <div class="row mt-4">
        <div v-for="profile in filteredProfiles" :key="profile.id" class="col-lg-4 col-md-6 mb-4">
            <router-link :to="`/${profile.username}`">
          <div class="card h-100">
            <img :src="profile.avatar_url" height="300"/>
            <div class="card-body">
              <h5 class="card-title">{{ profile.username }}</h5>
              <p class="card-text">{{ profile.job }}</p>
            </div>
          </div>
        </router-link>
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
  import { useRouter } from 'vue-router';
  
  let profiles = ref([])
  let search = ref('')
  let job = ref('')
  let src = ref(null)

  const router = useRouter();

  const session = ref(null);
  
onMounted(async () => {
 let { data, error } = await supabase
   .from('Profiles')
   .select('username, job, avatar_url')
 
 if (error) {
   console.error('Error: ', error.message)
   return
 }

 profiles.value = data
 console.log(profiles.value)
 
 // Download the avatar image for each profile
 for (const profile of profiles.value) {
   profile.avatar_url = await downloadImage(profile)
 }
})

  onMounted(() => {
       supabase.auth.getSession().then(({ data }) => {
         session.value = data.session;
       });
  
       supabase.auth.onAuthStateChange((_, _session) => {
         session.value = _session;
       });
     });
  
  let filteredProfiles = computed(() => {
  return profiles.value.filter(profile => 
    (search.value === '' || (profile.username && profile.username.toLowerCase().includes(search.value.toLowerCase()))) &&
    (job.value === '' || (profile.job && profile.job.toLowerCase() === job.value.toLowerCase()))
  )
})

const downloadImage = async (profile) => {
 try {
   const bucketName = 'avatars'; // replace with your bucket name
   const filePath = profile.avatar_url;
   const fullPath = `${bucketName}/${filePath}`;

   console.log('fullPath:', fullPath) // add this line
   const { data, error } = supabase.storage.from('avatars').getPublicUrl(filePath)
   console.log('publicURL:', data.publicUrl) // add this line
   console.log('error:', error) // add this line
   if (error) throw error
   return data.publicUrl// use data.publicUrl instead of publicURL
 } catch (error) {
   console.error('Error getting image URL: ', error.message)
 }
}

const goToCoffeeRequest = () => {
      router.push({ name: 'CoffeeRequest' });
    };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>