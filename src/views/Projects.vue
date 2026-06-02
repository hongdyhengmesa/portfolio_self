<template>
  <section class="bg-gray-900 text-white min-h-screen py-20 px-6">
    
    <div class="max-w-screen-xl mx-auto">
      
      <!-- Title -->
      <h1 class="text-4xl font-bold mb-10 text-center">
        My Projects
      </h1>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-8">

        <!--  Dynamic Component -->
        <ProjectCard 
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />

      </div>

    </div>

  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: "Coffee Stores",
    description: "HTML, CSS and Javascript",
    image: "src/assets/coffe.png",
    link: "https://web-itc.vercel.app/",
    tech: ["Html & Css", "Js"]
  },
  {
    id: 2,
    title: "E-commerce",
    description: "VueJs, NodeJs and MySQL for managing products.",
    image: "src/assets/eshop.png",
    link: "#",
    tech: ["VueJs & NodeJs", "MySQL"]
  },
  {
    id: 3,
    title: "NearMe Social",
    description: "Java + MySQL system for find friend nearly.",
    image: "src/assets/near.png",
    link: "#",
    tech: ["VueJs & NestJs", "PostgreSQL"]
  },
  
]
</script>