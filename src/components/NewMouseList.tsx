import { useEffect, useState } from "react";

import MouseUICard from "../components/mouse/MouseUICard";

import { MousePost, getAllMouse } from "../api/prismic";
import { Input } from "./ui/input";
import { AnimatePresence } from "framer-motion";
import MouseNotFoundSection from "./mouse/MouseNotFoundSection";

import FilterSection from "./sections/FilterSection";
import FilterEmptySvg from "../assets/filter-kosong.svg?react";
import FilterFilledSvg from "../assets/filter-isi.svg?react";

import useFilterStore, { checkIfFiltersAreEmpty } from "../lib/filterStore";
import { convertRankIntoNumber } from "../lib/generateValues";

export default function NewMouseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mouseData, setMouseData] = useState<MousePost[]>([] as MousePost[]);
  const [filterButtonOpened, setFilterButtonOpened] = useState(false);
  const filters = useFilterStore((state) => state.filters);
  const resetFilters = useFilterStore((state) => state.resetFilterValues);

  useEffect(() => {
    const fetchMouseData = async () => {
      const mouseData = await getAllMouse();
      setMouseData(mouseData);
    };
    fetchMouseData();
  }, []);

  const filteredMouse = mouseData
    .filter((mouse) => {
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
        filters.ranks.includes(mouse.data.rank) || filters.ranks.length === 0,
      ];
      //check if every "checks" statements is true
      return checks.reduce((acc, curr) => acc && curr, true);
    })
    .sort((a, b) => {
      return (
        convertRankIntoNumber(a.data.rank) - convertRankIntoNumber(b.data.rank)
      );
    })
    .sort(
      (a, b) => parseInt(b.data.value_rating) - parseInt(a.data.value_rating)
    );

  const filterIsEmpty = checkIfFiltersAreEmpty();

  return (
    <div className="flex flex-col gap-4 w-full">
      {!filterIsEmpty && (
        <div className="flex justify-end w-full">
          <p
            className="underline cursor-pointer text-slate-400"
            onClick={resetFilters}
          >
            Reset semua filter
          </p>
        </div>
      )}
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
          className={!filterIsEmpty ? "button-toggle" : "link-button"}
        >
          Filter{" "}
          {filterIsEmpty ? (
            <FilterEmptySvg className="w-5 h-5 ml-2 align-text-top inline-block" />
          ) : (
            <FilterFilledSvg className="w-5 h-5 ml-2 align-text-top inline-block" />
          )}
        </button>
      </div>
      <FilterSection
        opened={filterButtonOpened}
        setOpen={setFilterButtonOpened}
        mouseData={mouseData}
      />

      <div className="flex flex-wrap justify-center max-w-800 my-4 mx-auto w-full gap-4">
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
