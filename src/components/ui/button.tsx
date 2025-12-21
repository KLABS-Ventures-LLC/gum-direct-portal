import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-soft hover:shadow-medium rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-full",
        secondary: "bg-secondary text-secondary-foreground hover:bg-muted rounded-full",
        ghost: "hover:bg-primary/10 hover:text-primary rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent-light shadow-soft hover:shadow-glow rounded-full font-semibold",
        hero: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated rounded-full font-semibold",
        "hero-outline": "border-2 border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 hover:border-primary-foreground/50 rounded-full backdrop-blur-sm",
        premium: "gradient-accent text-accent-foreground shadow-medium hover:shadow-glow hover:scale-[1.02] rounded-full",
        minimal: "text-foreground hover:text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-5 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base [&_svg]:size-5",
        icon: "h-11 w-11 rounded-full",
        "icon-sm": "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
