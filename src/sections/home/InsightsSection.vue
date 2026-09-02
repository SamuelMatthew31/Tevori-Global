<script setup>
const insights = [
  {
    id: 1,
    title: 'Standar Ekspor Furniture Kayu Jati Indonesia ke Pasar Eropa 2026',
    date: '20 Agustus 2026',
    category: 'Regulasi Ekspor',
    image: 'bg-slate-200'
  },
  {
    id: 2,
    title: 'Mengenal Kualitas Grade A pada Komoditi Alam Biji Kopi Gayo',
    date: '15 Agustus 2026',
    category: 'Info Komoditi',
    image: 'bg-slate-200'
  },
  {
    id: 3,
    title: 'Pentingnya Layanan Buyer Agent dalam Menekan Risiko Fraud',
    date: '02 Agustus 2026',
    category: 'Insights Bisnis',
    image: 'bg-slate-200'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-white border-t border-gray-100">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
        <div class="text-center md:text-left mb-6 md:mb-0">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Berita & <span class="text-[#737474]">Artikel Terbaru</span></h2>
          <div class="w-16 h-1 bg-[#737474] mx-auto md:mx-0 mb-4"></div>
          <p class="text-slate-600 mt-2 text-base md:text-lg max-w-xl">Update terkini seputar industri komoditi, furnitur, seni, serta regulasi ekspor Indonesia.</p>
        </div>
        <button class="hidden md:inline-block border-2 border-slate-300 text-slate-600 px-6 py-2 rounded-lg font-semibold hover:border-[#737474] hover:text-[#737474] transition-colors cursor-not-allowed opacity-70" title="Sedang Disiapkan">Lihat Semua Blog</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
        <article v-for="post in insights" :key="post.id" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col cursor-not-allowed">
          <!-- Placeholder Image -->
          <div class="h-48 w-full relative flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors">
            <span class="text-gray-400 text-sm font-medium">Image Placeholder</span>
            <div class="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold text-[#737474] rounded-full backdrop-blur-sm">
              {{ post.category }}
            </div>
          </div>
          <div class="p-6 md:p-8 flex flex-col grow">
            <time class="text-xs text-slate-400 font-semibold mb-3 tracking-wider">{{ post.date }}</time>
            <h3 class="text-lg md:text-xl font-bold text-slate-800 mb-4 group-hover:text-[#737474] transition-colors leading-snug">{{ post.title }}</h3>
            <div class="mt-auto pt-4 border-t border-gray-100">
               <span class="text-sm font-bold text-[#737474] flex items-center">Baca Artikel <span class="ml-2">→</span></span>
            </div>
          </div>
        </article>
      </div>
      
      <div class="mt-10 text-center md:hidden">
        <button class="border-2 border-slate-300 text-slate-600 px-6 py-2 rounded-lg font-semibold w-full sm:w-auto cursor-not-allowed opacity-70">Lihat Semua Blog</button>
      </div>
    </div>
  </section>
</template>
