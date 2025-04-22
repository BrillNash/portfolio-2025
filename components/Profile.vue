<template>
  <div class="relative h-screen flex flex-col overflow-hidden">
    <section class="flex gap-8 p-20 flex-1">
      <div class="flex flex-col gap-8 max-w-3xl justify-center text-white">
        <p class="font-bold text-4xl">I am Brill Nash</p>
        <span class="inline-block text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-cyan-600 text-7xl font-semibold">Software Developer</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.</p>
        <div class="flex gap-2">
          <UButton
            class="rounded-full bg-white text-violet-800 border border-violet-800 py-2 px-8 text-xl"
            size="md"
            color="neutral"
          >
            Download CV
          </UButton>
          <UButton
            class="rounded-full bg-white text-violet-800 border border-violet-800 p-3 text-xl"
            size="md"
            icon="uil:linkedin"
            color="neutral"
            to="https://www.linkedin.com/in/brill-nash-piner-a91947235/" 
            target="_blank"
          />
          <UButton
            class="rounded-full bg-white text-violet-800 border border-violet-800 p-3 text-xl"
            size="md"
            icon="uil:facebook"
            color="neutral"
            to="https://www.facebook.com/itsmeNash/"
            target="_blank"
          />
          <UButton
            class="rounded-full bg-white text-violet-800 border border-violet-800 p-3 text-xl"
            size="md"
            icon="uil:instagram"
            color="neutral"
            to="https://www.instagram.com/nashthoughts23/"
            target="_blank"
          />
        </div>
      </div>
      <div class="flex items-center justify-center w-full">
        <div class="h-80 aspect-square bg-violet-500"></div>
        <img src="" alt="">
      </div>
    </section>
    <div class="flex gap-4 p-8 pb-12 w-full items-center justify-center">
      <div class="w-1/3 flex items-center justify-center text-white gap-2">
        <span class="text-4xl font-semibold">3</span> 
        <span class="text-xl">Years of experience</span>
      </div>
      <div class="w-1/3 flex items-center justify-center text-white gap-2">
        <span class="text-4xl font-semibold">50+</span> 
        <span class="text-xl">Projects</span>
      </div>
      <div class="w-1/3 flex items-center justify-center text-white gap-2">
        <span class="text-4xl font-semibold">1.5k</span> 
        <span class="text-xl">Clients</span>
      </div>
    </div>
    
    <!-- DECORATIVE -->
    <div class="absolute top-1/2 left-0 bg-violet-600/20 rounded-full h-[300px] w-[1000px] -rotate-12 -translate-y-1/2 -translate-x-1/4 -z-10 blur-3xl will-change-[filter]" />
    <div class="absolute bottom-0 right-0 bg-cyan-600/20 rounded-full h-[300px] w-[1000px] rotate-12 -translate-y-1/2 translate-x-1/2 -z-10 blur-3xl will-change-[filter]" />
  </div>
</template>