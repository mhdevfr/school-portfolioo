<template>
  <div class="h-screen bg-black flex justify-center">
    <navbar class="fixed z-50 top-0 rounded-xl text-gray-50 mt-12" />
    <div class="mt-40 rounded-md bg-gray-50 text-slate-950 h-3/4 w-5/6">
      <div class="p-4 h-full">
        <div class="flex items-center justify-center h-32">
          <h1 class="text-4xl brico-800">Ma veille technologique :</h1>
          <div>
            <Icon name="logos:swift" class="ml-4" size="48" />
          </div>
        </div>
        <div class="flex">
          <div class="w-1/2 h-full">
            <h1 class="text-4xl brico-800">C'est quoi Swift ?</h1>
            <p class="brico-200 text-lg my-4">
              Swift est un langage de programmation puissant et intuitif
              développé par Apple en 2014 pour le développement d’applications
              iOS, macOS, watchOS et tvOS. Il est conçu pour être moderne,
              sécurisé et performant. Swift remplace progressivement
              Objective-C, le langage historique d’Apple, en offrant une
              meilleure syntaxe, plus simple et plus lisible.
            </p>
            <a
              href="https://developer.apple.com/swift/"
              class="px-3 bg-blue-400 rounded-full  py-2"
            >
              En savoir plus
            </a>
          </div>
          <div class="w-1/2 h-full  flex items-center justify-center" id="perspective">
            <img src="../assets/images/kaizenMobile.png" class="w-1/3 rounded-xl " />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="css">
#perspective{
  perspective: 1000px;
}
</style>