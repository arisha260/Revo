<script setup>
  import Content from "@/components/SectionChoose/ChooseContent.vue";
  import Arrow from "@/components/icons/IconArrow.vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination } from 'swiper/modules';
</script>

<template>
  <section class="choose">
    <div class="container choose__container section container-hidden">
      <h2 class="content-title personalized__title">Choose Your Favorite</h2>
      <h3 class="content-subtitle personalized__subtitle">CHUẨN GU ĐÚNG VỊ</h3>
      <Swiper class="choose__swiper swiper"
              :modules="[Navigation, Pagination]"
              :slides-per-view="'auto'"
              :loop="true"
              :space-between="30"
              :navigation="{
                nextEl: '.swiper__btn--next',
               }"
              :pagination="{ clickable: true }"
              >
        <swiper-slide class="swiper__slide">
          <Content src="/choose1.png" src2="/choose2.png" cost="99.000" cost2="139.000" title="REVO Morning" title2="REVO Origin" text="đắng, hậu ngọt, hương hoa" text2="hậu ngọt, ít đắng, vị chua dâu"/>
        </swiper-slide>

        <swiper-slide class="swiper__slide">
          <Content src="/choose3.png" src2="/choose4.png" cost="85.000" cost2="75.000" title="REVO Everyday" title2="REVO Đậm Đà" text="cân bằng, hậu đắng, vị chocolate " text2="đậm đà, đắng, truyền thống"/>
        </swiper-slide>

        <swiper-slide class="swiper__slide">
          <Content src="/choose5.png" src2="/choose6.png" cost="99.000" cost2="139.000" title="REVO Morning" title2="REVO Origin" text="đắng, hậu ngọt, hương hoa" text2="hậu ngọt, ít đắng, vị chua dâu"/>
        </swiper-slide>

        <swiper-slide class="swiper__slide">
          <Content src="/choose3.png" src2="/choose4.png" cost="85.000" cost2="75.000" title="REVO Everyday" title2="REVO Đậm Đà" text="cân bằng, hậu đắng, vị chocolate " text2="đậm đà, đắng, truyền thống"/>
        </swiper-slide>
        <button class="btn-reset swiper__btn swiper__btn--next"><Arrow /></button>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
  .choose {
    padding: 2.6rem 0 1.6rem;
    @media (min-width: 37.5rem) {
      padding: 5.4375rem 0 8rem;
    }
    @media (min-width: 48rem){
      background: linear-gradient(to right, var(--primary-color) 25%, var(--light-color) 25%);
    }
    &__container {
      isolation: isolate;
    }
  }

  .swiper{
    margin: 0 auto;
    width: 100%;
    max-width: 90%;
    position: relative;
    isolation: isolate;
    @media (min-width: 37.5rem){
      padding: 1.8rem;
      &::after {
        content: "";
        position: absolute;
        right: -50%;
        top: 0;
        left: 90%;
        bottom: 0;
        background: var(--light-color);
        opacity: .5;
        z-index: 9;
      }
    }
    @media (min-width: 75rem) {
      margin-left: 70px;
    }
    &__slide{
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      gap: 30px;
      z-index: 9;
    }
    &__item{
      max-width: 313px;
      flex-shrink: 0;
      @media (min-width: 37.5rem){
        max-width: 360px;
      }
      @media (min-width: 48rem){
        max-width: 559px;
        flex-direction: row;
      }
    }
    &__btn{
      position: absolute;
      top: 50%;
      right: 6%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--accent-color);
      border-radius: 100%;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      cursor: pointer;
      z-index: 10;
    }
  }
</style>