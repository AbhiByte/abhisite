<script>
  import Step from "./Step.svelte";
  import { onMount } from 'svelte';

  import ProjectGallery from './ProjectGallery.svelte';
  import ExperienceTimeline from './ExperienceTimeline.svelte';

  
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
      <!-- <div class="relative shadow-2xl grid place-items-center">
        <img src={"images/profile.png"} alt="Profile" class="object-cover z-[2] max-h-[70vh]" />
      </div> -->

      <div class="relative shadow-2xl grid place-items-center">
        <h1>Some things I made I guess, need to change this up later</h1>
        <ProjectGallery />
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
        Hey! Welcome to my corner of the internet, I'm a Level III Computer Engineering Student studying at McMaster University, based in Hamilton, Ontario. I love designing PCB/FPGA models, solving Leetcode problems, or learning more about AI. I've built multiple different projects which you can see on my site here, but to name a few I founded a company that uses Gemini AI and Unity to advance education,  I worked on an AI powered Web App which can turn voice transcripts into educational comics, as well as a 3D indoor LiDAR mapping system on the MSP432E401Y MCU. In my free time though, I love to make all sorts of projects (peep the Devpost), ranging from AI/ML software to embedded hardware systems, because I truly love what I do, you might also find me 3D printing things for fun (I have my own Bambu Lab A1 w/ AMS and wayyyy too much filament for my own good) or reading, check out my goodreads as well, I'm open to book suggestions :D <span class="text-indigo-400"></span> 
      </p>
      
      <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
        <p>Scroll to see more &rarr;</p>
      </div>
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
      
    
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        {#each steps as step}
          <Step {step}>
            <p>{step.description}</p>
          </Step>
        {/each}
      </div>
    </section>

    <ExperienceTimeline />
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

:global(.cursor.hover) {
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