<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50 text-slate-800 selection:bg-[#737474] selection:text-white">
    <Navbar />
    <main class="grow pt-16">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style>
html { scroll-behavior: smooth; }
a, button {
  transition: all 0.2s ease-in-out;
}
</style>
