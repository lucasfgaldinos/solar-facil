import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type LearnMoreLinkProps = ComponentProps<"a"> & {
  children: ReactNode;
  href: string;
  alignment?: "center" | "left";
};

export function LearnMoreLink({
  children,
  alignment = "center",
  href,
  ...props
}: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`${alignment === "center" && "w-fit mx-auto"} text-primary font-bold flex gap-1 items-center`}
    >
      <p className="text-center" style={{ display: "ruby" }}>
        {children}
      </p>
    </Link>
  );
}
