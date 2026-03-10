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
      className={`${alignment === "center" ? "text-center" : "text-left"} bg-linear-to-r from-[#04227D] via-[#0A31A5] to-[#003BEB] bg-clip-text text-transparent text-shadow-md text-3xl leading-9 md:text-5xl md:leading-14 font-semibold`}
    >
      {children}
    </h2>
  );
}
