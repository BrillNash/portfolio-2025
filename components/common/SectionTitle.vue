<template>
  <div class="space-y-4 sm:space-y-8 text-center py-16">
    <h2 class="inline-block text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-cyan-600 text-5xl font-bold leading-15">{{ props.title }}</h2>
    <p class="w-full max-w-4xl mx-auto px-4">{{ props.description }}</p>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string
  description: string
}

const props = defineProps<Props>()
</script>