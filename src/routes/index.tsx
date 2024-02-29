import { useEffect } from "react";
import NewMouseList from "../components/NewMouseList";
import "./index.css";

import posthog from "posthog-js";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewMousepadList from "@/components/NewMousepadList";
import { z } from "zod";
import {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-4 w-full flex-wrap">
        <Tabs defaultValue={itemType} className="w-full">
          <TabsList className="py-2 bg-slate-300">
            <TabsTrigger
              className="px-8"
              value="mouse"
              onFocus={() => {
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
              onFocus={() => {
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
    </>
  );
}
