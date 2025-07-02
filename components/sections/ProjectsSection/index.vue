<template>
  <section aria-labelledby="projects-section" class="p-5 sm:p-8 w-full text-white min-h-screen space-y-8 relative">
    <h2 id="projects-section" class="sr-only">Brill Nash Piner's Projects</h2>

    <LazySectionTitle :title="projects.title" :description="projects.description"/>
    <LazyProjectList :projects="projects.projects"/>
  </section>
</template>

<script lang="ts" setup>
const { projects } = await import("~/constants/content.js")
