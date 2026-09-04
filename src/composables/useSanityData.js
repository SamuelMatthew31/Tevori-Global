import { ref } from 'vue'
import { sanityClient, urlFor } from '@/utils/sanity'
import { productsList as localProducts } from '@/data/products'
import { insightsList as localInsights } from '@/data/insights'
import { companyInfo as localCompany } from '@/data/company'
import { testimonialsInfo as localTestimonials } from '@/data/testimonials'
import { servicesInfo as localServices } from '@/data/services'
import { CATEGORIES } from '@/constants/productCategories'

export const useSanityData = () => {
  const loading = ref(false)
  const error = ref(null)

  // Products
  const getProducts = async () => {
    try {
      loading.value = true
      const query = `*[_type == "product"] | order(_createdAt desc)`
      const data = await sanityClient.fetch(query)
      if (data && data.length > 0) {
        return data.map(item => ({
          ...item,
          image: item.image ? urlFor(item.image) : (item.imageUrl || item.image),
        }))
      }
      return localProducts
    } catch (err) {
      console.warn('[Sanity API] Using local fallback for products:', err?.message || err)
      return localProducts
    } finally {
      loading.value = false
    }
  }

  const getProductById = async (id) => {
    try {
      loading.value = true
      const query = `*[_type == "product" && (id == $id || slug.current == $id)][0]`
      const data = await sanityClient.fetch(query, { id })
      if (data) {
        return {
          ...data,
          image: data.image ? urlFor(data.image) : (data.imageUrl || data.image),
        }
      }
      return localProducts.find(p => p.id === id || p.slug === id)
    } catch (err) {
      return localProducts.find(p => p.id === id || p.slug === id)
    } finally {
      loading.value = false
    }
  }

  // Insights (Blog Articles)
  const getInsights = async () => {
    try {
      loading.value = true
      const query = `*[_type == "insight"] | order(date desc)`
      const data = await sanityClient.fetch(query)
      if (data && data.length > 0) {
        return data.map(item => ({
          ...item,
          slug: item.slug?.current || item.slug,
          image: item.image ? urlFor(item.image) : (item.imageUrl || item.image),
        }))
      }
      return localInsights
    } catch (err) {
      console.warn('[Sanity API] Using local fallback for insights:', err?.message || err)
      return localInsights
    } finally {
      loading.value = false
    }
  }

  const getInsightBySlug = async (slug) => {
    try {
      loading.value = true
      const query = `*[_type == "insight" && slug.current == $slug][0]`
      const data = await sanityClient.fetch(query, { slug })
      if (data) {
        return {
          ...data,
          slug: data.slug?.current || data.slug,
          image: data.image ? urlFor(data.image) : (data.imageUrl || data.image),
        }
      }
      return localInsights.find(i => i.slug === slug)
    } catch (err) {
      return localInsights.find(i => i.slug === slug)
    } finally {
      loading.value = false
    }
  }

  // Company Info
  const getCompanyInfo = async () => {
    try {
      const query = `*[_type == "companyInfo"][0]`
      const data = await sanityClient.fetch(query)
      if (data && data.name) return { ...localCompany, ...data }
      return localCompany
    } catch (err) {
      return localCompany
    }
  }

  // Testimonials
  const getTestimonials = async () => {
    try {
      const query = `*[_type == "testimonial"]`
      const data = await sanityClient.fetch(query)
      if (data && data.length > 0) return data
      return localTestimonials
    } catch (err) {
      return localTestimonials
    }
  }

  // Services
  const getServices = async () => {
    try {
      const query = `*[_type == "service"] | order(id asc)`
      const data = await sanityClient.fetch(query)
      if (data && data.length > 0) return data
      return localServices
    } catch (err) {
      return localServices
    }
  }

  return {
    loading,
    error,
    getProducts,
    getProductById,
    getInsights,
    getInsightBySlug,
    getCompanyInfo,
    getTestimonials,
    getServices,
  }
}
