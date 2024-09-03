<script>
  import { fade, fly } from 'svelte/transition';

export let projects = [
  {
    name: "VisuAI",
    description: "A web-based application that receives audio input about a concept and creates an AI-generated comic with a 200-character story to explain it. This project made it to the Top 10 at Deltahacks 2024.",
    tags: ["Software", "AI"],
    image: "/images/visuAIThumbnail.png",
    links: {
      devpost: "https://devpost.com/software/visuai-ip7jz4",
      github: "https://github.com/vaibhav-gopal/deltahacks10Storybook",
      video: "https://youtu.be/d3m0dhiz1R4"
    }
  },
  {
    name: "Aspectus",
    description: "A 2D RPG game created in Unity, utilizing Google Gemini API to create personalized, adaptive learning experiences through quests, puzzles, and challenges.",
    tags: ["Software", "AI"],
    image: "/images/aspectusThumbnail.png",
    links: {
      devpost: "https://devpost.com/software/brainforge-ai-pioneering-future-education-w-adaptive-tech",
      github: "https://github.com/BrainForgeAI",
      video: "https://youtu.be/AKQTWVEM-Xo"
    }
  },
  {
    name: "SurroundSense",
    description: "LiDAR Spatial Mapping System using ToF sensor, utilizing I2C sensor readings with an MSP432E401Y MCU, transmitted to Python Open3D via UART for real-time visualization.",
    tags: ["Hardware", "Hybrid"],
    image: "/images/scanComparison.png",
    links: {
      devpost: "https://drive.google.com/file/d/1-tnnsfvPEH4o1Utr4rdNDlYOT58DG-8Y/view?usp=sharing",
      github: "https://github.com/surroundsense",
      video: "https://youtube.com/surroundsense"
    }
  },
  {
    name: "Noma",
    description: "Using Google Vertex AI and React, Noma identifies key details in images, such as landmarks, and provides them to the Cohere Natural Language Processing API to generate accurate recounts of the user’s journey in a chronological manner.",
    tags: ["Software", "AI"],
    image: "/images/NomaWebsite.png",
    links: {
      devpost: "https://devpost.com/software/noma-discover-and-share-your-experience-with-ease",
      github: "https://github.com/nourishnew/travel-buddy",
      video: "https://youtu.be/dP2HI1Re5nY"
    }
  },
  {
    name: "NorthStar",
    description: "Developed an AI assistant leveraging Google Vertex AI and Gemini to optimize students’ schedules by receiving GCal data and using time management techniques to enhance productivity.",
    tags: ["Software", "AI"],
    image: "/images/NorthStarTest-Photoroom (1).png",
    links: {
      devpost: "https://devpost.com/software/northstar-1clb86",
      github: "https://github.com/vaibhav-gopal/northstar",
      video: "https://youtube.com/northstar"
    }
  },
  {
    name: "3 Bit Digital-To-Analog Converter",
    description: "Developed a Digital-to-Analog Converter (DAC) aimed at receiving reliable analog output from digital signals, enhancing understanding of electronic system design.",
    tags: ["Hardware"],
    image: "/images/2Ei4Project5Website.png",
    links: {
      devpost: "https://drive.google.com/file/d/1ZIJt9F21uh1KzmEv8-aH-9T7eorpKMUl/view?usp=drive_link",
      github: "https://github.com/dac",
      video: "https://youtube.com/dac"
    }
  },
  {
    name: "MOSFET Based XOR Gate",
    description: "Developed a MOSFET-based XOR Gate using CMOS technology, focusing on frequency control with applications in communication systems.",
    tags: ["Hardware"],
    image: "/images/2EI4Project4(2)Website.png",
    links: {
      devpost: "https://drive.google.com/file/d/1TDPGne9Zpnw2rhvX_AmB4-t-ADJKPicE/view?usp=sharing",
      github: "https://github.com/xor-gate",
      video: "https://youtube.com/xor-gate"
    }
  },
  {
    name: "AC-DC Converter",
    description: "Designed an AC to DC converter circuit for power supply systems, gaining experience in optimizing power conversion circuits.",
    tags: ["Hardware"],
    image: "/images/2EI4Project1Website.png",
    links: {
      devpost: "https://drive.google.com/file/d/1argB_-xUHWn2UaJjAeLUEVMEjMqW7k7k/view?usp=sharing",
      github: "https://github.com/acdc-converter",
      video: "https://youtube.com/acdc-converter"
    }
  },
  {
    name: "Arduino Nano Powered Gameboy",
    description: "Designed a Gameboy prototype, developed Schematic and PCB completely from scratch, and programmed a time and memory efficient game in C++",
    tags: ["Hardware", "Software", "Hybrid"],
    image: "/images/ArduinoNanoPCB.png",
    links: {
      devpost: "https://devpost.com/gameboy",
      github: "https://github.com/gameboy",
      video: "https://youtube.com/gameboy"
    }
  },
  {
    name: "Square Wave Generator",
    description: "Engineered a custom Square Wave Generator utilizing a 555 Timer IC, complete with 10K and 100K potentiometers for adjustable frequency control. This project deepened my practical understanding of analog circuit design and signal processing from theoretical coursework.",
    tags: ["Hardware"],
    image: "/images/SquareWaveGenPCB.png",
    links: {
      devpost: "https://devpost.com/square-wave",
      github: "https://github.com/square-wave",
      video: "https://youtube.com/square-wave"
    }
  }
];

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
</script>

<section class="py-20 lg:py-32 bg-slate-900 text-white">
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
          class="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col"
          style="transition: transform 0.3s;"
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
            <div class="mt-4 flex gap-2">
              {#if project.links.devpost}
                <a
                  href={project.links.devpost}
                  target="_blank"
                  class="bg-indigo-500 text-white px-3 py-1 rounded-full hover:bg-indigo-400 transition"
                  >Devpost</a
                >
              {/if}
              {#if project.links.github}
                <a
                  href={project.links.github}
                  target="_blank"
                  class="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-600 transition"
                  >GitHub</a
                >
              {/if}
              {#if project.links.video}
                <a
                  href={project.links.video}
                  target="_blank"
                  class="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-400 transition"
                  >Video</a
                >
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
