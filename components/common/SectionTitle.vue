<template>
  <div class="flex flex-col items-center justify-center gap-8 text-center py-16">
    <h2 class="inline-block text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-cyan-600 text-5xl font-semibold">{{ props.title }}</h2>
    <p class="max-w-3xl">{{ props.description }}</p>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string
  description: string
}

const props = defineProps<Props>()
</script>