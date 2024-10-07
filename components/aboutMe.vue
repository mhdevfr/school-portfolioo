<template>
  <div class="w-3/4 h-2/3 mt-32 rounded-2xl" id="about">
    <div class="flex items-start justify-normal flex-col p-10">
      <div class="flex">
        <div class="ml-10 flex flex-col justify-center mr-10">
          <h1 class="text-white text-4xl font-bold brico-800">
            A propos de moi.
          </h1>
          <p
            class="text-white text-xl mt-5 w-3/4 brico-200 first-letter:text-white"
          >
            Currently studying at
            <span
              class="underline underline-offset-2 decoration-blue-400 relative"
              @mouseover="showPopover.leMans = true"
              @mouseleave="showPopover.leMans = false"
            >
              Le Mans, France
              <div
                v-if="showPopover.leMans"
                class="absolute bottom-full left-0 mb-2 p-4 w-64 bg-gray-900 text-gray-50 rounded-lg shadow-md text-base"
                v-motion-pop-visible
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85460.71580509176!2d0.11330077624443372!3d47.98187508421931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e288d214f3aa31%3A0x69025d4c6a7de07f!2sLe%20Mans!5e0!3m2!1sfr!2sfr!4v1726264967117!5m2!1sfr!2sfr"
                  class="w-full mb-5"
                  style="border: 0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                Une ville dans le nord-ouest de la France, connue pour sa
                célèbre course de 24 heures.
              </div>
            </span>
            Je suis développeur web front-end et designer. Je crée
            <span
              class="underline-offset-2 underline decoration-lime-400 relative"
              @mouseover="showPopover.websites = true"
              @mouseleave="showPopover.websites = false"
            >
              des sites web
              <div
                v-if="showPopover.websites"
                class="absolute z-50 bottom-full left-0 p-4 w-64 bg-gray-900 text-gray-50 rounded-lg shadow-md text-lg"
                v-motion-pop-visible
              >
                Je construis des sites web réactifs et interactifs en utilisant
                des technologies modernes. Comme ceux-ci !
                <div class="flex justify-around items-center mt-2">
                  <Icon name="logos:vue" size="32" />
                  <Icon name="logos:nuxt-icon" size="32" />
                  <Icon name="devicon:supabase" size="32" />
                  <Icon name="devicon:typescript" size="32" />
                </div>
              </div>
            </span>
            et des applications web avec les dernières technologies et
            tendances. J'apprends aussi
            <span
              class="underline underline-offset-2 decoration-orange-400 relative"
              @mouseover="showPopover.swift = true"
              @mouseleave="showPopover.swift = false"
            >
              Swift
              <div
                v-if="showPopover.swift"
                class="absolute bottom-full left-0 mb-2 p-4 w-64 bg-gray-900 text-gray-50 rounded-xl shadow-md text-base"
                v-motion-pop-visible
              >
                <img
                  src="../assets/images/kaizenMobile.png"
                  class="w-32 mx-auto mb-5 rounded-xl"
                />
                J'apprends Swift et SwiftUI pour améliorer mes compétences, j'ai
                développé ma propre application iOS à partir de l'une de mes
                applications web.
              </div>
            </span>
            en créant des applications iOS pour moi-même. Je serais honoré de
            travailler avec vous sur vos projets. Je suis ouvert à toute
            collaboration.
          </p>

          <div class="flex h-full items-center justify-between">
            <div>
              <nuxt-link
                to="/cv"
                class="py-2 px-4 bg-slate-50 rounded-lg text-gray-950"
              >
                Télécharger mon CV
              </nuxt-link>
            </div>
            <div class="flex mr-10 justify-end items-center h-full">
              <a href="https://www.linkedin.com/in/milan-herb%C3%A9-867064299/">
                <Icon name="mdi:linkedin" class="size-10 mx-1 text-gray-50" />
              </a>
              <a href="https://github.com/mhdevfr">
                <Icon name="mdi:github" class="size-10 mx-1 text-gray-50" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="group h-96 w-96 [perspective: 1000px]">
            <div
              class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div class="absolute inset-0">
                <img
                  src="../assets/images/milan.jpeg"
                  class="rounded-xl h-full object-cover shadow-black/40 w-full"
                />
              </div>
              <div
                class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                <div
                  class="flex min-h-full flex-col items-center justify-center"
                >
                  <button
                    class="bg-slate-700 h-12 w-1/3 text-xs mx-auto my-10 rounded-md"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showPopover = ref({
  leMans: false,
  websites: false,
  swift: false,
});
</script>
