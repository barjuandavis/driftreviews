import { useState } from "react";

import MouseUICard from "../components/mouse/MouseUICard";

import { getAllMouse } from "../api/prismic";
import { Input } from "./ui/input";
import { AnimatePresence } from "framer-motion";
import MouseNotFoundSection from "./mouse/MouseNotFoundSection";

import FilterSection from "./sections/FilterSection";

const mouseData = await getAllMouse();

export default function NewMouseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterButtonOpened, setFilterButtonOpened] = useState(false);
  // const [filters, setFilters] = useState<Filters>({
  //   brands: [],
  //   valueRating: [],
  //   priceRange: [],
  // });
  console.log(mouseData);

  const filteredMouse = mouseData.filter((mouse) => {
    return mouse.data.mouse_name_short
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
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
        {/* put a filter button in this div */}
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
