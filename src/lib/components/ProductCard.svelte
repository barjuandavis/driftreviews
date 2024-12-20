<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { getRatingEmoji, formatPrice } from "$lib/utils";
  import type { Mouse, Mousepad, Keyboard } from "$lib/types/prismic";

  export let product: Mouse | Mousepad | Keyboard;
  export let type: "mouse" | "mousepad" | "keyboard";

  $: image = type === "mousepad" 
    ? product.data.mousepad_image 
    : type === "keyboard" 
    ? product.data.image 
    : product.data.mouse_image;

  $: name = type === "mousepad" 
    ? product.data.mousepad_name 
    : type === "keyboard" 
    ? product.data.keyboard_name 
    : product.data.mouse_name_short;

  $: shape = type === "mouse" ? product.data.mouse_shape_type : undefined;
</script>

<div class="group relative overflow-hidden rounded-lg border bg-card p-4">
  <div class="aspect-square overflow-hidden rounded-md">
    <img
      src={image.url}
      alt={image.alt}
      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
  </div>

  <div class="mt-4 space-y-2">
    <div class="flex items-center justify-between">
      <h3 class="font-medium">{name}</h3>
      <span class="text-sm">{getRatingEmoji(parseInt(product.data.value_rating))}</span>
    </div>

    {#if shape}
      <span class="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs">
        {shape}
      </span>
    {/if}

    <p class="text-sm text-muted-foreground">
      {product.data.price_range}
    </p>

    <div class="flex gap-2">
      <Button
        variant="secondary"
        size="sm"
        class="w-full"
        href={product.data.review_content_embed.embed_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch Review
      </Button>
      <Button
        variant="default"
        size="sm"
        class="w-full"
        href={product.data.affiliate_link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check Price
      </Button>
    </div>
  </div>
</div>