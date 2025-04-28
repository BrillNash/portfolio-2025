<template>
  <section class="p-8 text-white min-h-screen space-y-8 relative">
    <LazySectionTitle :title="service.title" :description="service.description"/>
    <LazyServiceList :services="service.services"/>

    <!-- DECORATIVE -->
    <div class="absolute top-1/8 right-0 bg-cyan-600/20 rounded-full h-[500px] w-[500px] -rotate-12 -translate-y-1/2 translate-x-1/2 -z-10 blur-3xl will-change-[filter]" />
    <div class="absolute bottom-1/8 left-0 bg-cyan-600/20 rounded-full h-[400px] w-[700px] -rotate-12 translate-y-1/2 -translate-x-1/2 -z-10 blur-3xl will-change-[filter]" />
  </section>
</template>

<script lang="ts" setup>
const { service } = await import('@/constants/content.js')
</script>