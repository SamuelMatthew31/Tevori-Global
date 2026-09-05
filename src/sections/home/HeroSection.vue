<script setup>
import { companyInfo } from '@/data/company'
</script>

<template>
  <section id="home" class="bg-gray-50 py-16 md:py-24 px-4 text-center min-h-[60vh] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-200">
    <div class="max-w-4xl mx-auto w-full pt-8 md:pt-0">
      <div class="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-[#737474] font-semibold text-xs md:text-sm mb-6 border border-slate-300">
        Professional Exporter & Buyer's Agent
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 md:mb-8 leading-tight tracking-tight px-2">
        {{ companyInfo.tagline }}
      </h1>
      <p class="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
        Connecting international buyers with trusted Indonesian manufacturers for <strong class="text-slate-800">furniture</strong>, <strong class="text-slate-800">commodities</strong>, and <strong class="text-slate-800">authentic crafts</strong>.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 px-4">
        <a href="#contact" class="bg-[#737474] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 w-full sm:w-auto">Let's Talk Business</a>
        <NuxtLink to="/products" class="bg-white border-2 border-[#737474] text-[#737474] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 transition-all w-full sm:w-auto">Explore Products</NuxtLink>
      </div>
    </div>
  </section>
</template>
