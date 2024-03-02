import ReactDOM from "react-dom/client";

import { routeTree } from "./routeTree.gen.ts";

import posthog from "posthog-js";
import { RouterProvider, createRouter } from "@tanstack/react-router";

posthog.init(import.meta.env.VITE_POSTHOG_TOKEN, {
  api_host: "https://app.posthog.com",
});

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
