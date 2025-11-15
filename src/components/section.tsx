import type { ComponentProps, ReactNode } from "react";

type SectionProps = ComponentProps<"section"> & {
  children: ReactNode;
};

export function Section({ children, ...props }: SectionProps) {
  return (
    <section
      {...props}
      className="max-w-7xl mx-auto w-full px-4 py-10 md:px-8 md:py-20"
    >
      {children}
    </section>
  );
}
