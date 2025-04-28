<template>
  <ul class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 items-center justify-center">
    <LazySkillCard v-for="skill in props.skills" :key="skill.icon" :skill="skill"/>
  </ul>
</template>

<script lang="ts" setup>
import type { SkillItem } from '~/constants/types';

type Props = {
  skills: SkillItem[]
  group: string
}

const props = defineProps<Props>()
</script>