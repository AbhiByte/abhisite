<script>
    const skills = [
        { category: 'Programming Languages', items: ['python', 'cpp', 'cs', 'rust', 'javascript', 'matlab'] },
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
            
            <br><br>
            When I'm not immersed in schoolwork, you'll likely find me experimenting with new projects, 
            designing models for my 3D printer, or working on something exciting for a Hackathon. And if I'm not doing any of that, I'm probably at the gym or enjoying a good book :D
        </p>
        <br>
        <div class="flex gap-4">
            <button 
                on:click={scrollToProjects}
                class="button-effect"
            >
                <h4>See My Projects &darr;</h4>
            </button>
            <a href="https://drive.google.com/drive/folders/1c5UVoXO0UxRK_HjOIvRIKYoAXi02ZdaG?usp=sharing" target="_blank" class="button-effect">
                <h4>View My Resume(s)</h4>
            </a>
        </div>
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
    .button-effect {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        padding: 1rem 2rem;
        border-radius: 9999px;
        background-color: white;
        color: black;
        font-size: 1.25rem;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .button-effect h4 {
        margin: 0;
        z-index: 1;
    }

    .button-effect::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #4f46e5; /* Indigo background for hover */
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 0;
    }

    .button-effect:hover::before {
        opacity: 1;
    }

    .button-effect:hover {
        color: white;
    }

    .button-effect:hover h4 {
        color: white;
    }

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
    button, a {
        font-size: 1.25rem; /* Increase button text size */
    }
</style>
