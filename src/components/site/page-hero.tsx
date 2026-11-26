import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  image?: string;
  imageAlt?: string;
  imageNote?: string;
}

export function PageHero({
  actionHref = "/contact",
  actionLabel = "Talk to our team",
  description,
  eyebrow,
  image,
  imageAlt = "",
  imageNote,
  title,
}: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-center gap-2 text-xs font-medium text-muted">
          <Link className="transition hover:text-brand-blue" href="/">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </div>
        <div
          className={`grid items-center gap-8 lg:gap-14 ${
            image ? "lg:grid-cols-[1fr_0.9fr]" : "lg:grid-cols-[1.15fr_0.85fr]"
          }`}
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,5.8vw,4.75rem)] font-bold leading-[1.04] tracking-[-0.055em] text-ink">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {description}
            </p>
            <Button className="mt-7" href={actionHref}>
              {actionLabel} <ArrowRight aria-hidden="true" size={17} />
            </Button>
          </div>
          {image ? (
            <figure className="min-w-0">
              <div className="relative aspect-[1.24] overflow-hidden bg-light-blue">
                <Image
                  alt={imageAlt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  src={image}
                />
              </div>
              {imageNote ? (
                <figcaption className="mt-2 text-xs leading-5 text-muted">
                  {imageNote}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
