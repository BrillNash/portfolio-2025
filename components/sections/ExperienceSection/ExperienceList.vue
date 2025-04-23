<template>
  <ul class="flex flex-col gap-4 w-full">
    <LazyExperienceCard v-for="experience in props.experiences" :key="experience.company" :experience="experience"/>
  </ul>
</template>

<script lang="ts" setup>
import type { ExperienceItem } from '~/constants/types';


type Props = {
  experiences: ExperienceItem[]
}

const props = defineProps<Props>()
</script>