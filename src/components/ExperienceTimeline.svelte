<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "QEYnet Inc.",
      date: "May 2024 - Aug 2024",
      description: "Wrote backend code using C# and delivered 10000-line Python module (written entirely by me) to the client. 'Outstanding' performance rating (highest possible rating).",
      color: "from-yellow-500 to-amber-500",
      links: {
        website: "https://qeynet.com/",
      },
      images: ["/path/to/mist_image1.jpg", "/path/to/mist_image2.jpg", "/path/to/mist_image3.jpg"]
    },
    {
      role: "Founder & Lead Software Engineer",
      company: "Brainforge AI",
      date: "Jul 2024 - Present",
      description: "Architected and developed an innovative educational game using Unity, integrating LLMs. Led full-stack development efforts, AI code implementation, and Unity game development.",
      color: "from-purple-500 to-indigo-500",
      links: {
        website: "#",
        github: "https://github.com/BrainForgeAI",
        video: "#"
      },
      images: ["/path/to/brainforge_image1.jpg", "/path/to/brainforge_image2.jpg", "/path/to/brainforge_image3.jpg"]
    },
    {
      role: "Software Engineer Intern",
      company: "QEYnet Inc.",
      date: "Sep 2023 - Dec 2023",
      description: "Wrote computer vision and GUI code using Python. Refactored some scripts using C and C#. Highest possible performance rating.",
      color: "from-red-500 to-pink-500",
      links: {
        website: "https://qeynet.com/"
      },
      images: ["/path/to/stellantis_image1.jpg", "/path/to/stellantis_image2.jpg", "/path/to/stellantis_image3.jpg"]
    },

    {
      role: "Software Engineer Intern",
      company: "BLiNQ Networks",
      date: "Jan 2023 - Apr 2023",
      description: "Wrote telecommunications (LTE, 5G) software using JavaScript and Python. Highest possible performance rating.",
      color: "from-red-500 to-orange-500",
      links: {
        website: "https://blinqnetworks.com/",
      },
      images: ["/path/to/stellantis_image1.jpg", "/path/to/stellantis_image2.jpg", "/path/to/stellantis_image3.jpg"]
    },


    {
      role: "Machine Learning Engineer Intern",
      company: "University of Waterloo",
      date: "May 2022 - Aug 2022",
      description: "Wrote ML code for a finacial services product. Highest possible perforance rating.",
      color: "from-green-500 to-teal-500",
      links: {
        website: "https://uwaterloo.ca/",
      },
      images: ["/path/to/rocketry_image1.jpg", "/path/to/rocketry_image2.jpg", "/path/to/rocketry_image3.jpg"]
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
    Professional Experience
    </h3>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {#each experiences as exp, i}
      {#if visible}
        <div 
          class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative"
          transition:fly={{ y: 50, duration: 500, delay: i * 200 }}
          role="article"
        >
          <div 
            class="p-6 flex-grow cursor-pointer"
            role="button"
            tabindex="0"
            aria-label={`View details for ${exp.role} at ${exp.company}`}
          >
            <div class="flex justify-between items-start mb-4">
              <h4 class="text-xl font-semibold">{exp.role}</h4>
              <span class="text-sm bg-slate-700 rounded-full px-3 py-1 whitespace-nowrap ml-2">{exp.date}</span>
            </div>
            <h5 class="text-lg font-medium mb-2 bg-gradient-to-r {exp.color} text-transparent bg-clip-text">{exp.company}</h5>
            <p class="text-gray-300">{exp.description}</p>
          </div>
          <div class="p-4 bg-slate-700 mt-auto">
            <div class="flex justify-end space-x-2">
              {#if exp.links.website}
                <a href={exp.links.website} class="text-sm bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded transition-colors duration-300">Website</a>
              {/if}
              {#if exp.links.github}
                <a href={exp.links.github} class="text-sm bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded transition-colors duration-300">GitHub</a>
              {/if}
              {#if exp.links.video}
                <a href={exp.links.video} class="text-sm bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded transition-colors duration-300">Video</a>
              {/if}
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
