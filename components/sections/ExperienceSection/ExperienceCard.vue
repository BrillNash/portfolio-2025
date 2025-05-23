<template>
  <li class="bg-cyan-950/20 flex flex-col gap-2 p-4 border border-transparent hover:border-cyan-600 hover:bg-cyan-900/50 duration-500 transition-colors">
    <span class="text-violet-500 font-bold">{{ experienceDate }}</span>
    <span class="font-bold">{{ props.experience.role }}</span>
    <span class="underline underline-offset-4">{{ props.experience.company }}</span>
    <p>{{ props.experience.job_description }}</p>
  </li>
</template>

<script lang="ts" setup>
import type { ExperienceItem } from '~/constants/types';

type Props = {
  experience: ExperienceItem
}

const props = defineProps<Props>()
const experienceDate = formatDateRange(props.experience.epochStart, props.experience.epochEnd)
</script>
