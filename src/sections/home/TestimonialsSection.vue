<script setup>
import { testimonialsInfo } from '@/data/testimonials'
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Kepercayaan <span class="text-[#737474]">Klien Kami</span></h2>
        <div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div>
        <p class="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto px-4">Apa kata mitra internasional mengenai kerja sama pengadaan komoditas dari Indonesia bersama Tevori Global.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
        <div v-for="testi in testimonialsInfo" :key="testi.id" class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div class="flex text-amber-400 mb-4 text-sm">
               <span v-for="n in testi.rating" :key="n">★</span>
            </div>
            <p class="text-slate-600 italic text-sm md:text-base leading-relaxed mb-6">"{{ testi.content }}"</p>
          </div>
          <div class="border-t border-gray-100 pt-4 mt-auto">
            <h4 class="font-bold text-slate-800">{{ testi.name }}</h4>
            <p class="text-xs text-slate-500">{{ testi.position }} - <span class="font-semibold text-[#737474]">{{ testi.company }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
