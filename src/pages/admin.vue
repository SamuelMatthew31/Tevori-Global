<script setup>
import { onMounted } from 'vue'

definePageMeta({
  layout: false // Disable the main website layout (navbar, footer, etc.) for the CMS panel
})

useHead({
  title: 'Tevori Global CMS - Admin',
  meta: [
    { name: 'robots', content: 'noindex' }
  ],
  link: [
    { rel: 'cms-config-url', type: 'text/yaml', href: '/admin/config.yml' }
  ]
})

// Wait until Vue has completely finished hydrating the page DOM
// before we let Decap CMS inject its heavy React payload. 
// Otherwise, Vue and React will fight over the DOM and cause a blank screen!
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/decap-cms@^3.1.0/dist/decap-cms.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <div id="nc-root">
    <!-- Decap CMS will render its UI exactly here -->
  </div>
</template>

<style>
/* Ensure any global Vue styles don't conflict with Decap CMS */
body {
  margin: 0;
  padding: 0;
}
</style>