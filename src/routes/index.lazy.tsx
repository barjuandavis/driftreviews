import { useEffect, useState } from "react";
import NewMouseList from "../components/NewMouseList";
import "./index.css";
import MouseAbout from "../components/about/MouseAbout";

import posthog from "posthog-js";
import SlideoutButton from "@/components/sections/SlideoutButton";
import VariousLinksSection from "@/components/sections/VariousLinksSection";
import MousepadAbout from "@/components/about/MousepadAbout";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewMousepadList from "@/components/NewMousepadList";

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
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
            <VariousLinksSection opened={variousLinksOpened} />
            <Tabs defaultValue="mouse" className="w-full">
              <TabsList className="py-2 bg-slate-300">
                <TabsTrigger
                  className="px-8"
                  value="mouse"
                  onClick={() => {
                    setContentType("mouse");
                  }}
                >
                  Mouse
                </TabsTrigger>
                <TabsTrigger
                  value="mousepad"
                  className="px-8"
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
              <TabsContent value="mousepad">
                <NewMousepadList />
              </TabsContent>
            </Tabs>
          </div>
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
