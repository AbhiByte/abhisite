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
            const headerOffset = 75; // Adjust this value based on your header height
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
            ? "py-4 bg-slate-950 border-violet-950 text-lg"
            : "py-8 bg-transparent border-transparent text-2xl")}
>
    <h1 class="font-medium cursor-pointer" on:click={scrollToTop}>
        <b class="font-bold poppins">Sameer Suleman</b>
    </h1>
    <div class="sm:flex items-center gap-6 hidden">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400"
                on:click|preventDefault={() => scrollToSection(tab.link.slice(1))}
            >
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
</header>

<style>
  /* Maintain cursor style consistency */
  :global(html), :global(body) {
    cursor: none !important;
  }

  :global(*) {
    cursor: none !important;
  }

  /* Hover effect for header items */
  a, button, h1 {
    transition: transform 0.2s ease-in-out;
  }

  a:hover, button:hover, h1:hover {
    transform: translateY(-2px);
  }

  /* Scaling the header size based on scroll */
  header {
    transition: all 0.3s ease-in-out;
  }

  header.py-8 {
    font-size: 1.5rem; /* Larger header for when y = 0 */
  }

  header.py-4 {
    font-size: 1rem; /* Smaller header for scrolling state */
  }
</style>
