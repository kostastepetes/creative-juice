<template>
    <div class="chat card mt-4">
    <h2 class="text-center mt-4">Chat with {{ username }}</h2>
      <div class="card-body">
        <div class="messages">
          <div v-for="message in messages" :key="message.id" class="message mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><strong>{{ message.username }}</strong></h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ new Date(message.timestamp).toLocaleString() }}</h6>
                <p class="card-text">{{ message.message }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <input v-model="newMessage" @keyup.enter="sendMessage" class="form-control" placeholder="Type a message..." />
      </div>
      <button @click="goBack" class="btn btn-primary mt-2">Go Back</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, toRefs } from 'vue'
  import { supabase } from '../supabase'
  import { useRoute, useRouter } from 'vue-router'
  
  let messages = ref([])
  let newMessage = ref('')
  
  const route = useRoute()
  const router = useRouter()
  const { username } = toRefs(route.params)
  
  const props = defineProps(['session'])
  const { session } = toRefs(props)

  const goBack = () => {
  router.go(-1) // Go back to the previous page
}
  
  onMounted(async () => {
    let { data, error } = await supabase
      .from('Chats')
      .select('*')
      .eq('recipient', username.value)
      .order('id', { ascending: false })
  
    if (error) {
      console.error('Error: ', error.message)
      return
    }
  
    messages.value = data
  
    supabase
      .channel('Chats')
      .on('INSERT', payload => {
        if (payload.new.recipient === username.value) {
          messages.value.unshift(payload.new)
        }
      })
      .subscribe()
  })
  
  const sendMessage = async () => {
    if (newMessage.value.trim() === '') {
      return
    }
  
    let { error } = await supabase
      .from('Chats')
      .insert([{ message: newMessage.value, username: session.value.user.email, recipient: username.value }])
  
    if (error) {
      console.error('Error: ', error.message)
    }
  
    newMessage.value = ''
  }
  
  onUnmounted(() => {
    supabase.removeChannel('Chats')
  })
  </script>
  
  <style scoped>
  .chat {
    max-width: 600px;
    margin: auto;
  }
  
  .messages {
    height: 400px;
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse; /* This will make the last message show up underneath the previous one */
  }
  
  .message {
    width: 100%;
  }
  </style>