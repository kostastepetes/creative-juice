<template>
  <div v-if="!requestSent">
    <div class="coffee-request container mt-4">
      <h1 class="mb-4 text-center">Coffee Request</h1>
      <h4 class="mb-4 text-center">Fill out the following form and schedule a meetup over coffee with another creative. A coffee request will be send in the chat of the selected person. Wait for their response.</h4>
      <h4 class="mb-4 text-center">Have a great & creative time!</h4>
      <div class="mb-3">
        <label for="user-select" class="form-label">Select User:</label>
        <select id="user-select" v-model="selectedUser" class="form-select">
          <option v-for="user in users" :key="user.id" :value="user">{{ user.username }} - {{ user.job }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="location-select" class="form-label">Select Location:</label>
        <select id="location-select" v-model="selectedLocation" class="form-select">
          <option v-for="location in locations" :key="location.id" :value="location">{{ location.name }} - {{ location.type }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="date-time" class="form-label">Select Date and Time:</label>
        <input id="date-time" type="datetime-local" v-model="selectedDateTime" class="form-control">
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Additional Message:</label>
        <textarea id="message" v-model="additionalMessage" class="form-control"></textarea>
      </div>
      <div class="text-center mt-2">
      <button @click="sendRequest" class="btn btn-primary">Send Request</button>
      </div>
      <div class="text-center mt-4">
      <button @click="goBack" class="btn btn-primary mb-4">Go Back</button> 
    </div>
    </div>
  </div>
  <div v-else>
    <h4 class="mb-4 text-center mt-5">Your coffee request has been sent, hold tight and keep an eye on your Messages for a response!</h4>
    <div class="text-center mt-4">
      <button @click="goBack" class="btn btn-primary mb-4">Go Back</button> 
    </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted, toRefs } from 'vue';
import { supabase } from '../supabase';
import { useRouter } from 'vue-router'

const users = ref([]);
const locations = ref([]);
const selectedUser = ref(null);
const selectedLocation = ref(null);
const selectedDateTime = ref(null);
const additionalMessage = ref('');

const props = defineProps(['session'])
const { session } = toRefs(props)

const router = useRouter()

const requestSent = ref(false);

const goBack = () => {
  router.go(-1) // Go back to the previous page
}

onMounted(async () => {
  let { data: userData, error: userError } = await supabase
    .from('Profiles')
    .select('username, avatar_url, job, portfolio, project_url1, project_url2, project_url3')

  if (userError) {
    console.error('Error: ', userError.message);
    return;
  }

  users.value = userData;

  let { data: locationData, error: locationError } = await supabase
    .from('Locations')
    .select('name, description, contact_info, address, imageUrl, city, type')
    .eq('approved', true);

  if (locationError) {
    console.error('Error: ', locationError.message);
    return;
  }

  locations.value = locationData;
});

const getUsername = async (id) => {
  let { data, error } = await supabase
    .from('Users')
    .select('username')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error: ', error.message)
    return
  }

  return data.username
}

const sendRequest = async () => {

let sender = await getUsername(session.value.user.id)
  // Generate the chat message
  const chatMessage = `[AUTO-GENERATED] Coffee Request: The user ${sender} wants to meetup over coffee at ${selectedLocation.value.name} on ${selectedDateTime.value}. Please visit their profile and respond to them as soon as possible. Additional message: ${additionalMessage.value}`;

  // Send the chat message to the selected user
  let { error } = await supabase
    .from('Chats')
    .insert([{ message: chatMessage, sender: sender, recipient: selectedUser.value.username, timestamp: new Date().toISOString() }]);

  if (error) {
    console.error('Error: ', error.message);
  }

    // Write the coffee request to the "Coffee Requests" table
  let { error: coffeeRequestError } = await supabase
    .from('Coffee Requests')
    .insert([{ message: chatMessage, sender: sender, receiver: selectedUser.value.username, location: selectedLocation.value.name }]);

  if (coffeeRequestError) {
    console.error('Error: ', coffeeRequestError.message);
  }

    if (!error) {
    requestSent.value = true;
  }
};

</script>
  
  <style scoped>
  /* Add your styles here */
  </style>