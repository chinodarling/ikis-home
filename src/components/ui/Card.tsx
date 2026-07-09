import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <article className={['card', hover ? 'card--hover' : '', className].filter(Boolean).join(" ")}>
      {children}
    </article>
  );
}
