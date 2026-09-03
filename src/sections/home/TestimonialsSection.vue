<script setup>
import { testimonialsInfo } from '@/data/testimonials'
import TestimonialCard from '@/components/cards/TestimonialCard.vue'
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto max-w-6xl">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Kepercayaan <span class="text-[#737474]">Klien Kami</span></h2>
        <div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div>
        <p class="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto px-4">Apa kata mitra internasional mengenai kerja sama pengadaan komoditas dari Indonesia bersama Tevori Global.</p>
      </div>

      <!-- Grid Testimoni -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
        <TestimonialCard v-for="testi in testimonialsInfo" :key="testi.id" :testi="testi" />
      </div>
    </div>
  </section>
</template>
