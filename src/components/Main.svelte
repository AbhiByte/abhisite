<script>
  import Step from "./Step.svelte";
  import { onMount } from 'svelte';
  
  let steps = [
{
  name: "VisuAI",
  description: "A web based application that receives audio input about a concept and creates an AI Generated comic with a 200 character story to explain it. [should possibly include technologies involved as tags here]",
},
{
  name: "Aspectus",
  description: "A 2D RPG game created in Unity, utilizing Google Gemini API, it receive course syllabus/transcript and use AI to create personalized, adaptive learning experiences through quests, puzzles, and challenges as you play.",
},
{
  name: "SurroundSense",
  description: "LiDAR Spatial Mapping System using ToF sensor, utilizing I2C sensor readings are given to a MSP432E401Y MCU, and are then transmitted to Python Open3D via UART for real time visualization",
},
];

let benefits = [
{
  name: "Self-taught Developer",
  description: "Mastered coding through online resources, specializing in JavaScript, frameworks, backend, and cloud services.",
},
{
  name: "UX Design Enthusiast",
  description: "Passionate about crafting intuitive and engaging user experiences through innovative design concepts.",
},
{
  name: "Effective Communicator",
  description: "Values transparency and constructive dialogue, fostering strong relationships and team productivity.",
},
];

let titles = [
"Huge Space Enthusiast",
"Hackathon Enjoyer",
"Full Stack Developer",
"Embedded Programmer"
];

let currentTitleIndex = 0;
let currentTitle = titles[currentTitleIndex];
let resetAnimation = false;
let gradientElement;

let pageLoaded = false;
let showFullContent = false;

// Cursor Visuals

let cursor;
let cursorHoverElements;

onMount(() => {

  // Cursor Visuals

  cursor = document.querySelector('.custom-cursor');
  cursorHoverElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])');  
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  cursorHoverElements.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    el.classList.add('cursor-hover');
  });


  const interval = setInterval(() => {
  currentTitleIndex = (currentTitleIndex + 1) % titles.length;
  currentTitle = titles[currentTitleIndex];
  resetAnimation = true;
}, 1750); // Change title duration

setTimeout(() => {
  pageLoaded = true;
  setTimeout(() => {
    showFullContent = true;
  }, 1750); // Delay before showing full content
}, 1000); // Delay before starting the transition

return () => clearInterval(interval);
});

function scrollToAbout() {
const aboutSection = document.getElementById('about');
if (aboutSection) {
  const offset = 100; 
  const elementPosition = aboutSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}
}

$: if (resetAnimation) {
resetAnimation = false;
setTimeout(() => {
  resetAnimation = true;
}, 10);
}
</script>
  
<main class="relative flex flex-col flex-1 p-4">
  <div class="custom-cursor"></div>
  {#if !showFullContent}
    <div class="fixed inset-0 flex items-center justify-center bg-slate-900 transition-opacity duration-1000"
         class:opacity-100={!pageLoaded}
         class:opacity-0={pageLoaded}>
      <h1 class="text-6xl font-bold text-white transition-all duration-1000"
          class:blur-sm={!pageLoaded}
          class:blur-none={pageLoaded}>
        Sameer Suleman
      </h1>
    </div>
  {/if}

  <div class="transition-opacity duration-1000"
       class:opacity-0={!showFullContent}
       class:opacity-100={showFullContent}>
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
      <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span class="relative inline-block group">
            <span 
              bind:this={gradientElement}
              class="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600" 
              class:animate-gradient-x={resetAnimation}
            >
              Sameer Suleman
            </span>
            <span class="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
          </span>
          <br><br>
          <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">That's me, I'm a...</p>
          <br />
          <span class="poppins text-indigo-400">{currentTitle}</span>
        </h2>
    
        <button 
          on:click={scrollToAbout}
          class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
        >
          <div class="absolute top-0 right-full w-full h-full bg-indigo-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
          <h4 class="relative z-9">There's more to me I promise I'm interesting &darr;</h4>
        </button>
      </div>
      <div class="relative shadow-2xl grid place-items-center">
        <img src={"images/profile.png"} alt="Profile" class="object-cover z-[2] max-h-[70vh]" />
      </div>
    </section>

    <section
      id="about"
      class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
      <div
        class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-indigo-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-indigo-700 py-4"
      >
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
          A bit <span class="poppins text-indigo-400">about</span> me.
        </h3>
      </div>

      <p class="text-base sm:text-lg md:text-xl">
        Hey! Welcome to my corner of the internet, I'm a Level III Computer Engineering Student studying at McMaster University, based in Hamilton, Ontario. My <span class="text-indigo-400">tech stack</span> includes JavaScript (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL or Firebase/Firestore!
      </p>
      <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
        I am . . .
      </p>
      <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
        {#each benefits as benefit, index}
          <div class="flex gap-6 sm:gap-8">
            <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
              0{index + 1}
            </p>
            <div class="flex flex-col gap-6 sm:gap-8">
              <h3 class="text-2xl sm:text-3xl md:text-5xl">
                {benefit.name}
              </h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        {/each}
      </div>
      <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">
        The <span class="text-indigo-400">Complete</span> Package
      </h5>
      <div
        class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
      >
        <table class="bg-white text-slate-700 rounded text-center">
          <thead class="border-b border-solid border-slate-200">
            <tr>
              <th />
              <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
              <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
              <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
              <th class="bg-indigo-700 text-white whitespace-nowrap p-4 px-8">Me</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-solid border-slate-200">
              <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">
                Dedication
              </td>
              <td><i class="fa-solid fa-xmark text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-slate-500" /></td>
              <td><i class="fa-solid fa-xmark text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-green-500" /></td>
            </tr>
            <tr class="border-b border-solid border-slate-200">
              <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">
                Critical Thought
              </td>
              <td><i class="fa-solid fa-xmark text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-green-500" /></td>
            </tr>
            <tr>
              <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">
                Interpersonal Skills
              </td>
              <td><i class="fa-solid fa-check text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-slate-500" /></td>
              <td><i class="fa-solid fa-xmark text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-green-500" /></td>
            </tr>
            <tr class="border-t border-solid border-slate-200">
              <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">
                Programming Ability
              </td>
              <td><i class="fa-solid fa-check text-slate-500" /></td>
              <td><i class="fa-solid fa-xmark text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-slate-500" /></td>
              <td><i class="fa-solid fa-check text-green-500" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
        <p>Scroll to see more &rarr;</p>
      </div>
      <p class="mx-auto">So why not invest?</p>
    </section>

    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
      <div class="flex flex-col gap-2 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl">
          A few of my creative endeavors.
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Curious to <span class="poppins text-indigo-400">see</span> my work?
        </h3>
      </div>
      
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-indigo-700 duration-200"
      >
        <i class="fa-regular fa-circle-play" />
        <p>Watch the video</p>
      </a>
    
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        {#each steps as step}
          <Step {step}>
            <p>{step.description}</p>
          </Step>
        {/each}
      </div>
    </section>
  </div>
</main>
  
<style>

:global(html), :global(body) {
  cursor: none !important;
}
/* Custom cursor styles */

.custom-cursor {
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.1s ease-out;
  mix-blend-mode: difference;
}

.custom-cursor.hover {
  background-color: white;
  mix-blend-mode: difference;
}

/* Add this class to all interactive elements */
.cursor-hover {
  cursor: none !important;
}
@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 15s ease infinite;
}

:global(body) {
  overflow-x: hidden;
}

.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.blur-sm {
  filter: blur(4px);
}

.blur-none {
  filter: blur(0);
}
</style>