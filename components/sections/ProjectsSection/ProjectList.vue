<template>
  <ul class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center">
    <ProjectCard v-for="project in props.projects" :key="project.name" :project="project"/>
  </ul>
</template>

<script lang="ts" setup>
import type { ProjectItem } from '~/constants/types';

type Props = {
  projects: ProjectItem[]
}

const props = defineProps<Props>()
</script>