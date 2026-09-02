<script setup>
import HeroSection from '@/sections/home/HeroSection.vue'
import AboutSection from '@/sections/home/AboutSection.vue'
import ServicesSection from '@/sections/home/ServicesSection.vue'
import ContactSection from '@/sections/home/ContactSection.vue'
</script>

<template>
  <div class="home-wrapper">
    <HeroSection />
    <AboutSection id="about" />
    <ServicesSection id="services" />
    <ContactSection id="contact" />
  </div>
</template>
