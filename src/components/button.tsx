"use client";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & {
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
    <button
      style={{
        background:
          "linear-gradient(90deg, #FBE902 0%, #FFBB03 50%, #FE7D0A 100%)",
      }}
      className={`
      ${width === "fit" ? "w-fit" : "w-full"}
      ${size === "lg" ? "px-5 py-3" : "px-4 py-2 text-sm"}
    text-sm md:text-base text-text cursor-pointer rounded-full transition font-semibold hover:scale-105 active:scale-100 flex items-center gap-2
    `}
      type={type}
      {...props}
    >
      {children}{" "}
      <ArrowCircleRightIcon weight="fill" size={20} className="text-text" />
    </button>
  );
}
