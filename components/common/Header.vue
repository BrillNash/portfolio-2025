<template>
  <nav class="hidden sm:block sticky top-0 z-50 bg-slate-950 border-b-gray-700">
    <ul class="flex items-center justify-center gap-8 py-4 text-white font-semibold text-lg tracking-wide transition-colors">
      <li 
        v-for="item in headerItems" 
        :class="[
          'relative cursor-pointer space-x-1',
          { 'border-b text-violet-400': activeSection === item.id }
        ]" 
        @click="scrollToSection(item.id)"
      >
        <UIcon :name="item.icon" class="size-5 translate-y-1/8" />
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const { headerItems } = await import('@/constants/content.js')
const activeSection = ref('home');
const sectionIds = ['home', 'projects', 'services', 'experience', 'skills'];
const observers: IntersectionObserver[] = [];

const scrollToSection = (id: string) => {
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
      threshold: 0.5, // 50% of the section must be visible
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