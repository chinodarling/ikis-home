import type { ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export default function Heading({
  as: Component = "h2",
  children,
  className = "",
  align = "left",
}: HeadingProps) {
  return (
    <Component className={['heading', `heading--${Component}`, `heading--${align}`, className].filter(Boolean).join(" ")}>
      {children}
    </Component>
  );
}
