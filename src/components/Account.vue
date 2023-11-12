<script setup>
import { supabase } from '../supabase'
import Avatar from './Avatar.vue'
import BackgroundImage from './BackgroundImage.vue';
import { onMounted, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['session'])
const { session } = toRefs(props)

const router = useRouter()

const loading = ref(true)
const username = ref('')
const bio = ref()
const project_url1 = ref('')
const project_url2 = ref('')
const project_url3 = ref('')
const portfolio = ref('')
const job = ref('')
const avatar_url = ref('')
const background_url = ref('')


onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const { data, error, status } = await supabase
      .from('Profiles')
      .select(`username, bio, project_url1, project_url2, project_url3, portfolio, job, avatar_url, background_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      bio.value = data.bio
      project_url1.value = data.project_url1
      project_url2.value = data.project_url2
      project_url3.value = data.project_url3
      portfolio.value = data.portfolio
      job.value = data.job
      avatar_url.value = data.avatar_url
      background_url.value = data.background_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      bio: bio.value,
      project_url1: project_url1.value,
      project_url2: project_url2.value,
      project_url3: project_url3.value,
      portfolio: portfolio.value,
      job: job.value,
      avatar_url: avatar_url.value,
      background_url: background_url.value,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('Profiles').upsert(updates)

    if (error) throw error
   // Redirect to HelloWorld component
    router.push('/hello-world')
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    router.push('/auth')
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />

    <BackgroundImage v-model:path="background_url" @upload="updateProfile" size="10" />
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div> 
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="job">Occupation</label>
      <select id="job" type="text" v-model="job" multiple>
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
    </div>
    <div>
      <label for="bio">Bio</label>
      <textarea id="bio" type="text" v-model="bio" />
    </div>
    <div>
      <label for="project_url1">Project URL 1</label>
      <input id="project_url1" type="url" v-model="project_url1" />
    </div>
    <div>
      <label for="project_url2">Project URL 2</label>
      <input id="project_url2" type="url" v-model="project_url2" />
    </div>
    <div>
      <label for="project_url3">Project URL 3</label>
      <input id="project_url3" type="url" v-model="project_url3" />
    </div>
    <div>
      <label for="portfolio">Portfolio Website URL</label>
      <input id="portfolio" type="url" v-model="portfolio" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>