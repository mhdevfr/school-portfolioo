<template>
  <div class="h-full bg-gray-50 text-gray-100 flex flex-col items-center">
    <!-- Navbar -->
    <navbar class="w-5/6 my-6" />

    <div
      class="w-5/6 md:w-3/4 lg:w-2/3 mt-32 bg-gray-50 rounded-lg shadow-xl p-8"
    >
      <div class="w-full h-64 md:h-80 overflow-hidden rounded-lg mb-6">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/superhero.png"
        />
      </div>

      <div class="text-lg leading-relaxed">
        <p class="mb-4">
          Voici un projet réalisé en PHP avec Bootstrap et PhpMyAdmin durant ma
          première année de BTS, dans le cadre de mon AP. Ce projet avait pour
          objectif de nous initier au développement web dynamique et à la
          gestion de bases de données, en se concentrant sur l’univers des
          personnages, notamment ceux de l’univers des comics, Star Wars et
          Marvel. Le projet s’est déroulé en deux étapes principales. La
          première étape consistait à concevoir la structure de la base de
          données dans PhpMyAdmin pour gérer les informations des personnages.
          Nous avons ainsi appris à définir les tables, les relations entre
          elles, et à manipuler les données de manière efficace. La seconde
          étape était le développement du site en PHP avec Bootstrap. Nous avons
          dû créer une interface utilisateur dynamique permettant de visualiser,
          ajouter, modifier et supprimer les personnages tout en respectant les
          contraintes imposées par nos enseignants. Ce projet nous a permis de
          renforcer nos compétences en développement back-end avec PHP, de
          découvrir l’utilisation de PhpMyAdmin pour la gestion de base de
          données, et d’améliorer notre maîtrise de Bootstrap pour créer des
          interfaces responsives.
        </p>
        <p class="text-gray-400 italic brico-800 text-2xl flex">
          Technologies utilisées :
          <div class="flex"> 
            <span class="px-2 py-1 bg-purple-400 ml-4 text-white rounded-full"
            >Bootstrap</span
          >
            <span class="px-2 py-1 bg-blue-500 ml-4 text-white rounded-full">
                PhpMyAdmin
            </span>
            <span class="px-2 py-1 bg-blue-500 ml-4 text-white rounded-full">PHP</span>
            
            </div>
          
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
          Novembre - Decembre 2023</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Styles supplémentaires au besoin */
</style>
