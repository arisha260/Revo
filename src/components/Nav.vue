<script setup>
  import IconBasket from "@/components/icons/IconBasket.vue";
</script>

<template>
  <nav class="nav">
    <button class="btn-reset nav__button">
      <IconBasket class="nav__icon"/>
    </button>
    <h2 class="nav__title">TRANG CHỦ</h2>
    <ul class="list-reset nav__list">
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
    padding: 7.5rem 0 0 2.5rem;
    transform: translateX(calc(-100% - 5vw));
    transition: 1s cubic-bezier(.19,0,0,1.01);
    will-change: transform;
    &__button{
      color: var(--light-color);
      position: relative;
      margin-bottom: 7.375rem;
      &::after{
        content: "2";
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        background-color: var(--accent-color);
        z-index: 100;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__list{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 40px;
    }
    &__title{
      font-family: var(--font-family);
      font-weight: var(--fw-700);
      font-size: var(--fs-default);
      color: var(--light-color);
      margin-bottom: 2rem;
    }
    &__link{
      font-family: var(--font-family);
      font-weight: var(--fw-300);
      font-size: var(--fs-default);
      line-height: 150%;
      color: var(--light-gray);
      position: relative;
      &::after{
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background: var(--accent-color);
        transition: .3s;
      }
      &:hover::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background: var(--accent-color);
      }
    }

    &.active-nav{
      transform: translateX(0);
    }
    @media (min-width: 75rem) {
      position: relative;
      transform: translateX(0);
      width: 100%;
      height: 100%;
    }
  }
</style>