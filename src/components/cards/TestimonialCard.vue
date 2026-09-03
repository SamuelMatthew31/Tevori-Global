<script setup>
defineProps({
  testi: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow h-full group">
    <div>
      <div class="flex text-amber-400 mb-4 text-sm group-hover:scale-105 transition-transform origin-left w-fit">
         <span v-for="n in testi.rating" :key="n">★</span>
      </div>
      <p class="text-slate-600 italic text-sm md:text-base leading-relaxed mb-6">"{{ testi.content }}"</p>
    </div>
    <div class="border-t border-gray-100 pt-4 mt-auto">
      <h4 class="font-bold text-slate-800 group-hover:text-[#737474] transition-colors">{{ testi.name }}</h4>
      <p class="text-xs text-slate-500 mt-1">{{ testi.position }} &mdash; <span class="font-semibold text-[#737474]">{{ testi.company }}</span></p>
    </div>
  </div>
</template>
