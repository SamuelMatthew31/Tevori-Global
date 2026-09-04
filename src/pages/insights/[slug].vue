<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSanityData } from '@/composables/useSanityData'

const route = useRoute()
const router = useRouter()
const { getInsightBySlug } = useSanityData()

const post = ref(null)
const loading = ref(true)

onMounted(async () => {
  post.value = await getInsightBySlug(route.params.slug)
  loading.value = false
})

const goBack = () => {
  router.push('/insights')
}
</script>

<template>
  <div class="pt-24 pb-16 md:py-32 px-4 bg-white min-h-screen relative border-t border-gray-100">
    <div class="container mx-auto max-w-3xl pt-4">
      
      <!-- Error State -->
      <div v-if="!post && !loading" class="text-center py-20">
        <h2 class="text-2xl font-bold text-slate-800 mb-4">Artikel Tidak Ditemukan</h2>
        <button @click="goBack" class="text-[#737474] underline">Kembali ke Daftar Artikel</button>
      </div>

      <!-- Post Content -->
      <article v-else-if="post">
        <!-- Nav & Meta -->
        <div class="mb-8">
          <button @click="goBack" class="text-slate-500 font-semibold text-sm hover:text-[#737474] transition mb-6 flex items-center">
             ← Kembali ke Artikel
          </button>
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-gray-100 px-3 py-1 rounded text-xs font-bold text-[#737474]">{{ post.category }}</span>
            <span class="text-slate-400 text-sm font-medium">{{ post.date }}</span>
          </div>
          <h1 class="text-3xl md:text-5xl font-black text-slate-800 leading-tight mb-8">
            {{ post.title }}
          </h1>
        </div>

        <!-- Featured Image -->
        <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-sm border border-gray-100 bg-gray-50">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
        </div>

        <!-- Body Content -->
        <div class="prose prose-lg prose-slate max-w-none mb-16 custom-prose" v-html="post.content"></div>
        
        <!-- Bottom Action -->
        <div class="border-t border-gray-200 pt-8 mt-12 mb-8 flex justify-between items-center bg-gray-50 p-8 rounded-2xl">
           <div>
             <h4 class="font-bold text-slate-800 md:text-lg mb-1">Butuh bantuan Sourcing?</h4>
             <p class="text-slate-500 text-sm">Konsultasikan gratis dengan agen kami.</p>
           </div>
           <a href="/#contact" class="bg-[#737474] text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 transition">Hubungi Kami</a>
        </div>
      </article>

    </div>
  </div>
</template>

<style>
.custom-prose p { margin-bottom: 1.5rem; color: #475569; line-height: 1.8; }
.custom-prose h3 { font-size: 1.5rem; font-weight: 800; color: #1e293b; margin-top: 2.5rem; margin-bottom: 1rem; }
</style>
