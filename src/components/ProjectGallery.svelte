<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
  
    const projects = [
      {
        title: "VisuAI",
        description: "AI-powered educational comic generator",
        imageUrl: "/images/visuAIThumbnail.png", // Replace with your actual image path
        link: "https://visuai.example.com",
        linkText: "Devpost"
      },
      {
        title: "Aspectus",
        description: "Adaptive learning 2D RPG game",
        imageUrl: "/images/aspectusThumbnail.png", // Replace with your actual image path
        link: "https://aspectus.example.com",
        linkText: "Play Demo"
      },
      {
        title: "SurroundSense",
        description: "LiDAR Spatial Mapping System",
        imageUrl: "/images/scanComparison.png", // Replace with your actual image path
        link: "https://surroundsense.example.com",
        linkText: "Github"
      },
      {
        title: "Future Project",
        description: "Exciting new project coming soon!",
        imageUrl: "/images/future-project.jpg", // Replace with your actual image path
        link: "#",
        linkText: "Coming Soon"
      }
    ];
  
    let currentIndex = 0;
  
    function nextProject() {
      currentIndex = (currentIndex + 1) % projects.length;
    }
  
    function prevProject() {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    }
  
    let intervalId;
  
    onMount(() => {
      intervalId = setInterval(nextProject, 7000); // Auto-advance every 7 seconds
  
      return () => {
        clearInterval(intervalId);
      };
    });
  </script>
  
  <div class="relative w-full max-w-2xl mx-auto">
    <div class="relative overflow-hidden rounded-lg shadow-xl aspect-[16/9]">
      {#each [projects[currentIndex]] as project (currentIndex)}
        <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }} class="absolute inset-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div class="p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">{project.title}</h3>
              <p class="mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-200"
              >
                {project.linkText}
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <button
      on:click={prevProject}
      class="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      on:click={nextProject}
      class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {#each projects as _, index}
        <button
          class="w-2 h-2 rounded-full cursor-pointer {index === currentIndex ? 'bg-white' : 'bg-white/50'}"
          on:click={() => currentIndex = index}
        />
      {/each}
    </div>
  </div>