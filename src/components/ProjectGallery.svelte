<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let projects = [
  {
    name: "Real-time Multitasking Operating System",
    description: "Engineered a lightweight soft Real-time operating system (RTOS) for the ARM Cortex-M4 architecture using C. Accessed and manipulated the MSP and PSP stacks, and developed a system call framework and context switcher. Engineered thread structs, multithreading capabilities, and pre-emptive/co-operative multitasking.",
    tags: ["Software", "AI", "Operating System"],
    image: "/images/visuAIThumbnail.png",
    links: {
      github: "https://github.com/AbhiByte/Embedded-Projects/tree/main/ARM-STM32/RTOS",
    }
  },
  {
    name: "Brainforge AI",
    description: "A 2D RPG game created in Unity, utilizing LLMs to create personalized, adaptive learning experiences through quests, puzzles, and challenges. Winner of Boost Hacks II 2024.",
    tags: ["Software", "AI"],
    image: "/images/aspectusThumbnail.png",
    links: {
      devpost: "https://devpost.com/software/brainforge-ai-pioneering-future-education-w-adaptive-tech",
      github: "https://github.com/BrainForgeAI",
      video: "https://youtu.be/AKQTWVEM-Xo"
    }
  },
  {
    name: "yt-auto-timestamps",
    description: "Chrome extension that automatically generates timestamps using natural language processing for comments that mention something in a video but fail to provide a timestamp.",
    tags: ["Software", "AI"],
    links: {
      github: "https://github.com/AbhiByte/yt-auto-timestamps"
    }
  },
  {
    name: "TravelBuddy",
    description: "AI-powered web app that recommends vacations for you based on your preferences.",
    tags: ["Software", "AI"],
    links: {
      github: "https://github.com/AbhiByte/TravelBuddy"
    }
  },
  {
    name: "MusicParty",
    description: "React Frontend, Django Backend app to play music with your friends.",
    tags: ["Software"],
    links: {
      github: "https://github.com/AbhiByte/MusicParty"
    }
  }
];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  onMount(() => {
    projects = shuffleArray(projects);
  });

  let selectedTags = new Set();
  $: allTags = ["Hardware", "Software", "Hybrid", "AI"];

  $: filteredProjects = selectedTags.size === 0
    ? projects
    : projects.filter((project) =>
        project.tags.some((tag) => selectedTags.has(tag))
      );

  function toggleTag(tag) {
    if (selectedTags.has(tag)) {
      selectedTags.delete(tag);
    } else {
      selectedTags.add(tag);
    }
    selectedTags = selectedTags; // Trigger reactivity
  }

  function clearTags() {
    selectedTags.clear();
    selectedTags = selectedTags; // Trigger reactivity
  }

  function handleMouseEnter(event) {
    event.currentTarget.style.transform = "scale(1.05)";
  }

  function handleMouseLeave(event) {
    event.currentTarget.style.transform = "scale(1)";
  }

  function getDocumentationLink(project) {
    return project.links.devpost || project.links.github || "#";
  }

  function handleCardClick(project) {
    if (project.name !== "Square Wave Generator" && project.name !== "Arduino Nano Powered Gameboy") {
      const link = getDocumentationLink(project);
      if (link !== "#") {
        window.open(link, '_blank');
      }
    }
  }

  function isClickable(project) {
    return project.name !== "Square Wave Generator" && project.name !== "Arduino Nano Powered Gameboy";
  }
</script>

<section id ="projects" class="py-20 lg:py-32 bg-slate-900 text-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-8 text-center">Projects</h2>
    <div class="mb-8 flex flex-wrap justify-center gap-4">
      {#each allTags as tag}
        <button
          class="px-4 py-2 rounded-full transition-all duration-300 {selectedTags.has(tag) ? 'bg-indigo-600' : 'bg-slate-700 hover:bg-slate-600'}"
          on:click={() => toggleTag(tag)}
        >
          {tag}
        </button>
      {/each}
      <button
        class="px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 transition-all duration-300"
        on:click={clearTags}
      >
        Clear Tags
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {#each filteredProjects as project (project.name)}
        <div
          class="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col {isClickable(project) ? 'cursor-pointer' : 'cursor-default'}"
          style="transition: transform 0.3s;"
          on:mouseenter={handleMouseEnter}
          on:mouseleave={handleMouseLeave}
          on:click={() => handleCardClick(project)}
          in:fly="{{ y: 50, duration: 500 }}"
          out:fade
        >
          <img src={project.image} alt={project.name} class="w-full h-48 object-cover" />
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-semibold mb-4">{project.name}</h3>
            <p class="mb-4">{project.description}</p>
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <span class="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              {/each}
            </div>
            <div class="mt-4 flex gap-2">
              {#if getDocumentationLink(project) !== "#"}
                <a
                  href={getDocumentationLink(project)}
                  target="_blank"
                  class="bg-indigo-500 text-white px-3 py-1 rounded-full hover:bg-indigo-400 transition"
                  on:click|stopPropagation
                >
                  {project.links.devpost && project.links.devpost.includes('devpost') ? 'Devpost' : 'Documentation'}
                </a>
              {/if}
              {#if project.links.github}
                <a
                  href={project.links.github}
                  target="_blank"
                  class="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-600 transition"
                  on:click|stopPropagation
                >GitHub</a>
              {/if}
              {#if project.links.video}
                <a
                  href={project.links.video}
                  target="_blank"
                  class="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-400 transition"
                  on:click|stopPropagation
                >Video</a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  button {
    font-family: "Poppins", sans-serif;
  }

  .grid {
    perspective: 1000px;
  }

  .grid > div {
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  }

  .grid > div:hover {
    transform: translateZ(20px) rotateX(5deg) rotateY(5deg);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
</style>