<script setup>
import { companyInfo } from '@/data/company'
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-white relative">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-2">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Tentang <span class="text-[#737474]">Kami</span></h2>
        <div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div>
        <p class="text-slate-600 text-base md:text-lg leading-relaxed">{{ companyInfo.description }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
        <div class="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
          <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#737474] text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">🎯</div>
          <h3 class="text-xl md:text-2xl font-bold text-slate-800 mb-4">Visi Kami</h3>
          <p class="text-slate-600 leading-relaxed text-base md:text-lg italic">"{{ companyInfo.vision }}"</p>
        </div>
        <div class="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#737474] text-2xl mb-6 shadow-sm">🚀</div>
          <h3 class="text-xl md:text-2xl font-bold text-slate-800 mb-4">Misi Utama</h3>
          <ul class="space-y-4">
            <li v-for="(m, i) in companyInfo.mission.slice(0, 4)" :key="i" class="flex items-start">
              <span class="text-[#737474] mr-3 mt-0.5 font-bold">✓</span>
              <span class="text-slate-600 text-sm md:text-base">{{ m }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 md:mt-24 px-2">
        <div class="text-center mb-8 md:mb-12">
          <h3 class="text-xl md:text-2xl font-bold text-slate-800">Kenapa Memilih Kami?</h3>
        </div>
        <div class="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
          <div v-for="(adv, i) in companyInfo.advantages" :key="i" class="bg-white border border-slate-200 text-slate-700 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm text-xs md:text-sm font-semibold hover:border-[#737474] hover:text-[#737474] transition-colors text-center">
            {{ adv }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
