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
              :slides-per-view="1"
              :loop="true"
              :space-between="30"
              :navigation="{
                nextEl: '.swiper__btn--next',
               }"
              :pagination="{ clickable: true }">
        <swiper-slide class="swiper__slide">
          <Content src="/choose1.png" src2="/choose2.png" cost="99.000" cost2="139.000" title="REVO Morning" title2="REVO Origin" text="đắng, hậu ngọt, hương hoa" text2="hậu ngọt, ít đắng, vị chua dâu"/>
        </swiper-slide>

        <swiper-slide class="swiper__slide">
          <Content src="/choose3.png" src2="/choose4.png" cost="85.000" cost2="75.000" title="REVO Everyday" title2="REVO Đậm Đà" text="cân bằng, hậu đắng, vị chocolate " text2="đậm đà, đắng, truyền thống"/>
        </swiper-slide>

        <swiper-slide class="swiper__slide">
          <Content src="/choose5.png" src2="/choose6.png" cost="99.000" cost2="139.000" title="REVO Morning" title2="REVO Origin" text="đắng, hậu ngọt, hương hoa" text2="hậu ngọt, ít đắng, vị chua dâu"/>
        </swiper-slide>
        <button class="btn-reset swiper__btn swiper__btn--next"><Arrow /></button>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
  .choose {
    &__container {
      isolation: isolate;
    }
  }

  .swiper{
    margin: 0 auto;
    width: 100%;
    position: relative;
    isolation: isolate;
    &__slide{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      z-index: 9;
    }
    &__item{
      max-width: 360px;
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