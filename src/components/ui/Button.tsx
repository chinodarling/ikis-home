import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={['button', `button--${variant}`, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}