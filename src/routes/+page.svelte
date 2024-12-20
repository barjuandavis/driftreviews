<script lang="ts">
  import type { PageData } from './$types';
  import ProductCard from '$lib/components/ProductCard.svelte';

  export let data: PageData;
</script>

<div class="space-y-8 py-8">
  <section>
    <h2 class="mb-4 text-2xl font-bold">Featured Mice</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#each data.mice as mouse}
        <ProductCard product={mouse} type="mouse" />
      {/each}
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-2xl font-bold">Featured Mousepads</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#each data.mousepads as mousepad}
        <ProductCard product={mousepad} type="mousepad" />
      {/each}
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-2xl font-bold">Featured Keyboards</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#each data.keyboards as keyboard}
        <ProductCard product={keyboard} type="keyboard" />
      {/each}
    </div>
  </section>
</div>