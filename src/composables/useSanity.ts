import { createClient } from '@sanity/client'
import { useRuntimeConfig } from '#app'

export const useSanity = () => {
  const config = useRuntimeConfig()

  const client = createClient({
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset || 'production',
    useCdn: true,
    apiVersion: '2024-03-01',
  })

  const fetch = async (query, params = {}) => {
    try {
      return await client.fetch(query, params)
    } catch (err) {
      console.error('Sanity fetch error:', err)
      return null
    }
  }

  return { client, fetch }
}