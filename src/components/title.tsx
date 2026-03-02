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
      data-aos="zoom-in-down"
      className={`${alignment === "center" ? "text-center" : "text-left"} text-shadow-md text-3xl md:text-5xl text-primary font-semibold`}
    >
      {children}
    </h2>
  );
}
