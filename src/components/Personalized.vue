<script setup>
  import Content from "@/components/SectionPersonalized/PersonalizedContent.vue";
</script>

<template>
  <section class="personalized">
    <div class="container personalized__container section container-hidden">
      <h2 class="content-title personalized__title">Your Personalized Coffee</h2>
      <h3 class="content-subtitle personalized__subtitle">COFFEE BUILD YOUR BASE</h3>
      <ul class="list-reset personalized__list">
        <Content src="/personalized-icon1.svg" title="Nguồn gốc" description="Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế."/>
        <Content src="/personalized-icon2.svg" title="Chất lượng" description="Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê."/>
        <Content src="/personalized-icon3.svg" title="Các loại hạt" description="70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean."/>
        <Content src="/personalized-icon4.svg" title="Pha chế" description="Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt."/>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .personalized{
    padding: 2.6rem 0 1.6rem;
    &__list{
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 4.125rem;
    }
  }
</style>