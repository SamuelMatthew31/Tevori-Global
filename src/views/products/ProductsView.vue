<script setup>
</script>

<template>
  <div class="py-24 px-4 bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center">
    <div class="container mx-auto max-w-4xl text-center">
      <div class="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-[#737474] font-semibold text-sm mb-6">
        Product Categories
      </div>
      <h1 class="text-4xl md:text-5xl font-black text-slate-800 mb-6">Katalog Produk</h1>
      <div class="w-16 h-1 bg-[#737474] mx-auto mb-8"></div>
      <p class="text-slate-600 mb-12 text-lg">Telusuri lebih dari <strong class="text-slate-800">>150 SKU varian produk</strong> dari supplier terverifikasi kami (Furniture, Komoditi Alam, dan Kerajinan Seni). Harga berdasarkan Quotation.</p>
      
      <div class="bg-white p-16 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
        <!-- Decor -->
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-gray-50 rounded-full opacity-50"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-50 rounded-full opacity-50"></div>
        
        <div class="relative z-10">
          <div class="text-7xl mb-6">📦</div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">E-Katalog Sedang Disiapkan</h3>
          <p class="text-slate-500 leading-relaxed max-w-lg mx-auto">Sistem inventaris kami yang terintegrasi (dengan kapabilitas multi-currency dan approval B2B) sedang dimantapkan.</p>
          <p class="text-slate-500 leading-relaxed max-w-lg mx-auto mt-4 font-medium">Silakan hubungi kami untuk mendapatkan dokumen Price List / Katalog PDF via WhatsApp.</p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/" class="px-8 py-3 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition">Kembali ke Beranda</RouterLink>
            <a href="/#contact" class="px-8 py-3 bg-[#737474] text-white font-bold rounded-lg hover:bg-slate-700 transition">Request Katalog PDF</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
