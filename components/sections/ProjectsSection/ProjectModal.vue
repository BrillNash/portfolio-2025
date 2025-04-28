<template>
  <UModal
    v-model:open="isOpen"
    :title="props.name"
    :description="props.description"
    :ui="{ 
      overlay: 'bg-slate-950/80', 
      content: 'bg-slate-950 max-w-5xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)]', 
      wrapper: 'overflow-auto max-h-16',
      title: 'text-white',
      description: 'text-white border-none pr-8'
    }"
    class="reymond ring-gray-800 divide-gray-800"
    @close="emits('close')"
  >
    <template #body>
      <div class="space-y-8 text-white">
        <ul class="flex flex-wrap justify-center items-start gap-4">
          <li 
            v-for="feature in props.features" :key="feature.feature_name"
            class="w-72 space-y-2"
          >
            <img 
              :src="feature.file" 
              alt="image"
            >
            <span>{{ feature.feature_name }}</span>
            <p>{{ feature.description }}</p>
          </li>
        </ul>
        <p>Tech stack: {{ props.techStack }}</p>
      </div>
    </template>
  </UModal>
</template>

<script lang="ts" setup>
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
const isOpen = defineModel<boolean>('is-open')
</script>