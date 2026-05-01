<template>
  <div class="mb-5">

    <!-- Top Info -->
    <div class="flex justify-between mb-2">
      <span class="text-sm text-gray-300 tracking-wide">
        {{ name }}
      </span>

      <span class="text-xs font-bold text-blue-400">
        {{ level }}%
      </span>
    </div>

    <!-- Track -->
    <div class="h-[3px] bg-white/10 rounded overflow-hidden">

      <!-- Bar -->
      <div 
        class="h-full rounded bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        :style="{ width: animated ? level + '%' : '0%' }"
      ></div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  name: String,
  level: Number
})

const animated = ref(false)

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 300)
})
</script>