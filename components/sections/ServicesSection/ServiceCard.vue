<template>
  <li class="flex justify-between items-center gap-8 bg-black p-4 hover:bg-linear-to-r hover:from-violet-300 hover:to-violet-700 duration-500 transition-colors rounded-sm">
    <span class="text-4xl font-semibold w-1/2">{{ serviceItem.title }}</span>
    <p>{{ serviceItem.description }}</p>
  </li>
</template>

<script lang="ts" setup>
import type { ServiceItem } from '~/constants/types';

type Props = {
  serviceItem: ServiceItem
}

const { serviceItem } = defineProps<Props>()
</script>