import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const ProjectGallery_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'button.svelte-1suipyk.svelte-1suipyk{font-family:"Poppins", sans-serif}.grid.svelte-1suipyk.svelte-1suipyk{perspective:1000px}.grid.svelte-1suipyk>div.svelte-1suipyk{transition:transform 0.3s ease-out, box-shadow 0.3s ease-out}.grid.svelte-1suipyk>div.svelte-1suipyk:hover{transform:translateZ(20px) rotateX(5deg) rotateY(5deg);box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25)}',
  map: null
};
function getDocumentationLink(project) {
  return project.links.devpost || project.links.github || "#";
}
function isClickable(project) {
  return project.name !== "Square Wave Generator" && project.name !== "Arduino Nano Powered Gameboy";
}
const ProjectGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allTags;
  let filteredProjects;
  let { projects = [
    {
      name: "Real-time Multitasking Operating System",
      description: "Engineered a lightweight soft Real-time operating system (RTOS) for the ARM Cortex-M4 architecture using C. Accessed and manipulated the MSP and PSP stacks, and developed a system call framework and context switcher. Engineered thread structs, multithreading capabilities, and pre-emptive/co-operative multitasking.",
      tags: ["Software", "AI", "Operating System"],
      image: "/images/visuAIThumbnail.png",
      links: {
        github: "https://github.com/AbhiByte/Embedded-Projects/tree/main/ARM-STM32/RTOS"
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
  ] } = $$props;
  let selectedTags = /* @__PURE__ */ new Set();
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css$2);
  allTags = ["Hardware", "Software", "Hybrid", "AI"];
  filteredProjects = selectedTags.size === 0 ? projects : projects.filter((project) => project.tags.some((tag) => selectedTags.has(tag)));
  return `<section id="projects" class="py-20 lg:py-32 bg-slate-900 text-white"><div class="container mx-auto px-4"><h2 class="text-4xl font-bold mb-8 text-center" data-svelte-h="svelte-1rjuga9">Projects</h2> <div class="mb-8 flex flex-wrap justify-center gap-4">${each(allTags, (tag) => {
    return `<button class="${"px-4 py-2 rounded-full transition-all duration-300 " + escape(
      selectedTags.has(tag) ? "bg-indigo-600" : "bg-slate-700 hover:bg-slate-600",
      true
    ) + " svelte-1suipyk"}">${escape(tag)} </button>`;
  })} <button class="px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 transition-all duration-300 svelte-1suipyk" data-svelte-h="svelte-12cnf0n">Clear Tags</button></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 svelte-1suipyk">${each(filteredProjects, (project) => {
    return `<div class="${"bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col " + escape(
      isClickable(project) ? "cursor-pointer" : "cursor-default",
      true
    ) + " svelte-1suipyk"}" style="transition: transform 0.3s;"><img${add_attribute("src", project.image, 0)}${add_attribute("alt", project.name, 0)} class="w-full h-48 object-cover"> <div class="p-6 flex-grow"><h3 class="text-2xl font-semibold mb-4">${escape(project.name)}</h3> <p class="mb-4">${escape(project.description)}</p> <div class="flex flex-wrap gap-2">${each(project.tags, (tag) => {
      return `<span class="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">${escape(tag)} </span>`;
    })}</div> <div class="mt-4 flex gap-2">${getDocumentationLink(project) !== "#" ? `<a${add_attribute("href", getDocumentationLink(project), 0)} target="_blank" class="bg-indigo-500 text-white px-3 py-1 rounded-full hover:bg-indigo-400 transition">${escape(project.links.devpost && project.links.devpost.includes("devpost") ? "Devpost" : "Documentation")} </a>` : ``} ${project.links.github ? `<a${add_attribute("href", project.links.github, 0)} target="_blank" class="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-600 transition">GitHub</a>` : ``} ${project.links.video ? `<a${add_attribute("href", project.links.video, 0)} target="_blank" class="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-400 transition">Video</a>` : ``} </div></div> </div>`;
  })}</div></div> </section>`;
});
const ExperienceTimeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "QEYnet Inc.",
      date: "May 2024 - Aug 2024",
      description: "Wrote backend code using C# and delivered 10000-line Python module (written entirely by me) to the client. 'Outstanding' performance rating (highest possible rating).",
      color: "from-yellow-500 to-amber-500",
      links: { website: "https://qeynet.com/" },
      images: [
        "/path/to/mist_image1.jpg",
        "/path/to/mist_image2.jpg",
        "/path/to/mist_image3.jpg"
      ]
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
      images: [
        "/path/to/brainforge_image1.jpg",
        "/path/to/brainforge_image2.jpg",
        "/path/to/brainforge_image3.jpg"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "QEYnet Inc.",
      date: "Sep 2023 - Dec 2023",
      description: "Wrote computer vision and GUI code using Python. Refactored some scripts using C and C#. Highest possible performance rating.",
      color: "from-red-500 to-pink-500",
      links: { website: "https://qeynet.com/" },
      images: [
        "/path/to/stellantis_image1.jpg",
        "/path/to/stellantis_image2.jpg",
        "/path/to/stellantis_image3.jpg"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "BLiNQ Networks",
      date: "Jan 2023 - Apr 2023",
      description: "Wrote telecommunications (LTE, 5G) software using JavaScript and Python. Highest possible performance rating.",
      color: "from-red-500 to-orange-500",
      links: { website: "https://blinqnetworks.com/" },
      images: [
        "/path/to/stellantis_image1.jpg",
        "/path/to/stellantis_image2.jpg",
        "/path/to/stellantis_image3.jpg"
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "University of Waterloo",
      date: "May 2022 - Aug 2022",
      description: "Wrote ML code for a finacial services product. Highest possible perforance rating.",
      color: "from-green-500 to-teal-500",
      links: { website: "https://uwaterloo.ca/" },
      images: [
        "/path/to/rocketry_image1.jpg",
        "/path/to/rocketry_image2.jpg",
        "/path/to/rocketry_image3.jpg"
      ]
    }
  ];
  return `<section class="py-20 lg:py-32 flex flex-col gap-24" id="experience"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-1j88axf"><h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Professional Experience</h3></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">${each(experiences, (exp, i) => {
    return `${``}`;
  })}</div> </section>`;
});
const AboutAndSkills_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".button-effect.svelte-jdum1t.svelte-jdum1t{display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:1rem 2rem;border-radius:9999px;background-color:white;color:black;font-size:1.25rem;text-align:center;text-decoration:none;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);transition:all 0.3s ease;width:100%}.button-effect.svelte-jdum1t h4.svelte-jdum1t{margin:0;z-index:1}.button-effect.svelte-jdum1t.svelte-jdum1t::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#4f46e5;opacity:0;transition:opacity 0.3s ease;z-index:0}.button-effect.svelte-jdum1t.svelte-jdum1t:hover::before{opacity:1}.button-effect.svelte-jdum1t.svelte-jdum1t:hover{color:white}.button-effect.svelte-jdum1t:hover h4.svelte-jdum1t{color:white}.skills-icons.svelte-jdum1t.svelte-jdum1t{display:inline-block;margin-left:10px}h2.svelte-jdum1t.svelte-jdum1t{font-size:3rem}p.svelte-jdum1t.svelte-jdum1t{font-size:1.5rem}button.svelte-jdum1t.svelte-jdum1t,a.svelte-jdum1t.svelte-jdum1t{font-size:1.25rem}@media(max-width: 768px){.button-effect.svelte-jdum1t.svelte-jdum1t{padding:0.75rem 1.5rem;font-size:1rem}}",
  map: null
};
const AboutAndSkills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["python", "cpp", "cs", "rust", "javascript", "matlab"]
    },
    {
      category: "Libraries",
      items: ["flask", "react", "ASP.NET", "pytorch", "sklearn", "opencv"]
    },
    {
      category: "Software",
      items: ["aws", "git", "docker"]
    }
  ];
  $$result.css.add(css$1);
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="mb-8"><h2 class="text-5xl font-bold text-white mb-8 svelte-jdum1t" data-svelte-h="svelte-we5di5">About Me</h2> <p class="text-2xl text-gray-300 leading-relaxed svelte-jdum1t" data-svelte-h="svelte-51mmsv">Hi! I&#39;m Abhinav, a 3rd-year Mechatronics Engineering student at the University of Waterloo. 
            I&#39;ve written software for many application, from embedded code for motor controllers to full-stack web applications.
            <br><br>
            These days, I&#39;m working on building backend applications that integrate AI models.</p> <br> <div class="flex flex-col md:flex-row gap-4"><button class="button-effect svelte-jdum1t" data-svelte-h="svelte-c8rmhx"><h4 class="svelte-jdum1t">See My Projects ↓</h4></button> <a href="https://github.com/AbhiByte" target="_blank" class="button-effect svelte-jdum1t" data-svelte-h="svelte-ncuuf9"><h4 class="svelte-jdum1t">View My Resume(s)</h4></a></div></div> <div><h2 class="text-5xl font-bold text-white mb-8 svelte-jdum1t" data-svelte-h="svelte-qv40kw">Skills</h2> ${each(skills, (skillCategory) => {
    return `<div class="mb-8"><h3 class="text-3xl font-semibold text-blue-400 mb-4">${escape(skillCategory.category)}</h3> <div class="skills-icons svelte-jdum1t"><a href="https://skillicons.dev" class="svelte-jdum1t"><img${add_attribute("src", `https://skillicons.dev/icons?i=${skillCategory.items.join(",")}&theme=light&perline=5`, 0)} alt="${escape(skillCategory.category, true) + " Skills"}"> </a></div> </div>`;
  })}</div> </div>`;
});
const Main_svelte_svelte_type_style_lang = "";
const css = {
  code: '.animate-gradient-x.svelte-nsaf09{background-size:400%;animation:svelte-nsaf09-gradient-x 7s ease infinite}@keyframes svelte-nsaf09-gradient-x{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}body{cursor:none}.custom-cursor.svelte-nsaf09{position:fixed;top:0;left:0;width:20px;height:20px;background-color:white;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%, -50%);transition:width 0.2s, height 0.2s}#about.svelte-nsaf09:before{content:"";display:block;height:100px;margin-top:-100px;visibility:hidden}',
  map: null
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Real-time Multitasking Operating System",
      description: "Engineered a lightweight real-time operating system (RTOS) for the ARM Cortex-M4 architecture using C. Accessed and manipulated the MSP and PSP stacks, and developed a system call framework and context switcher. Engineered thread structs, multithreading capabilities, and pre-emptive/co-operative multitasking",
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
    }
  ];
  let titles = [
    "Huge Space Enthusiast",
    "Hackathon Enjoyer",
    "Full Stack Developer",
    "Embedded Programmer"
  ];
  let currentTitleIndex = 0;
  let currentTitle = titles[currentTitleIndex];
  let gradientElement;
  $$result.css.add(css);
  return `<main class="relative flex flex-col flex-1 p-4"><div class="custom-cursor svelte-nsaf09"></div> ${`<div class="${[
    "fixed inset-0 flex items-center justify-center bg-slate-900 transition-opacity duration-1000",
    "opacity-100 "
  ].join(" ").trim()}"><h1 class="${[
    "text-6xl font-bold text-white transition-all duration-1000",
    "blur-sm "
  ].join(" ").trim()}" data-svelte-h="svelte-jp19w">Abhinav Ramesh</h1></div>`} <div class="${[
    "transition-opacity duration-1000",
    "opacity-0 "
  ].join(" ").trim()}"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"><span class="relative inline-block group"><span class="${[
    "font-poppins text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 svelte-nsaf09",
    ""
  ].join(" ").trim()}"${add_attribute("this", gradientElement, 0)} data-svelte-h="svelte-u79slu">Abhinav Ramesh</span> <span class="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span></span> <br><br> <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" data-svelte-h="svelte-19hbdww">That&#39;s me, I&#39;m a...</p> <br> <span class="poppins text-indigo-400">${escape(currentTitle)}</span></h2> <button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950" data-svelte-h="svelte-ppn6fh"><div class="absolute top-0 right-full w-full h-full bg-indigo-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Check Me Out ↓</h4></button></div> <div class="flex justify-center md:justify-start space-x-4" data-svelte-h="svelte-g5aojz"><div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/profile.png", 0)} alt="Profile" size="w-96" imgclass="h-96" class="object-cover z-[2] max-h-[70vh] rounded-full"></div> <div class="flex flex-col justify-center space-y-4 ml-4"><a href="https://github.com/AbhiByte" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> <a href="https://linkedin.com/in/abhinavramesh" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> <a href="https://devpost.com/sameerjuin" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></a> <a href="mailto:abhinavrmaesh03@gmail.com" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></div></div></section> <section id="about" class="py-8 sm:py-14 svelte-nsaf09">${validate_component(AboutAndSkills, "AboutAndSkills").$$render($$result, {}, {}, {})}</section> <section class="py-8 sm:py-14">${validate_component(ExperienceTimeline, "ExperienceTimeline").$$render($$result, {}, {}, {})}</section> <section class="py-8 sm:py-14">${validate_component(ProjectGallery, "ProjectGallery").$$render($$result, { steps }, {}, {})}</section></div> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
