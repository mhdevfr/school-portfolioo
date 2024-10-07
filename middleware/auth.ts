// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
    const token = process.client ? localStorage.getItem('token') : null;
  
    if (!token) {
      return navigateTo('/'); // Redirige vers la page de connexion si pas de token
    }
  });
  