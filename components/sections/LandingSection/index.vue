<template>
  <section class="relative h-screen flex flex-col overflow-hidden">
    <LazyHero :name="hero.title_1" :role="hero.title_2" :description="hero.description"/>
    <LazyExperienceBar :profile-experience-list="hero.profile_experiece_list" />

    <!-- DECORATIVE -->
    <div class="absolute top-1/2 left-0 bg-violet-600/20 rounded-full h-[300px] w-[1000px] -rotate-12 -translate-y-1/2 -translate-x-1/4 -z-10 blur-3xl will-change-[filter]" />
    <div class="absolute bottom-0 right-0 bg-cyan-600/20 rounded-full h-[300px] w-[1000px] rotate-12 -translate-y-1/2 translate-x-1/2 -z-10 blur-3xl will-change-[filter]" />
  </section>
</template>

<script lang="ts" setup>
const { hero } = await import('@/constants/content.js')
</script>