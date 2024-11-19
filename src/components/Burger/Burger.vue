<template>
  <div class="burger">
    <span class="burger__line"></span>
  </div>
</template>

<style scoped lang="scss">
  .burger{
    display: block;
    position: relative;
    width: 50px;
    height: 20px;
    z-index: 10;
    color: var(--accent-color);
    &__line{
      position: absolute;
      left: 0;
      top: 50%;
      background-color: currentColor;
      width: 100%;
      height: 3px;
      transform: translateY(-50%);
      transition: all .3s ease-in-out;
    }
    &::before, &::after{
      content: "";
      position: absolute;
      left: 0;
      background-color: currentColor;
      width: 100%;
      height: 3px;
      transition: all .3s ease-in-out;
    }
    &::before{
      top: 0;
    }
    &::after{
      bottom: 0;
    }

    &.active-burger .burger__line{
      display: none;
    }

    &.active-burger::before{
      top: 9px;
      rotate: 45deg;
    }

    &.active-burger::after{
      bottom: 9px;
      rotate: -45deg;
    }
  }
</style>