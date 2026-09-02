<script setup>
const steps = [
  {
    id: 1,
    title: 'Konsultasi & Requirement',
    desc: 'Diskusikan detail spesifikasi produk, target harga jual, dan volume (MOQ) yang perusahaan Anda butuhkan.',
    icon: '🤝'
  },
  {
    id: 2,
    title: 'Sourcing & Verifikasi',
    desc: 'Kami mencari supplier manufaktur terpercaya di Indonesia, menegosiasikan harga terbaik, dan meninjau sampel.',
    icon: '🔍'
  },
  {
    id: 3,
    title: 'Kontrol Kualitas (QC)',
    desc: 'Melakukan inspeksi dan pemantauan ketat pra-pengiriman untuk memastikan produk memenuhi standar regulasi internasional.',
    icon: '✅'
  },
  {
    id: 4,
    title: 'Ekspor & Logistik',
    desc: 'Penanganan komprehensif dokumen Bea Cukai (Custom Clearance) dan logistik kargo hingga ke negara tujuan.',
    icon: '🚢'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 px-4 bg-white border-t border-gray-100">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Bagaimana <span class="text-[#737474]">Cara Kerja Kami?</span></h2>
        <div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div>
        <p class="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto px-4">Kami menyederhanakan proses kompleks perdagangan internasional agar Anda bisa fokus pada pertumbuhan bisnis.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-2 md:px-0">
        <div v-for="(step, index) in steps" :key="step.id" class="relative bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-[#737474]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
          <!-- Arrow indicating flow (Except for the last item) -->
          <div v-if="index !== steps.length - 1" class="hidden lg:block absolute -right-4 top-1/4 transform -translate-y-1/2 text-gray-300 z-10 text-2xl group-hover:text-[#737474] transition-colors">
            ➔
          </div>
          
          <div class="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-3xl mb-6 relative z-10 border border-gray-100 group-hover:scale-110 transition-transform">
            {{ step.icon }}
          </div>
          <div class="inline-block bg-slate-200 text-slate-600 font-bold text-xs px-3 py-1 rounded-full mb-4">LANGKAH {{ step.id }}</div>
          <h3 class="text-lg font-bold text-slate-800 mb-3">{{ step.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
