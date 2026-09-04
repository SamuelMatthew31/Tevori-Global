<script setup>
import { onMounted, ref } from 'vue'

const studioContainer = ref(null)
const isLoading = ref(true)
const isMissingProjectId = ref(false)
const currentProjectId = ref('')

useHead({
  title: 'Admin Panel CMS - PT Tevori Global',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})

const initStudio = async (config) => {
  const { renderStudio } = await import('sanity')
  if (studioContainer.value) {
    renderStudio(studioContainer.value, config)
    isLoading.value = false
    isMissingProjectId.value = false
  }
}

onMounted(async () => {
  try {
    const { default: sanityConfig } = await import('../../../sanity.config.js')
    currentProjectId.value = sanityConfig.projectId || ''

    if (!currentProjectId.value || currentProjectId.value === 'y7s5i2p8' || currentProjectId.value === 'your-project-id') {
      isMissingProjectId.value = true
      isLoading.value = false
      return
    }

    await initStudio(sanityConfig)
  } catch (err) {
    console.error('Failed to load Sanity Studio:', err)
    isLoading.value = false
  }
})

const forceLoadStudio = async () => {
  isLoading.value = true
  const { default: sanityConfig } = await import('../../../sanity.config.js')
  await initStudio(sanityConfig)
}
</script>

<template>
  <div class="h-screen w-screen overflow-hidden bg-slate-950 text-white relative">
    
    <!-- Loading State -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-20"
    >
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-[#737474] border-t-transparent mb-4"></div>
      <p class="text-slate-200 font-bold tracking-wide">Memuat Admin Panel Sanity Studio...</p>
      <p class="text-slate-400 text-xs mt-2">PT Tevori Global Indonesia CMS</p>
    </div>

    <!-- Helpful Onboarding Modal for First Time Setup -->
    <div
      v-if="isMissingProjectId"
      class="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
    >
      <div class="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 max-w-xl w-full shadow-2xl">
        <div class="w-14 h-14 rounded-2xl bg-[#737474]/20 border border-[#737474]/40 flex items-center justify-center text-2xl mb-6">
          ⚙️
        </div>
        <h2 class="text-2xl font-black text-white mb-2">Hubungkan Project ID Sanity</h2>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          Admin Panel sudah terpasang dengan baik. Untuk mengaktifkan database cloud Sanity gratis milik Anda, masukkan <span class="text-white font-mono bg-slate-800 px-2 py-0.5 rounded">SANITY_PROJECT_ID</span> asli Anda ke file <span class="text-white font-mono bg-slate-800 px-2 py-0.5 rounded">.env</span>.
        </p>

        <div class="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800 text-xs text-slate-300 mb-8">
          <div class="flex items-start gap-3">
            <span class="w-6 h-6 rounded-full bg-[#737474] text-white flex items-center justify-center shrink-0 font-bold">1</span>
            <p>Buka <a href="https://www.sanity.io/manage" target="_blank" class="text-blue-400 underline font-semibold">sanity.io/manage</a> dan buat Project baru gratis (contoh: <em>tevori-global</em>).</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="w-6 h-6 rounded-full bg-[#737474] text-white flex items-center justify-center shrink-0 font-bold">2</span>
            <p>Salin <strong>Project ID</strong> (8 karakter huruf/angka) yang tertera di dashboard.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="w-6 h-6 rounded-full bg-[#737474] text-white flex items-center justify-center shrink-0 font-bold">3</span>
            <p>Buka file <strong class="text-white">.env</strong> di project ini, lalu ganti: <br /><code class="text-emerald-400">SANITY_PROJECT_ID=kode-id-anda</code></p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.sanity.io/manage"
            target="_blank"
            class="flex-1 bg-[#737474] hover:bg-slate-700 text-white font-bold py-3 px-5 rounded-xl text-center transition"
          >
            Buka Sanity Manage ↗
          </a>
          <button
            @click="forceLoadStudio"
            class="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 px-5 rounded-xl text-center transition text-xs"
          >
            Coba Buka Studio (ID: {{ currentProjectId }})
          </button>
        </div>
      </div>
    </div>

    <!-- Sanity Studio Canvas Mount -->
    <div ref="studioContainer" class="h-full w-full" />
  </div>
</template>
