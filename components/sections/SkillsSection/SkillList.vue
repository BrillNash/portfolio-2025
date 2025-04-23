<template>
  <ul class="w-full flex gap-4 p-4 flex-wrap">
    <LazySkillCard v-for="skill in skills" :key="skill.icon" :skill="skill"/>
  </ul>
</template>

<script lang="ts" setup>
import type { SkillItem } from '~/constants/types';

type Props = {
  skills: SkillItem[]
}

const props = defineProps<Props>()
</script>