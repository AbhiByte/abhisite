<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

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
      }
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
      }
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
      }
    },
    {
      role: "Flight Controls Engineer",
      company: "McMaster Rocketry Team",
      date: "Oct 2023 - Aug 2024",
      description: "Engineered test functions for NOR Flash memory in Rust, designed Ozys strain gauge measurement PCBs, and collaborated on Deep Q Learning Neural Network models using PyTorch.",
      color: "from-green-500 to-teal-500",
      links: {
        website: "#",
        github: "#",
        video: "#"
      }
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
      }
    },
  ];

  let visible = false;

  onMount(() => {
    visible = true;
  });
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
          class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
          transition:fly="{{ y: 50, duration: 500, delay: i * 200 }}"
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
              <a href={exp.links.website} class="text-sm bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded transition-colors duration-300">Website</a>
              <a href={exp.links.github} class="text-sm bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded transition-colors duration-300">GitHub</a>
              <a href={exp.links.video} class="text-sm bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded transition-colors duration-300">Video</a>
            </div>
          </div>
          <div class="h-2 bg-gradient-to-r {exp.color}"></div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  /* Add any additional styles here if needed */
</style>