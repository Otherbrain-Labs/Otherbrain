import * as React from "react";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const InputVariants = cva("relative", {
  variants: {
    iconPosition: {
      left: " absolute left-2 top-[15px] -translate-y-1/2 transform text-muted-foreground",
      right:
        " absolute left-auto right-2 top-[15px] -translate-y-1/2 transform text-muted-foreground",
    },
  },
  defaultVariants: {
    iconPosition: "left",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  icon?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition, ...props }, ref) => {
    return (
      <>
        {icon ? (
          <div className="relative inline-block h-8">
            {iconPosition !== "right" && (
              <span className={cn(InputVariants({ iconPosition }))}>
                {icon}
              </span>
            )}
            <input
              type={type}
              className={cn(
                "flex h-full w-full rounded-md border border-input bg-transparent py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className,
                iconPosition !== "right" ? "pl-8 pr-4" : "pl-4 pr-10"
              )}
              ref={ref}
              {...props}
            />
            {iconPosition === "right" && (
              <span className={cn(InputVariants({ iconPosition }))}>
                {icon}
              </span>
            )}
          </div>
        ) : (
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
