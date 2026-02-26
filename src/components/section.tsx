import type { ComponentProps, ReactNode } from "react";

type SectionProps = ComponentProps<"section"> & {
  children: ReactNode;
  bgColor?: "primary" | "secondary" | "blue";
};

export function Section({
  children,
  bgColor = "primary",
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={`${bgColor === "primary" ? "bg-bg" : bgColor === "blue" ? "bg-primary/15" : "bg-bg-secondary"} w-full`}
    >
      <div className="max-w-7xl mx-auto w-full px-5 py-20 md:px-8 md:py-26">
        {children}
      </div>
    </section>
  );
}
