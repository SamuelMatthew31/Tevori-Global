<script setup>
import { insightsList } from '@/data/insights'
import InsightCard from '@/components/cards/InsightCard.vue'
import { RouterLink } from 'vue-router'

// Ambil 3 artikel terbaru untuk halaman home
const recentPosts = insightsList.slice(0, 3)
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-white border-t border-gray-100">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
        <div class="text-center md:text-left mb-6 md:mb-0">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Berita & <span class="text-[#737474]">Artikel Terbaru</span></h2>
          <div class="w-16 h-1 bg-[#737474] mx-auto md:mx-0 mb-4"></div>
          <p class="text-slate-600 mt-2 text-base md:text-lg max-w-xl">Update terkini seputar industri komoditi, furnitur, seni, serta regulasi ekspor Indonesia.</p>
        </div>
        <RouterLink to="/insights" class="hidden md:inline-block border-2 border-[#737474] text-[#737474] px-6 py-2.5 rounded-lg font-bold hover:bg-[#737474] hover:text-white transition-all shadow-sm">
          Lihat Semua Artikel
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
        <InsightCard v-for="post in recentPosts" :key="post.id" :post="post" />
      </div>
      
      <div class="mt-10 text-center md:hidden">
        <RouterLink to="/insights" class="inline-block border-2 border-[#737474] text-[#737474] px-6 py-3 rounded-lg font-bold w-full sm:w-auto hover:bg-[#737474] hover:text-white transition-colors">
          Lihat Semua Artikel
        </RouterLink>
      </div>
    </div>
  </section>
</template>
