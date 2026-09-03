<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { companyInfo } from '@/data/company'

const isMobileMenuOpen = ref(false)
const router = useRouter()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Smooth scrolling function with offset for the fixed navbar
const scrollToSection = (hash) => {
  closeMobileMenu()
  if (window.location.pathname !== '/') {
    router.push({ path: '/', hash: hash })
  } else {
    const el = document.querySelector(hash)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64 // 64px is h-16
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <nav class="bg-white text-slate-800 fixed w-full z-50 top-0 shadow-sm border-b border-gray-100 h-16 flex items-center">
    <div class="container mx-auto px-4 flex justify-between items-center max-w-7xl">
      <RouterLink to="/" class="text-xl font-extrabold tracking-wider text-[#737474] uppercase relative z-50 shrink-0" @click="closeMobileMenu">
        {{ companyInfo.short_name }}
      </RouterLink>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex space-x-6 text-[13px] font-bold text-slate-600 items-center">
        <li><RouterLink to="/" class="hover:text-[#737474] transition">Beranda</RouterLink></li>
        <li><a href="#about" @click.prevent="scrollToSection('#about')" class="hover:text-[#737474] transition">Tentang Kami</a></li>
        <li><a href="#services" @click.prevent="scrollToSection('#services')" class="hover:text-[#737474] transition">Layanan</a></li>
        <li><a href="#how-we-work" @click.prevent="scrollToSection('#how-we-work')" class="hover:text-[#737474] transition">Cara Kerja</a></li>
        <li><a href="#testimonials" @click.prevent="scrollToSection('#testimonials')" class="hover:text-[#737474] transition">Testimoni</a></li>
        <li><a href="#insights" @click.prevent="scrollToSection('#insights')" class="hover:text-[#737474] transition">Berita</a></li>
        <li><RouterLink to="/products" class="hover:text-[#737474] transition">Katalog</RouterLink></li>
        <li><a href="#contact" @click.prevent="scrollToSection('#contact')" class="bg-[#737474] text-white px-4 py-2 rounded font-semibold hover:bg-slate-700 transition">Kontak</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="lg:hidden text-slate-800 hover:text-[#737474] focus:outline-none z-50 relative p-2" aria-label="Toggle menu">
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-slate-900 bg-opacity-40 z-40 lg:hidden backdrop-blur-sm" @click="closeMobileMenu"></div>
    </transition>

    <!-- Mobile Menu Slide-in -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-40 lg:hidden flex flex-col pt-24 px-8 overflow-y-auto">
        <ul class="flex flex-col space-y-5 text-lg font-bold text-slate-800">
          <li><RouterLink to="/" class="block hover:text-[#737474] transition" @click="closeMobileMenu">Beranda</RouterLink></li>
          <li class="border-t border-gray-100 pt-5"><a href="#about" class="block hover:text-[#737474] transition" @click.prevent="scrollToSection('#about')">Tentang Kami</a></li>
          <li class="border-t border-gray-100 pt-5"><a href="#services" class="block hover:text-[#737474] transition" @click.prevent="scrollToSection('#services')">Layanan Kami</a></li>
          <li class="border-t border-gray-100 pt-5"><a href="#how-we-work" class="block hover:text-[#737474] transition" @click.prevent="scrollToSection('#how-we-work')">Cara Kerja</a></li>
          <li class="border-t border-gray-100 pt-5"><a href="#testimonials" class="block hover:text-[#737474] transition" @click.prevent="scrollToSection('#testimonials')">Testimoni Klien</a></li>
          <li class="border-t border-gray-100 pt-5"><a href="#insights" class="block hover:text-[#737474] transition" @click.prevent="scrollToSection('#insights')">Berita & Artikel</a></li>
          <li class="border-t border-gray-100 pt-5"><RouterLink to="/products" class="block hover:text-[#737474] transition" @click="closeMobileMenu">Produk / Katalog</RouterLink></li>
          <li class="border-t border-gray-100 pt-5"><a href="#contact" class="block hover:text-[#737474] transition" @click.prevent="scrollToSection('#contact')">Hubungi Kami</a></li>
        </ul>
        <div class="mt-8 pb-10">
            <a :href="'https://wa.me/62' + companyInfo.phone.replace(/\s/g, '').replace(/^0/, '')" target="_blank" class="block w-full text-center bg-[#737474] text-white py-4 rounded-xl font-bold hover:bg-slate-700 transition shadow-lg" @click="closeMobileMenu">
              Chat WhatsApp
            </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
