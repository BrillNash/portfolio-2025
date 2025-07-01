<template>
  <UApp>
    <NuxtPage class="overflow-x-hidden" />
  </UApp>
</template>

<script lang="ts" setup>
useHead({
  title: 'Brill Nash – Software Developer | Full-Stack Engineer from Cebu',
  meta: [
    { name: 'description', content: 'Portfolio of Brill Nash, a software engineer from Cebu specializing in full-stack web development using Vue.js, Node.js, and cloud technologies.' },
    { name: 'author', content: 'Brill Nash' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Brill Nash – Software Developer' },
    { property: 'og:description', content: 'Explore the work of Brill Nash, a Cebu-based software engineer crafting scalable web apps.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://portfolio-brillnash.vercel.app/' },
    { property: 'og:image', content: '/images/profile_1.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Brill Nash – Software Developer' },
    { name: 'twitter:description', content: 'Developer portfolio by Brill Nash, Vue.js & Node.js expert based in Cebu.' },
    { name: 'twitter:image', content: '/images/profile_1.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://brillnash.dev/' }
  ]
});
</script>
