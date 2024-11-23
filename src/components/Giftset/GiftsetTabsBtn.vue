<script setup>
  defineProps({
    num: Number, // Номер кнопки
    isActive: Boolean, // Активна ли кнопка
    onClick: Function, // Функция для обновления активного таба
  });
</script>

<template>
  <button
      @click="onClick(num)"
      class="btn-reset tabs__btn"
      :class="{ active: isActive }">
    <span class="content-subtitle tabs__num">{{ num }}</span>
  </button>
</template>

<style lang="scss">
  .tabs{
    &__btn{
      padding: 1.5rem;
      background: var(--light-gray);
      box-shadow: 1px 0 10px 0 rgba(205, 205, 205, 0.5);
      transition: .3s;
      @media (min-width: 64rem){
        padding: 4.0625rem 2.25rem;
      }
    }
    &__btn.active{
      background: var(--light-color);
    }
    &__btn.active &__num{
      opacity: 1;
    }
    &__num{
      opacity: 0.3;
    }
  }
</style>