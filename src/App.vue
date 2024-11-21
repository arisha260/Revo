<script setup>
  import Header from '@/components/Header.vue'
  import Personalized from "@/components/Personalized.vue";
  import Choose from "@/components/Choose.vue";
  import {onMounted} from "vue";
  import {useScrollStore} from "@/stores/Scroll.js";

  const scrollStore = useScrollStore();

  onMounted(() => {
    scrollStore.observeSection();
  })
</script>

<template>
  <div class="page__body">
    <Header />
    <Personalized />
    <Choose />
  </div>
</template>

<style scoped>

</style>
