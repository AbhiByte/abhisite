<script>
  import Step from "./Step.svelte";
  import { onMount } from 'svelte';

  import ProjectGallery from './ProjectGallery.svelte';
  import ExperienceTimeline from './ExperienceTimeline.svelte';
  import AboutAndSkills from './AboutAndSkills.svelte';

  let steps = [
    {
      name: "Real-time Multitasking Operating System",
      description: "Engineered a lightweight soft Real-time operating system (RTOS) for the ARM Cortex-M4 architecture using C. Accessed and manipulated the MSP and PSP stacks, and developed a system call framework and context switcher. Engineered thread structs, multithreading capabilities, and pre-emptive/co-operative multitasking",
      tags: ["Web", "AI", "Audio Processing", "Comic Generation"]
    },
    {
      name: "Brainforge AI",
      description: "A 2D RPG game created in Unity, utilizing LLMs. It receives course syllabus/transcript and uses AI to create personalized, adaptive learning experiences through quests, puzzles, and challenges as you play. 1st place at Boost Hacks II 2024,",
      tags: ["Game Development", "Unity", "AI", "Education"]
    },
    {
      name: "SurroundSense",
      description: "LiDAR Spatial Mapping System using ToF sensor. Utilizing I2C sensor readings are given to an MSP432E401Y MCU and are then transmitted to Python Open3D via UART for real-time visualization.",
      tags: ["Hardware", "LiDAR", "MCU", "Python", "3D Visualization"]
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
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
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
        Abhinav Ramesh
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
              Abhinav Ramesh
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
          <h4 class="relative z-9">Check Me Out &darr;</h4>
        </button>
      </div>

      <div class="flex justify-center md:justify-start space-x-4">
        <div class="relative shadow-2xl grid place-items-center">
          <img src={"images/profile.png"} alt="Profile" size = "w-96" imgClass="h-96" class="object-cover z-[2] max-h-[70vh] rounded-full"   />
        </div>  
        
        <div class="flex flex-col justify-center space-y-4 ml-4">
          <a href="https://github.com/AbhiByte" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com/in/abhinavramesh" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
                  <a href="https://devpost.com/sameerjuin" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        </a>
        <a href="mailto:abhinavrmaesh03@gmail.com" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
        
        </div>
      </div>
    </section>

    <section id="about" class="py-8 sm:py-14">
      <AboutAndSkills />
    </section>

    <section class="py-8 sm:py-14">
      <ExperienceTimeline />
    </section>

    <section class="py-8 sm:py-14">
      <ProjectGallery steps={steps}/>
    </section>
  </div>
</main>

<style>
  .animate-gradient-x {
    background-size: 400%;
    animation: gradient-x 7s ease infinite;
  }

  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  :global(body) {
    cursor: none;
  }

  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s;
  }

  .custom-cursor.hover {
    width: 30px;
    height: 30px;
  }

  .cursor-hover {
    cursor: none;
  }
  #about:before {
    content: "";
    display: block;
    height: 100px; /* height of fixed header */
    margin-top: -100px; /* negative height of fixed header */
    visibility: hidden;
  }
</style>
