import NewMousepadList from "@/components/mousepad/NewMousepadList";
import { createLazyFileRoute } from "@tanstack/react-router";
import posthog from "posthog-js";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/keyboard")({
  component: MousepadPage,
});

function MousepadPage() {
  useEffect(() => {
    posthog.capture("Mousepad Page Viewed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <NewMousepadList />;
}
