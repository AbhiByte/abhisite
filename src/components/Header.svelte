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
          : "py-8 bg-transparent border-transparent text-2xl")}>
  <h1 class="font-medium cursor-pointer" on:click={scrollToTop}>
      <b class="font-bold poppins">Abhinav Ramesh</b>
  </h1>
  <div class="sm:flex items-center gap-6 hidden">
      {#each tabs as tab, index}
          <a
              href={tab.link}
              class="tab-button button-effect"
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

/* Responsive header buttons */
.tab-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: white;
  font-size: 1.25rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tab-button p {
  margin: 0;
  z-index: 1;
}

.tab-button::before {
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

.tab-button:hover::before {
  opacity: 1;
}

.tab-button:hover {
  color: white;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .tab-button {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
  }

  header.py-8 {
    font-size: 1.25rem; /* Reduce header size on small screens */
  }

  header.py-4 {
    font-size: 0.9rem; /* Reduce further on scroll */
  }
}
</style>
