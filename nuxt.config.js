import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  srcDir: 'src/',
  
  // Explicitly tell Nuxt that the public folder lives at the root, 
  // outside of srcDir, so Vite Dev Server and Vercel both properly serve it!
  dir: {
    public: '../public'
  },
  
  css: ['~/assets/styles/Main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxtjs/seo'
  ],

  site: {
    url: 'https://tevori-global.vercel.app',
    name: 'PT Tevori Global Indonesia',
    description: 'Official B2B Export and Sourcing Buyer Agent for Indonesia. Sourcing Indonesian Teak Furniture, Coffee & Coconut Commodities.',
    defaultLocale: 'en',
  },

  seo: {
    // We already cleaned up the duplicates, but just keeping it silent for other dev plugins
    validateAppHead: true
  },

  sitemap: {
    // We allow Nuxt to auto-discover standard pages (like /, /insights, /products).
  },

  routeRules: {
    '/sitemap.xml': { prerender: true }
  },

  runtimeConfig: {
    // Private keys are only available on the server
    sanityApiToken: process.env.SANITY_API_TOKEN,
    public: {
      // Public keys that are exposed to the client
      sanityProjectId: process.env.SANITY_PROJECT_ID,
      sanityDataset: process.env.SANITY_DATASET || 'production',
    }
  },

  app: {
    head: {
      title: 'PT Tevori Global Indonesia - B2B Export & Buyer Agent',
      meta: [
        { name: 'description', content: 'Official B2B Export and Sourcing Buyer Agent for Indonesia. Sourcing Indonesian Teak Furniture, Coffee & Coconut Commodities, Authentic Balinese Handcrafted Arts.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})