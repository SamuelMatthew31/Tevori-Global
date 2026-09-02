<script setup>
import { companyInfo } from '@/data/company'
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-gray-50">
    <div class="container mx-auto max-w-5xl">
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row mx-2 md:mx-0">
        
        <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Mari Berkolaborasi.</h2>
          <p class="text-slate-500 text-sm md:text-base mb-8">Hubungi kami untuk discuss detail requirement pengadaan produk dari Indonesia ke seluruh destinasi.</p>
          
          <div class="space-y-4 md:space-y-6">
            <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div class="text-xl md:text-2xl mr-4 mt-0.5">📍</div>
              <div>
                <p class="text-xs md:text-sm font-bold text-slate-800">Alamat</p>
                <p class="text-slate-600 text-xs md:text-sm mt-1">{{ companyInfo.address }}</p>
              </div>
            </div>
            <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div class="text-xl md:text-2xl mr-4 mt-0.5">📞</div>
              <div>
                <p class="text-xs md:text-sm font-bold text-slate-800">Telepon / WhatsApp</p>
                <p class="text-slate-600 text-xs md:text-sm mt-1">{{ companyInfo.phone }}</p>
                <p class="text-xs text-slate-500 mt-1">PIC: Vigor (Managing Director)</p>
              </div>
            </div>
            <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div class="text-xl md:text-2xl mr-4 mt-0.5">✉️</div>
              <div>
                <p class="text-xs md:text-sm font-bold text-slate-800">Email</p>
                <p class="text-slate-600 text-xs md:text-sm mt-1">{{ companyInfo.email }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 p-8 md:p-12 bg-[#737474] text-white flex flex-col justify-center items-center text-center">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-6">💬</div>
            <h3 class="text-2xl md:text-3xl font-bold mb-4">Request Quotation</h3>
            <p class="mb-8 text-white/80 text-sm md:text-lg leading-relaxed px-2 md:px-4">Dapatkan penawaran terbaik (B2B/B2C). Konsultasikan free MOQ dan metode export yang tepat via percakapan langsung.</p>
            <a :href="'https://wa.me/62' + companyInfo.phone.replace(/\s/g, '').replace(/^0/, '')" target="_blank" class="bg-white text-[#737474] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:scale-105 transition-transform w-full shadow-lg text-base md:text-lg">Hubungi via WhatsApp</a>
        </div>
        
      </div>
    </div>
  </section>
</template>
