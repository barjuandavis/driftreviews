import { MousePost } from "@/api/prismic";
import PopupSection from "./PopupSection";
import generateBrandNamesFromMousePosts from "@/lib/generateBrandNamesFromMousePosts";
import { type Filters } from "@/lib/processFilters";
import toggleFilterValue from "@/lib/toggleFilterValue";
import getCurrentFilterValue from "@/lib/getCurrentFilterValue";

export default function FilterSection(props: {
  opened: boolean;
  setOpen: (opened: boolean) => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  mouseData: MousePost[];
}) {
  const brands = Array.from(generateBrandNamesFromMousePosts(props.mouseData));

  return (
    <PopupSection opened={props.opened} setOpened={props.setOpen}>
      <div className="flex gap-4 flex-col">
        <h3>Mau cari mouse apa? Silakan filter disini.</h3>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <button
              type="button"
              key={brand}
              className={`${
                getCurrentFilterValue(brand, "brands", props.filters)
                  ? "button-toggle"
                  : "link-button"
              }`}
              onClick={() => {
                toggleFilterValue(
                  brand,
                  "brands",
                  props.filters,
                  props.setFilters
                );
              }}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </PopupSection>
  );
}
