<template>
  <section aria-labelledby="experience" class="w-full">
    <h2 id="experience" class="sr-only">Brill Nash Piner's Experience Statistics</h2>
    <ul class="flex flex-col sm:flex-row gap-72 mt-32 sm:mt-0 sm:gap-4 p-5 sm:p-8 pb-12 w-full items-center justify-center text-white">
      <li 
        v-for="item in props.profileExperienceList" 
        :key="item.num" 
        class="w-1/3 flex items-center justify-center gap-2 text-center"
      >
        <p class="text-6xl sm:text-4xl font-bold">{{ item.num }}</p>
        <p class="text-2xl sm:text-xl font-bold">{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import type { ProfileExperienceItem } from '~/constants/types';

type Props = {
  profileExperienceList: ProfileExperienceItem[]
}

const props = defineProps<Props>()
</script>
