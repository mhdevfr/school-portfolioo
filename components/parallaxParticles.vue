<template>
    <div class="z-0 absolute w-full h-3/4">
      <div class="flex justify-around items-center mt-2">
        <firstElement class="parallax absolute left-24 z-[-1]" v-motion-slide-top />
        <secondElement class="parallax absolute right-24 z-[-1]" v-motion-slide-top />
        <thirdElement class="parallax absolute top-10 left-1/3 z-[-1]" v-motion-slide-top />
        <fourthElement class="parallax absolute bottom-0 left-52 z-[-1]" v-motion-slide-top />
        <fifthElement class="parallax absolute bottom-0 right-72 z-[-1]" v-motion-slide-top />
        <sixElement class="parallax absolute bottom-16 left-1/2 z-[-1]" v-motion-slide-top />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  
  const getRandomInRange = (min, max) => Math.random() * (max - min) + min;
  const elements = ref([]);
  
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX: x, clientY: y } = event;
  
    elements.value.forEach((el) => {
      const { offsetWidth: width, offsetHeight: height } = el;
      const rect = el.getBoundingClientRect();
      const elementCenterX = rect.left + width / 2;
      const elementCenterY = rect.top + height / 2;
  
      const deltaX = (x - elementCenterX) / window.innerWidth;
      const deltaY = (y - elementCenterY) / window.innerHeight;
  
      const moveX = deltaX * Number(el.dataset.factorX);
      const moveY = deltaY * Number(el.dataset.factorY);
  
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };
  
  const animateElements = () => {
    elements.value.forEach((el) => {
      const moveX = getRandomInRange(-2, 2); 
      const moveY = getRandomInRange(-2, 2);
      el.style.transform += ` translate(${moveX}px, ${moveY}px)`;
    });
    requestAnimationFrame(animateElements);
  };
  
  onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
  
    document.querySelectorAll<HTMLElement>(".parallax").forEach((el) => {
      el.dataset.factorX = getRandomInRange(10, 70).toString();
      el.dataset.factorY = getRandomInRange(10, 70).toString();
      elements.value.push(el);
    });
  
    animateElements();
  });
  
  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
  });
  </script>
  
  <style lang="css">
  .parallax {
    transition: transform 1s ease-out;
  }
  </style>