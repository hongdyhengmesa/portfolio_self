<template>
  <nav class="bg-gray-900 fixed w-full top-0 z-50 border-b border-gray-700">
    <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">

      <!-- Logo -->
      <h1 class="text-white text-xl font-bold">My-Portfolio</h1>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 text-gray-300">
        <li>
          <router-link to="/" class="hover:text-blue-400">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-blue-400">About</router-link>
        </li>
        <li>
          <router-link to="/projects" class="hover:text-blue-400">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:text-blue-400">Contact</router-link>
        </li>
      </ul>

      <!-- Mobile Button -->
      <button @click="toggleMenu" class="md:hidden text-white text-2xl">
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="open" class="md:hidden bg-gray-800 px-4 pb-4">
      <ul class="flex flex-col gap-4 text-gray-300">
        <li>
          <router-link to="/" @click="closeMenu" class="hover:text-blue-400">Home</router-link>
        </li>
        <li>
          <router-link to="/about" @click="closeMenu" class="hover:text-blue-400">About</router-link>
        </li>
        <li>
          <router-link to="/projects" @click="closeMenu" class="hover:text-blue-400">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="closeMenu" class="hover:text-blue-400">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)

function toggleMenu() {
  open.value = !open.value
}

function closeMenu() {
  open.value = false
}
</script>