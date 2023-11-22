<template>
  <Navbar :session="session"/>
  <div class="profile-container">
    <div class="background-image">
      <BackgroundImage :path="background_url" size="20" :hideUpload="true"/>
    </div>
    <div class="avatar-container text-center">
      <Avatar :path="avatar_url" size="10" :hideUpload="true"/>
      <h1 class="username-line mt-5 mb-4">{{ username }}</h1>
    </div>

    <div class="info-container m-4">
      <div class="card m-2">
        <div class="card-body">
          <h5 class="card-title">Bio</h5>
          <p class="card-text">{{ bio }}</p>
        </div>
      </div>

      <div class="card m-2">
        <div class="card-body">
          <h5 class="card-title">Job</h5>
          <p class="card-text">{{ job }}</p>
        </div>
      </div>

      <div class="card m-2">
          <div class="card-body">
            <h5 class="card-title">Project 1</h5>
            <a :href="project_url1" class="card-link">{{ project_url1 }}</a>
          </div>
      </div>

      <div class="card m-2">
          <div class="card-body">
            <h5 class="card-title">Project 2</h5>
            <a :href="project_url1" class="card-link">{{ project_url2 }}</a>
          </div>
      </div>

      <div class="card m-2">
          <div class="card-body">
            <h5 class="card-title">Project 3</h5>
            <a :href="project_url1" class="card-link">{{ project_url3 }}</a>
          </div>
      </div>

      <div class="card m-2">
          <div class="card-body">
            <h5 class="card-title">Portfolio</h5>
            <a :href="portfolio" class="card-link">{{ portfolio }}</a>
          </div>
      </div>

    </div>
  </div>

  <Footer/>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router';
import { supabase } from '../supabase'
import Avatar from '../components/Avatar.vue'
import BackgroundImage from '../components/BackgroundImage.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const username = ref('')
const bio = ref('')
const job = ref('')
const project_url1 = ref('')
const project_url2 = ref('')
const project_url3 = ref('')
const portfolio = ref('')
const avatar_url = ref('')
const background_url = ref('')

const props = defineProps(['session'])
const { session } = toRefs(props)

let stopwatch = null

onMounted(async () => {
  //const { user } = session.value

  const route = useRoute();
  stopWatch = watch(() => route.params.username, async (newUsername) => {
  username.value = newUsername;

   // Fetch the user's ID using the username
    const { data: userData, error: userError } = await supabase
      .from('Users')
      .select('id')
      .eq('username', username.value)
      .single()

    if (userError) {
      console.error('Error: ', userError.message)
      return
    }

   // Fetch the profile data using the user's ID
 const { data: profileData, error: profileError } = await supabase
   .from('Profiles')
   .select(`username, bio, job, project_url1, project_url2, project_url3, portfolio, avatar_url, background_url`)
   .eq('id', userData.id)
   .single()

 if (profileError) {
   console.error('Error: ', profileError.message)
   return
 }

 // Assign the profile data to the reactive variables
 username.value = profileData.username
 bio.value = profileData.bio
 job.value = profileData.job
 project_url1.value = profileData.project_url1
 project_url2.value = profileData.project_url2
 project_url3.value = profileData.project_url3
 portfolio.value = profileData.portfolio
 avatar_url.value = profileData.avatar_url
 background_url.value = profileData.background_url
}, { immediate: true })
})

onBeforeUnmount(() => {
  if (stopWatch) {
    stopWatch()
  }
})

const handleClick = (preview) => {
  console.log(
    "click",
    preview.domain,
    preview.title,
    preview.description,
    preview.img
  );
}
</script>

<style scoped>

.edit-profile-button{
  text-decoration: none;
  color: white;
  background-color: #65524e;
  padding: 0.5em 1em;
  margin: 10px;
  border: solid 1px white;
}
.username-line {
  background-color: #e19394;
}
.profile-container {
position: relative;
}
.background-image{
position: absolute!important;
top: 0!important;
left: 0!important;
width: 100%!important;
height: 20em!important;
}

.avatar-container {
position: relative;
z-index: 1;
}

.info-container {
position: relative;
z-index: 1;
}
</style>