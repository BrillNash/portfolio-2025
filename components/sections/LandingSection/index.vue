<template>
  <section class="relative flex flex-col overflow-hidden">
    <LazyHero :name="hero.title_1" :role="hero.title_2" :description="hero.description"/>
    <LazyExperienceBar :profile-experience-list="hero.profile_experiece_list" />
  </section>
</template>

<script lang="ts" setup>
const { hero } = await import('@/constants/content.js')
</script>