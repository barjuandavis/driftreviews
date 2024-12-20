<script lang="ts">
  import "../app.css";
  import BottomNav from "$lib/components/BottomNav.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="min-h-screen bg-background text-foreground">
  <Header />
  <main class="container mx-auto px-4 pb-20">
    <slot />
  </main>
  <BottomNav />
</div>