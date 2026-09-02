<script setup>
import { companyInfo } from '@/data/company'
</script>

<template>
  <footer class="bg-slate-900 text-slate-300 py-12 md:py-16 mt-0">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-6xl">
      <div>
        <h3 class="text-white text-xl md:text-2xl font-bold mb-4">{{ companyInfo.name }}</h3>
        <p class="text-xs md:text-sm leading-relaxed mb-6">{{ companyInfo.description }}</p>
        <p class="text-xs md:text-sm italic border-l-2 border-[#737474] pl-3 py-1">{{ companyInfo.tagline }}</p>
      </div>
      <div class="md:pl-8">
        <h3 class="text-white text-base md:text-lg font-bold mb-6">Internal Links</h3>
        <ul class="space-y-3 text-xs md:text-sm">
          <li><RouterLink to="/" class="hover:text-white transition flex items-center">- Beranda</RouterLink></li>
          <li><a href="/#about" class="hover:text-white transition flex items-center">- Tentang Kami</a></li>
          <li><RouterLink to="/products" class="hover:text-white transition flex items-center">- Produk / Katalog</RouterLink></li>
          <li><a href="/#contact" class="hover:text-white transition flex items-center">- Hubungi Kami</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-white text-base md:text-lg font-bold mb-6">Informasi Kontak</h3>
        <p class="text-xs md:text-sm mb-4 border-b border-slate-700 pb-3 flex items-start">
          <span class="mr-3 text-lg">📍</span>
          {{ companyInfo.address }}
        </p>
        <p class="text-xs md:text-sm mb-4 border-b border-slate-700 pb-3 flex items-start">
          <span class="mr-3 text-lg">📞</span>
          {{ companyInfo.phone }}
        </p>
        <p class="text-xs md:text-sm flex items-start">
          <span class="mr-3 text-lg">✉️</span>
          {{ companyInfo.email }}
        </p>
      </div>
    </div>
    <div class="border-t border-slate-800 mt-10 md:mt-12 pt-6 text-center text-xs text-slate-500 px-4">
      &copy; {{ new Date().getFullYear() }} {{ companyInfo.name }}. All rights reserved. Built for global sourcing.
    </div>
  </footer>
</template>
