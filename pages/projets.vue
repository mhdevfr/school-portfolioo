<template>
  <div
    class="h-screen w-full bg-gray-950 flex flex-col items-center justify-center"
  >
    <navbar class="fixed z-50 top-0 rounded-xl text-gray-50 mt-12" />
    <div
      class="w-full mt-48 p-10 lg:flex items-center bg-gray-950 flex-col flex-wrap gap-8 justify-center"
    >
      <div class="w-full  flex items-center justify-around bg-gray-950">
        <a href="#">

        <div class="w-1/3 h-[600px] rounded-3xl bg-gray-50 shadow-md shadow-gray-800">
            <div class="">
              <img
                src="../assets/images/sciss.png"
                class="w-full h-[300px] rounded-t-3xl"
              />
              <div class="p-3 flex flex-col justify-around">
                <h1 class="text-2xl brico-800">Projet 1 : SCIS</h1>
                <p class="brico-200 text-sm">
                  Cet AP a été réaliser par moi même j'ai pu créer un site web à
                  l'identique d'un site web existant. Nous devions respecter le 
                  site.
                </p>
                <div class="w-full flex-col flex mt-4">
                  <h1 class="brico-800">Technologies utilisés</h1>
                  <div>
                    <span class="px-2 py-1 rounded-full bg-orange-950 text-white">WordPress</span>

                  </div>
                </div>
                <a href="https://scis.fr" class="px-3 text-center w-1/2 bg-slate-950 text-gray-50 rounded-lg mt-8 py-2">
                    En savoir plus
                </a>
              </div>
            </div>
        </div>
    </a>

        <a href="#">
          <div
            class="w-1/3 h-[600px] rounded-3xl mx-8 bg-gray-50 shadow-md shadow-gray-800"
          >
            <div class="">
              <img
                src="../assets/images/quinconces.png"
                class="w-full h-[300px] rounded-t-3xl"
              />
              <div class="p-3 flex flex-col justify-around">
                <h1 class="text-2xl brico-800">Projet 2 : Quinconces</h1>
                <p class="brico-200 text-sm">
                  Cet AP a été réaliser avec l'aide de Paul Courtin, Enzo
                  Eliazord et moi même nous avons créer un site web fictif pour
                  les Quinconces.
                </p>
                <div class="w-full flex-col flex mt-4">
                  <h1 class="brico-800">Technologies utilisés</h1>
                  <div>
                    <span class="px-2 py-1 rounded-full bg-red-300">Figma</span>
                  <span class="px-2 py-1 rounded-full bg-blue-400">Framer</span>
                  <span class="px-2 py-1 rounded-full bg-yellow-400">CMS</span>

                  </div>
                </div>
                <a href="https://scis.fr" class="px-3 text-center w-1/2 bg-slate-950 text-gray-50 rounded-lg mt-8 py-2">
                    En savoir plus
                  </a>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div
            class="w-1/3 h-[600px] rounded-3xl bg-gray-50 shadow-md shadow-gray-800"
          >
            <div class="">
              <img
                src="../assets/images/superhero.png"
                class="w-full h-[300px] rounded-t-3xl"
              />
              <div class="p-3 flex flex-col justify-around">
                <h1 class="text-2xl brico-800">Projet 3 : AP Personnages</h1>
                <p class="brico-200 text-sm">
                  Cet AP a été réaliser avec l'aide de Ryan S, Matthew F et moi
                  même nous avons créer un site web qui presente des superheros.
                </p>
                <div class="w-full flex-col flex mt-4">
                  <h1 class="brico-800">Technologies utilisés</h1>
                  <div>
                    <span class="px-2 py-1 rounded-full bg-yellow-300">Javascript</span>
                  <span class="px-2 py-1 rounded-full bg-purple-400">Boostrap</span>
                  <span class="px-2 py-1 rounded-full bg-blue-400">PHP</span>

                  </div>
                </div>
                <a href="https://scis.fr" class="px-3 text-center w-1/2 bg-slate-950 text-gray-50 rounded-lg mt-8 py-2">
                    En savoir plus
                  </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
