import MouseAbout from "@/components/about/MouseAbout";
import MousepadAbout from "@/components/about/MousepadAbout";
import SlideoutButton from "@/components/sections/SlideoutButton";
import VariousLinksSection from "@/components/sections/VariousLinksSection";
import {
  createRootRoute,
  //Link,
  Outlet,
  useSearch,
} from "@tanstack/react-router";
import posthog from "posthog-js";

import { useState } from "react";

function Root() {
  type ContentType = "mouse" | "mousepad";
  const search = useSearch({
    strict: false,
  }) as { itemType?: ContentType } | null;

  const itemType = search?.itemType ?? "mouse";

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
          <VariousLinksSection opened={variousLinksOpened} />
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
