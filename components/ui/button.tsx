import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary"
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant
}

const Button = forwardRef<React.ElementRef<"button">, ButtonProps>(({ className, children, variant = "primary", ...props }, ref) => {
  return (
    <button ref={ref} className={cn("w-full px-4 py-4 rounded-2xl font-medium", {
      "bg-accent text-white": variant === "primary",
      "bg-accent-light text-accent": variant === "secondary",
    }, className)} {...props}>{children}</button>
  )
})


Button.displayName = "Button"

export { Button }