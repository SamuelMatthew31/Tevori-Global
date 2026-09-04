<script setup>
import { onMounted } from 'vue'
import HeroSection from '@/sections/home/HeroSection.vue'
import AboutSection from '@/sections/home/AboutSection.vue'
import ServicesSection from '@/sections/home/ServicesSection.vue'
import HowWeWorkSection from '@/sections/home/HowWeWorkSection.vue'
import TestimonialsSection from '@/sections/home/TestimonialsSection.vue'
import InsightsSection from '@/sections/home/InsightsSection.vue'
import ContactSection from '@/sections/home/ContactSection.vue'
import { useSanityData } from '@/composables/useSanityData'
import { useProductStore } from '@/stores/productStore'

const { getProducts } = useSanityData()
const { setProducts } = useProductStore()

onMounted(async () => {
  const sanityProducts = await getProducts()
  if (sanityProducts && sanityProducts.length) {
    setProducts(sanityProducts)
  }
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <HowWeWorkSection />
    <TestimonialsSection />
    <InsightsSection />
    <ContactSection />
  </div>
</template>
