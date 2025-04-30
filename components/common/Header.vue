<template>
  <nav class="fixed left-0 top-0 z-50 w-full bg-slate-950 border-b-gray-700 p-4">
    <ul class="hidden md:flex items-center justify-center gap-8 py-4 text-white font-bold text-sm tracking-wide transition-colors">
      <li 
        v-for="item in headerItems" 
        :class="[
          'relative cursor-pointer space-x-1 py-2 px-4 flex items-center justify-center',
          { 'bg-linear-to-r from-violet-500 to-cyan-600 shadow-violet-500/30 shadow-[0_0_10px_10px]': activeSection === item.id }
        ]" 
        @click="scrollToSection(item.id)"
      >
        <UIcon :name="item.icon" class="size-5" />
        <span>{{ item.label }}</span>
      </li>
    </ul>
    <div class="flex md:hidden text-white justify-between items-center">
      <h2 class="font-bold text-lg">Nash.io</h2>
      <UButton
        class="text-white"
        size="xl"
        icon="uil:bars"
        variant="link"
        @click="isDrawerOpen = !isDrawerOpen"
      />
    </div>
  </nav>
  <UDrawer 
    direction="left" 
    v-model:open="isDrawerOpen" 
    :handle="false"
    class="bg-slate-900 ring-none"
    :ui="{ overlay: 'bg-slate-950/30' }"
  >
    <template #content>
      <ul class="flex flex-col items-center justify-start gap-8 py-4 text-white font-bold text-2xl tracking-wide transition-colors w-screen mt-16">
        <li 
          v-for="item in headerItems" 
          :class="[
            'relative cursor-pointer space-x-1 py-2 px-4 flex items-center justify-center',
            { 'bg-linear-to-r from-violet-500 to-cyan-600 shadow-violet-500/30 shadow-[0_0_10px_10px]': activeSection === item.id }
          ]" 
          @click="scrollToSection(item.id)"
        >
          <UIcon :name="item.icon" class="size-5" />
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </template>
  </UDrawer>
</template>

<script lang="ts" setup>
const { headerItems } = await import('@/constants/content.js')
const activeSection = ref('home');
const sectionIds = ['home', 'projects', 'services', 'experience', 'skills'];
const observers: IntersectionObserver[] = [];
const isDrawerOpen = ref(false)

const scrollToSection = (id: string) => {
  isDrawerOpen.value = false
  const el = document.getElementById(id);
  if (el) {
    intersectionObserver(el, id)
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const intersectionObserver = (el: HTMLElement, id: string) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = id;
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1, // 10% of the section must be visible
    }
  );
  observer.observe(el);
  observers.push(observer);
}

onMounted(() => {
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      intersectionObserver(el, id)
    }
  });
});

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect());
});
</script>