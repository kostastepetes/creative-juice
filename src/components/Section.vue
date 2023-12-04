<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-6 d-flex flex-column justify-content-center" ref="col1">
        <h1>{{ headerText }}</h1>
        <p class="mt-2">{{ subheaderText }}</p>
        <a href="/auth"> <button class="btn btn-primary btn-lg rounded-pill border-dark border-2 text-black" >{{ctaText}}</button></a>
      </div>
      <div class="col-lg-6" ref="col2">
        <img src="..\assets\Creative_Juice_Logo-removebg-preview.png" class="img-fluid" alt="Responsive image">
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, nextTick } from "vue";
import { gsap } from "gsap";

export default {
  name: 'Section',
  props: ['headerText', 'subheaderText', 'ctaText'],
  setup() {
    const col1 = ref(null);
    const col2 = ref(null);

    onMounted(async () => {
      await nextTick();  // wait for the next DOM update cycle

      gsap.from(col1.value, { x: "-100%", duration: 1 });
      gsap.from(col2.value, { x: "100%", duration: 1 });
    });

    return { col1, col2 };
  },
};
</script>

<style scoped>
</style>