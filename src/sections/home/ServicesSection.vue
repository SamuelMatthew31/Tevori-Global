<script setup>
import { servicesInfo } from '@/data/services'
import ServiceCard from '@/components/cards/ServiceCard.vue'
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-slate-900 border-t border-slate-800">
    <div class="container mx-auto max-w-6xl">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Layanan & <span class="text-[#737474]">Fokus Utama</span></h2>
        <div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div>
        <p class="text-slate-400 mt-4 text-base md:text-lg px-4">Kami memfasilitasi pengadaan (sourcing) untuk 3 pilar komoditi utama export Indonesia.</p>
      </div>

      <!-- Galeri Layanan -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
        <ServiceCard v-for="service in servicesInfo" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
</template>
