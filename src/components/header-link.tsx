import type { ComponentProps, ReactNode } from "react";

type HeaderLinkProps = ComponentProps<"a"> & {
  children: ReactNode;
  variant?: "light" | "dark";
};

export function HeaderLink({
  children,
  variant = "dark",
  href,
  ...props
}: HeaderLinkProps) {
  return (
    <a
      {...props}
      className={`${variant === "light" ? "text-gray" : "text-text"} w-fit font-semibold p-1 text-sm select-none hover:text-primary active:text-primary/50 transition cursor-pointer`}
    >
      {children}
    </a>
  );
}
