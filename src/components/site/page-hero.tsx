import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function PageHero({
  actionHref = "/contact",
  actionLabel = "Talk to our team",
  description,
  eyebrow,
  title,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9fd] py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-56 -z-10 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,_#dbe8fb_0%,_rgba(219,232,251,0)_68%)]"
      />
      <Container className="relative">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link className="transition hover:text-brand-blue" href="/">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </div>
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,6.8vw,5.6rem)] font-extrabold leading-[1.02] tracking-[-0.065em] text-ink">
              {title}
            </h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-lg leading-8 text-slate-600">{description}</p>
            <Button className="mt-6" href={actionHref}>
              {actionLabel} <ArrowRight aria-hidden="true" size={17} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
