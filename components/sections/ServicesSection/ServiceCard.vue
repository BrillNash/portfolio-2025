<template>
  <li class="flex flex-col sm:grid grid-cols-3 justify-between items-start sm:items-center gap-8 bg-violet-950/20 p-4 border border-transparent hover:border-violet-600 hover:bg-violet-900/50 duration-500 transition-colors rounded-sm">
    <span class="text-xl sm:text-4xl font-semibold col-span-1">{{ serviceItem.title }}</span>
    <p class="col-span-2">{{ serviceItem.description }}</p>
  </li>
</template>

<script lang="ts" setup>
import type { ServiceItem } from '~/constants/types';

type Props = {
  serviceItem: ServiceItem
}

const { serviceItem } = defineProps<Props>()
</script>