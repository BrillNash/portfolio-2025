<template>
  <section aria-labelledby="hero-section" class="relative flex flex-col overflow-hidden">
    <h1 id="hero-section" class="sr-only">Brill Nash Piner's Portfolio Introduction</h1>

    <LazyHero :name="hero.title_1" :role="hero.title_2" :description="hero.description" :links="hero.links"/>
    <LazyExperienceBar :profile-experience-list="hero.profile_experience_list" />
  </section>
</template>

<script lang="ts" setup>
const { hero } = await import('@/constants/content.js')

useHead({
  title: `${hero.title_1} | ${hero.title_2}`,
  meta: [
    { name: 'description', content: hero.description },
  ]
})

</script>