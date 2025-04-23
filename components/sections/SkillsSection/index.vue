<template>
  <section class="p-8 text-white min-h-screen w-full flex flex-col gap-8 h-full">
    <LazySectionTitle :title="skills.title" :description="skills.description"/>
    <LazySkillList :skills="skills.skills" />
  </section>
</template>

<script lang="ts" setup>
const { skills } = await import('@/constants/content.js')
</script>