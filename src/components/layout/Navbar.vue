<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { companyInfo } from '@/data/company'

const isMobileMenuOpen = ref(false)

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
</script>

<template>
  <nav class="bg-white text-slate-800 fixed w-full z-50 top-0 shadow-sm border-b border-gray-100 h-16 flex items-center">
    <div class="container mx-auto px-4 flex justify-between items-center max-w-6xl">
      <RouterLink to="/" class="text-xl font-extrabold tracking-wider text-[#737474] uppercase relative z-50" @click="closeMobileMenu">
        {{ companyInfo.short_name }}
      </RouterLink>
      
      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 text-sm font-semibold">
        <li><RouterLink to="/" class="hover:text-[#737474] transition">Beranda</RouterLink></li>
        <li><a href="/#about" class="hover:text-[#737474] transition">Tentang Kami</a></li>
        <li><a href="/#services" class="hover:text-[#737474] transition">Layanan</a></li>
        <li><RouterLink to="/products" class="hover:text-[#737474] transition">Produk</RouterLink></li>
        <li><a href="/#contact" class="hover:text-[#737474] transition">Kontak</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="md:hidden text-slate-800 hover:text-[#737474] focus:outline-none z-50 relative p-2" aria-label="Toggle menu">
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
      <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-slate-900 bg-opacity-40 z-40 md:hidden backdrop-blur-sm" @click="closeMobileMenu"></div>
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
      <div v-if="isMobileMenuOpen" class="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-40 md:hidden flex flex-col pt-24 px-8 overflow-y-auto">
        <ul class="flex flex-col space-y-6 text-xl font-bold text-slate-800">
          <li><RouterLink to="/" class="block hover:text-[#737474] transition" @click="closeMobileMenu">Beranda</RouterLink></li>
          <li class="border-t border-gray-100 pt-6"><a href="/#about" class="block hover:text-[#737474] transition" @click="closeMobileMenu">Tentang Kami</a></li>
          <li class="border-t border-gray-100 pt-6"><a href="/#services" class="block hover:text-[#737474] transition" @click="closeMobileMenu">Layanan</a></li>
          <li class="border-t border-gray-100 pt-6"><RouterLink to="/products" class="block hover:text-[#737474] transition" @click="closeMobileMenu">Produk / Katalog</RouterLink></li>
          <li class="border-t border-gray-100 pt-6"><a href="/#contact" class="block hover:text-[#737474] transition" @click="closeMobileMenu">Kontak</a></li>
        </ul>
        <div class="mt-auto pb-10 pt-10">
            <a :href="'https://wa.me/62' + companyInfo.phone.replace(/\s/g, '').replace(/^0/, '')" target="_blank" class="block w-full text-center bg-[#737474] text-white py-4 rounded-xl font-bold hover:bg-slate-700 transition shadow-lg" @click="closeMobileMenu">
              Chat WhatsApp
            </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
