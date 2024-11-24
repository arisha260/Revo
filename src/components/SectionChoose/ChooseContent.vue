<script setup>
  import Content from "@/components/SectionChoose/ChooseContent.vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  defineProps({
    src: String,
    src2: String,
    cost: String,
    cost2: String,
    title: String,
    title2: String,
    text: String,
    text2: String,
  })
</script>

<template>
  <article class="swiper__item choose-card">
    <div class="choose-card__img-box">
      <img :src="src" alt>
    </div>
    <div class="choose-card__content">
      <span class="cost choose-card__cost">{{ cost }}</span>
      <p class="title-4 choose-card__title">{{ title }}</p>
      <p class="description choose-card__text">{{ text }}</p>
      <div class="choose-card__btns">
        <a href="#" class="button">MUA NGAY</a>
        <a href="#" class="button-2">CHI TIẾT</a>
      </div>
    </div>
  </article>
  <article class="swiper__item choose-card">
    <div class="choose-card__img-box">
      <img :src="src2" alt>
    </div>
    <div class="choose-card__content">
      <span class="cost choose-card__cost">{{ cost2 }}</span>
      <p class="title-4 choose-card__title">{{ title2 }}</p>
      <p class="description choose-card__text">{{ text2 }}</p>
      <div class="choose-card__btns">
        <a href="#" class="button">MUA NGAY</a>
        <a href="#" class="button-2">CHI TIẾT</a>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
  .choose-card{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--light-color);
    box-shadow: 0px 4px 6px -4px rgba(34, 60, 80, 0.2);
    transition: box-shadow .3s;
    @media(hover: hover){
      &:hover{
        box-shadow: 0px 0px 32px 0px rgba(34, 60, 80, 0.2);
      }
    }
    &__img-box{
      background-color: var(--light-gray);
      display: grid;
      place-items: center;
      width: 100%;
      user-select: none;
      @media (min-width: 48rem){
        max-width: 235px;
      }
    }
    &__content{
      padding: 2.625rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      @media (min-width: 48rem){
        text-align: left;
      }
    }
    &__cost{
      margin-bottom: 0.5rem;
    }
    &__title{
      margin-bottom: 1.5rem;
    }
    &__text{
      margin-bottom: 2rem;
    }
    &__btns{
      margin-top: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      @media (min-width: 48rem){
        flex-direction: row;
      }
    }
  }
</style>