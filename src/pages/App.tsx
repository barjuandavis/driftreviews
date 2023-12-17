import { useEffect, useState } from "react";
import NewMouseList from "../components/NewMouseList";
import "./App.css";
import MouseAbout from "../components/about/MouseAbout";

import posthog from "posthog-js";
import SlideoutButton from "@/components/sections/SlideoutButton";
import VariousLinksSection from "@/components/sections/VariousLinksSection";
import MousepadAbout from "@/components/about/MousepadAbout";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  useEffect(() => {
    posthog.capture("Homepage Viewed");
  }, []);

  type ContentType = "mouse" | "mousepad";

  const [aboutOpened, setAboutOpened] = useState<
    ContentType | null | undefined
  >(undefined);
  const [variousLinksOpened, setVariousLinksOpened] = useState(false);
  const [contentType, setContentType] = useState<ContentType>("mouse");

  const setAboutSectionBasedOnContentType = (open: boolean) => {
    if (contentType === "mouse") {
      setAboutOpened(open ? "mouse" : undefined);
    } else {
      setAboutOpened(open ? "mousepad" : undefined);
    }
  };

  return (
    <>
      <main>
        <h1>List Rekomendasi Mouse by DRiFT (@barjuandavis)</h1>
        <div className="flex w-full flex-col gap-4">
          <div className="flex justify-center items-center gap-4 w-full flex-wrap">
            <SlideoutButton
              opened={aboutOpened !== undefined}
              setOpened={setAboutSectionBasedOnContentType}
              content="Ini apaan?!"
            />
            <SlideoutButton
              opened={variousLinksOpened}
              setOpened={setVariousLinksOpened}
              content="Link Lainnya (Discord, dll.)"
            />
          </div>
          <div className="flex justify-center items-center gap-4 w-full flex-wrap">
            {/*
            create a Tab button for each content type
            style it using Tailwind
            */}
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger
                  value="mouse"
                  onClick={() => {
                    setContentType("mouse");
                  }}
                >
                  Mouse
                </TabsTrigger>
                <TabsTrigger
                  value="mousepad"
                  onClick={() => {
                    setContentType("mousepad");
                  }}
                >
                  Mousepad
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mouse">
                <NewMouseList />
              </TabsContent>
              <TabsContent value="mousepad">Konten mousepad disini</TabsContent>
            </Tabs>
          </div>
          <VariousLinksSection opened={variousLinksOpened} />
          <MouseAbout
            opened={aboutOpened === "mouse"}
            setOpen={setAboutSectionBasedOnContentType}
          />
          <MousepadAbout
            opened={aboutOpened === "mousepad"}
            setOpen={setAboutSectionBasedOnContentType}
          />
        </div>
      </main>
    </>
  );
}

export default App;
