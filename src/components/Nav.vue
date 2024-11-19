<script setup>
  import IconBasket from "@/components/icons/IconBasket.vue";
</script>

<template>
  <nav class="nav">
    <button class="btn-reset nav__button">
      <IconBasket class="nav__icon"/>
    </button>
    <ul class="list-reset nav__list">
      <li class="nav__item"><a href="#" class="nav__link">TRANG CHỦ</a></li>
      <li class="nav__item"><a href="#" class="nav__link">COFFEE</a></li>
      <li class="nav__item"><a href="#" class="nav__link">PHIN MẠ MÀU</a></li>
      <li class="nav__item"><a href="#" class="nav__link">COMBO PHIN PHÊ</a></li>
      <li class="nav__item"><a href="#" class="nav__link">GIFTSET</a></li>
      <li class="nav__item"><a href="#" class="nav__link">LIÊN HỆ</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  .nav{
    position: absolute;
    top: 0;
    left: 0;
    color: var(--light-color);
    background-color: var(--primary-color);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;
    padding: 80px 0 0 40px;
    transform: translateX(calc(-100% - 5vw));
    transition: 1s cubic-bezier(.66,.44,.27,1);
    will-change: transform;
    &__button{
      color: var(--light-color);
    }
    &__list{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 40px;
    }
    &__link{
      font-family: var(--font-family);
      font-weight: var(--fw-300);
      font-size: var(--fz-medium);
      color: var(--light-color);
    }

    &.active-nav{
      transform: translateX(0);
    }
  }
</style>