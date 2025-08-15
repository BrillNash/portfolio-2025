<template>
  <UModal
    v-model:open="isOpen"
    :title="props.name"
    :aria-describedby="props.description"
    :ui="{ 
      overlay: 'bg-slate-950/80', 
      content: 'bg-slate-950 max-w-5xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)]', 
      wrapper: 'overflow-auto max-h-16',
      title: 'text-white text-xl sm:text-2xl',
      description: 'text-white border-none pr-8'
    }"
    class="ring-gray-800 divide-gray-800"
    @close="emits('close')"
  >
    <template #body>
      <div class="space-y-8 text-white">
        <p>{{ props.description }}</p>
        <div class="space-y-4">
          <p>Features implimented:</p>
          <ul class="flex flex-wrap justify-center items-start gap-4">
            <li 
              v-for="feature in props.features" :key="feature.feature_name"
              class="w-72 space-y-2"
            >
              <NuxtImg 
                :src="feature.file" 
                :alt="feature.feature_name"
              />
              <span>{{ feature.feature_name }}</span>
              <p>{{ feature.description }}</p>
            </li>
          </ul>
        </div>
        <p>Tech stack: {{ props.techStack }}</p>
      </div>
    </template>
  </UModal>
</template>

<script lang="ts" setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import type { Feature } from '~/constants/types'

type Props = {
  name: string
  description: string
  techStack: string
  features: Feature[]
}

const emits = defineEmits<{
  close: []
}>()
const props = defineProps<Props>()
const breakpoints = useBreakpoints(breakpointsTailwind)
const isOpen = defineModel<boolean>('is-open')
</script>