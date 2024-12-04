"use client";

import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { FilterSystem } from "@/components/FilterSystem";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Product, FilterState } from "@/types";
import { INITIAL_FILTER_STATE } from "@/constants";
import { getAllMouse, getAllMousepad, getAllKeyboard } from "@/lib/prismic";

async function getProducts(): Promise<Product[]> {
  const [mice, mousepads, keyboards] = await Promise.all([
    getAllMouse(),
    getAllMousepad(),
    getAllKeyboard(),
  ]);
  return [...mice, ...mousepads, ...keyboards];
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList initialProducts={products} />
      </Suspense>
    </div>
  );
}

function ProductList({ initialProducts }: { initialProducts: Product[] }) {
  "use client";

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTER_STATE);

  useEffect(() => {
    const filteredProducts = initialProducts.filter((product) => {
      const [minPrice, maxPrice] = product.data.price_range
        .split("-")
        .map((price) => parseInt(price.replace(/\D/g, "")));
      const rating = parseInt(product.data.value_rating);
      const category =
        "mouse_name" in product.data
          ? "Mouse"
          : "mousepad_name" in product.data
          ? "Mousepad"
          : "keyboard_name" in product.data
          ? "Keyboard"
          : "All";

      return (
        (filters.category === "All" || filters.category === category) &&
        minPrice >= filters.priceRange[0] &&
        maxPrice <= filters.priceRange[1] &&
        rating >= filters.rating &&
        (filters.shape.length === 0 ||
          ("mouse_shape_type" in product.data &&
            filters.shape.includes(product.data.mouse_shape_type)))
      );
    });

    setProducts(filteredProducts);
  }, [filters, initialProducts]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const activeFilters = Object.values(filters).filter(
    (value) =>
      (Array.isArray(value) && value.length > 0) ||
      (typeof value === "number" && value > 0) ||
      (typeof value === "string" && value !== "All")
  ).length;

  return (
    <main className="container py-6">
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <aside className="hidden md:block">
          <FilterSystem onFilterChange={handleFilterChange} />
        </aside>
        <div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation
        onFilterChange={handleFilterChange}
        activeFilters={activeFilters}
      />
    </main>
  );
}
