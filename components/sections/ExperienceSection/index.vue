<template>
  <section class="p-8 w-full text-white min-h-screen flex flex-col gap-8">
    <LazySectionTitle :title="experience.title" :description="experience.description" />
    <LazyExperienceList :experiences="experience.experiences"/>
  </section>
</template>

<script lang="ts" setup>
const { experience } = await import('@/constants/content.js')
</script>