<template>
  <div
    class="lang-card flex items-center gap-2.5 px-3 py-2 rounded-xl
           border transition-all duration-300 cursor-default select-none"
    :class="variantClasses"
  >
    <!-- Devicon -->
    <i :class="icon" class="text-[20px] leading-none flex-shrink-0"></i>

    <!-- Text -->
    <div class="flex flex-col leading-none">
      <span class="text-[12px] sm:text-[13px] font-medium text-gray-200">{{ name }}</span>
      <span class="text-[10px] mt-[3px]" :class="tagColor">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name:    { type: String, required: true },
  tag:     { type: String, required: true },
  icon:    { type: String, required: true },

  variant: { type: String, default: 'frontend' },
})

const variantClasses = computed(() => ({
  // frontend → cyan tint
  'border-cyan-400/15 bg-cyan-500/5 hover:border-cyan-400/35 hover:bg-cyan-500/10':
    props.variant === 'frontend',
  // backend → purple tint
  'border-purple-400/15 bg-purple-500/5 hover:border-purple-400/35 hover:bg-purple-500/10':
    props.variant === 'backend',
  // mobile → blue tint
  'border-blue-400/15 bg-blue-500/5 hover:border-blue-400/35 hover:bg-blue-500/10':
    props.variant === 'mobile',
  // database → green tint
  'border-green-400/15 bg-green-500/5 hover:border-green-400/35 hover:bg-green-500/10':
    props.variant === 'database',
}))

const tagColor = computed(() => ({
  'text-cyan-500/70':   props.variant === 'frontend',
  'text-purple-400/70': props.variant === 'backend',
  'text-blue-400/70':   props.variant === 'mobile',
  'text-green-400/70':  props.variant === 'database',
}))
</script>

<style scoped>

.lang-card {
  
  will-change: transform;
}
.lang-card:hover {
  transform: translateY(-2px);
}
</style>