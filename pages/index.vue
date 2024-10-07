<template>
  <div v-if="!isLoggedIn" class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">Connexion</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block mb-2">Identifiant</label>
          <input
            type="text"
            v-model="username"
            id="username"
            class="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2">Mot de passe</label>
          <input
            type="password"
            v-model="password"
            id="password"
            class="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500">
          Se connecter
        </button>
      </form>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </div>
  </div>
  <div
    class="relative max-h-screen h-screen overflow-x-hidden overflow-hidden w-full bg-black"
    v-else
  >
    <div
      class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"
    ></div>
    <div
      class="absolute left-0 right-0 top-[-10%] mt-32 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
    ></div>
    <div class="flex flex-col items-center h-screen justify-center">
      <navbar class="fixed z-50 top-0 rounded-xl text-gray-50 mt-12" />
      <heroTexte class="z-50"></heroTexte>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoggedIn = ref(false);
const username = ref("");
const password = ref("");
const error = ref("");

// Gestion de la Connexion
const handleLogin = () => {
  // Remplacez ces valeurs par vos identifiants souhaités
  const validUsername = "admin";
  const validPassword = "password123IsHardasHell";

  if (username.value === validUsername && password.value === validPassword) {
    isLoggedIn.value = true;
    // Vérifier si window est défini avant d'utiliser localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true");
    }
    error.value = "";
  } else {
    error.value = "Identifiant ou mot de passe incorrect.";
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap");

.brico-800 {
  font-family: "Bricolage Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.brico-200 {
  font-family: "Bricolage Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

* {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
</style>
