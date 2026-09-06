<script setup>
definePageMeta({
  layout: false // Disable the main website layout (navbar, footer, etc.) for the CMS panel
})

useHead({
  title: 'Tevori Global CMS - Admin',
  meta: [
    { name: 'robots', content: 'noindex' }
  ],
  link: [
    // This tells Decap CMS exactly where to find the configuration file on Vercel
    { rel: 'cms-config-url', type: 'text/yaml', href: '/admin/config.yml' }
  ],
  script: [
    { src: 'https://unpkg.com/decap-cms@^3.1.0/dist/decap-cms.js' }
  ]
})
</script>

<template>
  <div>
    <!-- Decap CMS will automatically mount and render its heavy React UI over this div once the script loads -->
  </div>
</template>

<style>
/* Ensure any global Vue styles don't conflict with Decap CMS */
body {
  margin: 0;
  padding: 0;
}
</style>