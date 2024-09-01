<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ImageSlideshow from './ImageSlideshow.svelte';

  const experiences = [
    {
      role: "Firmware Specialist",
      company: "McMaster Interdisciplinary Satellite Team",
      date: "Aug 2024 - Present",
      description: "Currently working on FPGA for PRESET Satellite Magnometer",
      color: "from-yellow-500 to-amber-500",
      links: {
        website: "#",
        github: "#",
        video: "#"
      },
      images: [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg"
      ]
    },
    {
      role: "Founder & Lead Software Engineer",
      company: "Brainforge AI",
      date: "Jul 2024 - Present",
      description: "Architected and developed an innovative educational game using Unity, integrating Google's Gemini AI model. Led full-stack development efforts, AI code implementation, and Unity game development.",
      color: "from-purple-500 to-indigo-500",
      links: {
        website: "#",
        github: "#",
        video: "#"
      },
      images: [
        "/path/to/brainforge1.jpg",
        "/path/to/brainforge2.jpg",
        "/path/to/brainforge3.jpg"
      ]
    },
    {
      role: "Battery Management Software Team Member",
      company: "Stellantis Battery Workforce Challenge",
      date: "May 2024 - Aug 2024",
      description: "Created Simulink models with XS176500 for HVIL systems and implementing state of charge/health monitoring systems for EV Batteries",
      color: "from-red-500 to-pink-500",
      links: {
        website: "#",
        github: "#",
        video: "#"
      },
      images: [
        "/path/to/stellantis1.jpg",
        "/path/to/stellantis2.jpg",
        "/path/to/stellantis3.jpg"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Wewoo",
      date: "May 2024 - Jul 2024",
      description: "Engineered a robust Authorization and Rider Order Service for a Carpooling Application using NestJS. Developed GraphQL resolvers and implemented a real-time notification system using WebSocket API.",
      color: "from-blue-500 to-cyan-500",
      links: {
        website: "#",
        github: "#",
        video: "#"
      },
      images: [
        "/path/to/wewoo1.jpg",
        "/path/to/wewoo2.jpg",
        "/path/to/wewoo3.jpg"
      ]
    },
    {
      role: "Flight Controls Engineer",
      company: "McMaster Rocketry Team",
      date: "Oct 2023 - Present",
      description: "Engineered test functions for NOR Flash memory in Rust, designed Ozys strain gauge measurement PCBs, and collaborated on Deep Q Learning Neural Network models using PyTorch.",
      color: "from-green-500 to-teal-500",
      links: {
        website: "#",
        github: "#",
        video: "#"
      },
      images: [
        "/path/to/rocketry1.jpg",
        "/path/to/rocketry2.jpg",
        "/path/to/rocketry3.jpg"
      ]
    },
  ];

  let visible = false;
  let hoveredExp = null;

  onMount(() => {
    visible = true;
  });

  function handleMouseEnter(exp) {
    hoveredExp = exp;
  }

  function handleMouseLeave() {
    hoveredExp = null;
  }
</script>

<section class="py-20 lg:py-32 flex flex-col gap-24" id="experience">
  <div class="flex flex-col gap-2 text-center">
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
      Work Experience
    </h3>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {#each experiences as exp, i}
      {#if visible}
        <div 
          class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative"
          transition:fly="{{ y: 50, duration: 500, delay: i * 200 }}"
          on:mouseenter={() => handleMouseEnter(exp)}
          on:mouseleave={handleMouseLeave}
        >
          <div class="p-6 flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h4 class="text-xl font-semibold">{exp.role}</h4>
              <span class="text-sm bg-slate-700 rounded-full px-3 py-1 whitespace-nowrap ml-2">{exp.date}</span>
            </div>
            <h5 class="text-lg font-medium mb-2 bg-gradient-to-r {exp.color} text-transparent bg-clip-text">{exp.company}</h5>
            <p class="text-gray-300">{exp.description}</p>
          </div>
          <div class="p-4 bg-slate-700 mt-auto">
            <div class="flex justify-end space-x-2">
              <a href={exp.links.website} class="text-sm bg-gray-600 hover:bg-gray-500 text-white p-2 rounded transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a href={exp.links.github} class="text-sm bg-gray-600 hover:bg-gray-500 text-white p-2 rounded transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href={exp.links.video} class="text-sm bg-gray-600 hover:bg-gray-500 text-white p-2 rounded transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>
          <div class="h-2 bg-gradient-to-r {exp.color}"></div>
          
          {#if hoveredExp === exp}
            <div class="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <ImageSlideshow images={exp.images} />
            </div>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  /* Add any additional styles here if needed */
</style>