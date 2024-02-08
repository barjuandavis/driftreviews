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
import { z } from "zod";
import {
  Link,
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";

const searchSchema = z.object({
  itemType: z.enum(["mouse", "mousepad"]).catch("mouse"),
});

//type Search = z.infer<typeof searchSchema>

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: searchSchema,
});

function Index() {
  const { itemType } = useSearch({
    from: Route.fullPath,
  });
  const navigate = useNavigate({
    from: Route.fullPath,
  });

  useEffect(() => {
    posthog.capture("Homepage Viewed");
    console.log("itemType", itemType);
  }, []);

  type ContentType = "mouse" | "mousepad";

  const [aboutOpened, setAboutOpened] = useState<
    ContentType | null | undefined
  >(undefined);
  const [variousLinksOpened, setVariousLinksOpened] = useState(false);

  //convert to usestate to search params using tanstack router

  const setAboutSectionBasedOnContentType = (open: boolean) => {
    posthog.capture("About Section Toggled", {
      itemType,
    });
    setAboutOpened(open ? itemType : null);
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
            <Tabs defaultValue={itemType} className="w-full">
              <TabsList className="py-2 bg-slate-300">
                <TabsTrigger
                  className="px-8"
                  value="mouse"
                  onClick={() => {
                    posthog.capture("Tab Clicked", {
                      tab: "Mouse",
                    });
                    navigate({
                      search: () => ({ itemType: "mouse" }),
                    });
                  }}
                >
                  Mouse
                </TabsTrigger>

                <TabsTrigger
                  value="mousepad"
                  className="px-8"
                  onClick={() => {
                    posthog.capture("Tab Clicked", {
                      tab: "Mousepad",
                    });
                    navigate({
                      search: () => ({ itemType: "mousepad" }),
                    });
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
