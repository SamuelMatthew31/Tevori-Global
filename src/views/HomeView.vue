<script setup>
import HeroSection from '@/sections/home/HeroSection.vue'
import AboutSection from '@/sections/home/AboutSection.vue'
import ServicesSection from '@/sections/home/ServicesSection.vue'
import HowWeWorkSection from '@/sections/home/HowWeWorkSection.vue'
import TestimonialsSection from '@/sections/home/TestimonialsSection.vue'
import InsightsSection from '@/sections/home/InsightsSection.vue'
import ContactSection from '@/sections/home/ContactSection.vue'
</script>

<template>
  <div class="home-wrapper">
    <HeroSection />
    <AboutSection id="about" />
    <ServicesSection id="services" />
    <HowWeWorkSection id="how-we-work" />
    <TestimonialsSection id="testimonials" />
    <InsightsSection id="insights" />
    <ContactSection id="contact" />
  </div>
</template>
