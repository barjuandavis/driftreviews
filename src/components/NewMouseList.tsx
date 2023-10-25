import { useEffect, useState } from "react";

import MouseUICard from "../components/mouse/MouseUICard";

import { MousePost, getAllMouse } from "../api/prismic";
import { AnimatePresence, motion } from "framer-motion";
import MouseNotFoundSection from "./mouse/MouseNotFoundSection";

import FilterSection from "./sections/FilterSection";

import useFilterStore from "../lib/filterStore";
import { convertRankIntoNumber } from "../lib/generateValues";
import FilterInputsSection from "./sections/FilterInputsSection";

export default function NewMouseList() {
  const [mouseData, setMouseData] = useState<MousePost[]>([] as MousePost[]);
  const [filterButtonOpened, setFilterButtonOpened] = useState(false);
  const [filterInputsSectionsOpened, setFilterInputsSectionsOpened] =
    useState(false);
  const filters = useFilterStore((state) => state.filters);
  const searchTerm = useFilterStore((state) => state.searchTerm);

  useEffect(() => {
    const fetchMouseData = async () => {
      const mouseData = await getAllMouse();
      setMouseData(mouseData);
    };
    fetchMouseData();
  }, []);

  useEffect(() => {
    console.log("filterInputsSectionsOpened", filterInputsSectionsOpened);
  }, [filterInputsSectionsOpened]);

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

  return (
    <div className="flex flex-col gap-4 w-full">
      <motion.div
        // animate when the previous input button has been scrolled away\
        onViewportLeave={() => {
          setFilterInputsSectionsOpened(true);
        }}
        onViewportEnter={() => {
          setFilterInputsSectionsOpened(false);
        }}
        className="flex flex-wrap gap-4 w-full justify-center"
      >
        <FilterInputsSection
          isAbsolute={false}
          setFilterButtonOpened={setFilterButtonOpened}
        />
      </motion.div>
      <AnimatePresence>
        {filterInputsSectionsOpened && (
          <motion.div
            initial={{
              opacity: 0,
              position: "fixed",
              width: "100vw",
              height: "12vh",
              zIndex: 100,
              top: 0,
              left: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <FilterInputsSection
              isAbsolute={true}
              setFilterButtonOpened={setFilterButtonOpened}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
