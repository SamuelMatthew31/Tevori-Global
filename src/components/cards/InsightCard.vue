<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'insightDetail', params: { slug: post.slug } }" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
    <!-- Image -->
    <div class="h-52 w-full relative overflow-hidden bg-gray-100">
      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <div class="absolute top-4 left-4 bg-white/95 px-3 py-1 text-xs font-bold text-[#737474] rounded-lg shadow-sm border border-gray-100 backdrop-blur-sm">
        {{ post.category }}
      </div>
    </div>
    <!-- Content -->
    <div class="p-6 md:p-8 flex flex-col grow">
      <time class="text-xs text-slate-400 font-semibold mb-3 tracking-wider">{{ post.date }}</time>
      <h3 class="text-lg md:text-xl font-bold text-slate-800 mb-4 group-hover:text-[#737474] transition-colors leading-snug">{{ post.title }}</h3>
      <p class="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">{{ post.summary }}</p>
      <div class="mt-auto pt-4 border-t border-gray-100">
         <span class="text-sm font-bold text-[#737474] flex items-center group-hover:translate-x-1 transition-transform">Baca Selengkapnya <span class="ml-2">→</span></span>
      </div>
    </div>
  </RouterLink>
</template>
