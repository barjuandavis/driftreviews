import { useEffect, useState } from "react";

import MouseUICard from "../components/mouse/MouseUICard";

import { MousePost, getAllMouse } from "../api/prismic";
import { AnimatePresence } from "framer-motion";
import MouseNotFoundSection from "./mouse/MouseNotFoundSection";

import FilterSection from "./mouse/MouseFilterSection";

import { useMouseFilterStore } from "../lib/filterStore";
import { convertRankIntoNumber } from "../lib/generateValues";

import LoadingScreen from "./sections/LoadingScreen";
import FilterInputsMergedSection from "./sections/FilterInputsMergedSection";

export default function NewMouseList() {
  const [mouseData, setMouseData] = useState<MousePost[]>([] as MousePost[]);
  const [filterButtonOpened, setFilterButtonOpened] = useState(false);
  const [filterInputsSectionsOpened, setFilterInputsSectionsOpened] =
    useState(false);
  const filters = useMouseFilterStore((state) => state.filters);
  const searchTerm = useMouseFilterStore((state) => state.searchTerm);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMouseData = async () => {
      setLoading(true);
      const mouseData = await getAllMouse();
      setMouseData(mouseData);
      setLoading(false);
    };
    fetchMouseData();
  }, []);

  const filteredMouse = mouseData
    .filter((mouse) => {
      const checks = [
        mouse.data.mouse_name_short
          .toLowerCase()
          .includes(searchTerm?.toLowerCase?.() ?? ""),
        filters.brands.includes(mouse.data.brand.tags[0]) ||
          filters.brands.length === 0,
        filters.priceRange.includes(mouse.data.price_range) ||
          filters.priceRange.length === 0,
        filters.shapes.includes(mouse.data.mouse_shape_type) ||
          filters.shapes.length === 0,
        filters.valueRating.includes(mouse.data.value_rating) ||
          filters.valueRating.length === 0,
        filters.ranks.includes(mouse.data.rank) || filters.ranks.length === 0,
        filters.sizes.includes(mouse.data.size) || filters.sizes.length === 0,
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
      (a, b) => parseInt(b.data.value_rating) - parseInt(a.data.value_rating),
    );

  return (
    <div className="flex flex-col gap-4 w-full">
      <FilterInputsMergedSection
        filterInputsSectionsOpened={filterInputsSectionsOpened}
        setFilterButtonOpened={setFilterButtonOpened}
        setFilterInputsSectionsOpened={setFilterInputsSectionsOpened}
      />

      <FilterSection
        opened={filterButtonOpened}
        setOpen={setFilterButtonOpened}
        mouseData={mouseData}
      />

      <div className="flex flex-wrap justify-center max-w-full my-4 mx-auto w-full gap-4">
        <AnimatePresence>
          {loading && <LoadingScreen key="just-a-loading-screen" />}
          {filteredMouse.length > 0 && !loading ? (
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
