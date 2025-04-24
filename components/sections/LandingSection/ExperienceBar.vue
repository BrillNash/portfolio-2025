<template>
  <ul class="flex flex-col sm:flex-row gap-72 mt-32 sm:mt-0 sm:gap-4 p-8 pb-12 w-full items-center justify-center">
    <li v-for="item in props.profileExperienceList" :key="item.num" class="w-1/3 flex items-center justify-center text-white gap-2">
      <span class="text-6xl sm:text-4xl font-bold">{{ item.num }}</span>
      <span class="text-2xl sm:text-xl font-bold">{{ item.description }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ProfileExperienceItem } from '~/constants/types';

type Props = {
  profileExperienceList: ProfileExperienceItem[]
}

const props = defineProps<Props>()
</script>
