<template>
  <li 
    class="group flex flex-col justify-center items-center gap-4 bg-cyan-950/20 p-4 border border-transparent hover:border-cyan-600 hover:bg-cyan-900/50 duration-500 transition-colors rounded-sm cursor-pointer"
    :aria-label="`Open project modal for ${props.project.name}`"
    tabindex="0"
    role="button"
    @click="isOpen = true"
    @keyup.enter="isOpen = true"
  >
    <div class="overflow-hidden rounded-xs">
      <NuxtImg 
        :src="props.project.file"
        :alt="`Preview image of ${props.project.name} project`"
        class="group-hover:scale-130 transition-all grayscale-100 group-hover:grayscale-0" 
      />
    </div>
    <h3 class="text-xl sm:text-3xl font-semibold">{{ props.project.name }}</h3>
    <p class="line-clamp-5">{{ props.project.description }}</p>
    <UButton class="self-end cursor-pointer" color="neutral" variant="link">Read more...</UButton>
  </li>
  <ProjectModal 
    v-model:is-open="isOpen" 
    :name="props.project.name" 
    :description="props.project.description" 
    :features="props.project.features"
    :tech-stack="props.project.tech_stack"
    @close="isOpen = false"
  />
</template>

<script lang="ts" setup>
import type { ProjectItem } from '~/constants/types';

type Props = {
  project: ProjectItem
}

const props = defineProps<Props>()
const isOpen = ref<boolean>(false)
</script>