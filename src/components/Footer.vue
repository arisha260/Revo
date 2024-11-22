<script setup>

</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <span class="footer__copy">© Revo Coffee Việt Nam - 2018</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer{
    background-color: var(--light-gray);
    padding: 1.4rem;
    &__container{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__copy{
      font-family: var(--font-family);
      font-style: italic;
      font-weight: var(--fw-300);
      font-size: var(--fz-default);
      line-height: 137%;
      color: var(--primary-color);
    }
  }
</style>