<template>
  <li class="bg-violet-950/20 flex flex-col justify-center items-center gap-2 p-4 border border-transparent hover:border-violet-600 hover:bg-violet-900/50 duration-500 transition-colors">
    <UIcon :name="props.skill.icon" class="size-32" :class="{ 'invert': props.skill.name === 'Github' }" />
    <span>{{ props.skill.name }}</span>
  </li>
</template>

<script lang="ts" setup>
import type { SkillItem } from '~/constants/types';

type Props = {
  skill: SkillItem
}

const props = defineProps<Props>()
</script>