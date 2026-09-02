<script setup>
import { RouterLink } from 'vue-router'
import { companyInfo } from '@/data/company'
</script>

<template>
  <nav class="bg-white text-slate-800 fixed w-full z-50 top-0 shadow-sm border-b border-gray-100 h-16 flex items-center">
    <div class="container mx-auto px-4 flex justify-between items-center max-w-6xl">
      <RouterLink to="/" class="text-xl font-extrabold tracking-wider text-[#737474] uppercase">
        {{ companyInfo.short_name }}
      </RouterLink>
      <ul class="flex space-x-8 text-sm font-semibold">
        <li><RouterLink to="/" class="hover:text-[#737474] transition">Beranda</RouterLink></li>
        <li><a href="/#about" class="hover:text-[#737474] transition">Tentang Kami</a></li>
        <li><a href="/#services" class="hover:text-[#737474] transition">Layanan</a></li>
        <li><RouterLink to="/products" class="hover:text-[#737474] transition">Produk</RouterLink></li>
        <li><a href="/#contact" class="hover:text-[#737474] transition">Kontak</a></li>
      </ul>
    </div>
  </nav>
</template>
