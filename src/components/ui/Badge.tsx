import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "accent" | "muted";
};

export default function Badge({ children, tone = "accent" }: BadgeProps) {
  return <span className={['badge', `badge--${tone}`].filter(Boolean).join(" ")}>{children}</span>;
}
