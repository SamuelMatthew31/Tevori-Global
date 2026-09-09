import { defineEventHandler } from 'h3'
import { createClient } from '@sanity/client'

export default defineEventHandler(async () => {
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || 'lskrikfb',
    dataset: process.env.SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-03-01',
  })

  try {
    const products = await client.fetch(`*[_type == "product" && defined(slug.current)] { "slug": slug.current }`)
    
    return products.map(p => {
      return {
        loc: `/products/${p.slug}`,
      }
    })
  } catch (error) {
    console.error('Sitemap API Error:', error)
    return []
  }
})