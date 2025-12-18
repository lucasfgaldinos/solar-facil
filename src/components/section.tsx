import type { ComponentProps, ReactNode } from "react";

type SectionProps = ComponentProps<"section"> & {
  children: ReactNode;
  bgColor?: "primary" | "secondary";
};

export function Section({
  children,
  bgColor = "primary",
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={`${bgColor === "primary" ? "bg-bg" : "bg-bg-secondary"} w-full`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 py-10 md:px-8 md:py-20">
        {children}
      </div>
    </section>
  );
}
