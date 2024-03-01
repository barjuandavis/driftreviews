import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import * as React from "react";

const CustomTabs = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {({ isActive }) =>
      isActive ? (
        <span className="px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-background text-foreground shadow-sm rounded-sm">
          <b>{props.children as React.ReactNode}</b>
        </span>
      ) : (
        <span>{props.children as React.ReactNode}</span>
      )
    }
  </Link>
));

export default CustomTabs;
