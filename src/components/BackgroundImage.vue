<script setup>
import { ref, toRefs, watch } from 'vue'
import { supabase } from '../supabase'

const prop = defineProps(['path', 'size', 'hideUpload',])
const { path, size, hideUpload } = toRefs(prop)

const emit = defineEmits(['upload', 'update:path'])
const uploading = ref(false)
const src = ref('')
const files = ref()

const downloadImage = async () => {
  try {
    if (!path.value) {
      console.log('No path provided for image');
      return;
    }
    const { data, error } = await supabase.storage.from('public/background_images').download(path.value)
    if (error) throw error
    src.value = URL.createObjectURL(data)
  } catch (error) {
    console.error('Error downloading image: ', error.message)
  }
}

const uploadbackgroundImage = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true
    if (!files.value || files.value.length === 0) {
      throw new Error('You must select an image to upload.')
    }

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const filePath = `${Math.random()}.${fileExt}`

    const { error: uploadError } = await supabase.storage.from('background_images').upload(filePath, file)

    if (uploadError) throw uploadError
    emit('update:path', filePath)
    emit('upload')
  } catch (error) {
    alert(error.message)
  } finally {
    uploading.value = false
  }
}

watch(path, () => {
  if (path.value) downloadImage()
})
</script>

<template>
  <div class="text-center">
    <img
      v-if="src"
      :src="src"
      alt="background_image"
      class="background-image image"
      :style="{ height: size + 'em', width: 100 + '%', objectFit: 'cover' }"
    />
    <div v-else class="background-image no-image" :style="{ height: size + 'em', width: 100 + '%', objectFit: 'cover' }" />

    <div v-if="!hideUpload" :style="{ width: size + 'em' }">
      <label class="button primary block" for="single-background-image">
        {{ uploading ? 'Uploading ...' : 'Upload Background:' }}
      </label>
      <input
        style="visibility: hidden; position: absolute"
        type="file"
        id="single-background-image"
        accept="image/*"
        @change="uploadbackgroundImage"
        :disabled="uploading"
      />
    </div>
  </div>
</template>