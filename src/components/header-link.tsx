import type { ComponentProps, ReactNode } from "react";

type HeaderLinkProps = ComponentProps<"a"> & {
  children: ReactNode;
};

export function HeaderLink({ children, href, ...props }: HeaderLinkProps) {
  return (
    <a
      {...props}
      className="font-semibold p-1 text-sm select-none text-text hover:text-primary active:text-primary/50 transition cursor-pointer"
    >
      {children}
    </a>
  );
}
