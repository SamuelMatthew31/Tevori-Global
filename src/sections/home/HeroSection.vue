<script setup>
import { companyInfo } from '@/data/company'
</script>

<template>
  <section class="bg-gray-50 py-24 px-4 text-center min-h-[60vh] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-200">
    <div class="max-w-4xl mx-auto">
      <div class="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-[#737474] font-semibold text-sm mb-6 border border-slate-300">
        Professional Exporter & Buyer's Agent
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-8 leading-tight tracking-tight">
        {{ companyInfo.tagline }}
      </h1>
      <p class="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Connecting international buyers with trusted Indonesian manufacturers for <strong class="text-slate-800">furniture</strong>, <strong class="text-slate-800">commodities</strong>, and <strong class="text-slate-800">authentic crafts</strong>.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/#contact" class="bg-[#737474] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">Let's Talk Business</a>
        <RouterLink to="/products" class="bg-white border-2 border-[#737474] text-[#737474] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 transition-all">Explore Products</RouterLink>
      </div>
    </div>
  </section>
</template>
