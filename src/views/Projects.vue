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
    title: "Student Management",
    description: "Java + MySQL system for managing students.",
    image: "https://imgs.search.brave.com/jENXXxS8NGhnqN7SaEEcYVdMvS1JXAh29f8tV2KZvRw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zd2Vl/ZHUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzExL0Js/b2ctaW1hZ2UtU3dl/ZWR1LmpwZw",
    link: "#",
    tech: ["Java", "MySQL"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio built with Vue + Tailwind.",
    image: "https://imgs.search.brave.com/aMT0vNEa7psbUngMkyiByu8PdUgSQjMwp_-a5nPsGtE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtNTMw/YTUwMDQxNjcyYzY5/ZDMzNWJhNGNmLndp/eG1wLmNvbS90ZW1w/bGF0ZXMvaW1hZ2Uv/MWNkMjEwZGM3ZTY5/OGFhZmI2YjYwNTEz/MDMwODc4MmU0Mjlh/NmE2NzE1MDUxMDQ4/MGVlYWFiOWYzZTZh/NDRmZC5qcGcvdjEv/ZmlsbC93XzMyMixo/XzE4MixxXzkwLHVz/bV8wLjYwXzEuMDBf/MC4wMS8xY2QyMTBk/YzdlNjk4YWFmYjZi/NjA1MTMwMzA4Nzgy/ZTQyOWE2YTY3MTUw/NTEwNDgwZWVhYWI5/ZjNlNmE0NGZkLmpw/Zw",
    link: "#",
    tech: ["Vue", "Tailwind"]
  },
  {
    id: 3,
    title: "Social App",
    description: "NearMe Social app with real-time features.",
    image: "https://imgs.search.brave.com/XBePiL6LHjT93XnFzTM2jymfsc6t4x1tjUuJEoALhN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yaXNl/dXBsYWJzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9ob3ctdG8tbWFr/ZS1hLXNvY2lhbC1t/ZWRpYS1hcHAuanBn",
    link: "#",
    tech: ["NestJS", "WebSocket"]
  },
  {
    id: 4,
    title: "Social App",
    description: "NearMe Social app with real-time features.",
    image: "https://imgs.search.brave.com/sD5pi5Hr3sDl1tc2xYTz6oN2fQsmqlzFWBfJB1NooTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qdW1w/c2VsbGVyLmNvbS9n/ZW5lcmF0ZWQvaW1h/Z2VzL2xlYXJuL290/aGVycy9wcm9qZWN0/LW1hbmFnZW1lbnQt/ODAwLTBkOGI2ZGY3/OC5wbmc",
    link: "#",
    tech: ["NestJS", "WebSocket"]
  },
  {
    id: 5,
    title: "Social App",
    description: "NearMe Social app with real-time features.",
    image: "https://imgs.search.brave.com/Inf8ViJVmuEsYg4BHu9ncA1K0GKqivk6i5mvcrGQmfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/b3RlbC1ib29raW5n/LXJlc2VydmF0aW9u/LWZvcm0tY29uY2Vw/dF81Mzg3Ni0xMjI3/MzcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw",
    link: "#",
    tech: ["NestJS", "WebSocket"]
  },
  {
    id: 6,
    title: "Social App",
    description: "NearMe Social app with real-time features.",
    image: "https://imgs.search.brave.com/XBePiL6LHjT93XnFzTM2jymfsc6t4x1tjUuJEoALhN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yaXNl/dXBsYWJzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9ob3ctdG8tbWFr/ZS1hLXNvY2lhbC1t/ZWRpYS1hcHAuanBn",
    link: "#",
    tech: ["NestJS", "WebSocket"]
  }
]
</script>