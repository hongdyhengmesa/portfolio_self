<template>
  <section class="relative min-h-screen flex items-center bg-[#0a0a0f] text-gray-200 px-6 py-20 overflow-hidden">

    <!-- Glow Orbs -->
    <div class="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-80px] right-[-80px]"></div>
    <div class="absolute w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 left-[-60px]"></div>
    <div class="absolute w-[200px] h-[200px] bg-cyan-400 opacity-20 blur-3xl rounded-full top-1/2 left-1/2"></div>

    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

      <!-- LEFT -->
      <div>
        <!-- Label -->
        <p class="text-xs tracking-[0.2em] uppercase text-blue-400 mb-5 flex items-center gap-2">
          <span class="w-7 h-[1px] bg-blue-400 inline-block"></span>
          About me
        </p>

        <!-- Title -->
        <h1 class="text-5xl font-bold leading-tight mb-6">
          Crafting digital <br />
          <span class="text-blue-400">experiences</span>
        </h1>

        <!-- Text -->
        <p class="text-gray-400 mb-3 max-w-md">
          Hello, I'm Mesa — a web developer who believes code should be as clean as the interfaces it powers.
        </p>

        <p class="text-gray-400 mb-6 max-w-md">
          I specialize in Vue.js and NestJS, building products that are fast, accessible, and enjoyable to use.
        </p>

        <!-- Button -->
        <a 
          href="#" 
          class="inline-flex items-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 uppercase text-xs tracking-widest hover:bg-blue-400/10 transition"
        >
          Download CV
        </a>

        <!-- Skills -->
        <div class="mt-12">
          <p class="text-sm uppercase tracking-widest text-gray-500 mb-6">Proficiency</p>

          <SkillBar name="HTML + CSS" :level="85" />
          <SkillBar name="Vue.js" :level="75" />
          <SkillBar name="NestJS + laravel" :level="60" />
          <SkillBar name="Tailwind CSS" :level="85" />
          <SkillBar name="MySQL" :level="75" />
        </div>
      </div>

      <!-- RIGHT -->
      <div class="flex justify-center">
        <div class="relative w-[320px]">

          <!-- Border -->
          <div class="absolute inset-[-16px] border border-blue-400/30"></div>

          <!-- Image -->
          <img 
            src="/src/assets/per1.JPG"
            class="w-full aspect-[4/5] object-cover relative z-10 rounded"
          />

          <!-- Corner borders -->
          <span class="absolute top-[-16px] left-[-16px] w-5 h-5 border-t-2 border-l-2 border-blue-400"></span>
          <span class="absolute top-[-16px] right-[-16px] w-5 h-5 border-t-2 border-r-2 border-blue-400"></span>
          <span class="absolute bottom-[-16px] left-[-16px] w-5 h-5 border-b-2 border-l-2 border-blue-400"></span>
          <span class="absolute bottom-[-16px] right-[-16px] w-5 h-5 border-b-2 border-r-2 border-blue-400"></span>

          <!-- Stats -->
          <div class="absolute bottom-10 left-[-85px] bg-gray-900/90 border border-blue-400/30 p-3 backdrop-blur">
            <p class="text-xl font-bold">4</p>
            <p class="text-xs text-gray-500">Years stu.</p>
          </div>

          <div class="absolute top-8 right-[-75px] bg-gray-900/90 border border-blue-400/30 p-3 backdrop-blur">
            <p class="text-xl font-bold">4+</p>
            <p class="text-xs text-gray-500">Projects</p>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import SkillBar from '../components/SkillBar.vue'
</script>