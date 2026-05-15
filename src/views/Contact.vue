<template>
  <section
    class="relative bg-[#050816] text-white min-h-screen py-28 px-6 overflow-hidden"
  >

    <!-- Background Glow -->
    <div
      class="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full"
    ></div>

    <div
      class="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full"
    ></div>

    <div
      class="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10"
    >

      <!-- LEFT -->
      <div>

        <!-- Small Heading -->
        <p
          class="text-cyan-400 uppercase tracking-[0.25em] text-xs flex items-center gap-3 mb-5"
        >
          <span class="w-8 h-[1px] bg-cyan-400"></span>
          Get In Touch
        </p>

        <!-- Main Title -->
        <h1
          class="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Let's build something
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            amazing
          </span>
        </h1>

        <!-- Description -->
        <p
          class="text-gray-400 leading-8 max-w-lg mb-10"
        >
          I'm always open to discussing new projects, collaborations,
          or opportunities to create modern and impactful applications.
        </p>

        <!-- Contact Cards -->
        <div class="space-y-5">

          <!-- Email -->
          <div
            class="flex items-center gap-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 hover:border-cyan-400/30 transition duration-300"
          >

            <div
              class="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center"
            >
              <Mail class="w-6 h-6 text-cyan-400" />
            </div>

            <div>
              <p class="text-sm text-gray-400 uppercase tracking-widest">
                Email
              </p>

              <h3 class="text-lg font-semibold">
                email@example.com
              </h3>
            </div>

          </div>

          <!-- Phone -->
          <div
            class="flex items-center gap-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 hover:border-blue-400/30 transition duration-300"
          >

            <div
              class="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center"
            >
              <Phone class="w-6 h-6 text-blue-400" />
            </div>

            <div>
              <p class="text-sm text-gray-400 uppercase tracking-widest">
                Phone
              </p>

              <h3 class="text-lg font-semibold">
                +855 12 345 678
              </h3>
            </div>

          </div>

          <!-- Location -->
          <div
            class="flex items-center gap-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 hover:border-purple-400/30 transition duration-300"
          >

            <div
              class="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center"
            >
              <MapPin class="w-6 h-6 text-purple-400" />
            </div>

            <div>
              <p class="text-sm text-gray-400 uppercase tracking-widest">
                Location
              </p>

              <h3 class="text-lg font-semibold">
                Phnom Penh, Cambodia
              </h3>
            </div>

          </div>

        </div>

        <!-- Social -->
        <div class="flex gap-4 mt-10">

          <!-- GitHub -->
          <a
            href="https://github.com/hongdyhengmesa"
            target="_blank"
            class="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition duration-300"
          >
            GitHub
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/hong-dihengmesa-0a1994355/"
            target="_blank"
            class="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 hover:bg-blue-500/10 transition duration-300"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <!-- RIGHT -->
      <div
        class="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      >

        <!-- Glow -->
        <div
          class="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"
        ></div>

        <!-- Form Heading -->
        <div class="mb-8 relative z-10">

          <p
            class="text-cyan-400 uppercase tracking-[0.25em] text-xs mb-4"
          >
            Send Message
          </p>

          <h2 class="text-3xl font-bold">
            Start a conversation
          </h2>

        </div>

        <!-- Form -->
        <form class="space-y-6 relative z-10">

          <!-- Name -->
          <div>
            <label class="text-sm text-gray-400 mb-2 block">
              Your Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              class="w-full px-5 py-4 rounded-2xl bg-[#0b1120] border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none transition duration-300"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="text-sm text-gray-400 mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              class="w-full px-5 py-4 rounded-2xl bg-[#0b1120] border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none transition duration-300"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="text-sm text-gray-400 mb-2 block">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              class="w-full px-5 py-4 rounded-2xl bg-[#0b1120] border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none transition duration-300 resize-none"
            ></textarea>
          </div>

          <!-- Button -->
          <button
            class="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold tracking-wide hover:scale-[1.01] transition duration-300 shadow-[0_10px_40px_rgba(34,211,238,0.25)]"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </section>
</template>

<script setup>
import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-vue-next'
</script>