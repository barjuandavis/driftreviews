import MouseAbout from "@/components/about/MouseAbout";
import MousepadAbout from "@/components/about/MousepadAbout";
import SlideoutButton from "@/components/sections/SlideoutButton";
import VariousLinksSection from "@/components/sections/VariousLinksSection";
import {
  createRootRoute,
  Link,
  //Link,
  Outlet,
  useSearch,
} from "@tanstack/react-router";
import posthog from "posthog-js";

import { useState } from "react";

function Root() {
  type ContentType = "mouse" | "mousepad" | "keyboard" | "audio" | "lain-lain";
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
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            <Link
              to="/"
              activeOptions={{
                exact: true,
              }}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {({ isActive }) =>
                isActive ? (
                  <span className="px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-background text-foreground shadow-sm rounded-sm">
                    <b>Mouse</b>
                  </span>
                ) : (
                  <span>Mouse</span>
                )
              }
            </Link>
            <Link
              to="/mousepad"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {({ isActive }) =>
                isActive ? (
                  <span className="px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-background text-foreground shadow-sm rounded-sm">
                    <b>Mousepad</b>
                  </span>
                ) : (
                  "Mousepad"
                )
              }
            </Link>
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
