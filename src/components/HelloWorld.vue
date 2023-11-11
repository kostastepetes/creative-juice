<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from 'vue-router'

const router = useRouter()

async function signOut() {
  const { error } = await supabase.auth.signOut();
  router.push('/auth')
}
</script>

<template>

  <div class="card">

    <button @click="signOut">Sign Out</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
