<template>
  <div class="flex gap-0 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-80 2xl:gap-100 p-5 sm:p-20 flex-col sm:flex-row flex-1 min-h-screen relative">
    <div class="flex flex-col flex-1 gap-8 max-w-3xl justify-center text-white">
      <h1 class="space-y-4">
        <p class="font-bold text-2xl sm:text-4xl">{{ props.name }}</p>
        <p class="inline-block text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-cyan-600 text-5xl sm:text-7xl font-semibold">{{ props.role }}</p>
      </h1>
      <p>{{ props.description }}</p>
      <div class="flex gap-2">
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
      </div>
    </div>
    <div class="flex sm:hidden lg:flex items-center justify-center">
      <NuxtImg src="/images/profile_1.png" alt="Profile" class="w-[250px] sm:w-[400px] aspect-auto"/>
    </div>

    <!-- DECORATIVE -->
    <div class="absolute top-1/2 left-0 bg-violet-600/20 rounded-full h-[300px] w-[1000px] -rotate-12 -translate-y-1/2 -translate-x-1/4 -z-10 blur-3xl will-change-[filter]" />
    <div class="absolute bottom-0 right-0 bg-cyan-600/20 rounded-full h-[300px] w-[1000px] rotate-12 -translate-y-1/2 translate-x-1/2 -z-10 blur-3xl will-change-[filter]" />
  </div>
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
</script>
