<script setup>
import { ref, computed } from 'vue'
import { companyInfo } from '@/data/company'
import { productsList } from '@/data/products'

useHead({
  title: 'Catalog Products - PT Tevori Global Indonesia',
  meta: [
    { name: 'description', content: 'Explore our verified export catalog: Indonesian Teak Furniture, Authentic Balinese Handcrafted Arts, and Decorative Items.' }
  ]
})

// 1. Native Vite Glob Import: Read all JSON files from content/products/
const productModules = import.meta.glob('/content/products/*.json', { eager: true })

// 2. Format modules into a clean reactive array (with fallback to productsList if empty)
const products = computed(() => {
  const loaded = Object.keys(productModules).map((filePath) => {
    const fileContent = productModules[filePath]
    const data = fileContent.default || fileContent
    return {
      ...data,
      id: data.slug || filePath.split('/').pop().replace('.json', ''),
      primaryImage: (data.images && data.images.length > 0)
        ? data.images[0]
        : 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80'
    }
  })

  if (loaded.length > 0) {
    return loaded
  }

  // Fallback to sample static data if no JSON files found
  return productsList.map(p => ({
    id: p.id,
    title: p.name,
    slug: p.id.toLowerCase(),
    category: p.category.charAt(0).toUpperCase() + p.category.slice(1),
    primaryImage: p.image,
    material: p.specifications?.[0]?.value || 'Solid Export Quality',
    cbmEstimation: 0.35,
    moq: 5,
    is_featured: false
  }))
})

// Search & Filter State
const selectedCategory = ref('All')
const searchQuery = ref('')
const categories = ['All', 'Furniture', 'Art', 'Decor']

// Filtered items based on user input
const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const matchesCategory = selectedCategory.value === 'All' || p.category?.toLowerCase() === selectedCategory.value.toLowerCase()
    const matchesSearch = !searchQuery.value.trim() || 
      p.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.material?.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    return matchesCategory && matchesSearch
  })
})

// 3. WhatsApp Deep Link Generator
const createQuoteLink = (product) => {
  const phone = (companyInfo.phone || '085746358310').replace(/\s+/g, '').replace(/^0/, '62')
  const message = [
    `Hello PT Tevori Global,`,
    `I am interested in requesting a B2B quotation for:`,
    `- Product: *${product.title}*`,
    `- Category: ${product.category}`,
    `- Material: ${product.material || 'Standard Export Spec'}`,
    `- Estimated CBM: ${product.cbmEstimation || 'N/A'} m³`,
    `- Stated MOQ: ${product.moq || 1} units`,
    ``,
    `Please advise current pricing, production lead time, and freight options.`
  ].join('\n')

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
</script>

<template>
  <div class="py-12 px-4 max-w-7xl mx-auto min-h-screen">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-10">
      <div class="inline-block px-4 py-1 rounded-full bg-slate-200 text-[#737474] font-semibold text-xs tracking-wider uppercase mb-3">
        Decap Git-Based Catalog
      </div>
      <h1 class="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
        Export Products & Sourcing
      </h1>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed">
        Browse verified Indonesian teak wood furniture, authentic Balinese handcrafted art, and luxury home decor ready for worldwide FCL / LCL shipping.
      </p>
    </div>

    <!-- Controls: Search & Category Filter -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
      <!-- Categories Tab -->
      <div class="flex flex-wrap gap-2 justify-center">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm cursor-pointer"
          :class="selectedCategory === cat 
            ? 'bg-[#737474] text-white shadow-md' 
            : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Search Input -->
      <div class="w-full md:w-72">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search title, material..."
            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#737474] shadow-sm"
          />
          <span class="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
      >
        <!-- Product Image Preview -->
        <div class="relative h-64 bg-slate-100 overflow-hidden">
          <img
            :src="product.primaryImage"
            :alt="product.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {{ product.category }}
          </div>
          <div v-if="product.is_featured" class="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
            Featured
          </div>
        </div>

        <!-- Product Specs Body -->
        <div class="p-6 flex flex-col grow justify-between">
          <div>
            <h3 class="text-lg font-bold text-slate-800 group-hover:text-[#737474] transition mb-2">
              {{ product.title }}
            </h3>
            <p class="text-xs text-slate-500 font-medium mb-4 flex items-center gap-1.5">
              <span>🪵</span> {{ product.material || 'Indonesian Craftsmanship' }}
            </p>

            <!-- Specification Badges -->
            <div class="grid grid-cols-2 gap-2 mb-6 bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs">
              <div>
                <span class="text-slate-400 block text-[10px] uppercase font-bold">Est. CBM</span>
                <span class="font-bold text-slate-700">{{ product.cbmEstimation ? `${product.cbmEstimation} m³` : 'Custom' }}</span>
              </div>
              <div>
                <span class="text-slate-400 block text-[10px] uppercase font-bold">MOQ</span>
                <span class="font-bold text-slate-700">{{ product.moq ? `${product.moq} pcs` : 'Negotiable' }}</span>
              </div>
            </div>
          </div>

          <!-- B2B WhatsApp Action -->
          <a
            :href="createQuoteLink(product)"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full bg-[#737474] hover:bg-slate-700 text-white font-bold text-xs md:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <span>💬</span> Request a Quote (WhatsApp)
          </a>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
      <div class="text-4xl mb-3">📦</div>
      <h3 class="text-lg font-bold text-slate-800">No products found</h3>
      <p class="text-slate-500 text-xs mt-1">Try adjusting your search terms or category filter.</p>
    </div>
  </div>
</template>
