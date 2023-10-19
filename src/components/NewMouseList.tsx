import { useState } from "react";

import MouseUICard from "../components/mouse/MouseUICard";

import { getAllMouse } from "../api/prismic";
const mouseData = await getAllMouse();

export default function NewMouseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredMouse = mouseData.filter((mouse) => {
    return mouse.data.mouse_name_short
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
  return (
    <>
      <input
        className="
      w-full max-w-800 mx-auto p-1 my-4 border-2 border-gray-300 rounded-md   
      "
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div className="flex flex-wrap justify-evenly max-w-800 mx-auto w-full gap-4">
        {filteredMouse.length > 0 ? (
          filteredMouse.map((mouse) => (
            <MouseUICard key={mouse.id} mousePost={mouse} />
          ))
        ) : (
          <p className="text-center">Mouse tidak ditemukan</p>
        )}
      </div>
    </>
  );
}
