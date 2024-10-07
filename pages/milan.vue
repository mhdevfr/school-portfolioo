<template>
  <div
    class="h-screen w-full absolute z-40 flex justify-center items-center bg-black"
  >
    <navbar class="fixed z-50 top-0 rounded-xl text-gray-50 mt-12" />
    <div
      class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#63e_100%)]"
    ></div>
    <aboutMe class="z-40"></aboutMe>
    <parallaxParticles class="absolute z-10" />
  </div>
</template>
<script setup lang="ts">
</script>