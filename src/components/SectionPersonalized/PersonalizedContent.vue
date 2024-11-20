<script setup>
  defineProps({
    src: String,
    title: String,
    description: String,
  })
</script>
<template>
  <li class="personalized__item info">
    <img :src="src" class="info__img" alt="personalized icon">
    <div class="info__content">
      <h4 class="title-4 info__title">{{ title }}</h4>
      <p class="description info__description">{{ description }}</p>
    </div>
  </li>
</template>

<style scoped lang="scss">
  .info{
    margin: 0 auto;
    max-width: 14.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__img{
      margin-bottom: 2.5rem;
    }
    &__content{
      text-align: center;
    }
    &__title{
      margin-bottom: 1.125rem;
    }
  }
</style>