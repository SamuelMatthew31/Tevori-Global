import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  srcDir: 'src/',
  css: ['~/assets/styles/Main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    define: {
      'process.env.SANITY_PROJECT_ID': JSON.stringify(process.env.SANITY_PROJECT_ID || ''),
      'process.env.SANITY_DATASET': JSON.stringify(process.env.SANITY_DATASET || 'production'),
    },
  },
  modules: [
    '@nuxtjs/sanity',
  ],
  routeRules: {
    '/admin/**': { ssr: false },
  },
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || '',
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
  },
  app: {
    head: {
      title: 'PT Tevori Global Indonesia - B2B Export & Buyer Agent',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Official B2B Export and Sourcing Buyer Agent for Indonesia. Sourcing Indonesian Teak Furniture, Coffee & Coconut Commodities, Authentic Balinese Handcrafted Arts.' },
        { name: 'keywords', content: 'indonesia export, buyer agent indonesia, teak furniture jepara, gayo green coffee beans, coconut charcoal briquettes, balinese wood carving' },
        { property: 'og:title', content: 'PT Tevori Global Indonesia - B2B Export & Buyer Agent' },
        { property: 'og:description', content: 'Connecting global B2B buyers with premium verified Indonesian manufacturers and commodities.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
