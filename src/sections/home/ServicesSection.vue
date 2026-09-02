<script setup>
import { servicesInfo } from '@/data/services'
</script>

<template>
  <section class="py-24 px-4 bg-slate-900 border-t border-slate-800">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Layanan & <span class="text-[#737474]">Fokus Utama</span></h2>
        <div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div>
        <p class="text-slate-400 mt-4 text-lg">Kami memfasilitasi pengadaan (sourcing) untuk 3 pilar komoditi utama export Indonesia.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="service in servicesInfo" :key="service.id" class="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-slate-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div class="bg-slate-700 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">
            0{{ service.id }}
          </div>
          <h3 class="text-xl font-bold text-white mb-4">{{ service.title }}</h3>
          <p class="text-slate-400 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
