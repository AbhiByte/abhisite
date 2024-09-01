<script>
    import { onMount, onDestroy } from 'svelte';
  
    export let images = [];
    let currentIndex = 0;
    let interval;
  
    onMount(() => {
      startSlideshow();
    });
  
    onDestroy(() => {
      stopSlideshow();
    });
  
    function startSlideshow() {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
      }, 3000);
    }
  
    function stopSlideshow() {
      clearInterval(interval);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  </script>
  
  <div class="relative w-full h-full">
    {#each images as image, i}
      <img
        src={image}
        alt="Experience image"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style="opacity: {i === currentIndex ? 1 : 0}"
      />
    {/each}
    
    <button
      class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      on:click={prevImage}
    >
      &lt;
    </button>
    
    <button
      class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      on:click={nextImage}
    >
      &gt;
    </button>
  </div>