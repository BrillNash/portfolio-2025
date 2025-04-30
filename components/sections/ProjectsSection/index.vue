<template>
  <section class="p-5 sm:p-8 w-full text-white min-h-screen space-y-8 relative">
    <SectionTitle :title="projects.title" :description="projects.description"/>
    <ProjectList :projects="projects.projects"/>
  </section>
</template>

<script lang="ts" setup>
const { projects } = await import("~/constants/content.js")
</script>