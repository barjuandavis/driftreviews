<script lang="ts">
  import { Home, Search, SlidersHorizontal } from "lucide-svelte";
  import { page } from "$app/stores";

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/search", icon: Search, label: "Search" },
    { href: "/filters", icon: SlidersHorizontal, label: "Filters" },
  ];
</script>

<nav
  class="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background/95 backdrop-blur md:hidden"
>
  {#each navItems as item}
    <a
      href={item.href}
      class="flex touch-target flex-col items-center justify-center"
      class:text-primary={$page.url.pathname === item.href}
      class:text-muted-foreground={$page.url.pathname !== item.href}
    >
      <svelte:component this={item.icon} class="h-5 w-5" />
      <span class="text-xs">{item.label}</span>
    </a>
  {/each}
</nav>