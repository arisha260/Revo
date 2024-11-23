<script setup>
  import Burger from "@/components/Burger/Burger.vue";
  import Nav from "@/components/Nav.vue";
  import Video from "@/components/Video/Video.vue";
  import {ref} from "vue";

  const activeBurger = ref(false);
  const activeNav = ref(false);
  const activeLogo = ref(false);

  const toggleActive = () => {
    activeBurger.value = !activeBurger.value;
    activeNav.value = !activeNav.value;
    activeLogo.value = !activeLogo.value;
    if (activeBurger.value) {
      document.body.classList.add("active");
    } else{
      document.body.classList.remove("active");
    }
  }
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__row header__row--left">


        <div class="header__column">
          <div class="header__logo" :class="{ 'active-logo': activeLogo }">
            <img src="/revo_logo.svg" alt="site logo">
          </div>
          <Burger class="header__burger" @click="toggleActive" :class="{ 'active-burger': activeBurger }"/>
        </div>

        <h1 class="title header__title">
          <span class="title header__title-item animated">YOUR</span>
          <span class="title header__title-item header__title-item--background animated active">PERSONALIZED</span>
          <span class="title header__title-item animated">COFFEE</span>
        </h1>
      </div>
      <div class="header__row header__row--center">
        <Video />
      </div>
      <div class="header__row header__row--right">
        <Nav :class="{ 'active-nav': activeNav }"/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header{
    @media (min-width: 75rem) {
      background-image: linear-gradient(90deg, #f9fbff 50%, var(--primary-color) 50%);
    }
    &__container{
      isolation: isolate;
      @media (min-width: 75rem) {
        display: flex;
        flex-direction: row;
      }
    }
    &__container>:not(:last-child){
      margin-bottom: 5rem;
      @media (min-width: 75rem) {
        margin-bottom: 0;
      }
    }
    &__row--left{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 15px 15px 0;
      flex-basis: 435px;
      @media (min-width: 75rem) {
        padding: 4.5rem 0 0 8.125rem;
        position: relative;
      }
    }
    &__column{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      @media (min-width: 75rem) {
        display: block;
      }
    }
    &__logo{
      transition: filter 1s;
    }
    &__logo.active-logo{
      z-index: 11;
      filter: invert(1);
    }
    &__burger{
      @media (min-width: 75rem) {
        display: none;
      }
    }
    &__title{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
      transition: .3s;
      &-item--background.active{
        background: var(--accent-color);
        color: var(--light-color);
        padding-inline: 15px;
        margin-left: -15px;
      }
      &-item--background{
        transition: background .5s, color .5s;
      }
      @media (min-width: 75rem) {
        position: absolute;
        bottom: 6.4rem;
        left: 8rem;
      }
    }
    &__row--center{
      z-index: -1;
      flex-basis: 690px;
    }
    &__row--right{
      flex-basis: 275px;
    }
  }
</style>