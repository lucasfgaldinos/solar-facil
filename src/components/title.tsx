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
      className={`${alignment === "center" ? "text-center" : "text-left"} text-3xl md:text-5xl text-primary font-semibold`}
    >
      {children}
    </h2>
  );
}
