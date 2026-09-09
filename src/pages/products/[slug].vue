<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSanity } from '@/composables/useSanity'
import { useAsyncData, createError } from '#imports'

const route = useRoute()
const slug = route.params.slug
const { fetch } = useSanity()

// Fetch the specific product based on the URL slug
const query = `*[_type == "product" && slug.current == $slug][0] {
  "id": _id,
  title,
  category,
  "images": images[].asset->url,
  material,
  cbmEstimation,
  moq,
  
  // SEO specific fields
  metaTitle,
  metaDescription,
  "ogImage": ogImage.asset->url
}`

const { data: product } = await useAsyncData(`product-${slug}`, () => fetch(query, { slug }))

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true })
}

// Compute fallbacks so we always have strong SEO data
const seoTitle = computed(() => product.value.metaTitle || `${product.value.title} - B2B Sourcing | PT Tevori Global`)
const seoDesc = computed(() => product.value.metaDescription || `Order ${product.value.title} in bulk. Verified Indonesian sourcing by PT Tevori Global. Category: ${product.value.category}, MOQ: ${product.value.moq}.`)
const seoImage = computed(() => product.value.ogImage || (product.value.images && product.value.images.length > 0 ? product.value.images[0] : 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80'))

// Apply dynamic SEO tags
useSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  description: seoDesc,
  ogDescription: seoDesc,
  ogImage: seoImage,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="py-12 px-4 max-w-4xl mx-auto min-h-screen">
    <!-- Extremely minimal structure since this is only scaffolding for the SEO test -->
    <div class="mb-6">
      <NuxtLink to="/products" class="text-sm text-slate-500 hover:text-slate-900">&larr; Back to Catalog</NuxtLink>
    </div>
    
    <div v-if="product" class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div v-if="product.images?.length" class="mb-8 rounded-xl overflow-hidden bg-slate-100 max-h-96">
        <img :src="product.images[0]" :alt="product.title" class="w-full h-full object-cover" />
      </div>

      <div class="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3 tracking-wider uppercase">
        {{ product.category }}
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
        {{ product.title }}
      </h1>
      
      <div class="space-y-4 text-slate-600">
        <p><strong>Material:</strong> {{ product.material || 'Standard Export Spec' }}</p>
        <p><strong>Min. Order (MOQ):</strong> {{ product.moq ? `${product.moq} pcs` : 'Negotiable' }}</p>
        <p><strong>Est. CBM:</strong> {{ product.cbmEstimation ? `${product.cbmEstimation} m³` : 'Custom' }}</p>
      </div>
    </div>
  </div>
</template>
