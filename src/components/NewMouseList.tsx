import { useState } from "react";

import MouseUICard from "../components/mouse/MouseUICard";

import { getAllMouse } from "../api/prismic";
import { Input } from "./ui/input";
import { AnimatePresence } from "framer-motion";
import MouseNotFoundSection from "./mouse/MouseNotFoundSection";

import FilterSection from "./sections/FilterSection";

import useFilterStore from "@/lib/filterStore";

const mouseData = await getAllMouse();

export default function NewMouseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterButtonOpened, setFilterButtonOpened] = useState(false);
  const filters = useFilterStore((state) => state.filters);

  const filteredMouse = mouseData.filter((mouse) => {
    const checks = [
      mouse.data.mouse_name_short
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
      filters.brands.includes(mouse.data.brand.tags[0]) ||
        filters.brands.length === 0,
      filters.priceRange.includes(mouse.data.price_range) ||
        filters.priceRange.length === 0,
      filters.shapes.includes(mouse.data.mouse_shape_type) ||
        filters.shapes.length === 0,
      filters.valueRating.includes(mouse.data.value_rating) ||
        filters.valueRating.length === 0,
    ];
    //check if every "checks" statements is true
    return checks.reduce((acc, curr) => acc && curr, true);
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <Input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div>
        <button
          type="button"
          onClick={() => {
            setFilterButtonOpened(!filterButtonOpened);
          }}
          className="link-button"
        >
          Filter
        </button>
      </div>
      <FilterSection
        opened={filterButtonOpened}
        setOpen={setFilterButtonOpened}
        mouseData={mouseData}
      />

      <div className="flex flex-wrap justify-evenly max-w-800 my-4 mx-auto w-full gap-4">
        <AnimatePresence>
          {filteredMouse.length > 0 ? (
            filteredMouse.map((mouse) => (
              <MouseUICard key={mouse.id} mousePost={mouse} />
            ))
          ) : (
            <MouseNotFoundSection />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
