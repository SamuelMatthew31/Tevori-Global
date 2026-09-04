import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID || 'y7s5i2p8'
const dataset = process.env.SANITY_DATASET || 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
  if (!source) return ''
  if (typeof source === 'string') return source
  if (source.asset && source.asset._ref) {
    try {
      return builder.image(source).auto('format').fit('max').url()
    } catch (e) {
      return ''
    }
  }
  return ''
}
