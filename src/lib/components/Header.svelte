<script lang="ts">
  import { Menu, Search, X } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import { slide } from "svelte/transition";
  import { page } from "$app/stores";

  let isMenuOpen = false;
  let searchQuery = "";

  const categories = [
    { id: "mouse", label: "Mouse" },
    { id: "mousepad", label: "Mousepad" },
    { id: "keyboard", label: "Keyboard" },
  ];

  const socialLinks = [
    { href: "#", label: "TikTok" },
    { href: "#", label: "Instagram" },
    { href: "#", label: "Discord" },
  ];
</script>

<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
  <div class="container flex h-14 items-center">
    <Button
      variant="ghost"
      size="icon"
      class="touch-target md:hidden"
      on:click={() => (isMenuOpen = !isMenuOpen)}
    >
      {#if isMenuOpen}
        <X class="h-5 w-5" />
      {:else}
        <Menu class="h-5 w-5" />
      {/if}
    </Button>

    <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <form
        class="w-full md:w-auto md:flex-1 md:max-w-sm"
        on:submit|preventDefault
      >
        <div class="relative">
          <Search class="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search products..."
            class="w-full rounded-md border bg-background px-8 py-2 text-sm"
            bind:value={searchQuery}
          />
        </div>
      </form>
    </div>
  </div>

  {#if isMenuOpen}
    <div
      class="container pb-4"
      transition:slide={{ duration: 200 }}
    >
      <nav class="flex flex-col space-y-4">
        <div class="flex flex-wrap gap-2">
          {#each categories as category}
            <a
              href="/{category.id}"
              class="rounded-full bg-muted px-4 py-1.5 text-sm font-medium
                {$page.url.pathname === `/${category.id}` ? 'bg-primary text-primary-foreground' : ''}"
            >
              {category.label}
            </a>
          {/each}
        </div>

        <div class="flex flex-wrap gap-4">
          {#each socialLinks as link}
            <a
              href={link.href}
              class="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          {/each}
        </div>
      </nav>
    </div>
  {/if}
</header>