<template>
  <section
    class="relative flex items-start bg-[#050816] text-gray-200
           px-4 sm:px-6 py-12 sm:py-20 overflow-hidden min-h-screen"
  >

    <!-- Background Glows -->
    <div
      class="absolute top-[-60px] right-[-60px] w-[280px] h-[280px]
             md:w-[420px] md:h-[420px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"
    ></div>
    <div
      class="absolute bottom-[-80px] left-[-80px] w-[240px] h-[240px]
             md:w-[350px] md:h-[350px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none"
    ></div>

    <!-- Main Grid -->
    <div
      class="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24
             items-center relative z-10 w-full"
    >

      <!-- ───── LEFT COLUMN ───── -->
      <div class="space-y-8 sm:space-y-10">

        <!-- Heading block -->
        <div>
          <p
            class="text-xs tracking-[0.25em] uppercase text-cyan-400 mb-4 sm:mb-5
                   flex items-center gap-3"
          >
            <span class="w-8 h-[1px] bg-cyan-400 inline-block"></span>
            About Me
          </p>

          <h1
            class="font-extrabold leading-tight tracking-tight mb-5
                   text-[clamp(2rem,5vw,3.5rem)]"
          >
            Crafting digital
            <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              experiences
            </span>
          </h1>

          <p class="text-gray-400 leading-5 text-[14px] sm:text-[15px] max-w-xl mb-4">
            Conputer Science student with hands-on experience in bakcend development, full-stack 
            applications, and mobile applications. Skilled in VueJs, NodeJs, Flutter, and REST API
            development through real-world software and engineering projects. Passionate about 
            building pratical and user-friendly applications while continuously improving technicial
            and problem-solving skills.
          </p>

          <p class="text-gray-400 leading-5 text-[14px] sm:text-[15px] max-w-xl mb-6 sm:mb-8">
            I specialize in VueJs, NestJS, and modern frontend technologies,
            creating interfaces that are responsive, elegant, and enjoyable to use.
          </p>

          <a
            href="/src/assets/Hong_Dyhengmesa_Resume.pdf"
            class="inline-flex items-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4
                   rounded-2xl border border-cyan-400/20 bg-cyan-500/5 text-cyan-300
                   uppercase tracking-[0.2em] text-xs
                   hover:bg-cyan-500/10 hover:border-cyan-400/40
                   transition-all duration-300
                   hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
          >
            Checking CV here
          </a>
        </div>

        <!-- Divider -->
        <div class="h-[1px] bg-white/5"></div>

        <!-- Frontend -->
        <div>
          <p
            class="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400
                   mb-4 flex items-center gap-3"
          >
            <span class="w-5 h-[1px] bg-cyan-400 inline-block"></span>
            Frontend Language
          </p>
          <div class="flex flex-wrap gap-3">
            <LangCard
              v-for="lang in frontendLangs"
              :key="lang.name"
              v-bind="lang"
            />
          </div>
        </div>

        <!-- Backend -->
        <div>
          <p
            class="text-xs font-mono uppercase tracking-[0.2em] text-purple-400
                   mb-4 flex items-center gap-3"
          >
            <span class="w-5 h-[1px] bg-purple-400 inline-block"></span>
            Backend Language
          </p>
          <div class="flex flex-wrap gap-3">
            <LangCard
              v-for="lang in backendLangs"
              :key="lang.name"
              v-bind="lang"
              variant="backend"
            />
          </div>
        </div>

        <!-- Mobile -->
        <div>
          <p
            class="text-xs font-mono uppercase tracking-[0.2em] text-blue-400
                   mb-4 flex items-center gap-3"
          >
            <span class="w-5 h-[1px] bg-blue-400 inline-block"></span>
            Mobile Development
          </p>
          <div class="flex flex-wrap gap-3">
            <LangCard
              v-for="lang in flutterLangs"
              :key="lang.name"
              v-bind="lang"
              variant="mobile"
            />
          </div>
        </div>

        <!-- Database -->
        <div>
          <p
            class="text-xs font-mono uppercase tracking-[0.2em] text-green-400
                   mb-4 flex items-center gap-3"
          >
            <span class="w-5 h-[1px] bg-green-400 inline-block"></span>
            Database
          </p>
          <div class="flex flex-wrap gap-3">
            <LangCard
              v-for="lang in database"
              :key="lang.name"
              v-bind="lang"
              variant="database"
            />
          </div>
        </div>

      </div>

      <!-- ───── RIGHT COLUMN — Photo Panel ───── -->
      <!-- Hidden on mobile/tablet; shown from lg upward -->
      <div class="hidden lg:flex justify-center items-center py-8">

        <div class="relative w-[clamp(220px,35vw,300px)] xl:w-[340px] group">

          <!-- Ambient glow behind the frame -->
          <div
            class="absolute -inset-10 bg-cyan-500/10 blur-3xl rounded-full
                   opacity-60 group-hover:opacity-80 transition duration-500 pointer-events-none"
          ></div>

          <!-- Decorative frames -->
          <div
            class="absolute inset-[-14px] rounded-[2rem] border border-cyan-400/20 pointer-events-none"
          ></div>
          <div
            class="absolute inset-[-26px] rounded-[2.5rem] border border-white/5 pointer-events-none"
          ></div>

          <!-- Profile image -->
          <img
            src="/src/assets/per1.JPG"
            alt="Mesa — web developer"
            class="relative z-10 w-full aspect-[4/5] object-cover rounded-[2rem]
                   border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.55)]
                   transition duration-500 group-hover:scale-[1.02]"
          />

          <!-- Stat card — Years Study (bottom-left) -->
          <div
            class="absolute z-20 bottom-10
                   -translate-x-[55%] left-0
                   bg-white/5 border border-white/10 backdrop-blur-xl
                   rounded-2xl px-5 py-3.5 shadow-2xl"
          >
            <h2 class="text-3xl xl:text-4xl font-bold text-white leading-none">4</h2>
            <p class="text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-2">Years Study</p>
          </div>

          <!-- Stat card — Projects (top-right) -->
          <div
            class="absolute z-20 top-10
                   translate-x-[55%] right-0
                   bg-[#111117]/80 border border-white/10 backdrop-blur-xl
                   rounded-2xl px-5 py-3.5 shadow-2xl"
          >
            <h2 class="text-3xl xl:text-4xl font-bold text-white leading-none">4+</h2>
            <p class="text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-2">Projects</p>
          </div>

          <!-- Glowing accent dot -->
          <div
            class="absolute w-3 h-3 rounded-full bg-cyan-400 top-[-12px] right-[40px]
                   shadow-[0_0_20px_rgba(34,211,238,0.9)] pointer-events-none"
          ></div>

          <!-- Decorative horizontal lines -->
          <div
            class="absolute top-[50%] left-[-48px] w-10 h-[1px]
                   bg-gradient-to-r from-transparent to-cyan-400/70 pointer-events-none"
          ></div>
          <div
            class="absolute bottom-[20%] right-[-48px] w-10 h-[1px]
                   bg-gradient-to-l from-transparent to-blue-400/70 pointer-events-none"
          ></div>

        </div>
      </div>
      <!-- END RIGHT COLUMN -->

    </div>
  </section>
</template>

<script setup>
import LangCard from '../components/LangCard.vue'

const frontendLangs = [
  { name: 'HTML5',      tag: 'markup',      icon: 'devicon-html5-plain colored' },
  { name: 'CSS3',       tag: 'styling',     icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', tag: 'scripting',   icon: 'devicon-javascript-plain colored' },
  { name: 'Vue.js',     tag: 'framework',   icon: 'devicon-vuejs-plain colored' },
  { name: 'Tailwind',   tag: 'utility-css', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Bootstrap',  tag: 'css framework', icon: 'devicon-bootstrap-plain colored' },
]

const backendLangs = [
  { name: 'NestJS',     tag: 'framework', icon: 'devicon-nestjs-plain colored' },
  { name: 'Laravel',    tag: 'framework', icon: 'devicon-laravel-plain colored' },
  { name: 'TypeScript', tag: 'language',  icon: 'devicon-typescript-plain colored' },
  { name: 'Node Js',    tag: 'runtime',   icon: 'devicon-nodejs-plain colored' },
]

const flutterLangs = [
  { name: 'Dart',         tag: 'language',  icon: 'devicon-dart-plain colored' },
  { name: 'Flutter',      tag: 'framework', icon: 'devicon-flutter-plain colored' },
  { name: 'React Native', tag: 'mobile',    icon: 'devicon-react-original colored' },
]

const database = [
  { name: 'MySQL',      tag: 'database', icon: 'devicon-mysql-plain colored' },
  { name: 'PostgreSQL', tag: 'database', icon: 'devicon-postgresql-plain colored' },
]
</script>