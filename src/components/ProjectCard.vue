<template>
  <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
    
    <!-- Image -->
    <div class="relative">
      <img 
        :src="project.image" 
        alt="project"
        class="w-full h-48 object-cover"
      />

      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition"></div>
    </div>

    <!-- Content -->
    <div class="p-5">
      
      <!-- Title -->
      <h2 class="text-xl font-bold mb-2 text-white">
        {{ project.title }}
      </h2>

      <!-- Description -->
      <p class="text-gray-400 text-sm mb-4">
        {{ project.description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tech in project.tech"
          :key="tech"
          class="bg-gray-700 text-xs px-2 py-1 rounded"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Button -->
      <a 
        :href="project.link" 
        target="_blank"
        class="inline-block text-blue-400 hover:underline text-sm"
      >
        View Project →
      </a>

    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>