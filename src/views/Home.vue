<template>
  <section class="relative min-h-screen flex flex-col justify-center bg-[#080810] text-gray-200 px-6 md:px-16 overflow-hidden">

    <!-- Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

    <!-- Glow -->
    <div class="absolute w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl top-1/2 right-10 -translate-y-1/2"></div>

    <!-- NAV -->
    <nav class="absolute top-0 left-0 right-0 flex justify-between items-center px-6 md:px-16 py-6 z-10">
      <div class="text-indigo-400 text-sm tracking-widest font-mono">HDM.dev</div>

      <ul class="hidden md:flex gap-8 text-sm text-gray-400">
        <li><RouterLink to="/work" class="hover:text-white">Work</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-white">About</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-white">Contact</RouterLink></li>
      </ul>

      <RouterLink 
        to="/contact"
        class="text-xs uppercase tracking-widest border border-indigo-400/40 px-4 py-2 hover:bg-indigo-500/10 text-indigo-400"
      >
        Hire me
      </RouterLink>
    </nav>

    <!-- CONTENT -->
    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-24 relative z-10">

      <!-- LEFT -->
      <div class="animate-fadeInUp">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1 border border-indigo-400/20 bg-indigo-400/10 rounded-full mb-6">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span class="text-xs text-indigo-300 tracking-wide">Available for Internship</span>
        </div>

        <!-- Title -->
        <h1 class="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight mb-4">
          Hi, I'm <br />
          <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hong Dyhengmesa
          </span>
        </h1>

        <!-- Typewriter -->
        <div class="flex items-center gap-3 mb-6">
          <span class="text-sm font-mono text-gray-500">~/role $</span>
          <span class="text-sm font-mono text-indigo-400 min-w-[180px]">{{ displayText }}</span>
          <span class="w-[2px] h-4 bg-indigo-400 animate-pulse"></span>
        </div>

        <!-- Bio -->
        <p class="text-gray-400 max-w-md mb-10">
          I build fast, accessible, and enjoyable web experiences — using Vue.js and NestJS.
        </p>

        <!-- Buttons -->
        <div class="flex gap-4 flex-wrap">
          <a href="/cv.pdf" download class="relative overflow-hidden group bg-indigo-500 px-6 py-3 text-white font-semibold rounded">
            <span class="relative z-10 flex items-center gap-2">
              <DownloadIcon :size="14" /> Download CV
            </span>
            <span class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
          </a>

          <RouterLink 
            to="/projects"
            class="flex items-center gap-2 border border-white/10 px-6 py-3 text-gray-400 hover:text-white hover:border-white/30 transition rounded"
          >
            View Projects <ArrowRightIcon :size="14" />
          </RouterLink>
        </div>

        <!-- Social -->
        <div class="flex items-center gap-6 mt-12 border-t border-white/10 pt-6">
          <span class="text-xs uppercase tracking-widest text-gray-500">Find me</span>

          <div class="flex gap-3">
            <a href="https://github.com/hongdyhengmesa" class="w-8 h-8 flex items-center justify-center border border-white/10 rounded hover:border-indigo-400 hover:text-indigo-400">
              <GithubIcon :size="20" />
            </a>
            <a href="https://www.linkedin.com/in/hong-dyhengmesa-74b3b536b/" class="w-8 h-8 flex items-center justify-center border border-white/10 rounded hover:border-indigo-400 hover:text-indigo-400">
              <LinkedinIcon :size="20" />
            </a>
            <a href="https://web.facebook.com/hong.dyhengmesa.2025" class="w-8 h-8 flex items-center justify-center border border-white/10 rounded hover:border-indigo-400 hover:text-indigo-400">
              <Facebook :size="20" />
            </a>
          </div>
        </div>

      </div>

      <!-- RIGHT -->
      <div class="flex justify-center animate-fadeInUp">

        <div class="relative w-[280px] h-[280px] animate-float">

          <!-- Gradient Ring -->
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-spin-slow"></div>

          <div class="absolute inset-[4px] bg-[#080810] rounded-full"></div>

          <!-- Image -->
          <img 
            src="/src/assets/per1.JPG"
            class="w-full h-full object-cover rounded-full relative z-10"
          />

          <!-- Stats -->
          <div class="absolute bottom-2 left-[-60px] bg-black/80 border border-indigo-400/30 px-3 py-2 text-xs rounded">
            <p class="font-bold">4</p>
            <p class="text-gray-400">Years stu</p>
          </div>

          <div class="absolute top-4 right-[-60px] bg-black/80 border border-indigo-400/30 px-3 py-2 text-xs rounded">
            <p class="font-bold">4+</p>
            <p class="text-gray-400">Projects</p>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Download as DownloadIcon, ArrowRight as ArrowRightIcon,
         Github as GithubIcon, Linkedin as LinkedinIcon,
         Twitter as TwitterIcon, 
         Facebook} from 'lucide-vue-next'

const texts = ['Vue Developer', 'Backend Developer', 'Web Developer']
const displayText = ref('')
let idx = 0, charIdx = 0, erasing = false, timer = null

function tick() {
  const word = texts[idx]
  if (!erasing) {
    displayText.value = word.slice(0, ++charIdx)
    if (charIdx === word.length) { erasing = true; timer = setTimeout(tick, 1600); return }
  } else {
    displayText.value = word.slice(0, --charIdx)
    if (charIdx === 0) { erasing = false; idx = (idx + 1) % texts.length; timer = setTimeout(tick, 300); return }
  }
  timer = setTimeout(tick, erasing ? 50 : 80)
}

onMounted(() => tick())
onUnmounted(() => clearTimeout(timer))
</script>

<style>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease forwards;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes spinSlow {
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spinSlow 10s linear infinite;
}
</style>