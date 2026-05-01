<template>
  <footer class="bg-gray-900 border-t border-gray-700 w-full">
    <div class="max-w-screen-xl mx-auto px-6 py-8">

      <!-- Top Section -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

        <!-- Logo -->
        <h1 class="text-white text-xl font-bold">
          MyPortfolio
        </h1>

        <!-- Links -->
        <ul class="flex flex-wrap gap-6 text-gray-400 text-sm">
          <li>
            <router-link to="/about" class="hover:text-blue-400 transition">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/projects" class="hover:text-blue-400 transition">
              Projects
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-blue-400 transition">
              Contact
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 my-6"></div>

      <!-- Bottom -->
      <p class="text-center text-gray-500 text-sm">
        © 2026 Mesa Portfolio. All rights reserved.
      </p>

    </div>
  </footer>
</template>