"use client";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"a"> & {
  children: ReactNode;
  width?: "full" | "fit";
  size?: "sm" | "lg";
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  width = "fit",
  size = "lg",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <a
      href="https://wa.me/553898731678?text=Ol%C3%A1%2C%20Edemilson!%20Vim%20do%20site%20da%20Solar%20F%C3%A1cil%20e%20gostaria%20de%20um%20or%C3%A7amento%20de%20energia%20solar."
      style={{
        background:
          "linear-gradient(90deg, #FBE902 0%, #FFBB03 50%, #FE7D0A 100%)",
      }}
      className={`
      ${width === "fit" ? "w-fit" : "w-full"}
      ${size === "lg" ? "px-7 py-3.5" : "px-4 py-2"}
    text-text cursor-pointer rounded-full md:text-lg transition hover:scale-105 active:scale-100 flex items-center gap-2 shadow btn-grow
    `}
      {...props}
    >
      {children}{" "}
      <ArrowCircleRightIcon weight="fill" size={20} className="text-text" />
    </a>
  );
}
