<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

const router = useRouter()
const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <Navbar :session="session"/>

</template>

<style scoped>
</style>
