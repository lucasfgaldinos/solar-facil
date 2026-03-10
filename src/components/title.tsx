import type { ComponentProps, ReactNode } from "react";

type TitleProps = ComponentProps<"h2"> & {
  children: ReactNode;
  alignment?: "center" | "left";
};

export function Title({
  children,
  alignment = "center",
  ...props
}: TitleProps) {
  return (
    <h2
      {...props}
      className={`${alignment === "center" ? "text-center" : "text-left"} bg-linear-to-r from-[#04227D] via-[#0A31A5] to-[#003BEB] bg-clip-text text-transparent leading-14 text-shadow-md text-3xl md:text-5xl font-semibold`}
    >
      {children}
    </h2>
  );
}
