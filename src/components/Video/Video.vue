<script setup>
  import coffeeMp4 from "@/assets/vid/coffee-720.mp4";
  import coffeeWebm from "@/assets/vid/coffee-720.webm";
  import coffeeOgv from "@/assets/vid/coffee-720.ogv";
  import BtnPlay from "@/components/icons/IconBtnPlay.vue";

  import { ref } from "vue";

  const videoRef = ref(null);
  const videoPlay = ref(false);

  const togglePlay = () => {
    if (videoRef.value) {
      if (videoRef.value.paused) {
        videoRef.value.play();
        videoPlay.value = true; // Обновляем состояние
      } else {
        videoRef.value.pause();
        videoPlay.value = false; // Обновляем состояние
      }
    }
  };

  const handlePause = () => {
    videoPlay.value = false; // Показываем оверфлоу
  };

  const handlePlay = () => {
    videoPlay.value = true; // Скрываем оверфлоу
  };

  const pauseVideo = () => {
    if (videoRef.value && !videoRef.value.paused) {
      videoPlay.vaue = false;
      videoRef.value.pause();
    }
  }
</script>

<template>
  <div class="video">
    <div class="video__container">
      <video ref="videoRef"
             @click="togglePlay"
             @pause="handlePause"
             @play="handlePlay"
             width="720" class="video__video" poster="/video-poster.jpg" preload muted playsinline>
        <source class="video__resource" :src="coffeeMp4" type="video/mp4" />
        <source class="video__resource" :src="coffeeWebm" type="video/webm" />
        <source class="video__resource" :src="coffeeOgv" type="video/ogv" />
        Your browser does not support the video tag!
      </video>
      <div class="video__overflow" :class="{ active: !videoPlay }"></div>
      <button @click="togglePlay" class="btn-reset video__btn" :class="{ 'active': videoPlay }"><BtnPlay /></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .video{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    &__container{
      width: 100%;
      height: 768px;
      background: #efefef;
      position: relative;
      isolation: isolate;
      overflow: hidden;
      transition: .3s;
    }
    &__video{
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }
    &__overflow {
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      background-color: rgba(255, 255, 255, 0.3);
      transition: opacity 0.3s;
      opacity: 0;
      pointer-events: none;

      &.active {
        opacity: 1;
        pointer-events: all;
      }
    }
    &__btn{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      &.active{
        display: none;
      }
    }
  }
</style>