import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import posthog from "posthog-js";

posthog.init(import.meta.env.VITE_POSTHOG_TOKEN, {
  api_host: "https://app.posthog.com",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
