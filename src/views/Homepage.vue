<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Section from '../components/Section.vue'
import Infobar from '../components/Infobar.vue'
import About from '../views/About.vue'

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
  <Section headerText="Join the Creative Juice Community" subheaderText="Connect with creative people online or face-to-face over coffee." ctaText="Join"/>
  <Infobar :session="session" infoText="We're live in Patras, Greece" ctaText="Join our Beta"  url="/auth"/>
  <Infobar :session="session" infoText="Live somewhere else?" ctaText="Join the Waitlist" url="#" />
  <About/>


</template>

<style scoped>
</style>
