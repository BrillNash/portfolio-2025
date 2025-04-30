<template>
  <section class="p-5 sm:p-8 w-full text-white min-h-screen space-y-8 relative">
    <LazySectionTitle :title="experience.title" :description="experience.description" />
    <LazyExperienceList :experiences="experience.experiences"/>

    <!-- DECORATIVE -->
    <div class="absolute top-1/2 left-1/2 bg-violet-600/10 rounded-full h-[600px] w-[600px] -translate-y-1/4 -translate-x-1/2 -z-10 blur-3xl will-change-[filter]" />
  </section>
</template>

<script lang="ts" setup>
const { experience } = await import('@/constants/content.js')
</script>