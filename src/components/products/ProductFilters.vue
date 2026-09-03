<script setup>
import { computed } from 'vue'
import { getCategoryList } from '@/constants/productCategories'
import { useProductStore } from '@/stores/productStore'

const { state, setActiveCategory } = useProductStore()
const categories = computed(() => getCategoryList())

const isActive = (slug) => state.value.activeCategory === slug
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 md:gap-3">
    <!-- Tombol Semua -->
    <button 
      @click="setActiveCategory('all')"
      class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all border"
      :class="isActive('all') 
        ? 'bg-[#737474] border-[#737474] text-white shadow-md' 
        : 'bg-white border-gray-200 text-slate-600 hover:border-gray-300 hover:bg-gray-50'"
    >
      Semua Produk
    </button>

    <!-- Looping Kategori dari Constants -->
    <button 
      v-for="cat in categories" 
      :key="cat.slug"
      @click="setActiveCategory(cat.slug)"
      class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all border"
      :class="isActive(cat.slug) 
        ? 'bg-[#737474] border-[#737474] text-white shadow-md' 
        : 'bg-white border-gray-200 text-slate-600 hover:border-gray-300 hover:bg-gray-50'"
    >
      {{ cat.label }}
    </button>
  </div>
</template>
