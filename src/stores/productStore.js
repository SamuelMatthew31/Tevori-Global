import { ref, computed } from 'vue'
import { productsList } from '@/data/products'

// State Global Sederhana (tanpa Pinia untuk saat ini agar ringan disisi prototype)
const state = ref({
  products: productsList,
  activeCategory: 'all',
  searchQuery: ''
})

// Actions / Methods
export const useProductStore = () => {
  const setActiveCategory = (categorySlug) => {
    state.value.activeCategory = categorySlug
  }

  const setSearchQuery = (query) => {
    state.value.searchQuery = query
  }

  const clearFilters = () => {
    state.value.activeCategory = 'all'
    state.value.searchQuery = ''
  }

  // Getters / Computed
  const filteredProducts = computed(() => {
    let result = state.value.products

    // 1. Filter by Category
    if (state.value.activeCategory !== 'all') {
      result = result.filter(item => item.category === state.value.activeCategory)
    }

    // 2. Filter by Search Query
    if (state.value.searchQuery) {
      const lowerQuery = state.value.searchQuery.toLowerCase()
      result = result.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) || 
        item.id.toLowerCase().includes(lowerQuery)
      )
    }

    return result
  })

  return {
    state,
    setActiveCategory,
    setSearchQuery,
    clearFilters,
    filteredProducts
  }
}
