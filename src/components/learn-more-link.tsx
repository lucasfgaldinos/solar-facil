import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type LearnMoreLinkProps = ComponentProps<"a"> & {
  children: ReactNode;
  href: string;
};

export function LearnMoreLink({
  children,
  href,
  ...props
}: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className="text-primary font-bold flex gap-1 items-center w-fit mx-auto"
    >
      <p className="text-center" style={{ display: "ruby" }}>
        {children}
      </p>
    </Link>
  );
}
