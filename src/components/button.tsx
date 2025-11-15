import type { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  width?: "full" | "fit";
  size?: "sm" | "lg";
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
      className={`
      ${width === "fit" ? "w-fit" : "w-full"}
      ${size === "lg" ? "px-4.5 py-3.5" : "px-3 py-2 text-sm"}
      bg-primary text-bg shadow hover:scale-105 cursor-pointer rounded-lg
      transition active:scale-100 font-semibold
    `}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
