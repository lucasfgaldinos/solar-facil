import type { ComponentProps, ReactNode } from "react";

type HeaderLinkProps = ComponentProps<"button"> & {
  children: ReactNode;
  variant?: "light" | "dark";
};

export function HeaderLink({
  children,
  variant = "dark",
  ...props
}: HeaderLinkProps) {
  return (
    <button
      type="button"
      {...props}
      className={`${variant === "light" ? "text-gray" : "text-text"} w-fit font-semibold p-1 select-none hover:text-primary active:text-primary/50 transition cursor-pointer`}
    >
      {children}
    </button>
  );
}
