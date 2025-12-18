import type { ComponentProps, ReactNode } from "react";

type InfoCardProps = ComponentProps<"div"> & {
  icon: {
    content: ReactNode;
    alignment: "center" | "left";
    bg: boolean;
  };
  name: {
    content: string;
    alignment: "center" | "left";
    size: "md" | "lg";
  };
  description: {
    size: "sm" | "md";
    content: string;
    alignment: "center" | "left";
  };
  shadow?: boolean;
  bg: "primary" | "secondary";
};

export function InfoCard({
  icon,
  name,
  description,
  shadow = true,
  bg,
  ...props
}: InfoCardProps) {
  return (
    <div
      {...props}
      className={`
        ${shadow && "shadow"}
        ${bg === "primary" ? "bg-bg" : "bg-bg-secondary"}
        min-w-64 w-full p-4 md:p-6 lg:p-8 rounded-lg flex flex-col gap-2
        md:gap-4
        `}
    >
      <div
        className={`
        ${icon.bg && "w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"}
        ${icon.alignment === "center" && "mx-auto w-fit h-fit"}
        text-4xl text-primary
        `}
      >
        {icon.content}
      </div>

      <p
        className={`
        ${name.size === "md" ? "text-lg md:text-xl" : "text-xl md:text-2xl"}
        ${name.alignment === "center" && "text-center"}
        text-text font-bold
        `}
      >
        {name.content}
      </p>

      <p
        className={`
        ${description.size === "sm" ? "text-sm" : "text-base"}
        ${description.alignment === "center" && "text-center"}
        `}
      >
        {description.content}
      </p>
    </div>
  );
}
