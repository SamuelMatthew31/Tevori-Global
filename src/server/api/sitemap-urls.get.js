import { defineEventHandler } from 'h3'
import { createClient } from '@sanity/client'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  
  const client = createClient({
    projectId: config.public.sanityProjectId || process.env.SANITY_PROJECT_ID,
    dataset: config.public.sanityDataset || process.env.SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-03-01',
  })

  try {
    const products = await client.fetch(`*[_type == "product" && defined(slug.current)] { "slug": slug.current }`)
    
    // Map them to the sitemap format expected by @nuxtjs/sitemap
    return products.map(p => ({
      loc: `/products/${p.slug}`,
      changefreq: 'weekly',
      priority: 0.8
    }))
  } catch (error) {
    console.error('Failed to fetch routes for sitemap', error)
    return []
  }
})