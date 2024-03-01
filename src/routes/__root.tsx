import MouseAbout from "@/components/about/MouseAbout";
import MousepadAbout from "@/components/about/MousepadAbout";
import SlideoutButton from "@/components/sections/SlideoutButton";
import VariousLinksSection from "@/components/sections/VariousLinksSection";
import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import posthog from "posthog-js";

import type { ContentType } from "../consts";

import { useState } from "react";
import CustomTabs from "@/components/ui/customTabs";

function Root() {
  const router = useRouterState();

  const itemType = (
    router.location.pathname.split("/")[1] === ""
      ? "mouse"
      : router.location.pathname.split("/")[1]
  ) as ContentType;

  const [aboutOpened, setAboutOpened] = useState<
    ContentType | null | undefined
  >(undefined);

  const [variousLinksOpened, setVariousLinksOpened] = useState(false);

  const setAboutSectionBasedOnContentType = (open: boolean) => {
    posthog.capture("About Section Toggled", {
      itemType,
    });
    setAboutOpened(open ? itemType : null);
  };
  return (
    <main>
      <h1>List Rekomendasi Gaming Gear by DRiFT (@barjuandavis)</h1>
      <div className="flex w-full flex-col gap-4">
        <div className="flex justify-center items-center gap-4 w-full flex-wrap">
          <SlideoutButton
            opened={aboutOpened !== null}
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
          <VariousLinksSection opened={variousLinksOpened} />
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            <CustomTabs to="/">Mouse</CustomTabs>
            <CustomTabs to="/mousepad">Mousepad</CustomTabs>
            <CustomTabs to="/keyboard">Keyboard</CustomTabs>
          </div>
          <Outlet />
          <MouseAbout
            opened={aboutOpened === "mouse"}
            setOpen={setAboutSectionBasedOnContentType}
          />
          <MousepadAbout
            opened={aboutOpened === "mousepad"}
            setOpen={setAboutSectionBasedOnContentType}
          />
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRoute({
  component: Root,
});
