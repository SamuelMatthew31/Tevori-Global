<script setup>
import { ref } from 'vue'
import { insightsList } from '@/data/insights'
import InsightCard from '@/components/cards/InsightCard.vue'

const posts = ref(insightsList)
</script>

<template>
  <div class="pt-24 pb-16 md:py-32 px-4 bg-gray-50 min-h-screen">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Header -->
      <div class="text-center mb-10 md:mb-16 mt-8">
        <div class="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-[#737474] font-bold text-xs md:text-sm mb-6">
          Edukasi & Publikasi
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-6">Insight <span class="text-[#737474]">Industri</span></h1>
        <div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div>
        <p class="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-2">
          Ikuti tren pasar, regulasi pengiriman kargo, serta standard kualitas komoditas dari Indonesia.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <InsightCard v-for="post in posts" :key="post.id" :post="post" />
      </div>

    </div>
  </div>
</template>
