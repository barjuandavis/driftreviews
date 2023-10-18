"use client";

import { useState } from "react";
import { type MousePost } from "src/api/prismic";

import MouseUICard from "src/components/mouse/MouseUICard.tsx";

import { getAllMouse } from "../api/prismic";
const mouseData = (await getAllMouse()).map((mouseData) => mouseData);

export default function NewMouseList() {
  const data = mouseData;
  const [searchTerm, setSearchTerm] = useState("");
  return (

      <>
      <input className="
      w-full max-w-800 mx-auto p-1 my-4 border-2 border-gray-300 rounded-md   
      " type="text" placeholder="Search" onChange={(event) => {
        setSearchTerm(event.target.value);
      }} />

      <div className="flex flex-wrap justify-evenly max-w-800 mx-auto w-full gap-4">
        {data
        .filter((mouse) => {
          if (searchTerm === "") {
            return mouse;
          } else if (
            mouse.data.mouse_name_short
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return mouse;
          }
        })

      .map((mouse) => (
          <MouseUICard 
          key={mouse.id}
          mousePost={mouse} />
        ))}
      </div>
      </>

  );
}
