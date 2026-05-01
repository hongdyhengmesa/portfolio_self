<template>
  <section class="bg-gray-900 text-white min-h-screen py-20 px-6 mt-40">

    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12">

      <!-- LEFT: CONTACT INFO -->
      <div>
        <h1 class="text-4xl font-bold mb-6">
          Contact Me
        </h1>

        <p class="text-gray-400 mb-8">
          Feel free to reach out for collaboration or just a friendly hello 👋
        </p>

        <!-- Info -->
        <div class="space-y-4 text-gray-300">
          <p>📧 email@example.com</p>
          <p>📱 +855 12 345 678</p>
          <p>📍 Phnom Penh, Cambodia</p>
        </div>

        <!-- Social -->
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/hongdyhengmesa" class="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/hong-dihengmesa-0a1994355/" class="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">LinkedIn</a>
        </div>
      </div>

      <!-- RIGHT: FORM -->
      <form class="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg">

        <input 
          type="text" 
          placeholder="Your Name"
          class="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input 
          type="email" 
          placeholder="Your Email"
          class="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea 
          placeholder="Your Message"
          rows="5"
          class="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button 
          class="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition w-full font-semibold"
        >
          Send Message
        </button>

      </form>

    </div>

  </section>
</template>