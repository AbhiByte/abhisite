<script>
    const skills = [
        { category: 'Programming Languages', items: ['python', 'cpp', 'cs', 'rust', 'javascript','matlab'] },
        { category: 'Libraries', items: ['react', 'svelte', 'nodejs', 'flask', 'graphql', 'pytorch', 'sklearn', 'opencv'] },
        { category: 'Software', items: ['unity', 'git', 'docker'] }
    ];

    function scrollToProjects() {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const offset = 100; 
            const elementPosition = projectsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
</script>

<div class="grid grid-cols-2 gap-16"> <!-- Changed to grid layout with a gap -->
    <div class="mb-8">
        <h2 class="text-5xl font-bold text-white mb-8">About Me</h2>
        <p class="text-2xl text-gray-300 leading-relaxed">
            Hi! I'm Sameer, a 3rd-year Computer Engineering student at McMaster University. 
            I'm passionate about AI applications and embedded systems, particularly in spacecraft and automotive vehicles.
            
            <br>
            <br>
            When I'm not immersed in schoolwork, you'll likely find me experimenting with new projects, 
            designing models for my 3D printer, or working on something exciting for a Hackathon. And if I'm not doing any of that, I'm probably at the gym or enjoying a good book :D
        </p>
        <br>
        <button 
            on:click={scrollToProjects}
            class="mt-4 poppins relative overflow-hidden px-8 py-4 group rounded-full bg-white text-black shadow-lg"
        >
        <div class="absolute top-0 right-full w-full h-full bg-indigo-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
          <h4 class="relative z-9">See My Projects &darr;</h4>
        </button>
    </div>

    <div>
        <h2 class="text-5xl font-bold text-white mb-8">Skills</h2>
        
        {#each skills as skillCategory}
            <div class="mb-8">
                <h3 class="text-3xl font-semibold text-blue-400 mb-4">{skillCategory.category}</h3>
                <div class="skills-icons">
                    <a href="https://skillicons.dev">
                        <img src={`https://skillicons.dev/icons?i=${skillCategory.items.join(',')}&theme=light&perline=5`} alt="{skillCategory.category} Skills" />
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .skills-icons {
        display: inline-block;
        margin-left: 10px; /* Adjust the value to align icons properly */
    }
    h2 {
        font-size: 3rem; /* Increase section header size */
    }
    p {
        font-size: 1.5rem; /* Increase paragraph text size */
    }
    button {
        font-size: 1.25rem; /* Increase button text size */
    }
</style>
