import { MousePost } from "@/api/prismic";
import PopupSection from "./PopupSection";
import generateBrandNamesFromMousePosts from "@/lib/generateBrandNamesFromMousePosts";

export type Filters = {
  brands: string[];
  valueRating: number[];
  priceRange: number[];
};

export default function FilterSection(props: {
  opened: boolean;
  setOpen: (opened: boolean) => void;
  mouseData: MousePost[];
}) {
  const brands = Array.from(generateBrandNamesFromMousePosts(props.mouseData));

  return (
    <PopupSection opened={props.opened} setOpened={props.setOpen}>
      <h3>Mau cari mouse apa? Silakan filter disini.</h3>
      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => (
          <button
            key={brand}
            className="link-button"
            onClick={() => {
              props.setOpen(false);
            }}
          >
            {brand}
          </button>
        ))}
      </div>
    </PopupSection>
  );
}
