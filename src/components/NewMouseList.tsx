import { useState } from "react";
import { type MousePost } from "src/api/prismic";

import MouseUICard from "src/components/mouse/MouseUICard.tsx";

export default function NewMouseList({
  mouseData,
}: {
  mouseData: MousePost[];
}) {
  const data = mouseData;

  return (
   
      <div className="flex flex-wrap justify-evenly max-w-800 mx-auto w-full gap-4">
        {data
      .map((mouse) => (
          <MouseUICard mousePost={mouse} />
        ))}
      </div>
 
  );
}
