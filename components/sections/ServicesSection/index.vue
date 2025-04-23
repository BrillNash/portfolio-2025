<template>
  <section class="p-8 text-white min-h-screen">
    <LazySectionTitle :title="service.title" :description="service.description"/>
    <LazyServiceList :services="service.services"/>
  </section>
</template>

<script lang="ts" setup>
const { service } = await import('@/constants/content.js')
</script>