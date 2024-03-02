import KeyboardList from "@/components/keyboard/KeyboardList";

import { createLazyFileRoute } from "@tanstack/react-router";
import posthog from "posthog-js";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/keyboard")({
  component: KeyboardPage,
});

function KeyboardPage() {
  useEffect(() => {
    posthog.capture("Keyboard Page Viewed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <KeyboardList />;
}
