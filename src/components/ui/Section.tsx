import type { ElementType, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
};

export default function Section({
  children,
  className = "",
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component id={id} className={['section-block', className].filter(Boolean).join(" ")}>
      {children}
    </Component>
  );
}
