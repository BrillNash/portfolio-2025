<template>
  <li class="flex flex-col sm:grid grid-cols-3 justify-between items-start sm:items-center gap-8 bg-black p-4 hover:bg-linear-to-r hover:from-violet-300 hover:to-violet-700 duration-500 transition-colors rounded-sm">
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