<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'

const { state, setSearchQuery } = useProductStore()

const localQuery = computed({
  get: () => state.value.searchQuery,
  set: (val) => setSearchQuery(val)
})
</script>

<template>
  <div class="relative w-full md:max-w-md mx-auto md:mx-0">
    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <span class="text-gray-400 text-lg">🔍</span>
    </div>
    <input 
      v-model="localQuery"
      type="text" 
      class="block w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#737474]/20 focus:border-[#737474] transition-all sm:text-sm font-medium text-slate-700 shadow-sm" 
      placeholder="Cari nama barang atau kode SKU..." 
    />
    <button 
      v-if="localQuery" 
      @click="localQuery = ''"
      class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 transition-colors"
    >
      ✕
    </button>
  </div>
</template>
