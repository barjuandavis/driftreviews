import { useEffect, useState } from "react";
import NewMouseList from "../components/NewMouseList";
import "./App.css";
import About from "../components/about/About";

import posthog from "posthog-js";
import SlideoutButton from "@/components/sections/SlideoutButton";
import VariousLinksSection from "@/components/sections/VariousLinksSection";

function App() {
  useEffect(() => {
    posthog.capture("Homepage Viewed");
  }, []);

  const [aboutOpened, setAboutOpened] = useState(false);
  const [variousLinksOpened, setVariousLinksOpened] = useState(false);

  return (
    <>
      <main>
        <h1>List Rekomendasi Mouse by DRiFT (@barjuandavis)</h1>
        <div className="flex w-full flex-col gap-4">
          <div className="flex justify-center items-center gap-4 w-full flex-wrap">
            <SlideoutButton
              opened={aboutOpened}
              setOpened={setAboutOpened}
              content="Ini apaan?!"
            />
            <SlideoutButton
              opened={variousLinksOpened}
              setOpened={setVariousLinksOpened}
              content="Link Lainnya (Discord, dll.)"
            />
          </div>
          <VariousLinksSection opened={variousLinksOpened} />
          <About opened={aboutOpened} setOpen={setAboutOpened} />
        </div>
        <NewMouseList />
      </main>
    </>
  );
}

export default App;
