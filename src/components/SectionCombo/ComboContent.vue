<script setup>
  defineProps({
    src: String,
    cost: Number,
    costPrevious: Number,
    title: String,
    text: String,
  })
</script>

<template>
  <article class="combo__item">
    <div class="combo__box-img">
      <img :src="src" alt>
    </div>
    <div class="combo__desc">
      <div class="combo__costs">
        <span class="cost combo__cost">{{ cost }}</span>
        <span class="combo__cost-previous">{{ costPrevious }}</span>
      </div>
      <h4 class="title-4 combo__subtitle">{{ title }}</h4>
      <p class="description combo__text">{{ text }}</p>
      <div class="combo__btns">
        <a href="#" class="button">MUA NGAY</a>
        <a href="#" class="button-2">CHI TIẾT</a>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .combo{
    &__item{
      max-width: 330px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: var(--light-color);
      box-shadow: 0px 4px 6px -4px rgba(34, 60, 80, 0.2);
      @media (min-width: 26.5625rem){
        max-width: 360px;
      }
    }
    &__box-img{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--light-gray);
      user-select: none;
    }
    &__desc{
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-grow: 1;
    }
    &__costs{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.7rem;
      gap: 1rem;
    }
    &__cost-previous{
      font-family: var(--font-family);
      font-style: italic;
      font-weight: var(--fw-300);
      font-size: var(--fz-tiny);
      text-decoration: line-through;
      color: var(--primary-color);
    }
    &__subtitle{
      margin-bottom: 0.7rem;
    }
    &__text{
      margin-bottom: 2rem;
    }
    &__btns{
      margin-top: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
</style>