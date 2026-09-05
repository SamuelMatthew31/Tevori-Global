<script setup>
import { onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '@/sections/home/HeroSection.vue'
import AboutSection from '@/sections/home/AboutSection.vue'
import ServicesSection from '@/sections/home/ServicesSection.vue'
import HowWeWorkSection from '@/sections/home/HowWeWorkSection.vue'
import TestimonialsSection from '@/sections/home/TestimonialsSection.vue'
import InsightsSection from '@/sections/home/InsightsSection.vue'
import ContactSection from '@/sections/home/ContactSection.vue'

const route = useRoute()

const scrollToHash = (hash) => {
  if (!hash) return
  nextTick(() => {
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 150)
  })
}

onMounted(() => {
  if (route.hash) {
    scrollToHash(route.hash)
  }
})

watch(() => route.hash, (newHash) => {
  if (newHash) {
    scrollToHash(newHash)
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
