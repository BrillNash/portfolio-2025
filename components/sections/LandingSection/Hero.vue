<template>
  <main role="main" class="flex gap-0 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-50 p-5 sm:p-20 flex-col sm:flex-row flex-1 min-h-screen relative">
    <section aria-labelledby="about" class="flex flex-col flex-1 gap-8 max-w-3xl justify-center text-white">
      <h1 class="flex flex-col gap-4 text-white">
        <span class="text-2xl sm:text-4xl font-bold">{{ props.name }}</span>
        <span class="text-4xl sm:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-600">
          {{ props.role }}
        </span>
      </h1>

      <p id="about" class="text-white">{{ props.description }}</p>
      <nav aria-label="social links" class="flex gap-2">
        <UButton
          v-for="link in links"
          :key="link.link"
          class="rounded-full bg-white text-violet-800 border border-violet-800 p-3 text-xl"
          size="md"
          :icon="link.icon"
          color="neutral"
          :to="link.link" 
          target="_blank"
        />
      </nav>
    </section>
    <div class="flex sm:hidden lg:flex items-center justify-center">
      <NuxtImg src="/images/profile.webp" alt="Brill Nash Piner's profile photo" class="w-[250px] sm:w-[500px] rounded-lg aspect-auto"/>
    </div>

    <!-- DECORATIVE -->
    <div class="absolute top-1/2 left-0 bg-violet-600/20 rounded-full h-[300px] w-[1000px] -rotate-12 -translate-y-1/2 -translate-x-1/4 -z-10 blur-3xl will-change-[filter]" />
    <div class="absolute bottom-0 right-0 bg-cyan-600/20 rounded-full h-[300px] w-[1000px] rotate-12 -translate-y-1/2 translate-x-1/2 -z-10 blur-3xl will-change-[filter]" />
  </main>
</template>

<script lang="ts" setup>
import type { LinkItem } from '~/constants/types';

type Props = {
  name: string,
  role: string,
  description: string
  links: LinkItem[]
}

const props = defineProps<Props>()

useHead({
  title: 'Brill Nash Piner | Software Engineer',
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": props.name,
        "jobTitle": props.role,
        "description": props.description,
        "image": "https://portfolio-brillnash.vercel.app/images/profile.webp",
        "url": "https://portfolio-brillnash.vercel.app/",
        "sameAs": props.links.map(link => link.link)
      })
    }
  ]
})
</script>
