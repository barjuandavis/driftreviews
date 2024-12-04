import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { formatPrice, getRatingEmoji } from "@/utils";
import { KeyboardPost, MousepadPost, MousePost } from "@/lib/prismic";

export function ProductCard({ product }: { product: Product }) {
  const isMousePost = "mouse_name" in product.data;
  const isMousepadPost = "mousepad_name" in product.data;
  const isKeyboardPost = "keyboard_name" in product.data;

  let name = "Unknown Product";
  let image = { url: "/placeholder.svg", alt: "Product Image" };
  let shape = "N/A";
  let currentProduct = product;

  if (isMousePost) {
    const mouse = product as MousePost;
    name = mouse.data.mouse_name_short;
    image = mouse.data.mouse_image;
    shape = mouse.data.mouse_shape_type;
  }

  if (isMousepadPost) {
    const mousepad = product as MousepadPost;
    name = mousepad.data.mousepad_name;
    image = mousepad.data.mousepad_image;
    shape = "N/A";
  }

  if (isKeyboardPost) {
    const keyboard = product as KeyboardPost;
    name = keyboard.data.keyboard_name;
    image = keyboard.data.image;
    shape = "N/A";
  }

  const [minPrice, maxPrice] = product.data.price_range
    .split("-")
    .map((price) => parseInt(price.replace(/\D/g, "")));

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={image.url}
            alt={image.alt || name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate">{name}</h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm">
              {getRatingEmoji(parseInt(product.data.value_rating))}
            </span>
            {isMousePost && <Badge variant="secondary">{shape}</Badge>}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {formatPrice(minPrice)} - {formatPrice(maxPrice)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2 p-4">
        <Button asChild variant="secondary" className="w-full">
          <Link href={product.data.review_content_embed.embed_url ?? "#"}>
            Watch Review
          </Link>
        </Button>
        <Button asChild variant="default" className="w-full">
          <Link href={product.data.affiliate_link.url ?? "#"}>Check Price</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
