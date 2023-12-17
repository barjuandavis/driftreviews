import { MousePost } from "../../api/prismic";
import PopupSection from "./PopupSection";
import {
  generateBrandNamesFromMousePosts,
  generateMouseShapes,
  generatePriceRanges,
  generateRanks,
  generateSizes,
  generateValueRatings,
} from "../../lib/generateValues";

import getCurrentFilterValue from "../../lib/getCurrentFilterValue";
import useFilterStore from "../../lib/filterStore";

export default function FilterSection(props: {
  opened: boolean;
  setOpen: (opened: boolean) => void;
  mouseData: MousePost[];
}) {
  const brands = generateBrandNamesFromMousePosts(props.mouseData);
  const valueRatings = generateValueRatings();
  const priceRanges = generatePriceRanges();
  const mouseShapes = generateMouseShapes();
  const ranks = generateRanks();
  const sizes = generateSizes();
  const toggleFilterValue = useFilterStore((state) => state.toggleFilterValue);

  return (
    <PopupSection opened={props.opened} setOpened={props.setOpen}>
      <div className="flex gap-4 flex-col p-8">
        <h3 className="mb-4">Mau cari mouse apa? Silakan filter disini.</h3>
        <p>Berdasarkan Brand</p>
        <div className="flex flex-wrap gap-2">
          {brands
            .sort((a, b) => a.localeCompare(b))
            .map((brand) => (
              <button
                type="button"
                key={brand}
                className={`${
                  getCurrentFilterValue(brand, "brands")
                    ? "button-toggle"
                    : "link-button"
                }`}
                onClick={() => {
                  toggleFilterValue("brands", brand);
                }}
              >
                {brand}
              </button>
            ))}
        </div>
        <p>Berdasarkan Value Rating</p>
        <div className="flex flex-wrap gap-2">
          {valueRatings.map((valueRating) => (
            <button
              type="button"
              key={valueRating}
              className={`${
                getCurrentFilterValue(valueRating, "valueRating")
                  ? "button-toggle"
                  : "link-button"
              }`}
              onClick={() => {
                toggleFilterValue("valueRating", valueRating);
              }}
            >
              {"💸".repeat(parseInt(valueRating))}
            </button>
          ))}
        </div>
        <p>Berdasarkan Rentang Harga</p>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((priceRange) => (
            <button
              type="button"
              key={priceRange}
              className={`${
                getCurrentFilterValue(priceRange, "priceRange")
                  ? "button-toggle"
                  : "link-button"
              }`}
              onClick={() => {
                toggleFilterValue("priceRange", priceRange);
              }}
            >
              {priceRange}
            </button>
          ))}
        </div>
        <p>Berdasarkan Bentuk Mouse</p>
        <div className="flex flex-wrap gap-2">
          {mouseShapes.map((mouseShape) => (
            <button
              type="button"
              key={mouseShape}
              className={`${
                getCurrentFilterValue(mouseShape, "shapes")
                  ? "button-toggle"
                  : "link-button"
              }`}
              onClick={() => {
                toggleFilterValue("shapes", mouseShape);
              }}
            >
              {mouseShape}
            </button>
          ))}
        </div>
        <p>Berdasarkan Rank</p>
        <div className="flex flex-wrap gap-2">
          {ranks.map((rank) => (
            <button
              type="button"
              key={rank}
              className={`${
                getCurrentFilterValue(rank, "ranks")
                  ? "button-toggle"
                  : "link-button"
              }`}
              onClick={() => {
                toggleFilterValue("ranks", rank);
              }}
            >
              {rank}
            </button>
          ))}
        </div>
        <p>Berdasarkan Ukuran</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              type="button"
              className={`${
                getCurrentFilterValue(size, "sizes")
                  ? "button-toggle"
                  : "link-button"
              }`}
              onClick={() => {
                toggleFilterValue("sizes", size);
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </PopupSection>
  );
}
