<template>
  <section class="p-8 text-white min-h-screen w-full space-y-8 h-full">
    <LazySectionTitle :title="skills.title" :description="skills.description"/>
    <UTabs :items="tabItems" class="w-full" :ui="{ list: 'bg-black', indicator: 'bg-violet-600/40' }">
      <template #content="{ item }">
        <LazySkillList :skills="skills.skills.filter((skill) => skill.group.includes(item.label))" :group="item.label" />
      </template>
    </UTabs>
  </section>
</template>

<script lang="ts" setup>
const { skills, tabItems } = await import('@/constants/content.js')
</script>