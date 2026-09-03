<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-slate-800 p-8 md:p-10 rounded-2xl border border-slate-700 hover:border-slate-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
    <div class="bg-slate-700 text-white w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 text-xl md:text-2xl font-bold shadow-inner">
      0{{ service.id }}
    </div>
    <h3 class="text-lg md:text-xl font-bold text-white mb-4">{{ service.title }}</h3>
    <p class="text-slate-400 text-sm md:text-base leading-relaxed flex-grow">{{ service.description }}</p>
  </div>
</template>
