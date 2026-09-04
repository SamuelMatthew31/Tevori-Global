import { ref, computed } from 'vue'
import { productsList } from '@/data/products'

// State Global Sederhana
const state = ref({
  products: productsList,
  activeCategory: 'all',
  searchQuery: '',
  isLoading: false,
})

// Actions / Methods
export const useProductStore = () => {
  const setActiveCategory = (categorySlug) => {
    state.value.activeCategory = categorySlug
  }

  const setSearchQuery = (query) => {
    state.value.searchQuery = query
  }

  const setProducts = (newProducts) => {
    if (Array.isArray(newProducts) && newProducts.length > 0) {
      state.value.products = newProducts
    }
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
        (item.name && item.name.toLowerCase().includes(lowerQuery)) || 
        (item.id && item.id.toLowerCase().includes(lowerQuery)) ||
        (item.short_desc && item.short_desc.toLowerCase().includes(lowerQuery))
      )
    }

    return result
  })

  return {
    state,
    setActiveCategory,
    setSearchQuery,
    setProducts,
    clearFilters,
    filteredProducts,
  }
}
