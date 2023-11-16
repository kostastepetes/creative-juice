<template>
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src="..\assets\Creative_Juice_Logo_8-removebg-preview.png" alt="Logo" width="90" height="70">
      </a>
      <span class="mb-3 mb-md-0">© 2024 Creative Juice. All rights reserved</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-light" href="#"><font-awesome-icon :icon="['fab', 'linkedin']" size="lg" /></a></li>
        <li class="ms-3"><a class="text-light" href="#"><font-awesome-icon :icon="['fab', 'instagram']" size="lg" /></a></li>
    </ul>
  </footer>
</div>
</template>

<script>    
export default {
    name: 'Footer'
  }
</script>

<style scoped>  

</style>