<template>
  <div class="min-h-screen bg-gray-50 text-gray-100 flex flex-col items-center">
    <!-- Navbar -->
    <navbar class="w-5/6 my-6" />

    <div
      class="w-5/6 md:w-3/4 lg:w-2/3 mt-32 bg-gray-50 rounded-lg shadow-xl p-8"
    >
      <div class="w-full h-64 md:h-80 overflow-hidden rounded-lg mb-6">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/sciss.png"
        />
      </div>

      <div class="text-lg leading-relaxed">
        <p class="mb-4">
          Lors de ce premier projet de BTS SIO, j'ai appris a utiliser l'outils
          Wordpress. L'objectif de ce projet étais de mettre en place un site
          web WordPresse avec une base de donnée et de le personalisé selon
          certain critère d'évaluation.
        </p>
        <p class="text-gray-400 italic brico-800 text-2xl">
          Technologies utilisées :
          <span class="px-2 py-1 bg-orange-950 ml-4 text-white rounded-full"
            >WordPress</span
          >
        </p>
        <p class="text-slate-950 brico-200 text-lg">
          <span>Travail seul</span>
        </p>
      </div>

      <div class="mt-8 flex justify-between items-center">
        <a
          href="#"
          class="text-gray-50 rounded-lg flex items-center opacity-50 py-1 px-2 bg-black disabled:opacity-50"
        >
          <Icon name="mdi:warning" class="size-6 mx-1 text-gray-50" />
          Voir le projet</a
        >
        <span
          class="bg-blue-500 text-white px-4 items-center flex py-2 rounded-lg"
        >
          <Icon name="mdi:calendar" class="size-9 mx-1 text-gray-50" />
          Septembre - Novembre 2023</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
