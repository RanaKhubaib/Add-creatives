import Link from "next/link";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

type ButtonProps = PropsWithChildren<{
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white shadow-[0_8px_24px_-12px_rgba(11,79,179,0.7)] hover:bg-navy",
  secondary:
    "border border-navy/20 bg-white text-navy hover:border-navy hover:bg-soft",
  ghost: "text-navy hover:bg-soft",
  light: "bg-white text-navy hover:bg-blue-50",
};

const baseClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

export function Button({
  children,
  className = "",
  href,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const classes = `${baseClassName} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link className={classes} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
