<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import ProductSearch from '@/components/products/ProductSearch.vue'
import ProductFilters from '@/components/products/ProductFilters.vue'
import ProductCard from '@/components/cards/ProductCard.vue'

// Inisialisasi Store
const { filteredProducts, state, clearFilters } = useProductStore()

// State Data (Reactive ke filter search dan kategori)
const products = computed(() => filteredProducts.value)

</script>

<template>
  <div class="pt-24 pb-16 md:py-32 px-4 bg-gray-50 min-h-screen">
    <div class="container mx-auto max-w-7xl">
      
      <!-- Header Katalog -->
      <div class="text-center mb-10 md:mb-16 mt-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-6">Katalog <span class="text-[#737474]">Produk</span></h1>
        <div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div>
        <p class="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-2">
          Eksplorasi >150 item varian komoditas dan hasil manufaktur berkualitas internasional. Dapatkan harga khusus grosiran melalui Quotation.
        </p>
      </div>

      <!-- Aksesoris Filter & Search -->
      <div class="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <!-- Kolom Pencarian -->
        <div class="w-full md:w-1/3">
          <ProductSearch />
        </div>
        
        <!-- Tab Kategori -->
        <div class="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <ProductFilters />
        </div>
      </div>

      <!-- Informasi Hasil Pencarian -->
      <div class="mb-6 flex justify-between items-center text-sm font-semibold text-slate-500 px-2" v-if="state.searchQuery || state.activeCategory !== 'all'">
        <p>Menampilkan <span class="text-slate-800">{{ Object.keys(products).length }}</span> produk.</p>
        <button @click="clearFilters" class="text-red-500 hover:text-red-600 underline">Reset Semua Filter</button>
      </div>

      <!-- Area Tampilan Data (Grid) -->
      <div v-if="products && Object.keys(products).length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
         <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>

      <!-- Empty State (Jika barang tidak ada) -->
      <div v-else class="text-center bg-white py-24 rounded-3xl border border-gray-100 shadow-sm mt-8">
        <div class="text-6xl mb-6">🏜️</div>
        <h3 class="text-2xl font-bold text-slate-800 mb-2">Produk Tidak Ditemukan</h3>
        <p class="text-slate-500 max-w-md mx-auto mb-8">Maaf, kami tidak menemukan produk berdasarkan kategori atau kata kunci yang Anda masukkan.</p>
        <button @click="clearFilters" class="bg-[#737474] text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-700 transition">
          Reset Filter & Pencarian
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Menyembunyikan scrollbar di tab filter khusus untuk mobile namun fungsionalitas scroll/geser tetap hidup */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; 
  scrollbar-width: none;  
}
</style>
