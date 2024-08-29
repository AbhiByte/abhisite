<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    const experiences = [
      {
        role: "Software Engineer Intern",
        company: "CentML",
        date: "May 2024 - Present",
        description: "Platform team, working on model parallelism and latency prediction using PyTorch graphs",
        color: "from-indigo-500 to-purple-500"
      },
      {
        role: "Software Engineer Intern",
        company: "Extend",
        date: "Jan 2024 - Apr 2024",
        description: "Full stack development for the Core Platform team",
        color: "from-blue-500 to-cyan-500"
      },
      {
        role: "Software Engineer Intern",
        company: "Bearworks",
        date: "May 2023 - Aug 2023",
        description: "Worked alongside founders to build startup from inception, guiding product development, evaluating different technologies/vendors",
        color: "from-green-500 to-teal-500"
      }
    ];
  
    let visible = false;
  
    onMount(() => {
      visible = true;
    });
  </script>
  
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="experience">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        My professional journey.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Work <span class="poppins text-indigo-400">Experience</span>
      </h3>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {#each experiences as exp, i}
        {#if visible}
          <div 
            class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            transition:fly="{{ y: 50, duration: 500, delay: i * 200 }}"
          >
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h4 class="text-xl font-semibold">{exp.role}</h4>
                <span class="text-sm bg-slate-700 rounded-full px-3 py-1">{exp.date}</span>
              </div>
              <h5 class="text-lg font-medium mb-2 bg-gradient-to-r {exp.color} text-transparent bg-clip-text">{exp.company}</h5>
              <p class="text-gray-300">{exp.description}</p>
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