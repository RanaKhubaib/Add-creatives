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
    "bg-accent text-deep-blue shadow-[0_12px_30px_-16px_rgba(215,255,112,0.85)] hover:bg-[#e4ff9d]",
  secondary:
    "border border-navy/15 bg-white text-navy hover:border-navy hover:bg-soft",
  ghost: "text-navy hover:bg-black/5",
  light: "bg-white text-navy hover:bg-accent",
};

const baseClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

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
