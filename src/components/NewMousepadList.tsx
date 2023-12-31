import { useEffect, useState } from "react";

import MousepadUICard from "./mousepad/MousepadUICard";

import { MousepadPost, getAllMousepad } from "../api/prismic";
import { AnimatePresence } from "framer-motion";
import MouseNotFoundSection from "./mousepad/MouseNotFoundSection";

// import FilterSection from "./sections/FilterSection";
// import useFilterStore from "../lib/filterStore";
// import FilterInputsSection from "./sections/FilterInputsSection";

import { convertRankIntoNumber } from "../lib/generateValues";
import LoadingScreen from "./sections/LoadingScreen";

export default function NewMousepadList() {
  const [mousepadData, setMousepadData] = useState<MousepadPost[]>(
    [] as MousepadPost[]
  );
  // const [filterButtonOpened, setFilterButtonOpened] = useState(false);
  // const [filterInputsSectionsOpened, setFilterInputsSectionsOpened] =
  //   useState(false);
  // const filters = useFilterStore((state) => state.filters);
  // const searchTerm = useFilterStore((state) => state.searchTerm);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMouseData = async () => {
      setLoading(true);
      const mouseData = await getAllMousepad();
      setMousepadData(mouseData);
      setLoading(false);
    };
    fetchMouseData();
  }, []);

  const filteredMousepad = mousepadData
    .filter((mouse) => {
      const checks = [
        mouse.data.mousepad_name.toLowerCase(),
        //   .includes(searchTerm?.toLowerCase?.() ?? ""),
        // filters.brands.includes(mouse.data.brand.tags[0]) ||
        //   filters.brands.length === 0,
        // filters.priceRange.includes(mouse.data.price_range) ||
        //   filters.priceRange.length === 0,
        // filters.shapes.includes(mouse.data.mouse_shape_type) ||
        //   filters.shapes.length === 0,
        // filters.valueRating.includes(mouse.data.value_rating) ||
        //   filters.valueRating.length === 0,
        // filters.ranks.includes(mouse.data.rank) || filters.ranks.length === 0,
        // filters.sizes.includes(mouse.data.size) || filters.sizes.length === 0,
      ];
      //check if every "checks" statements is true
      // return checks.reduce((acc, curr) => acc && curr, true);
      return checks[0];
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
      {/* <motion.div
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
              display: "flex",
              justifyContent: "center",
              width: "100vw",
              height: "12vh",
              zIndex: 100,
              top: 0,
              left: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0) 100%)",
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
      /> */}

      <div className="flex flex-wrap justify-center max-w-800 my-4 mx-auto w-full gap-4">
        <AnimatePresence>
          {loading && <LoadingScreen key="just-a-loading-screen" />}
          {filteredMousepad.length > 0 && !loading ? (
            filteredMousepad.map((mousepad) => (
              <MousepadUICard key={mousepad.id} mousepadPost={mousepad} />
            ))
          ) : (
            <MouseNotFoundSection />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
