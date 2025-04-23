<template>
  <div class="flex gap-8 p-20 flex-1">
    <div class="flex flex-col gap-8 max-w-3xl justify-center text-white">
      <h1 class="flex flex-col gap-4">
        <span class="font-bold text-4xl">{{ props.name }}</span>
        <span class="inline-block text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-cyan-600 text-7xl font-semibold">{{ props.role }}</span>
      </h1>
      <p>{{ props.description }}</p>
      <div class="flex gap-2">
        <UButton
          class="rounded-full bg-white text-violet-800 border border-violet-800 py-2 px-8 text-xl"
          size="md"
          color="neutral"
        >
          Download CV
        </UButton>
        <UButton
          class="rounded-full bg-white text-violet-800 border border-violet-800 p-3 text-xl"
          size="md"
          icon="uil:linkedin"
          color="neutral"
          to="https://www.linkedin.com/in/brill-nash-piner-a91947235/" 
          target="_blank"
        />
        <UButton
          class="rounded-full bg-white text-violet-800 border border-violet-800 p-3 text-xl"
          size="md"
          icon="uil:facebook"
          color="neutral"
          to="https://www.facebook.com/itsmeNash/"
          target="_blank"
        />
        <UButton
          class="rounded-full bg-white text-violet-800 border border-violet-800 p-3 text-xl"
          size="md"
          icon="uil:instagram"
          color="neutral"
          to="https://www.instagram.com/nashthoughts23/"
          target="_blank"
        />
      </div>
    </div>
    <div class="flex items-center justify-center w-full">
      <img src="/public/images/cropped2.png" alt="Profile" class="w-[400px] aspect-auto">
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  name: string,
  role: string,
  description: string
}

const props = defineProps<Props>()
</script>
