<script setup>
import { computed } from 'vue'
import { getCategoryLabel } from '@/constants/productCategories'
import { generateWhatsAppQuotationLink, truncateText } from '@/utils/formatters'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const categoryLabel = computed(() => getCategoryLabel(props.product.category))
const waLink = computed(() => generateWhatsAppQuotationLink(props.product))
</script>

<template>
  <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
    
    <!-- Image Section -->
    <div class="h-56 w-full relative bg-gray-100 overflow-hidden">
      <!-- Kita pakai <img> standar mengambil data image dari URL -->
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      
      <!-- Category Badge -->
      <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 shadow-sm border border-gray-100">
        {{ categoryLabel }}
      </div>

      <!-- Featured Badge -->
      <div v-if="product.is_featured" class="absolute top-4 right-4 bg-amber-400 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
        ★ Unggulan
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6 md:p-8 flex flex-col flex-grow">
      <div class="flex justify-between items-start mb-2">
        <span class="text-xs font-mono text-slate-400 font-semibold">{{ product.id }}</span>
        <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{{ product.availability }}</span>
      </div>
      
      <h3 class="text-xl font-bold text-slate-800 mb-3 leading-tight">{{ product.name }}</h3>
      <p class="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{{ truncateText(product.short_desc, 90) }}</p>
      
      <!-- Mini Specs -->
      <div class="space-y-2 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100/50">
        <div v-for="spec in product.specifications.slice(0, 2)" :key="spec.label" class="flex items-start text-xs">
          <span class="text-slate-400 font-medium w-20 shrink-0">{{ spec.label }}</span>
          <span class="text-slate-700 font-semibold ml-2">{{ spec.value }}</span>
        </div>
        <div class="flex items-start text-xs pt-1 mt-1 border-t border-gray-200">
          <span class="text-slate-400 font-medium w-20 shrink-0">Batas (MOQ)</span>
          <span class="text-[#737474] font-bold ml-2">{{ product.moq }}</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-auto pt-2">
        <a :href="waLink" target="_blank" class="block w-full text-center bg-white border-2 border-[#737474] text-[#737474] hover:bg-[#737474] hover:text-white py-3 rounded-xl font-bold transition-colors">
          Request Quotation (WA)
        </a>
      </div>
    </div>

  </div>
</template>
