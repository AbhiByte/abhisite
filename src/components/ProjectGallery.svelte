<script>
  import { fade, fly } from 'svelte/transition';
  import { spring } from 'svelte/motion';

  export let projects = [
    {
      name: "VisuAI",
      description: "A web-based application that receives audio input about a concept and creates an AI-generated comic with a 200 character story to explain it.",
      tags: ["Software", "AI"],
      image: "/path/to/visuai-image.jpg"
    },
    {
      name: "Aspectus",
      description: "A 2D RPG game created in Unity, utilizing Google Gemini API to create personalized, adaptive learning experiences through quests, puzzles, and challenges.",
      tags: ["Software", "AI"],
      image: "/path/to/aspectus-image.jpg"
    },
    {
      name: "SurroundSense",
      description: "LiDAR Spatial Mapping System using ToF sensor, utilizing I2C sensor readings with an MSP432E401Y MCU, transmitted to Python Open3D via UART for real-time visualization.",
      tags: ["Hardware", "Hybrid"],
      image: "/path/to/surroundsense-image.jpg"
    }
  ];

  let selectedTags = new Set();
  $: allTags = ["Hardware", "Software", "Hybrid", "AI"];
  
  $: filteredProjects = selectedTags.size === 0
    ? projects
    : projects.filter(project => 
        project.tags.some(tag => selectedTags.has(tag))
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

  let hoverState = spring(1);
  
  function handleMouseEnter() {
    hoverState.set(1.05);
  }
  
  function handleMouseLeave() {
    hoverState.set(1);
  }
</script>

<section class="py-20 lg:py-32 bg-slate-900 text-white">
  <div class="container mx-auto px-4">
    <div class="mb-16 flex flex-col md:flex-row items-center justify-between">

    </div>

    <h2 class="text-4xl font-bold mb-8 text-center">
      Curious to <span class="text-indigo-400">see</span> my work?
    </h2>
    <p class="text-xl mb-12 text-center">A few of my creative endeavors.</p>
    
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
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredProjects as project (project.name)}
        <div
          class="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col"
          style="transform: scale({$hoverState})"
          on:mouseenter={handleMouseEnter}
          on:mouseleave={handleMouseLeave}
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
          </div>
          <div class="px-6 py-4 bg-slate-700 mt-auto">
            <a href="#" class="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">Learn More →</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  button {
    font-family: 'Poppins', sans-serif;
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