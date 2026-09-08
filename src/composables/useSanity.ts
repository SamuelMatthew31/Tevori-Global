import { createClient } from '@sanity/client'
import { useRuntimeConfig } from '#app'

export const useSanity = () => {
  const config = useRuntimeConfig()
  
  const client = createClient({
    projectId: config.public.sanityProjectId || process.env.SANITY_PROJECT_ID,
    dataset: config.public.sanityDataset || process.env.SANITY_DATASET || 'production',
    useCdn: true, // Use CDN for faster, cacheable responses on live Nuxt
    apiVersion: '2024-03-01', // Update based on current date or preference
    token: process.env.SANITY_API_TOKEN, // Optional: Only if you need to fetch draft/private content
  })

  // Basic fetch wrapper for GROQ
  const fetch = async (query, params = {}) => {
    try {
      return await client.fetch(query, params)
    } catch (err) {
      console.error('Sanity fetch error:', err)
      return null
    }
  }

  // Image URL builder helper function if needed (can be implemented later with @sanity/image-url)
  // For now, Sanity image fields queried with GROQ can just return the raw URL.

  return {
    client,
    fetch
  }
}
