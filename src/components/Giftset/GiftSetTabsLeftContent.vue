<script setup>
  import Seed from "@/components/icons/IconSeed.vue";
  import Mount from "@/components/icons/IconMount.vue";

  defineProps({
    src: String,
    cost: Number,
    title: String,
    text: String,
    seed: String,
    height: String,
    imgClass: String,
  })
</script>

<template>
  <div class="tabs__left-content">
    <img class="tabs__img" :class="imgClass" :src="src" alt>
    <article class="tabs__content">
      <span class="cost tabs__cost">{{ cost }}</span>
      <h4 class="title-4 tabs__title">{{ title }}</h4>
      <p class="description tabs__text">{{ text }}</p>
      <div class="tabs__descr">


        <div class="tabs__data">
          <div class="tabs__data-img">
            <Seed />
          </div>
          <div class="tabs__data-desc">
            <span class="description tabs__data-item">Loại hạt</span>
            <span class="description tabs__data-info">{{ seed }}</span>
          </div>
        </div>


        <div class="tabs__data">
          <div class="tabs__data-img">
            <Mount />
          </div>
          <div class="tabs__data-desc">
            <span class="description tabs__data-item">Loại hạt</span>
            <span class="description tabs__data-info">{{ height }}</span>
          </div>
        </div>
      </div>
      <div class="tabs__btns">
        <a href="#" class="button">MUA NGAY</a>
        <a href="#" class="button-2">CHI TIẾT</a>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
  .tabs{
    &__left-content{
      display: none;
    }
    &__left-content.active{
      padding: 3rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--light-gray);
      background-color: var(--light-color);
      box-shadow: 1px 0 10px 0 rgba(205, 205, 205, 0.5);
      position: relative;
      @media (min-width: 75rem){
        min-height: 492px;
        flex-direction: row;
        padding: 4rem;
      }
    }
    &__img{
      @media (min-width: 75rem){
        position: absolute;
        top: 57%;
        left: -30%;
        transform: translateY(-50%);
        width: 463px;
        height: 409px;
      }
    }
    &__img--blue{
      filter: hue-rotate(112deg) saturate(50%);
    }
    &__img--green{
      filter: hue-rotate(177deg);
    }
    &__content{
      padding: 0 1.5rem;
      @media (min-width: 75rem){
        max-width: 430px;
        margin-left: 220px;
        padding: 0;
      }
    }
    &__cost{
      margin-bottom: 0.8rem;
    }
    &__title{
      margin-bottom: 0.8rem;
    }
    &__text{
      margin-bottom: 1.6rem;
    }
    &__descr{
      margin-bottom: 2.6rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      @media (min-width: 64rem){
        flex-direction: row;
        gap: 3rem;
      }
    }
    &__data{
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    &__data-info{
      font-weight: var(--fw-600);
    }
    &__data-item{
      display: flex;
    }
    &__btns{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      @media (min-width: 64rem){
        flex-direction: row;
        align-items: center;
        gap: 7.75rem;
      }
    }
  }
</style>