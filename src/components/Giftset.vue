<script setup>
  import Btn from "@/components/Giftset/GiftsetTabsBtn.vue";
  import LeftContent from "@/components/Giftset/GiftSetTabsLeftContent.vue";
  import {ref} from "vue";

  const activeTab = ref(1);
  const updateActiveTab = (tabNumber) => {
    activeTab.value = tabNumber;
  };
</script>

<template>
<section class="giftset">
  <div class="container giftset__container section container-hidden">
    <h2 class="content-title personalized__title">Best Gift For Best Friend</h2>
    <h3 class="content-subtitle personalized__subtitle">GIFTSET</h3>
    <div class="giftset__content">
      <div class="giftset__tabs tabs">
        <div class="tabs__left">
          <LeftContent :class="{active:activeTab === 1}" src="/giftset1.svg" cost="285.000" title='Giftset "Cà phê phin Việt Nam"' text="Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn." seed="Fine Robusta Blend" height="700 - 800m"/>
          <LeftContent :class="{active:activeTab === 2}" src="/giftset1.svg" cost="285.000" title='Giftset "Cà phê phin Việt Nam"' text="Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn." seed="Fine Robusta Blend" height="700 - 800m" imgClass="tabs__img--blue"/>
          <LeftContent :class="{active:activeTab === 3}" src="/giftset1.svg" cost="285.000" title='Giftset "Cà phê phin Việt Nam"' text="Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn." seed="Fine Robusta Blend" height="700 - 800m" imgClass="tabs__img--green"/>
        </div>
        <div class="tabs__right">
          <Btn v-for="tab in [1, 2, 3]" :key="tab" :num="tab" :isActive="activeTab === tab" :onClick="updateActiveTab" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
  .giftset{
    padding: 2.6rem 0 1.6rem;
    background: linear-gradient(to right, var(--light-gray) 70%, transparent 70%); /* Градиент для 75% */
    background-repeat: no-repeat;
    background-size: 100% 100%; /* Чтобы фон покрывал всю высоту секции */
    @media (min-width: 37.5rem) {
      padding: 5.4375rem 0 8rem;
    }
    &__content{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 100%;
      @media (min-width: 75rem){
       max-width: 100%;
        margin-left: 180px;
      }
    }
  }

  .tabs{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 64rem){
      flex-direction: row;
      align-items: flex-start;
    }
    &__right{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      @media (min-width: 64rem){
        max-width: 88px;
        grid-template-columns: none;
        grid-template-rows: repeat(3, 1fr);
        order: 2;
      }
    }
    &__left{
      height: 100%;
      order: 1;
    }
  }
</style>