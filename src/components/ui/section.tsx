import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "primary" | "accent";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  const variantClasses = {
    default: "bg-background",
    muted: "bg-secondary",
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent/5",
  };

  return (
    <section
      id={id}
      className={cn("section-padding", variantClasses[variant], className)}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
