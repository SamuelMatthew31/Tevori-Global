import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  srcDir: 'src/',
  
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
    validateAppHead: true
  },

  sitemap: {
  },

  routeRules: {
    '/sitemap.xml': { prerender: true }
  },

  runtimeConfig: {
    sanityApiToken: process.env.SANITY_API_TOKEN,
    public: {
      sanityProjectId: process.env.SANITY_PROJECT_ID,
      sanityDataset: process.env.SANITY_DATASET || 'production',
    }
  },

  app: {
    head: {
      title: 'PT Tevori Global Indonesia - B2B Export & Buyer Agent',
      meta: [
        { name: 'description', content: 'Official B2B Export and Sourcing Buyer Agent for Indonesia. Sourcing Indonesian Teak Furniture, Coffee & Coconut Commodities, Authentic Balinese Handcrafted Arts.' },
        { property: 'og:image', content: 'https://tevori-global.vercel.app/companyLogo.png' },
        { property: 'twitter:image', content: 'https://tevori-global.vercel.app/companyLogo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})