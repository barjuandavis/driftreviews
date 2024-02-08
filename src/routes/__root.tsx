import {
  createRootRoute,
  //Link,
  Outlet,
} from "@tanstack/react-router";
//import { TanStackRouterDevtools } from "@tanstack/router-devtools";
//import { Suspense } from "react";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <Suspense>
        {process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
      </Suspense> */}
      {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div> */}
      <Outlet />
    </>
  ),
});
