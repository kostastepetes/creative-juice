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
      <router-link :to="{ name: 'Chat', params: { username: route.params.username } }" class="btn btn-primary" :class="{ 'new-messages': hasNewMessages }" @click="goToChat">Messages</router-link>
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
import { ref, onMounted, onBeforeUnmount, toRefs, provide, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { supabase } from '../supabase'
import Avatar from '../components/Avatar.vue'
import BackgroundImage from '../components/BackgroundImage.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const route = useRoute();
const router = useRouter();

const username = ref('')
const bio = ref('')
const job = ref('')
const project_url1 = ref('')
const project_url2 = ref('')
const project_url3 = ref('')
const portfolio = ref('')
const avatar_url = ref('')
const background_url = ref('')

const hasNewMessages = ref(false)

const props = defineProps(['session'])
const { session } = toRefs(props)

let stopWatch = null
let messageCheckInterval = null

const checkForNewMessages = async () => {
  if (session.value) {
    const { data: userData, error: userError } = await supabase
      .from('Users')
      .select('username')
      .eq('id', session.value.user.id)
      .single()

    if (userError) {
      console.error('Error: ', userError.message)
      return
    }

    const { data: messagesData, error: messagesError } = await supabase
      .from('Chats')
      .select('id')
      .eq('recipient', userData.username)
      .or('read.eq.false,read.is.null')

    if (messagesError) {
      console.error('Error: ', messagesError.message)
      return
    }

    hasNewMessages.value = messagesData.length > 0
  }
}

onMounted(async () => {
  stopWatch = watch(() => route.params.username, async (newUsername) => {
    username.value = newUsername;
    const { data: userData, error: userError } = await supabase
      .from('Users')
      .select('id')
      .eq('username', username.value)
      .single()

    if (userError) {
      console.error('Error: ', userError.message)
      return
    }

    const { data: profileData, error: profileError } = await supabase
      .from('Profiles')
      .select(`username, bio, job, project_url1, project_url2, project_url3, portfolio, avatar_url, background_url`)
      .eq('id', userData.id)
      .single()

    if (profileError) {
      console.error('Error: ', profileError.message)
      return
    }

    username.value = profileData.username
    bio.value = profileData.bio
    job.value = profileData.job
    project_url1.value = profileData.project_url1
    project_url2.value = profileData.project_url2
    project_url3.value = profileData.project_url3
    portfolio.value = profileData.portfolio
    avatar_url.value = profileData.avatar_url
    background_url.value = profileData.background_url

    // Check if the logged-in user is viewing their own profile
    if (session.value.user.id === userData.id) {
      // Run the checkForNewMessages function and provide the hasNewMessages variable
      messageCheckInterval = setInterval(checkForNewMessages, 2000);
      provide('hasNewMessages', hasNewMessages);
    }
  }, { immediate: true })
})

watch(() => route.params.username, (newUsername) => {
  if (newUsername) {
    messageCheckInterval = setInterval(checkForNewMessages, 2000);
  }
})

onBeforeUnmount(() => {
  if (stopWatch) {
    stopWatch()
  }
  clearInterval(messageCheckInterval);
})

const goToChat = () => {
  hasNewMessages.value = false
  clearInterval(messageCheckInterval)
  nextTick(() => {
    router.push({ name: 'Chat', params: { username: route.params.username } })
  })
}
</script>

<style scoped>
h1 {
  width: fit-content!important;
  margin: auto;
  display: block;
}
.edit-profile-button{
  text-decoration: none;
  color: white;
  background-color: #65524e;
  padding: 0.5em 1em;
  margin: 10px;
  border: solid 1px white;
}
.username-line {
  backdrop-filter: blur(5px);
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

.new-messages {
  background-color: red!important;
}
</style>