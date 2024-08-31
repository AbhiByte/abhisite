<script>
    export let y;

    export let tabs = [
        { name: "Info", link: "#about" },
        { name: "Experience", link: "#experience" },    
        { name: "Projects", link: "#projects" },
    ];

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium cursor-pointer" on:click={scrollToTop}>
        <b class="font-bold poppins">Sameer Suleman</b> <span class=""></span>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400"
                on:click|preventDefault={() => scrollToSection(tab.link.slice(1))}
            >
                <p>{tab.name}</p>
            </a>
        {/each}
        <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950 cursor-hover"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Contact Me</h4>
        </button>
    </div>
</header>

<style>
  /* Ensure consistency with Main.svelte */
  :global(html), :global(body) {
    cursor: none !important;
  }

  :global(*) {
    cursor: none !important;
  }

  /* Add hover effect for header items */
  a, button, h1 {
    transition: transform 0.2s ease-in-out;
  }

  a:hover, button:hover, h1:hover {
    transform: translateY(-2px);
  }
</style>