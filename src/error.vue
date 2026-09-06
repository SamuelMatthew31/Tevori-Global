<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  error: Object
})

onMounted(() => {
  // Hard fallback: if Nuxt accidentally catches a 404 for /admin, 
  // try forcing a real HTML request to fetch the static admin file
  if (props.error.url && props.error.url.includes('/admin')) {
    window.location.reload()
  }
})
</script>

<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center p-4">
    <h1 class="text-6xl font-black text-slate-800 mb-4">{{ error.statusCode }}</h1>
    <p class="text-lg text-slate-600 mb-8">{{ error.message || 'Halaman tidak ditemukan.' }}</p>
    <a href="/" class="px-6 py-3 bg-[#737474] text-white rounded-lg font-bold">Kembali ke Beranda</a>
  </div>
</template>
