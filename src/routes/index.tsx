import { useEffect } from "react";
import NewMouseList from "../components/NewMouseList";
import "./index.css";

import posthog from "posthog-js";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    posthog.capture("Homepage Viewed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NewMouseList />;
}
