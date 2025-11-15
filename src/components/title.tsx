import type { ComponentProps, ReactNode } from "react";

type TitleProps = ComponentProps<"h2"> & {
  children: ReactNode;
};

export function Title({ children, ...props }: TitleProps) {
  return (
    <h2
      {...props}
      className="text-2xl md:text-3xl text-text font-bold text-center"
    >
      {children}
    </h2>
  );
}
