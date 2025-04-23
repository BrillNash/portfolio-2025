<template>
  <ul class="flex flex-col gap-4">
    <LazyServiceCard v-for="service in services" :key="service.title" :serviceItem="service"/>
  </ul>
</template>

<script lang="ts" setup>
import type { ServiceItem } from '~/constants/types';

type Props = {
  services: ServiceItem[]
}

const props = defineProps<Props>()
</script>