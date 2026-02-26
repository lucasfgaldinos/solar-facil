"use client";
import { ArrowRightIcon } from "@phosphor-icons/react";
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
      className={`${alignment === "center" && "w-fit mx-auto"} text-primary font-semibold flex gap-1 items-center relative after:absolute after:content-[''] after:h-0.5 after:-bottom-px after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:bg-secondary after:transition-all after:duration-500`}
    >
      <p className="text-center" style={{ display: "ruby" }}>
        {children}
      </p>
      <ArrowRightIcon size={16} weight="bold" />
    </Link>
  );
}
