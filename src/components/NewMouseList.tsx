import { useState } from "react";

import MouseUICard from "../components/mouse/MouseUICard";

import { getAllMouse } from "../api/prismic";
import { Input } from "./ui/input";
import { AnimatePresence } from "framer-motion";
import MouseNotFoundSection from "./mouse/MouseNotFoundSection";
const mouseData = await getAllMouse();

export default function NewMouseList() {
  const [searchTerm, setSearchTerm] = useState("");
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
          className="md:w-1/4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-1/2 justify-center"
        >
          Filter
        </button>
      </div>

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
