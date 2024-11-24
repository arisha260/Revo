<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination } from 'swiper/modules';
  import Arrow from "@/components/icons/IconArrow.vue";
  import Content from "@/components/SectionCombo/ComboContent.vue";
</script>

<template>
  <section class="combo">
    <div class="container combo__container section container-hidden">
      <h2 class="content-title combo__title">Your Personalized Coffee</h2>
      <h3 class="content-subtitle combo__subtitle">COMBO PHIN PHÊ</h3>
      <Swiper class="combo__swiper swiper"
              :modules="[Navigation, Pagination]"
              :slides-per-view="'auto'"
              :loop="true"
              :space-between="30"
              :navigation="{
                nextEl: '.swiper__btn--next',
               }"
              :pagination="{ clickable: true }">
        <swiper-slide class="swiper__slide">
          <Content src="/combo1.svg" cost="147.000" costPrevious="155.000" title="Combo Revo Đậm Đà" text="Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc..."/>
        </swiper-slide>
        <swiper-slide class="swiper__slide">
          <Content src="/combo2.svg" cost="156.000" costPrevious="165.000" title="Combo Revo Everyday" text="Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm..."/>
        </swiper-slide>
        <swiper-slide class="swiper__slide">
          <Content src="/combo3.svg" cost="275.000" costPrevious="260.000" title="Combo Revo Honey" text="Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica..."/>
        </swiper-slide>
        <swiper-slide class="swiper__slide">
          <Content src="/combo4.svg" cost="249.000" costPrevious="236.000" title="Combo Revo Honey" text="Revo Natural là dòng cà phê đặc biệt của Revo Coffee dành riêng ..."/>
        </swiper-slide>
        <swiper-slide class="swiper__slide">
          <Content src="/combo2.svg" cost="156.000" costPrevious="165.000" title="Combo Revo Everyday" text="Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm..."/>
        </swiper-slide>
        <swiper-slide class="swiper__slide">
          <Content src="/combo3.svg" cost="275.000" costPrevious="260.000" title="Combo Revo Honey" text="Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica..."/>
        </swiper-slide>
        <button class="btn-reset swiper__btn swiper__btn--next"><Arrow /></button>
      </Swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
.combos
  padding: 2.6rem 0 1.6rem;
  @media (min-width: 37.5rem) {
    padding: 5.4375rem 0 8rem;
  }
  @media (min-width: 48rem){
    background: linear-gradient(to left, var(--primary-color) 30%, transparent 30%); /* Градиент для 75% */
  }
}


.swiper{
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  position: relative;
  isolation: isolate;
  @media (min-width: 37.5rem){
    padding: 1.8rem;
    &::after {
      content: "";
      position: absolute;
      right: -50%;
      top: 0;
      left: 84%;
      bottom: 0;
      background: var(--primary-color);
      opacity: .5;
      z-index: 9;
    }
  }
  @media (min-width: 75rem) {
    margin-left: 98px;
  }
  &__slide{
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    z-index: 9;
  }
  &__btn{
    position: absolute;
    top: 50%;
    right: 10%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-color);
    border-radius: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 10;
  }
}

</style>